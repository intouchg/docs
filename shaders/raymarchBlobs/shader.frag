// Adapted from Misaki Nakano's raymarching studies

mat4 rotateY (float theta)
{
	float c = cos(theta);
	float s = sin(theta);

	return mat4(
		vec4(c, 0, s, 0),
		vec4(0, 1, 0, 0),
		vec4(-s, 0, c, 0),
		vec4(0, 0, 0, 1)
	);
}

float signedDistanceSphere (in vec3 point, float radius)
{
	return length(point) - radius;
}

float smoothUnion_h (float d1, float d2, float k)
{
	return clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
}

float expFog (float d, float density)
{
	float dd = d * density;
	return exp(-dd * dd);
}



uniform float time;
uniform vec2 resolution;

#define NUM_BLOBS 5
const vec3 light_position = vec3(2000.0, -5000.0, 3000.0);

const vec3 bgColor = vec3(1.0, 0.9, 0.9);

float gamma = 1.8;

struct blobStruct {
	vec3 color;
	vec3 pos;
	float speed;
};

uniform blobStruct blobs[NUM_BLOBS];
float numBlobs = float(NUM_BLOBS);

float smoothIntensity = 0.8;
const float PI = 3.14;

vec3 blobPosition (int i, blobStruct blob)
{
	float radian = 50.0 * PI/numBlobs * float(i);
	vec3 pos = vec3(
		sin(radian + time * blob.speed * 0.5), 
		cos(radian + time * blob.speed * 0.5), 
		sin(radian + time * blob.speed * 0.5) * 0.8
	);

	return pos * blob.pos * 1.3;
}

float blobRadius (float speed)
{
	return (sin(time + speed * PI * 2.0) * 0.5 + 0.5) * 0.5 + 0.5;
}

vec4 mapTheWorld (in vec3 point)
{
	vec3 samplePoint = point;
	samplePoint = (rotateY(time * 0.3) * vec4(samplePoint, 1.0)).xyz;

	// for (int i = 0; i < numBlobs; i++) {
	// 	const offset = float(i) / float(numBlobs);
	// }

	vec3 totalColor = blobs[0].color;

	float totalDb = signedDistanceSphere(samplePoint - blobPosition(0, blobs[0]), blobRadius(blobs[0].speed));

	for (int i = 1; i < NUM_BLOBS; ++i) {
		
		float sphere_1 = signedDistanceSphere(samplePoint - blobPosition(i, blobs[i]), blobRadius(blobs[i].speed));

		float h = smoothUnion_h(totalDb, sphere_1, smoothIntensity);

		totalDb = mix( sphere_1, totalDb, h ) - smoothIntensity *h * (1.0-h); 

		totalColor = mix(blobs[i].color, totalColor, h);
	}
	

	return vec4(totalColor, totalDb);
}

vec3 calculateNormal (in vec3 point)
{
	const vec3 small_step = vec3(0.001, 0.0, 0.0);

	float gradient_x = mapTheWorld(point + small_step.xyy).w - mapTheWorld(point - small_step.xyy).w;
	float gradient_y = mapTheWorld(point + small_step.yxy).w - mapTheWorld(point - small_step.yxy).w;
	float gradient_z = mapTheWorld(point + small_step.yyx).w - mapTheWorld(point - small_step.yyx).w;

	vec3 normal = vec3(gradient_x, gradient_y, gradient_z);

	return normalize(normal);
}

const vec3 dirLight = vec3(1.0);
const vec3 dirLightPos = vec3(-4, 6, -10);

// vec3 calcIrradiance_hemi (vec3 normal, vec3 lightPos, vec3 grd, vec3 sky)
// {
// 	float dotNL = clamp(dot(normal, normalize(lightPos)), 0.0, 1.0);
// 	return mix(grd, sky, dotNL);
// }

vec3 calcIrradiance_dir (vec3 normal, vec3 lightPos, vec3 light)
{
	float dotNL = dot(normal, normalize(lightPos)) * 0.5 + 0.5;
	// vec3 diffuse = vec3(1.0);
	return light * dotNL;
}

vec3 rayMarch (in vec3 rayOrigin, in vec3 rayDirection)
{
	float total_distance_traveled = 0.0;
	const int NUMBER_OF_STEPS = 64;
	const float MINIMUM_HIT_DISTANCE = 0.01;
	const float MAXIMUM_TRACE_DISTANCE = 1000.0;

	for (int i = 0; i < NUMBER_OF_STEPS; ++i) {
		vec3 currentPos = rayOrigin + total_distance_traveled * rayDirection;

		vec4 distance_to_closest = mapTheWorld(currentPos);

		if (distance_to_closest.w < MINIMUM_HIT_DISTANCE) {
			// return vec3(1.0, 0.0, 0.0);
			vec3 normal = calculateNormal(currentPos);

			vec3 dirColor = calcIrradiance_dir(normal, dirLightPos, dirLight);

			dirColor = 0.6 + 0.4 * dirColor;

			vec3 halfLE = normalize(dirLightPos + rayOrigin);
			float specular = pow(clamp(dot(normal, halfLE), 0.0, 1.0), 80.0);
			// specular *= 2.0;


			vec3 color = distance_to_closest.xyz;

			color += 0.1;

			// color *= min(vec3(1.0), hemiColor * 1.06);
			color *= dirColor;
			color += specular * 0.2;

			// color *= diffuseIntensity;

			float fog_intensity = expFog(total_distance_traveled, 0.03);

			color = mix(bgColor, color, fog_intensity);

			return color;
		}

		if (total_distance_traveled > MAXIMUM_TRACE_DISTANCE) {
			break;
		}

		total_distance_traveled += distance_to_closest.w;
	}

	return bgColor;
}

void main (void)
{
	vec2 position = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

	vec3 camera_position = vec3(0.0, 0.0, -4.0);
	vec3 rayOrigin = camera_position;
	vec3 rayDirection = normalize(vec3(position, 1.0));

	vec3 color = rayMarch(rayOrigin, rayDirection);

	if (color == bgColor) {
		// if rayMarch returned bgColor, set opacity to 0 for a transparent background
		gl_FragColor = vec4(color, 0.0);
	}
	else {
		// otherwise, use the color generated by rayMarch
		color = pow(color, vec3(1.0 / gamma));
		gl_FragColor = vec4(color, 1.0);
	}
}

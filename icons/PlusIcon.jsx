import * as React from "react";
import { Svg } from '@intouchg/components';

const PlusIcon = ({ children, ...props }) => <Svg viewBox="0 0 582 579" {...props}>{children}<path d="M531.835 328.959H330.157V529.54c0 10.961-3.836 20.278-11.509 27.95-7.673 7.673-16.99 11.509-27.95 11.509-10.23 0-19.364-3.836-27.402-11.509-8.038-7.672-12.057-16.989-12.057-27.95V328.96H49.561c-10.961 0-20.278-4.02-27.95-12.057-7.673-8.038-11.509-17.172-11.509-27.402 0-10.96 3.836-20.277 11.509-27.95 7.672-7.673 16.989-11.509 27.95-11.509h201.678V49.46c0-10.961 4.02-20.278 12.057-27.95C271.334 13.836 280.468 10 290.698 10c10.96 0 20.277 3.836 27.95 11.509 7.673 7.672 11.509 16.989 11.509 27.95V250.04h201.678c10.961 0 20.278 3.836 27.95 11.509 7.673 7.673 11.51 16.99 11.51 27.95 0 10.23-3.837 19.364-11.51 27.402-7.672 8.038-16.989 12.057-27.95 12.057z" /></Svg>;

export default PlusIcon;
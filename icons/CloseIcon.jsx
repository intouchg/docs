import * as React from "react";
import { Svg } from '@intouchg/components';

const CloseIcon = ({ children, ...props }) => <Svg viewBox="64 -65 897 897" {...props}>{children}<path d="M717.5 589.5Q707 600 692 600t-26-10L512 435 358 590q-11 10-26 10t-25.5-10.5T296 564t11-25l154-155-154-155q-11-10-11-25t10.5-25.5T332 168t26 10l154 155 154-155q11-10 26-10t25.5 10.5 10.5 25-11 25.5L563 384l154 155q11 10 11 25t-10.5 25.5zM888 760V7H136v753h752zm0 72H136q-30 0-51-21t-21-51V7q0-29 21-50.5T136-65h753q29 0 50.5 21.5T961 7v753q0 30-21.5 51T888 832z" /></Svg>;

export default CloseIcon;
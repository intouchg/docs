import * as React from "react";
import { Svg } from '@intouchg/components';

const IntouchIcon = ({ children, ...props }) => <Svg role="img" viewBox="0 0 35 22" {...props}>{children}<title>{"Intouch Logo"}</title><path d="M17.384 16.335c1.512 0 2.743 1.271 2.743 2.834 0 1.561-1.23 2.831-2.743 2.831-1.514 0-2.745-1.27-2.745-2.83 0-1.564 1.231-2.835 2.745-2.835zM.771 1.695L16.405 7.93v2.265L2.546 4.667v1.715l13.859 5.53v2.168L.77 20.306v-6.357l5.478-2.181 2.84 1.133-6.543 2.606v1.826l10.897-4.339L.77 7.94V1.694zm33.278 0v6.244l-12.672 5.055 10.896 4.34v-1.827L25.732 12.9l2.84-1.133 5.477 2.18v6.358L18.415 14.08v-2.168l13.858-5.53V4.667l-13.858 5.529V7.93L34.05 1.694zM17.384 18.105c-.567 0-1.029.477-1.029 1.063 0 .585.462 1.059 1.03 1.059.565 0 1.025-.474 1.025-1.059 0-.586-.46-1.063-1.026-1.063zm0-18.106c1.512 0 2.743 1.27 2.743 2.83 0 1.563-1.23 2.834-2.743 2.834-1.514 0-2.745-1.271-2.745-2.834 0-1.56 1.231-2.83 2.745-2.83zm0 1.772c-.567 0-1.029.474-1.029 1.058 0 .586.462 1.063 1.03 1.063.565 0 1.025-.477 1.025-1.063 0-.584-.46-1.058-1.026-1.058z" fill="inherit" fillRule="evenodd" /></Svg>;

export default IntouchIcon;
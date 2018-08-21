import { StyledComponentClass } from 'styled-components';
export interface NavbarProps {
    height?: number;
    bg?: string;
    children?: any;
}
export declare let Navbar: StyledComponentClass<NavbarProps, any, Pick<NavbarProps, "children" | "height" | "bg"> & {
    theme?: any;
}>;

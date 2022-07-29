import { Sizes, StickyPosition, Variants } from "../types";

export type ButtonType<T=JSX.IntrinsicElements["button"]>=T& {
    variant?:Variants;
    text?:string;
    size?:Sizes;
    stickyPosition?:StickyPosition
}
import { variants } from "./theme/classical.theme"


export type Variants="primary" | "danger" | "success"
export type Sizes="small" | "medium" | "large"
export type StickyPosition="top-left" | "top-right" | "bottom-left"| "bottom-right"

export type VariantTypes=Record<Variants,any>
export type SizeTypes=Record<Sizes,any>
export type StickyPositionsTypes=Record<StickyPosition,any>
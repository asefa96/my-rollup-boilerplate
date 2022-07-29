import styled from "styled-components"
import { variants,sizes, baseStyle, stickyPositions} from "../theme"
import { ButtonType } from "./Button.types"


const MyButton=styled("button")<ButtonType>(
    (props:ButtonType)=>({
        ...baseStyle,
        ...stickyPositions[props?.stickyPosition!],
        ...variants[props?.variant!],
        ...sizes[props?.size!]
    }),`
    &:hover{
        transform:scale(1.1);
        filter:saturate(1.5);
    }
    `
)

export default MyButton
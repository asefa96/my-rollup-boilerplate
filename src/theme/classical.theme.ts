import { SizeTypes, StickyPositionsTypes, VariantTypes } from "../types";

export const baseStyle={
    borderRadius:5,
    border:0,
    padding:10,
    cursor:"pointer"
}

export const stickyPositions:StickyPositionsTypes={
    "top-left": {
        position:"fixed",
        top:10,
        left:10,
    },
    "top-right": {
        position:"fixed",
        top:10,
        right:10
    },
    "bottom-left": {
        position:"fixed",
        left:10,
        bottom:10
    },
    "bottom-right": {
        position:"fixed",
        bottom:10,
        right:10
    },
}

export const variants:VariantTypes={
    primary: {
        backgroundColor: "blue",
        color: "white"
    },
    danger: {
        backgroundColor: "red",
        color: "white"
    },
    success: {
        backgroundColor: "green",
        color: "white"
    }
}

export const sizes:SizeTypes={
    small: {
        fontSize:"calc(10px + 2vmin)"
    },
    medium:{
        fontSize:"calc(10px + 3vmin)"
    },
    large:{
        fontSize:"calc(10px + 4vmin)"
    }
}
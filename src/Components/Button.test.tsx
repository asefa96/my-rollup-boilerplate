import { fireEvent, render,screen } from "@testing-library/react";
import React from "react";
import { sizes, variants } from "../theme";
import Button from "./Button";


it.todo("should render button with default props");



it("should render with default parameters",()=>{
    render(<Button />)

    const primaryButton=screen.getByRole("button",{name:/Hello/i});
    expect(primaryButton).toBeInTheDocument();

    expect(primaryButton).toHaveStyle({
        backgroundColor:"blue",
        color:"white"
    })

})


it("should render with default parameters",()=>{
    const fn=jest.fn();

    render(<Button onClick={fn}/>)

    const primaryButton=screen.getByRole("button",{name:/Hello/i});

    fireEvent.click(primaryButton);

    expect(fn).toHaveBeenCalled()
})



import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('<GifExpertApp/>', () => {

    test('should ', () => {
       render(<GifExpertApp/>)
       screen.debug()
        expect(true).toBe(true)
    })
    
});
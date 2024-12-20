import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("GifItem", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";
  test("should  match to snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should view image for correct url and/or altl", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug() 
    // identifico donde está la imagen y muestro la url agregada en el src
    //console.log(screen.getByRole('img').src)
    expect(screen.getByRole('img').src).toBe(url)
    expect(screen.getByRole('img').alt).toBe(title)
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)

  });
});

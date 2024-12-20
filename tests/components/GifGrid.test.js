import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

jest.mock("../../src/hooks/useFetchGifts.js");
describe("<GifGrid />", () => {
  const category = "One Punch";
  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifts.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.getByText("Loading images..."));
    expect(screen.getByText(category));
  });
  test("Debe mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifts = [
      {
        id: "abc",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "def",
        title: "Saitamo",
        url: "https://localhost/saitamo.jpg",
      },
    ];

    useFetchGifts.mockReturnValue({
      images: gifts,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    //screen.debug()
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});

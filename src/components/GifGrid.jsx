import PropTypes from "prop-types";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  /*
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
  };
  useEffect(() => {
    getImages();
  });
*/ // esto se reemplaza por un hook useFetchGifts

  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3> {category}</h3>
      {isLoading && <h2>Loading images...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

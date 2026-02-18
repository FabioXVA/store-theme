import { ProductCard } from "../ProductCard";
import { Carousel } from "../../../../shered/components/Carousel";
import {ShelfProps} from "./types"
import {defaultShelfConfig} from "./defaultShelfConfig"


const Shelf = ({ slide_config, products }: ShelfProps) => {
  const finalConfig = {
    ...defaultShelfConfig,
    ...slide_config,
    breakpoints: {
      ...defaultShelfConfig.breakpoints,
      ...slide_config?.breakpoints,
    },
  };

  return (
    <Carousel
        slide_config={ finalConfig}
        itens={products}
        renderItem={(product) => (
        <ProductCard {...product} />
      )}
        
    />
  );
};

export default Shelf;
import { Zoom } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import Image from "next/image";
export default function Slider({children}:{children:any}) {
  const images = [
    "/img/banner1.jpg",
    "/img/banner2.jpg",
    "/img/banner3.jpg",
    "/img/banner4.jpg",
    
  ]
  const zoomProperties = {
		scale: 1.2,
		duration: 3000,
		transitionDuration: 500,
		infinite: true,
  };
  return (
          <Zoom {...zoomProperties}>
      {images.map((each, index) => (
        <div key={index} className="flex h-128 md:h-3/4 lg:h-2/3 w-full flex-wrap" >
          <img
            alt="banner imagen"
            className=" shadow-xl w-full md:h-full lg:h-banner lg:object-cover object-cover "
            src={each} />
            <div className=" absolute">{children}</div>
            <img className="w-full h-16 md:h-32" src="/img/asset.png" alt="asset de inicio" />

        </div>
      ))}
    </Zoom>
  )
}

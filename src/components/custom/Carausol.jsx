import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
// import { images } from "@/Data/staticData";
// import { useNavigate } from "react-router-dom";

export function CarausolImg({images}) {
  // const navigate =useNavigate();
  const nextButton = React.useRef(null);
  //Ref is for imperative things (DOM, timers, buttons, inputs)
  // example: A box where React stores something The box never changes identity, only the value inside it changes

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (nextButton.current) {
        //The button is not rendered yet
        nextButton.current.click(); //auto click to next
      }
    }, 3000);
    return () => clearInterval(interval); //cleaning
  }, []);

  function SubmitHandle() {
    console.log("You Pressed Me");
  }

  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      {/* opts={{ loop: true }} Infinite Scrolling */}
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="relative" onClick={SubmitHandle}>
              <img
                src={img}
                alt={`Branding ${index + 1}`}
                className="w-full h-70 object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/60 text-black hover:bg-white" />
      <CarouselNext
        ref={nextButton} //auto click after ... time for infinite time
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/60 text-black hover:bg-white"
      />
    </Carousel>
  );
}

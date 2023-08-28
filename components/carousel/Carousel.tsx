"use client";

import { H1 } from "../ui/H1";
import useEmblaCarousel from "embla-carousel-react";
import { VariantProps, cva } from "class-variance-authority";
import { useCallback } from "react";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRightCircle,
  MoveLeft,
  MoveRight,
} from "lucide-react";

const style = {
  embla: {
    overflow: "hidden",
  },
  emblaContainer: {
    display: "flex",
  },
  emblaSlide: {
    flex: "0 0 50%",
    padding: "0 .5rem",
    minWidth: 0,
  },
};

interface Props {
  title: string;
  children: React.ReactNode[];
}

export const Carousel = (props: Props) => {
  const [ref, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section>
      <div className="relative">
        <H1>{props.title}</H1>
        <div className="flex flex-row gap-2 justify-center items-center absolute bottom-0 right-2">
          <MoveLeft onClick={scrollPrev} className="cursor-pointer" />
          <MoveRight onClick={scrollNext} className="cursor-pointer" />
        </div>
      </div>
      <div style={style.embla} ref={ref}>
        <div style={style.emblaContainer}>
          {props.children.map((child, idx) => (
            <div key={idx} style={style.emblaSlide}>
              {child}
            </div>
          ))}
          {/* <CarouselItem style={style.emblaSlide} /> */}
        </div>
      </div>
    </section>
  );
};

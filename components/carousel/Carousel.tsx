"use client";

import { H1 } from "../ui/H1";
import useEmblaCarousel from "embla-carousel-react";
import { VariantProps, cva } from "class-variance-authority";
import { useCallback } from "react";
import style from "./Carousel.module.css";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRightCircle,
  MoveLeft,
  MoveRight,
} from "lucide-react";

interface Props {
  title: string;
  children: React.ReactNode[];
  slidesCount?: number;
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
      <div className={style.embla} ref={ref}>
        <div className={style.emblaContainer}>
          {props.children.map((child, idx) => (
            <div
              key={idx}
              className={style.emblaSlide}
              style={{ width: `${100 / (props.slidesCount ?? 1)}%` }}
            >
              {child}
            </div>
          ))}
          {/* <CarouselItem style={style.emblaSlide} /> */}
        </div>
      </div>
    </section>
  );
};

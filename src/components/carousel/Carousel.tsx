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
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

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
      <div className="relative flex flex-col">
        <H1>{props.title}</H1>
        {/* <div className="flex flex-row gap-2 justify-center items-center md:absolute md:bottom-0 md:right-2 mb-4">
          <MoveLeft onClick={scrollPrev} className="cursor-pointer" />
          <MoveRight onClick={scrollNext} className="cursor-pointer" />
        </div> */}
      </div>
      <div className="relative h-full">
        <Button
          onClick={scrollPrev}
          className="rounded-full bg-primary absolute -left-5 z-[33] top-1/2 -translate-y-1/2"
        >
          <MoveLeft className="cursor-pointer" />
        </Button>
        <Button
          onClick={scrollNext}
          className="rounded-full bg-primary absolute -right-5 z-[33] top-1/2 -translate-y-1/2"
        >
          <MoveRight className="cursor-pointer" />
        </Button>
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
      </div>
    </section>
  );
};

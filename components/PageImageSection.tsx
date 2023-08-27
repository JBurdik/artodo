import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  title: string;
  img: string;
  text: "left" | "right";
  children: React.ReactNode;
}

export const PageImageSection = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-12 md:mb-0">
      <div
        className={cn(
          "relative w-full aspect-video flex items-center justify-center",
          props.text === "left" && "md:order-2"
        )}
      >
        <h3 className="text-xl text-primary font-bold tracking-wider z-50 md:hidden">
          {props.title}
        </h3>
        <Image
          src={props.img}
          alt={props.title}
          fill
          className="object-cover"
        />
      </div>
      <div
        className={cn(
          "p-4 flex flex-col items-start justify-center",
          props.text === "left" && "md:order-1"
        )}
      >
        <h3 className="hidden text-xl text-primary font-bold tracking-wider md:block">
          {props.title}
        </h3>
        {props.children}
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";
import { H1 } from "./ui/H1";

interface Props {
  title?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const Section = (props: Props) => {
  return (
    <section
      className={cn(
        props.fullWidth ? "w-full" : "container",
        props.className,
        "mb-4"
      )}
    >
      {props.title && <H1>{props.title}</H1>}
      {props.children}
    </section>
  );
};

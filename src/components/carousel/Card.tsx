import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

interface Props {
  title: string;
  subtitle: string;
  desc: string;
  style?: Object;
}

export const CarouselItem = ({ title, subtitle, desc, style }: Props) => {
  return (
    <Card style={style}>
      <CardHeader>
        <img src="https://placehold.co/500" className="aspect-square" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
      <CardFooter>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

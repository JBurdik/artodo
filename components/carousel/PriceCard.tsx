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
  price: number;
  currency: "Kč" | "$" | "€";
  img?: string;
  style?: Object;
}

export const PriceCard = ({
  title,
  subtitle,
  desc,
  style,
  price,
  currency,
  img,
}: Props) => {
  return (
    <Card style={style}>
      <CardHeader>
        <img
          src={img ?? "https://placehold.co/500"}
          className="aspect-square"
        />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
        <div>
          {currency !== "Kč" && currency}
          {" " + price + " "}
          {currency === "Kč" && currency}
        </div>
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  productName: string;
  price: number;
  currency: string;
  description: string;
  actions: React.ReactNode;
}

export const ProductCard = ({
  productName,
  price,
  currency,
  description,
  actions,
}: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{productName}</CardTitle>
        <CardDescription>{`${price} ${currency}`}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter> {actions} </CardFooter>
    </Card>
  );
};

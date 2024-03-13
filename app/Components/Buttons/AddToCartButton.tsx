"use client";

import { urlFor } from "@/app/DB/Sanity";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

// type of product cart (model)
export type ProductCart = {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id:string;
};

export default function AddToCartButton({
  name,
  currency,
  description,
  price,
  image,
  price_id
}: ProductCart) {
  // use useshopping cart to add item to cart
  const { addItem, handleCartClick } = useShoppingCart();

//   create object
const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id:price_id
  };

  return (
    <Button
    onClick={() => {
        addItem(product), handleCartClick();
      }}
    type="button" className="">
      Add To Cart
    </Button>
  );
}

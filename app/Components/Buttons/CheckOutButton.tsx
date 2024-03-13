"use client";

import { urlFor } from "@/app/DB/Sanity";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./AddToCartButton";

export default function CheckOutButton({
  name,
  currency,
  description,
  price,
  image,
  price_id,
}: ProductCart) {
  // use useshopping cart to add item to cart
  const { checkoutSingleItem } = useShoppingCart();

  // bayNow to bay single product

  function BuyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  //   create object
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        BuyNow(product.price_id);
      }}
      type="button"
      className=""
    >
      CheckOut
    </Button>
  );
}

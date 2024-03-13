"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Trash } from "lucide-react";
import Image from "next/image";

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const ShoppingCartModal = () => {
  // const cartCount: number = 4;
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,

    redirectToCheckout
  } = useShoppingCart();



  // check out function

  async function handelCheckOutClick(event:any) {
    event.preventDefault()
    try {
      const result = await redirectToCheckout()
      if(result?.error){
        console.log('result')
      }
    } catch (error) {
      console.log(error)
      
    }
  } 

  return (
    <>
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className=" py-6">You do not have any items</h1>
                ) : (
                  <>
                    {Object.values(cartDetails ?? {}).map((item) => (
                      <li key={item.id} className="flex py-8">
                        {/* image of cart item  */}
                        <div className="flex rounded-lg overflow-hidden flex-shrink-0 border  size-24">
                          <Image
                            src={item.image as string}
                            width={300}
                            height={300}
                            alt="item cart picture"
                            className="object-cover object-center"
                          />
                        </div>

                        {/* details of cart items */}

                        <div className="ml-4 flex flex-1 flex-col gap-1">
                          {/* title and price */}
                          <div className="flex justify-between items-center text-base font-medium ">
                            {/* title */}
                            <h1 className="truncate ">{item.name}</h1>
                            {/* price */}
                            <p className="font-bold text-lg text-primary">
                              ${item.price}
                            </p>
                          </div>
                          {/* description */}
                          <p className="text-sm text-muted-foreground line-clamp-2  ">
                            {item.description}
                          </p>
                          {/* quantity button  */}
                          <div className="flex justify-between">
                            {/* quantity */}
                            <p className="text-sm ">
                              Quantity : x{item.quantity}
                            </p>
                            {/* remove button  */}
                            <button
                              onClick={() => removeItem(item.id)}
                              type="button"
                              className="text-primary font-medium hover:text-primary/50 "
                            >
                              <Trash />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
            {/* total and  check out button  */}
            <div className="border-t  px-4 md:px-6 py-6">
              <div className="flex justify-between text-base font-medium">
                <p>SubTotal :</p>
                <p>${totalPrice}</p>
              </div>

              {/* check out button */}
              <div className="mt-6">
                <Button onClick={handelCheckOutClick} className="w-full capitalize">CheckOut</Button>
              </div>
              {/* continue shopping */}
              <div className="my-6 flex items-center text-center justify-center ">
                <button onClick={()=>handleCartClick()} className="text-sm capitalize ">or <span className="text-primary hover:text-primary/50">continue shopping</span></button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppingCartModal;

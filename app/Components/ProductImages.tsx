"use client"
import Image from "next/image";
import { urlFor } from "../DB/Sanity";
import { useState } from "react";

type inAppType = {
  images: any;
};

export default function ProductImages({ images }: inAppType) {
  // state to change big image of product

  const [bigImage, setBigImage] = useState(images[0]);

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* list of images of product exit in left in large screen and on top in small screen */}
      <div className="order-last md:order-none  lg:flex-col flex gap-4 ">
        {images.map((image: any, index: any) => (
          <div key={index} className="bg-gray-300 overflow-hidden rounded-lg">
            <Image
              src={urlFor(image).url()}
              alt="product image "
              width={400}
              height={400}
              className="w-full h-full cursor-pointer  object-cover object-center"
              onClick={()=>setBigImage(image)}
            />
          </div>
        ))}
      </div>
      {/* big image  */}
      <div className="relative rounded-lg lg:col-span-4 overflow-hidden">
        <Image
          src={urlFor(bigImage).url()}
          alt="product image "
          width={500}
          height={500}
          className="w-full h-full   object-cover object-center"
        />
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { client, urlFor } from "../DB/Sanity";
import Image from "next/image";
import Link from "next/link";

// fetsh data from sanity (get session image )
async function fetsHeroImage() {
  const query = "*[_type =='sessionPicture'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  // get image using function
  const data = await fetsHeroImage();
  // get images using urlfor

  return (
    <section className=" Section flex flex-col ">
      {/* hero */}
      <div className=" flex flex-col md:flex-row items-center justify-center gap-8 mb-10 ">
        {/* left  */}
        <div className="md:w-1/3 w-full  flex flex-col justify-center items-start space-y-4  ">
          {/* title */}
          <h3 className="text-2xl md:text-4xl font-bold leading-tight">
            Fashion Redefined, Exclusively for You
          </h3>
          {/* description */}
          <p className="text-sm md:text-lg leading-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non enim
            placeat provident nesciunt minus iusto modi ratione reiciendis
            accusantium! Quas ut ipsum impedit exercitationem et fuga magnam
            maxime dignissimos sint.
          </p>
          <Button type="button" className="text-sm font-semibold">
            Order Now
          </Button>
        </div>
        {/* right */}

        <div className="md:w-2/3 w-full flex  items-center justify-center  ">
          <div className=" z-10 relative top-12 left-12 -ml-12 lg:ml-0 overflow-hidden rounded-lg shadow-lg ">
            <img
              src={urlFor(data.firstImage).url()}
              alt="Hero image"
              className=" h-2/4 object-cover object-center  "
              width={500}
              height={500}
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg h-2/4">
            <img
              src={urlFor(data.secondImage).url()}
              alt="Hero image"
              className=" h-2/4 object-cover object-center  "
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      {/* links */}

      <div className="flex flex-col justify-between md:flex-row  mt-6 md:mt-12 ">
        <div className=" rounded-full flex border h-10 w-64 divide-x  items-center justify-center overflow-hidden text-center">
          <Link href={"/Men"} className="w-1/3 h-full flex items-center justify-center hover:bg-gray-500 active:text-primary ">Men</Link>
          <Link href={"/Women"} className="w-1/3 h-full flex items-center justify-center hover:bg-gray-500 active:text-primary " >Women</Link>
          <Link href={"/Kids"} className="w-1/3 h-full flex items-center justify-center  hover:bg-gray-500 active:text-primary " >Kids</Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { client } from "../DB/Sanity";
import { Product } from "../types/product";
import Image from "next/image";

// finction to get 4 last products   from sanity cms
async function getProducts() {
  const query = `*[_type=='product'][0...4]| order(_createdAt desc){
        _id,
        title,
          price,
          "slug":slogs.current,
          "categoryName":category->title,
          "imageUrl":images[0].asset->url
      }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Newest() {
  // get product using function on top
  const products: Product[] = await getProducts();

  return (
    <section className="Section">
      <div className=" w-full flex flex-col my-6 md:my-12 lg:my-16 ">
        <div className="flex items-center justify-between ">
          {/* title of section */}
          <h1 className="text-xl md:text-2xl font-semibold capitalize tracking-tight">
            Our Newest products
          </h1>
          {/* see all link */}
          <Link
            href={"/All"}
            className="flex gap-x-2  text-primary items-center justify-center"
          >
            See All
          </Link>
        </div>
        {/* 4 last products  */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              <div
                
                className="aspect-square w-full overflow-hidden rounded-md flex flex-col bg-gray-500 lg:h-80 group-hover:opacity-70"
              >
                {/* image */}
                <Image
                  src={product.imageUrl}
                  alt="product imageurl"
                  className="object-cover object-center h-full w-full lg:w-full lg:h-full "
                  height={300}
                  width={300}
                />
              </div>
              {/* product details */}
              <div className="mt-6 flex flex-col  gap-2">
                <div className=" flex flex-row items-center justify-between ">
                  <h2 className="text-md truncate  ">

                    <Link href={`/product/${product._id}`}>
                      {product.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-lg font-bold text-primary">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

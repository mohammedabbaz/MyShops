import Image from "next/image";
import { client } from "../DB/Sanity";
import { Product } from "../types/product";
import Link from "next/link";

// get product of selected category
async function getCategoryProducts(category: string) {
  const query = `*[_type=='product' && category->title == "${category}"]{
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

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  // get products of selected category using function created on the top
  const products: Product[] = await getCategoryProducts(params.category);

  return (
    <section className="Section">
      <div className="flex flex-col  gap-4">
        {/* title of category */}
        <h3 className="text-xl font-bold ">
          All products of {params.category}
        </h3>
        {/* list of product */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square w-full overflow-hidden rounded-md flex flex-col bg-gray-500 lg:h-80 group-hover:opacity-70">
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
                  <div className="text-md truncate  ">
                    <Link href={`/product/${product._id}`}>
                      {product.title}
                    </Link>
                  </div>
                  <p className="text-lg font-bold text-primary">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import AddToCartButton from "@/app/Components/Buttons/AddToCartButton";
import CheckOutButton from "@/app/Components/Buttons/CheckOutButton";
import ProductImages from "@/app/Components/ProductImages";
import { ProductFull } from "@/app/types/product";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { Star, Truck } from "lucide-react";

// get product details
async function getDeatils(id: string) {
  const query = `*[_type=='product' && _id == "${id}"][0]{
        _id,
        title,
        price ,
        description,
        images,
        price_id,
        "slug":slogs.current,
        "categoryName":category->title
      }`;

  const data = await client.fetch(query);
  return data;
}

export default async function page({
  params,
}: {
  params: {
    _id: string;
  };
}) {
  // get details using function created on the top

  const details: ProductFull = await getDeatils(params._id);

  return (
    <section className="Section">
      <div className="flex flex-col">
        <div className="grid md:grid-cols-2 gap-8">
          {/* images gallery */}
          <ProductImages images={details.images} />
          {/* details */}

          <div className="py-8">
            {/* title and category name */}
            <div className="mb-2 space-y-2 md:mb-3">
              <h3 className="text-muted-foreground text-sm capitalize leading-3 font-medium">
                {details.categoryName}
              </h3>
              <h2 className="text-lg md:text-2xl font-semibold">
                {details.title}
              </h2>
            </div>
            {/* ratings */}
            <div className="flex mb-2 md:mb-3 gap-3  items-center ">
              <div className="flex gap-2 items-center justify-center rounded-lg bg-primary text-white font-medium px-2 py-1">
                4.5
                <span>
                  <Star className="size-4" />
                </span>
              </div>
              {/* rattings */}
              <p className="text-sm text-muted-foreground">52 Rattings</p>
            </div>
            {/* price */}
            <div className="mb-2 md:mb-3">
              <div className="flex gap-3 items-center">
                {/* price  */}
                <span className="font-bold text-xl md:text-2xl">
                  $ {details.price}
                </span>
                {/* price plus shopping */}
                <span className="line-through text-red-500">
                  $ {details.price + 50}
                </span>

                <span className="text-muted-foreground">
                  Total price and shipping
                </span>
              </div>
            </div>
            {/* shipping date  */}
            <div className="mb-3 md:mb-6 flex gap-3 items-center text-muted-foreground">
              <Truck />
              <span className="text-sm">2-4 Day shipping</span>
            </div>
            {/* add to cart button and checkout button */}
            <div className="flex flex-col gap-3 my-6 md:my-12">
              <AddToCartButton
                currency="USD"
                description={details.description}
                image={details.images[0]}
                name={details.title}
                price={details.price}
                price_id={details.price_id}
                key={details._id}

              />
               <CheckOutButton
                currency="USD"
                description={details.description}
                image={details.images[0]}
                name={details.title}
                price={details.price}
                price_id={details.price_id}
                key={details._id}

              />
            </div>
            {/* description  */}
            <p className="text-base text-gray-500 tracking-wide">
              {details.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

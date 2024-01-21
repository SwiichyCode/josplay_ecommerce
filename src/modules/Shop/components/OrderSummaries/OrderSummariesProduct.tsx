import Image from "next/image";
import type { Product } from "@prisma/client";

type Props = {
  products: Product[];
};

export const OrderSummariesProduct = ({ products }: Props) => {
  return (
    <ul
      role="list"
      className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
    >
      {products.map((product) => (
        <li key={product.id} className="flex space-x-6 py-6">
          <Image
            src={product.pictures[0]!}
            width={100}
            height={100}
            alt="product-image"
            className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
          />
          <div className="flex-auto space-y-1">
            <h3 className="text-gray-900">
              <a href={product.slug}>{product.name}</a>
            </h3>
            {/* <p>{product.color}</p>
                    <p>{product.size}</p> */}
          </div>
          <p className="flex-none font-medium text-gray-900">
            ${product.price}
          </p>
        </li>
      ))}
    </ul>
  );
};
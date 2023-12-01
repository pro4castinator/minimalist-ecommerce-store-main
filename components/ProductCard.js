import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const itemStagger = {
  hidden: { opacity: 0, scale: 0.1 },
  show: { opacity: 1, scale: 1.0 }
};

export default function ProductCard({ product, keyID }) {
  // Function to format the price to display in Indian Rupees
  const formatPriceInRupees = (price) => {
    // You can replace this logic with your own currency conversion or formatting logic
    // For example, if the product price is in dollars, you could convert it to Indian Rupees
    const priceInRupees = price * 80; // Replace 74.5 with your own conversion rate
    return `₹${priceInRupees.toFixed(2)}`; // Displaying price with two decimal places
  };

  return (
    <motion.article variants={itemStagger} key={keyID} exit={{ opacity: 0 }}>
      <Link href={`/products/${encodeURIComponent(product.slug)}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white rounded-2xl shadow overflow-hidden group-hover:brightness-90"
          key={product.id}
        >
          <div className="aspect-square w-full relative">
            <Image src={product.imgPath} alt={product.title} className="object-contain" fill sizes="(max-width: 800px)" priority />
          </div>
          <div className="p-4 text-xl">
            <p className="text-gray-700 w-full font-bold truncate pb-2">{product.title}</p>
            <div className="flex justify-between">
              <p>{product.size}</p>
              {/* Display the price in Indian Rupees */}
              <p className="text-blue-400 font-bold">{formatPriceInRupees(product.price)}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}


import React from "react";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  title: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "VEDHA BLACK UNISEX STRAIGHT BAGGY PANTS",
    originalPrice: 3199,
    salePrice: 1699,
    discount: 47,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
    category: "pants"
  },
  {
    id: 2,
    title: "DEMON CORAL UNISEX BOXY VEST",
    originalPrice: 2199,
    salePrice: 999,
    discount: 55,
    image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?q=80&w=1200&auto=format&fit=crop",
    category: "vest"
  },
  {
    id: 3,
    title: "MUTATION UNISEX STRAIGHT FIT BAGGY PANTS",
    originalPrice: 3199,
    salePrice: 1799,
    discount: 44,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
    category: "pants"
  },
  {
    id: 4,
    title: "VITRUVIAN BLACK BOXY VEST",
    originalPrice: 2199,
    salePrice: 999,
    discount: 55,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    category: "vest"
  },
];

const NewArrivals = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter text-white uppercase">
            New Arrivals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={cn(
                "group relative reveal hover-lift", 
                product.id % 2 === 0 ? "stagger-1" : "stagger-3"
              )}
            >
              <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white text-black px-2 py-1 text-xs font-mono uppercase tracking-wide z-10">
                  <span className="flex items-center gap-1">
                    SAVE {product.discount}%
                  </span>
                </div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-sm font-mono uppercase tracking-wide text-white mb-2">{product.title}</h3>
                <div className="flex justify-center items-center gap-3">
                  <span className="text-sm font-mono text-white">RS. {product.salePrice.toLocaleString()}</span>
                  <span className="text-xs font-mono text-white/60 line-through">RS. {product.originalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

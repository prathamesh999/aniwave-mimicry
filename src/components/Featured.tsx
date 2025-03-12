
import React from "react";
import { cn } from "@/lib/utils";
import { ShoppingCart, Tag } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Akira Vintage Tee",
    description: "A neo-Tokyo inspired design featuring iconic motorcycle scenes from the classic cyberpunk anime.",
    category: "Limited Edition",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Studio Ghibli Collection",
    description: "Featuring characters from Spirited Away, My Neighbor Totoro, and Princess Mononoke.",
    category: "Fan Favorites",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Neo Tokyo Explorer",
    description: "Urban cyberpunk cityscape design inspired by the iconic anime cityscapes.",
    category: "Bestseller",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Anime Soundtrack Series",
    description: "Visual representations of iconic anime soundtracks and musical moments.",
    category: "New Arrival",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
  },
];

const Featured = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <span className="text-sm uppercase tracking-widest text-primary/60 font-medium mb-3 block">Featured Collection</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Popular Designs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={cn(
                "group relative reveal", 
                index % 2 === 0 ? "stagger-1" : "stagger-3"
              )}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                  <span className="flex items-center gap-1">
                    <Tag size={12} />
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold">{product.title}</h3>
                  <span className="text-lg font-bold">${product.price}</span>
                </div>
                <p className="text-primary/80 mb-4">{product.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;


import React from "react";
import { cn } from "@/lib/utils";
import { ShoppingCart, Tag } from "lucide-react";
import img from "./WhatsApp Image 2025-03-12 at 21.04.58_c2532b9d.jpg";
import img2 from "./t2.jpg";
import img3 from "./t3.jpg";

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
    image: img,
  },
  {
    id: 2,
    title: "Studio Ghibli Collection",
    description: "Featuring characters from Spirited Away, My Neighbor Totoro, and Princess Mononoke.",
    category: "Fan Favorites",
    price: 34.99,
    image: img2,
  },
  {
    id: 3,
    title: "Neo Tokyo Explorer",
    description: "Urban cyberpunk cityscape design inspired by the iconic anime cityscapes.",
    category: "Bestseller",
    price: 27.99,
    image: img3,
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
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <span className="text-xs uppercase tracking-widest text-white/60 font-mono mb-3 block">Featured Collection</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter">Our Popular Designs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={cn(
                "group relative reveal hover-lift", 
                index % 2 === 0 ? "stagger-1" : "stagger-3"
              )}
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs font-mono uppercase tracking-wide z-10">
                  <span className="flex items-center gap-1">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex justify-between items-end gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold tracking-tighter">{product.title}</h3>
                  <span className="text-sm font-mono">${product.price}</span>
                </div>
                <p className="text-white/60 text-sm mb-4">{product.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-xs font-mono uppercase tracking-wide transition-colors hover:bg-white/90"
                >
                  <ShoppingCart size={14} />
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

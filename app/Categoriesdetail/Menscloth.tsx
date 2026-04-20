import CategoryGridScreen, { type CategoryProduct } from "../components/CategoryGridScreen";

type Product = CategoryProduct & {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  description: string;
  size: string[]; 
};

const mensCloth: Product[] = [
  { 
    id: "1", 
    name: "Levi's Blue Shirt", 
    image: "https://levi.in/cdn/shop/files/245770235_01_Styleshot.jpg?v=1741079564", 
    price: "$27.21", 
    rating: 4.2,
    description: "Classic blue shirt from Levi's, perfect for both casual and semi-formal wear.",
    size: ["S", "M", "L", "XL"]
  },
  { 
    id: "2", 
    name: "Wrangler Black Pants", 
    image: "https://images-cdn.ubuy.co.in/64cd0d37eaac9e0cdf7a6671-wrangler-men-s-and-big-men-s-legacy.jpg", 
    price: "$22.67", 
    rating: 3.9,
    description: "Wrangler black pants with a comfortable fit, great for everyday use.",
    size: ["30", "32", "34", "36"]
  },
  { 
    id: "3", 
    name: "H&M Green Hoodie", 
    image: "https://assets.ajio.com/medias/sys_master/root/20240913/KyNf/66e468c41d763220fae63b52/-1117Wx1400H-700420474-green-MODEL.jpg", 
    price: "$73.71", 
    rating: 4.7,
    description: "Cozy green hoodie from H&M, designed for warmth and casual streetwear style.",
    size: ["M", "L", "XL"]
  },
  { 
    id: "4", 
    name: "H&M White T-Shirt", 
    image: "https://image.hm.com/assets/hm/ec/02/ec021c2117eb98456fa0d39b7cc874cca19fa37b.jpg", 
    price: "$5.66", 
    rating: 4.1,
    description: "Simple and breathable white cotton T-shirt for everyday comfort.",
    size: ["S", "M", "L", "XL"]
  },
  { 
    id: "5", 
    name: "Levi's Indigo Jeans", 
    image: "https://levi.in/cdn/shop/files/003HL0009_02_Front.jpg?v=1751882670", 
    price: "$33.99", 
    rating: 4.5,
    description: "Durable indigo blue jeans from Levi's, a timeless denim essential.",
    size: ["30", "32", "34", "36"]
  },
  { 
    id: "6", 
    name: "GAP Gray Sweater", 
    image: "https://m.media-amazon.com/images/I/81GOkK0okmL._UY1000_.jpg", 
    price: "$28.34", 
    rating: 3.8,
    description: "Soft gray sweater from GAP, ideal for layering in cooler weather.",
    size: ["M", "L", "XL"]
  },
  { 
    id: "7", 
    name: "Puma Navy Shorts", 
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586981/06/fnd/IND/fmt/png/Active-Woven-Youth-Shorts", 
    price: "$14.73", 
    rating: 4.3,
    description: "Lightweight navy blue shorts by Puma, designed for sports and training.",
    size: ["S", "M", "L"]
  },
  { 
    id: "8", 
    name: "Adidas Black Hoodie", 
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/51d58d963dd4451ab9e5ad1201423f5d_9366/Essentials_Fleece_Hoodie_Black_GV5294_01_laydown.jpg", 
    price: "$36.28", 
    rating: 4.6,
    description: "Classic black fleece hoodie from Adidas, combining comfort with style.",
    size: ["M", "L", "XL"]
  },
  { 
    id: "9", 
    name: "Zara Charcoal Blazer", 
    image: "https://static.zara.net/assets/public/bd9f/c498/d6164e14a6a8/e5df155a9035/05908475807-e1/05908475807-e1.jpg?ts=1757070172688&w=560", 
    price: "$56.70", 
    rating: 4.0,
    description: "Sophisticated charcoal blazer from Zara, perfect for formal occasions.",
    size: ["M", "L", "XL"]
  },
  { 
    id: "10", 
    name: "Columbia Beige Vest", 
    image: "https://img.tatacliq.com/images/i20//658Wx734H/MP000000024168817_658Wx734H_202410231239411.jpeg", 
    price: "$45.36", 
    rating: 4.4,
    description: "Beige sleeveless vest from Columbia, lightweight and outdoor-friendly.",
    size: ["M", "L", "XL"]
  },
];



export default function Menscloth() {
  return (
    <CategoryGridScreen
      title="Mens Wear"
      products={mensCloth}
      detailRoute="/productCategories/Mens"
    />
  );
}

import CategoryGridScreen, { type CategoryProduct } from "../components/CategoryGridScreen";

type Product = CategoryProduct & {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  description: string;
  size: string; // added
};

const Bagss: Product[] = [
  {
    id: "1",
    name: "Nike Backpack",
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--N40597_PM2_Front%20view.jpg?wid=750&hei=870",
    price: "$89.99",
    rating: 4.5,
    description: "Durable Nike backpack designed for athletes and students. Spacious compartments with padded straps for daily comfort.",
    size: "Medium"
  },
  {
    id: "2",
    name: "Adidas Duffel Bag",
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/MAY/27/JGBfPk0O_62ef26c8b07d4cfeb90686536507703a.jpg",
    price: "$75.00",
    rating: 4.4,
    description: "Adidas duffel bag with multiple compartments and adjustable straps. Ideal for gym, travel, or sports practice.",
    size: "Large"
  },
  {
    id: "3",
    name: "Puma Gym Bag",
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/MAY/27/JGBfPk0O_62ef26c8b07d4cfeb90686536507703a.jpg",
    price: "$65.00",
    rating: 4.3,
    description: "Lightweight Puma gym bag with sporty design. Perfect for carrying workout gear or everyday essentials.",
    size: "Medium"
  },
  {
    id: "4",
    name: "Louis Vuitton Tote",
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--N40597_PM2_Front%20view.jpg?wid=750&hei=870",
    price: "$2999.00",
    rating: 4.9,
    description: "Luxury Louis Vuitton tote crafted with monogram canvas. Spacious and iconic, ideal for everyday sophistication.",
    size: "Standard"
  },
  {
    id: "5",
    name: "Gucci Shoulder Bag",
    image: "https://www.henrykstudio.com/cdn/shop/files/1_3cdc4cc5-c936-4727-b8d5-1e33b753952b.jpg?v=1754384263&width=1920",
    price: "$2499.00",
    rating: 4.8,
    description: "Gucci Marmont shoulder bag with signature GG motif. Premium leather and gold-tone hardware for timeless elegance.",
    size: "Standard"
  },
  {
    id: "6",
    name: "Hermès Birkin",
    image: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjg4MTYwNjFlODMxMzJlZTNmMDk0MWIzLW5ldy1oZXJtZXMtbmVpZ2Utc25vdy13aGl0ZS1mYXVib3VyZy5qcGc.jpg",
    price: "$15000.00",
    rating: 5.0,
    description: "The iconic Hermès Birkin bag, handcrafted with the finest leather. Symbol of ultimate luxury and exclusivity.",
    size: "Standard"
  },
  {
    id: "7",
    name: "Coach Leather Bag",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRj9KhgH4aXQX1qg7PZkGqRtozDGeWgzqXJ_HvszZZZ7etRGxyoNX-Cjfe9y5LW5xaq4onx5CObDkPYeAemBKwiPdEv5iaNZFbQ4IhNok3wMx4935bSS4Zt0xs",
    price: "$399.99",
    rating: 4.6,
    description: "Coach leather bag with premium craftsmanship. Classic design suitable for work and daily use.",
    size: "Medium"
  },
  {
    id: "8",
    name: "Prada Crossbody",
    image: "https://www.henrykstudio.com/cdn/shop/files/1_a2288f33-e572-4b46-bec6-1e34cfb7c150.jpg?v=1697886814&width=1920",
    price: "$2299.00",
    rating: 4.7,
    description: "Prada crossbody bag with minimalist design. Lightweight and practical with luxury appeal.",
    size: "Standard"
  },
  {
    id: "9",
    name: "Michael Kors Jet Set Tote",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqvCq8DiVH0F0B-t8nBTUI6QuhNKI-1sMD3X2o_KdA51yqDDyeLcy0hUILPlw71WY3TeQ3qmZvwh4lHZYj5ouTLdSMvLFTm3wIdNu_TXtxxf9e48jKJy7Q",
    price: "$275.00",
    rating: 4.5,
    description: "Michael Kors Jet Set Tote, versatile and spacious. Perfect for travel or daily essentials with stylish branding.",
    size: "Large"
  },
  {
    id: "10",
    name: "Samsonite Laptop Backpack",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8m5Pir-9dI1f2W-Wo2VXVfzPzs6TfWcpS7qDCsNgRQFgso3_ve2cMKM_KCrfUhpSR0zhT-i1t5NFbAhPeA0Aw_PAuv8jpVZMtslfCxks1ipdfZ4v-PXkW4Q",
    price: "$179.00",
    rating: 4.6,
    description: "Samsonite laptop backpack with padded compartments. Ideal for business travel and daily commuting.",
    size: "Medium"
  },
];




export default function Bags() {
  return (
    <CategoryGridScreen
      title="Bags"
      products={Bagss}
      detailRoute="/productCategories/Bags"
    />
  );
}

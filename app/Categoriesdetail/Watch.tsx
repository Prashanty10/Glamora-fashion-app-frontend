import CategoryGridScreen, { type CategoryProduct } from "../components/CategoryGridScreen";

type Product = CategoryProduct & {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  description: string;
};

const watch: Product[] = [
  {
    id: "1",
    name: "Rolex Submariner",
    image: "https://img.chrono24.com/images/uhren/31056441-rpsxah9cvqsp84fv6xkpnfx5-ExtraLarge.jpg",
    price: "$8999.99",
    rating: 4.9,
    description: "The Rolex Submariner is an iconic luxury dive watch known for precision, durability, and timeless design.",
  },
  {
    id: "2",
    name: "Omega Speedmaster",
    image: "https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/o/m/omega-speedmaster-522-30-42-30-03-001-multiple-1.jpg",
    price: "$6799.99",
    rating: 4.8,
    description: "Omega Speedmaster, famously known as the Moonwatch, is celebrated for its role in space missions and classic chronograph style.",
  },
  {
    id: "3",
    name: "Tag Heuer Carrera",
    image: "https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dwb3b4a236/images/sprites/Carrera/CBS2214.FC6567/RTW_backUp.jpg",
    price: "$3499.50",
    rating: 4.7,
    description: "Tag Heuer Carrera is a racing-inspired chronograph, combining sporty design with Swiss craftsmanship.",
  },
  {
    id: "4",
    name: "Seiko Presage Automatic",
    image: "https://img.chrono24.com/images/uhren/8307069-n4zff5hya1u73svydws8n9ar-ExtraLarge.jpg",
    price: "$599.00",
    rating: 4.5,
    description: "Seiko Presage Automatic offers Japanese craftsmanship with elegant design and reliable movement.",
  },
  {
    id: "5",
    name: "Casio G-Shock",
    image: "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/25522194/2025/6/16/09c0b9b5-13c3-4beb-b56e-cd6308b70d631750049939531-CASIO-Men-G-Shock-GST-B400BB-1ADR-Black-Ana-Digi-Dial-Black--1.jpg",
    price: "$129.99",
    rating: 4.3,
    description: "Casio G-Shock is built for toughness with shock resistance, water resistance, and rugged styling.",
  },
  {
    id: "6",
    name: "Apple Watch Series 9",
    image: "https://m.media-amazon.com/images/I/71kvetC-aCL._UF1000,1000_QL80_.jpg",
    price: "$399.99",
    rating: 4.7,
    description: "Apple Watch Series 9 with advanced health tracking, fitness monitoring, and seamless iOS integration.",
  },
  {
    id: "7",
    name: "Samsung Galaxy Watch 6",
    image: "https://m.media-amazon.com/images/I/71sRBqqrOpL.jpg",
    price: "$349.99",
    rating: 4.6,
    description: "Samsung Galaxy Watch 6 delivers advanced health tracking, AMOLED display, and smooth Galaxy ecosystem integration.",
  },
  {
    id: "8",
    name: "Fossil Grant Chronograph",
    image: "https://fossil.scene7.com/is/image/FossilPartners/FS4835_9L?$sfcc_lifestyle_large$",
    price: "$179.50",
    rating: 4.4,
    description: "Fossil Grant Chronograph features a timeless Roman numeral design with durable stainless steel build.",
  },
  {
    id: "9",
    name: "Citizen Eco-Drive",
    image: "https://img.chrono24.com/images/uhren/42529100-5ig4uxx4r4emdv7g2myxfxyq-ExtraLarge.jpg",
    price: "$325.00",
    rating: 4.5,
    description: "Citizen Eco-Drive is powered by light, eliminating the need for battery changes with eco-friendly technology.",
  },
  {
    id: "10",
    name: "Garmin Forerunner 265",
    image: "https://m.media-amazon.com/images/I/71vITm60zcL._UF1000,1000_QL80_.jpg",
    price: "$499.00",
    rating: 4.6,
    description: "Garmin Forerunner 265 is a premium GPS smartwatch built for runners and athletes with training insights.",
  },
]


export default function Watch() {
  return (
    <CategoryGridScreen
      title="Watches"
      products={watch}
      detailRoute="/productCategories/Watches"
    />
  );
}

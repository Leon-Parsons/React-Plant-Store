import { AiFillStar } from "react-icons/ai";

const data = [
  {
    img: "https://images.unsplash.com/photo-1509223197845-458d87318791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=949&q=80",
    title: "Dori Succulent",
    star: <AiFillStar className="rating-star" />,
    reviews: "(5 reviews)",
    prevPrice: "$50.00",
    newPrice: "40",
    company: "",
    color: "",
    category: "succulent",
  },
  {
    img: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    title: "Adele Cactus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(6 reviews)",
    prevPrice: "$45",
    newPrice: "35",
    company: "",
    color: "",
    category: "cacti",
  },

];

export default data;
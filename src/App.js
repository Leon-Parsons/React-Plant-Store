import Sidebar from "./Sidebar/Sidebar";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
// import { useState } from "react";

// import products from "./product_data/data";
// import { Card } from "react-bootstrap";

function App() {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [query, setQuery] = useState("");


  // const handleInputChange = event => {
  //   setQuery(event.target.value)
  // }

  // //product filter
  // const filteredItems = products.filter((product) => 
  //   product.title.toLowerCase().indexOf(query.toLowerCase() !== -1)
  // );

  // //-----sidebar button state-----
  // const handleChange = event => {
  //   setSelectedCategory(event.target.value)
  // }

  // //-----sidebar button filter-----
  // const handleClick = event => {
  //   setSelectedCategory(event.target.value)
  // }

  // function filteredData(products,selected,query) {
  //   let filteredProducts = products;
  // } 

  // //filtering input items
  // if (query) {
  //   filteredProducts = filteredItems;
  // }

  // //selected filter 
  // if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //     ({ category, newPrice, title }) =>
  //     category === selected || 
  //     newPrice === selected || 
  //     title === selected 
  //   );
  // }

  // return filteredProducts.map(
  //   ({img, title, star, reviews, prevPrice}) => (
  //   <Card 
  //   key={Math.random()}
  //   img={img}
  //   title={title}
  //   star={star}
  //   reviews={reviews}
  //   prevPrice={prevPrice} 
  //   />
  //   )
  // );
  // const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
    </>
  );
}

export default App;

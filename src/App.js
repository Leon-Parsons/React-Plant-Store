import Sidebar from "./Sidebar/Sidebar";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import { useState } from "react";

import products from "./product_data/data";

function App() {
  //search bar state
  const [query, setQuery] = useState("");
  //search bar state set to user input
  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  //product filter
  const filteredItems = products.filter(product => 
    product.title.toLowerCase().indexOf(query.toLowerCase() !== -1)
  );

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

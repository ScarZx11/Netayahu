import React from "react";
import Jobs from "./Components/JobDiv/Job"; // Ensure this file exists
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/Footerdiv/Footer";

const App = () => {
  return (
    <div className='w-[85%] m-autu'>
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;

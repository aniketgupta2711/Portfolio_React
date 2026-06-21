import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import  { useState } from "react";

const App = () => {

  const [notification, setNotification] = useState('');
  return (
    <>

       {/*Notification*/}

       {
        notification && (
          <div className=" fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg ">
            {notification}
          </div>
        )
       }

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />

      <Contact setNotification={setNotification} />


      <Footer />
    </>
  );
}

export default App;
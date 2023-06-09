import About from "../Pages/Home/AboutUs/About";
import Banner from "../Pages/Home/Banner";
import Details from "../Pages/Home/Details";
import GallerySection from "../Pages/Home/GallerySection";
import PopulerClasses from "../Pages/Home/PopulerClasses";
import Sijan from "../Pages/Sijan";

const Home = () => {
  return (
    <div>
  
      <Banner></Banner>
        <Sijan></Sijan>
      <Details></Details>
      <PopulerClasses></PopulerClasses>
      <About></About>
      <GallerySection></GallerySection>
    
    </div>
  );
};

export default Home;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sijan = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
                <div className="slider-details flex text-center">
                <img src="https://img.freepik.com/free-vector/beautiful-purple-woman-surrounded-by-nature-illustration_53876-97561.jpg?size=626&ext=jpg" alt="Artwork 1" />
            <div className="flex justify-center items-center flex-col">
                
          <h2>Artwork 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facilis earum optio ipsum inventore, voluptatibus nemo consectetur sit voluptates perferendis saepe maxime dolor delectus nostrum officiis. Quos vero iure perferendis?</p>
            </div>
        </div>
      </div>
      <div>
         <div className="slider-details flex text-center" >
         <img src="https://img.freepik.com/premium-vector/astronaut-riding-bmx-vector-illustration-artwork-with-moon-isolated-light-color-design_72076-232.jpg?size=626&ext=jpg" alt="Artwork 2" />
   
     <div className="flex justify-center items-center flex-col">
     <h2>Artwork 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus fuga, nam asperiores molestiae perferendis eum! Laudantium aut harum consequatur ipsa sunt similique culpa rerum commodi illum quo sit distinctio repellendus molestias excepturi tenetur repellat tempore dolorem repudiandae, saepe assumenda.</p>
     </div>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Sijan;

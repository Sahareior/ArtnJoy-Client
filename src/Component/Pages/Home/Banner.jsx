import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Heading from "../../Shared/Heading";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    document.title = "Art&Joy"; // Update the title here
  }, []);
  return (
    <div className="p-16 w-[500px] md:w-full">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
          className="md:w-full w-[400px] md:h-[800px] "
            style={{
              backgroundImage:
                "url('https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/05/hero_home_02-slider.jpg')",
            }}
          >
            <div className="relative">
              <img
                className="mx-auto"
                src="https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/draw_paint.png"
                alt=""
              />
              <div className="absolute s z-30 md:top-72 top-16  md:left-0 w-full text-center">
                <Heading title="Learn To" des="Draw & Paint" />
                <button className="btn btn-secondary mt-7">Apply Today</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="md:w-full w-[400px] md:h-[800px]"
            style={{
              backgroundImage:
                "url('https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/hero_home_02.jpg')",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

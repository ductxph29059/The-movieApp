import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgMovie from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div
      className="w-full h-[600px] bg-banner
       bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute w-full h-full
        top-0 left-0 bg-black opacity-30"
      />
      <div
        className="w-full h-full flex items-center 
        justify-center space-x-[30px] p-4 relative z-20 "
      >
        <div className="flex flex-col items-baseline space-y-5 w-[50%]">
          <p
            className="text-white bg-gradient-to-r
             from-red-600 to-white text-md py-1 px-3"
          >
            TV SHOW
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-3xl">Nghe nói em thích tôi</h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting,
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="p-2 text-white
               bg-black font-bold text-sm"
            >
              Tiêu đề
            </button>
            <button
              className="p-2 text-white
               bg-red-600 font-bold text-sm"
            >
              Xem thêm
            </button>
          </div>
        </div>

        <div className="md:w-[50%] w-full flex items-center justify-center">
        <div className="w-[300px] h-[400px] relative group">
        <button
              className="w-full h-full absolute top-0 left-0 flex
           items-center justify-center backdrop-blur-sm opacity-0 
           group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </button>
            <img src={ImgMovie} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AlmightBkg from '../../assets/Almight_Bkg.jpg'
import PWBkg from '../../assets/PW_bkg.jpg'
import VictusBkg from '../../assets/Victus_Bkg.jpg'

export default function Work_carousel() {

    const settings = {
        dots: true,
        infinte: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    }

  return (
    <div>
        <Slider {...settings}>
            <div>
                <div className="scale-100 hover:scale-[1.05] transition duration-200">
                    <a href="https://victus-vr.alex-benta.com/" target="_blank" rel="noreferrer"><img src={VictusBkg} alt="slider-image" /></a>
                </div>
                <p className="py-8 text-base md:text-xl font-light text-white/70">1.VR headset page</p>
            </div>

            <div>
                <div className="scale-100 hover:scale-[1.05] transition duration-200">
                    <a href="https://sprightly-marigold-aa9156.netlify.app/" target="_blank" rel="noreferrer"><img src={AlmightBkg} alt="slider-image" /></a>
                </div>
                <p className="py-8 text-base md:text-xl font-light text-white/70">2.Digital Services website</p>
            </div>

            <div>
                <div className="scale-100 hover:scale-[1.05] transition duration-200">
                    <a href="https://bucolic-sunflower-c9e71a.netlify.app/" target="_blank" rel="noreferrer"><img src={PWBkg} alt="slider-image" /></a>
                </div>
                <p className="py-8 text-base md:text-xl font-light text-white/70">3.Random Password Generator</p>
            </div>
        </Slider>
    </div>
  )
}

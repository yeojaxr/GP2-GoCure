import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import img from './img/1.jpg';
import img1 from './img/2.jpg';
import img2 from './img/3.jpg';

function carousel() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    
    const style = {
        width: "50%",
    }
    return (
        <div style={style}>
            <Slider {...settings} >
                <div>
                    <img src={img}/>
                </div>
                <div>
                    <img src={img1}/>
                </div>
                <div>
                    <img src={img2}/>
                </div>
            </Slider>
            
        </div>
    )
}

export default carousel

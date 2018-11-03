import React, { CSSProperties } from "react";
import Slider from "react-slick";
import imgArray from '../images/carousel';

export class DogCarousel extends React.Component {
    public render() {
        // https://react-slick.neostack.com/docs/api
        const settings = {
            // dots: false,
            infinite: true,
            speed: 5000,
            cssEase: "linear",
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplaySpeed: 0.1,
            autoplay: true,
            centerMode: true,
            variableWidth: true,
            swipeToSlide: true,
            swipe: true,
        };
        // tslint:disable-next-line:no-console
        // console.log(imgArray);

        const imgStyle:CSSProperties ={
            maxWidth: '100%',
            maxHeight: '120px'
        }
        return (
            <div className="container">
                <Slider {...settings} >
                    {
                        imgArray.map((pic,index)=>{
                            return( 
                            <div key={'carousel'+index}>
                                <img src={pic} style={imgStyle}/>
                            </div>
                        )
                        })
                    }
                </Slider>
            </div>
        );
    }
}

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from "react";
import Slider from "react-slick";
import imgArray from '../images/carousel';
var DogCarousel = /** @class */ (function (_super) {
    __extends(DogCarousel, _super);
    function DogCarousel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogCarousel.prototype.render = function () {
        // https://react-slick.neostack.com/docs/api
        var settings = {
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
        var imgStyle = {
            maxWidth: '100%',
            maxHeight: '120px'
        };
        return (React.createElement("div", { className: "container" },
            React.createElement(Slider, __assign({}, settings), imgArray.map(function (pic, index) {
                return (React.createElement("div", { key: 'carousel' + index },
                    React.createElement("img", { src: pic, style: imgStyle })));
            }))));
    };
    return DogCarousel;
}(React.Component));
export { DogCarousel };
//# sourceMappingURL=DogCarousel.js.map
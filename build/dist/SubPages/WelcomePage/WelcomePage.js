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
import { Col, Row } from 'antd';
import * as React from 'react';
import pic from '../../images/Startseite.jpg';
import './WelcomePage.scss';
var WelcomePage = /** @class */ (function (_super) {
    __extends(WelcomePage, _super);
    function WelcomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomePage.prototype.render = function () {
        //  let test = { titel: 'hallo' };
        // const test3 = test.titel;
        //  test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        return (React.createElement("div", { className: '' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'text-center', span: 20 },
                    React.createElement("div", { className: 'titlegross' }, "Willkommen "))),
            React.createElement("hr", { style: {
                    height: '15px',
                    border: '0'
                } }),
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { span: 24 },
                    React.createElement("img", { id: 'welcomeIMG', src: pic, alt: 'bild' }),
                    React.createElement("div", { className: 'text-center', style: { fontSize: "18px" } },
                        React.createElement("p", { "text-align": "center" }, "Jede Beziehung zwischen einem Tier und einem Menschen"),
                        React.createElement("p", null, "ist eine einzigartige Br\u00FCcke, gebaut, um nur diese beiden zu tragen."),
                        React.createElement("p", null, "Deshalb muss sie auch von ihnen selbst erschaffen werden."),
                        React.createElement("div", { className: 'author' }, "Suzanne Clothier")))),
            React.createElement("hr", { style: {
                    height: '30px',
                    backgroundColor: 'rgb(255, 240, 203)',
                    border: '0'
                } })));
    };
    return WelcomePage;
}(React.Component));
export default WelcomePage;
//# sourceMappingURL=WelcomePage.js.map
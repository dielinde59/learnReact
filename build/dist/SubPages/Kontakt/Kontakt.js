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
import { Layout, Row, Col } from 'antd';
import * as React from 'react';
import pic from '../../images/Anfahrt1.jpg';
import pic1 from '../../images/Anfahrt2.jpg';
// import './Kontakt.scss';
// const { Header, Footer, Sider, Content } = Layout;
import '../../Main.scss';
var Kontakt = /** @class */ (function (_super) {
    __extends(Kontakt, _super);
    function Kontakt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kontakt.prototype.render = function () {
        // let test = { titel: 'hallo' };
        // const test3 = test.titel;
        // test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        return (React.createElement(Layout, { className: 'scrcontainer' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("div", { className: 'titlegross' }, " Kontakt / Anfahrt "))),
            React.createElement(Row, null,
                React.createElement(Col, { xl: { span: 10 }, xxl: { span: 15 } },
                    React.createElement(Row, { type: 'flex' },
                        React.createElement("br", null),
                        React.createElement("div", { className: 'title citeBox' }, "Hundeschule"),
                        React.createElement("div", { className: 'citeBox' },
                            React.createElement("p", null, "Hundefreu(n)de - Monika Frei"),
                            "Sch\u00F6nreit 1",
                            React.createElement("br", null),
                            "D-83308 Trostberg",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            "Tel.: +49 (0)178 7308459",
                            React.createElement("br", null),
                            "info@hundefreu-n-de.de",
                            React.createElement("br", null),
                            "www.hundefreu-n-de.de",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement("p", { className: 'link' },
                                React.createElement("a", { href: 'https://www.google.de/maps/place/Sch%C3%B6nreit+1,+83308+Trostberg/@48.0602285,12.5311945,17z/data=!3m1!4b1!4m5!3m4!1s0x4775df0ee6f5adb9:0xe930772648571d63!8m2!3d48.0602285!4d12.5333832?hl=de', target: "_blank" }, "Hier Klicken um Google Maps zu \u00F6ffnen"))))),
                React.createElement(Col, { span: 8 },
                    React.createElement(Row, { justify: "center" },
                        React.createElement("div", { className: 'colRight' },
                            React.createElement("div", null,
                                React.createElement("img", { className: 'image35', src: pic, alt: 'bild', style: { width: "80%" } })))),
                    React.createElement(Row, null,
                        React.createElement("div", null,
                            React.createElement("img", { className: 'image35', src: pic1, alt: 'bild', style: { width: "80%" } })))))));
    };
    return Kontakt;
}(React.Component));
export default Kontakt;
//# sourceMappingURL=Kontakt.js.map
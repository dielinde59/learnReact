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
import { Layout } from 'antd';
import * as React from 'react';
import pic from '../../images/Gelaende01.jpg';
import pic1 from '../../images/Gelaende02.jpg';
// import '../UeberUns/UeberUns.scss';
import './Gelaende.scss';
var Gelaende = /** @class */ (function (_super) {
    __extends(Gelaende, _super);
    function Gelaende() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gelaende.prototype.render = function () {
        var obj = {
            feld1: 'hallo',
            feld5: 4,
            irgendwas: undefined,
        };
        for (var sth in obj) {
            if (sth !== undefined && sth === 'feld1') {
                obj[sth] = 'tschuesss';
            }
        }
        // let test = { titel: 'hallo' };
        // const test3 = test.titel;
        // test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        return (React.createElement(Layout, { className: 'container' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("h1", { style: { color: '#D7A200' } }, "Trainingsgel\u00E4nde"))),
            React.createElement(Row, null,
                React.createElement(Col, { span: 16 },
                    React.createElement(Row, { type: 'flex' },
                        React.createElement("div", { className: 'citeBox' },
                            React.createElement("p", null, "Die Hundeschule Hundefreu(n)de \u2013 Monika Frei liegt im sch\u00F6nen Chiemgau in Oberbayern. Unser ca. 2.500 m\u00B2 gro\u00DFer, eingez\u00E4unter Trainingsplatz befindet sich in l\u00E4ndlicher Umgebung mit freiem Bergblick und garantiert entspannte Atmosph\u00E4re f\u00FCr Hund und Halter."),
                            React.createElement("br", null),
                            React.createElement("p", null, "An hei\u00DFen Tagen steht selbstverst\u00E4ndlich jedem ein entspanntes Schattenpl\u00E4tzchen zur Verf\u00FCgung."),
                            React.createElement("br", null),
                            React.createElement("p", null, "Dank unserer Au\u00DFenbeleuchtung k\u00F6nnen wir auch in der Winterzeit unsere regul\u00E4ren Trainingszeiten bis in die Abendstunden einhalten."),
                            React.createElement("br", null),
                            React.createElement("p", null, "In unserem gem\u00FCtlichen \u201ESt\u00FCberl\u201C nehmen wir uns Zeit f\u00FCr Theorie und Sachkundeunterricht, feiern aber auch gerne die Erfolge unserer Hundefreunde."),
                            React.createElement("br", null)))),
                React.createElement(Col, { span: 8 },
                    React.createElement(Row, { justify: "center" },
                        React.createElement("div", { className: 'colRight' },
                            React.createElement("div", null,
                                React.createElement("img", { className: 'image35', src: pic, alt: 'bild', style: { width: "80%" } })))),
                    React.createElement(Row, null,
                        React.createElement("div", null,
                            React.createElement("img", { className: 'image35', src: pic1, alt: 'bild', style: { width: "80%" } })))))));
    };
    return Gelaende;
}(React.Component));
export default Gelaende;
//# sourceMappingURL=Gelaende.js.map
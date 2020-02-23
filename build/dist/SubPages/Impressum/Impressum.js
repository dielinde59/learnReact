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
import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import pic from '../../images/Ueberuns1.jpg';
import pic1 from '../../images/Ueberuns2.jpg';
import '../../Main.scss';
var Impr = /** @class */ (function (_super) {
    __extends(Impr, _super);
    function Impr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Impr.prototype.render = function () {
        // let test = { titel: 'hallo' };
        // const test3 = test.titel;
        // test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        return (React.createElement(Layout, { className: 'container' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("div", { className: 'titlegross' }, "Impressum"),
                    React.createElement("br", null))),
            React.createElement(Row, null,
                React.createElement(Col, { span: 18 },
                    React.createElement("div", { className: 'citeBox' },
                        React.createElement("p", null, "Hundefreu(n)de"),
                        React.createElement("p", null, "Monika Frei"),
                        React.createElement("p", null, "Sch\u00F6nreit 1"),
                        React.createElement("p", null, "D-83308 Trostberg"),
                        React.createElement("br", null),
                        React.createElement("p", null,
                            "Tel.: ",
                            React.createElement("u", null, " +49 178 7308459")),
                        React.createElement("p", null,
                            "E-Mail: ",
                            React.createElement("a", { href: "mailto:info@hundefreu-n-de.de", className: 'linkklein' },
                                " ",
                                React.createElement("u", null, "info@hundefreu-n-de.de"))),
                        React.createElement("br", null),
                        React.createElement("p", null, "Steuernummer: 163/218/11764"),
                        React.createElement("br", null),
                        React.createElement("p", null, "Mit Urteil vom Mai 1998 \"Haftung f\u00FCr Links\" hat das Landgericht (LG) Hamburg entschieden, dass man durch die Anbringung eines Links, die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann - so das LG - nur dadurch verhindert werden, dass man sich ausdr\u00FCcklich von diesen Inhalten distanziert. Hiermit distanziere ich mich ausdr\u00FCcklich von allen Inhalten aller gelinkten Seiten auf unserer Website und machen uns diese Inhalte nicht zu eigen. Diese Erkl\u00E4rung gilt f\u00FCr alle auf dieser Website angebrachten Links."))),
                React.createElement(Col, { span: 10, lg: { span: 6 } },
                    React.createElement("img", { style: { padding: "10px 0", marginTop: "5px" }, className: 'image', src: pic, alt: 'bild' }),
                    React.createElement(Row, null,
                        React.createElement("img", { style: { padding: "10px 0", marginTop: "5px" }, className: 'image', src: pic1, alt: 'bild' }))))));
    };
    return Impr;
}(React.Component));
export default Impr;
//# sourceMappingURL=Impressum.js.map
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
// import pic1 from {this:props.foto1}
// import pic2 from {this:props.foto2}
import '../../Main.scss';
var BasicPage = /** @class */ (function (_super) {
    __extends(BasicPage, _super);
    function BasicPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicPage.prototype.render = function () {
        var _this = this;
        // let test = { titel: 'hallo' };
        // const test3 = test.titel;
        // test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        // tslint:disable-next-line:no-console
        console.log("BasicPage");
        var cStr = this.props.text;
        var cStr1 = this.props.text1;
        // "Welcome-to-Tutorialspoint.com";
        var retval;
        (retval = cStr.split("#"));
        var retval1;
        (retval1 = cStr1.split("#"));
        return (React.createElement(Layout, { className: 'container' },
            React.createElement("br", null),
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("h1", { style: { color: '#D7A200' } }, this.props.utitel))),
            React.createElement("br", null),
            React.createElement(Row, null,
                React.createElement(Col, { xl: { span: 15 }, xxl: { span: 25 } },
                    React.createElement(Row, { type: 'flex' },
                        React.createElement("div", { className: 'title' },
                            " ",
                            this.props.titel),
                        React.createElement("br", null),
                        React.createElement("div", { className: 'citeBox2' },
                            retval &&
                                React.createElement(Col, null, retval.map(function (cval, index, array) {
                                    return (React.createElement("div", { className: 'citebox2', key: cval + index }, cval));
                                })),
                            React.createElement("br", null),
                            retval1 &&
                                React.createElement(Col, null, retval1.map(function (cval1, index, array) {
                                    return (React.createElement("div", { key: cval1 + index }, cval1));
                                }))))),
                this.props.pics &&
                    React.createElement(Col, null, this.props.pics.map(function (pic, index, array) {
                        // pic: aktuelles element aus Array
                        // index: index des aktuelllem elements
                        // array: auf rufender array in diesem fall: this.props.pics
                        return (React.createElement("div", { key: _this.props.titel + index, className: 'colRight' },
                            React.createElement("div", null,
                                React.createElement("img", { className: 'image20', src: pic, alt: 'bild' })),
                            React.createElement("br", null)));
                    })))));
    };
    return BasicPage;
}(React.Component));
export default BasicPage;
//# sourceMappingURL=BasicPage.js.map
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
import './Training.scss';
var Training = /** @class */ (function (_super) {
    __extends(Training, _super);
    function Training() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Training.prototype.render = function () {
        var _this = this;
        // let test = { titel: 'hallo' };
        // const test3 = test.titel;
        // test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        // tslint:disable-next-line:no-console
        console.log("training page");
        return (React.createElement(Layout, { className: 'container' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("div", { className: 'titlegross' }, this.props.utitel))),
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { span: 24, lg: { span: 18 } },
                    React.createElement("div", { className: 'title' },
                        " ",
                        this.props.titel),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'citeBox' },
                        React.createElement("p", null, this.props.text),
                        React.createElement("p", null, this.props.text1))),
                this.props.pics &&
                    React.createElement(Col, { span: 24, lg: { span: 6 } }, this.props.pics.map(function (pic, index, array) {
                        // pic: aktuelles element aus Array
                        // index: index des aktuelllem elements
                        // array: auf rufender array in diesem fall: this.props.pics
                        if (index === 0) {
                            return (
                            // <div key={this.props.titel+index} className='colRight'>
                            React.createElement("img", { style: { padding: "10px 0", marginTop: "58px" }, key: _this.props.titel + index, className: 'image', src: pic, alt: 'bild' })
                            // </div>
                            );
                        }
                        else {
                            return (
                            // <div key={this.props.titel+index} className='colRight'>
                            React.createElement("img", { style: { padding: "10px 0" }, key: _this.props.titel + index, className: 'image', src: pic, alt: 'bild' })
                            // </div>
                            );
                        }
                    })))));
    };
    return Training;
}(React.Component));
export default Training;
//# sourceMappingURL=Training.js.map
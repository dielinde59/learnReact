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
import '../../Main.scss';
var ListPage = /** @class */ (function (_super) {
    __extends(ListPage, _super);
    function ListPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPage.prototype.render = function () {
        var _a = this.props, title = _a.title, eintraege = _a.eintraege;
        return (React.createElement(Layout, { className: 'container' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("div", { className: 'titlegross' },
                        " ",
                        title,
                        " "))),
            React.createElement(Row, { className: 'container' }, eintraege.map(function (eintrag, index) {
                return (React.createElement("div", { key: "eintrag-" + index },
                    React.createElement(Row, { type: 'flex', justify: "start" },
                        React.createElement(Col, { span: 24, lg: { span: 18 } },
                            React.createElement("div", { className: 'title citeBox' }, eintrag.titel),
                            React.createElement("div", { className: 'title citeBox' }, eintrag.subtitel),
                            React.createElement("br", null),
                            React.createElement("div", { className: 'citeBox' },
                                React.createElement("p", null,
                                    " ",
                                    eintrag.text,
                                    " "),
                                React.createElement("p", null,
                                    " ",
                                    eintrag.text1,
                                    "  "),
                                React.createElement("br", null),
                                eintrag.pdf &&
                                    React.createElement("a", { href: eintrag.pdf, target: "_blank" }, "weiterlesen"))),
                        React.createElement(Col, { span: 24, lg: { span: 6 } }, eintrag.pics &&
                            React.createElement(Row, null, eintrag.pics.map(function (pic, picIndex) {
                                if (picIndex === 0) {
                                    return (React.createElement("img", { key: "list:" + title + "picture#" + picIndex, className: 'image70', src: pic, alt: 'bild', style: picIndex === 0 ? { padding: '0 10px 0 0 ' } : { padding: '0 10px 0 0', marginTop: "58px" } }));
                                }
                                else {
                                    return (React.createElement("img", { key: "list:" + title + "picture#" + picIndex, className: 'image70', src: pic, alt: 'bild', style: picIndex === 0 ? { padding: '0 10px 0 0 ' } : { padding: '0 10px 0 0', marginTop: "5px" } }));
                                }
                            })))),
                    React.createElement("hr", { style: { borderColor: 'black' } })));
            }))));
    };
    return ListPage;
}(React.Component));
export default ListPage;
//# sourceMappingURL=ListPage.js.map
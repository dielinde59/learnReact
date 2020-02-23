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
// tslint:disable:jsx-no-lambda
import { Col, Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'rc-menu/assets/index.css';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { DogCarousel } from './components/DogCarousel';
//  Photo links
import pic2 from './images/header-photo.jpg';
import pic4 from './images/header-photo1Cropped.jpg';
import pic1 from './images/header-text.jpg';
import pic3 from './images/Logo.jpg';
import './Main.scss';
import AGBs from './SubPages/AGBs/AGBs';
import Datenschutz from './SubPages/Datenschutz/Datenschutz';
// import Welpen from './SubPages/Welpen/Welpen';
import Kontakt from './SubPages/Kontakt/Kontakt';
import ListPage from './SubPages/ListPage/ListPage';
import { menu } from './SubPages/pageContent';
import Training from './SubPages/Training/Training';
// import BasicPage from './SubPages/BasicPage/BasicPage';
import UeberUns from './SubPages/UeberUns/UeberUns';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';
import Impr from './SubPages/Impressum/Impressum';
var Sider = Layout.Sider, Content = Layout.Content;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        var _this = _super.call(this, props) || this;
        _this.onCollapse = function (collapsed) {
            _this.setState({ collapsed: collapsed });
        };
        _this.state = { collapsed: false };
        _this.renderSider = _this.renderSider.bind(_this);
        _this.onCollapse = _this.onCollapse.bind(_this);
        _this.setState({ collapsed: false });
        return _this;
    }
    Main.prototype.renderSider = function () {
        return (React.createElement(Sider, { className: 'background container', 
            // collapsible /// diese zeile entfernen um normale seitenleist zu bekommen
            collapsed: this.state.collapsed, onCollapse: this.onCollapse, style: { padding: '60px 0', margin: '0' } },
            React.createElement(Menu, { className: 'menubackground', defaultSelectedKeys: ['1'], mode: "vertical" }, menu.map(function (categorie, index) {
                if (categorie.subroutes && !categorie.xy && categorie.subroutes.length > 0) {
                    return (React.createElement(SubMenu, { className: 'menubackground', title: React.createElement("div", null,
                            categorie.titel,
                            " "), key: index }, categorie.subroutes.map(function (item, itemIndex) {
                        return (
                        // todo
                        React.createElement(Menu.Item, { className: 'menubackground', key: index + "-" + itemIndex }, item.path &&
                            React.createElement(Link, { to: item.path },
                                React.createElement("span", null, item.titel))));
                    })));
                }
                // todo: maybe not neccessary ;)
                else {
                    return (
                    // todo
                    React.createElement(Menu.Item, { key: index }, categorie.path &&
                        React.createElement(Link, { to: categorie.path },
                            React.createElement("span", null, categorie.titel))));
                }
            })),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("div", { id: 'Logo' },
                React.createElement(Col, { xs: 30 },
                    React.createElement("img", { src: pic3, alt: 'bild', style: {
                            maxHeight: '100%',
                            maxWidth: '100%',
                        } }),
                    React.createElement("div", { className: 'citeBox' },
                        React.createElement("a", { href: "mailto:info@hundefreu-n-de.de", className: 'link' }, "info@hundefreu-n-de.de")),
                    React.createElement("div", { className: 'citeBox' },
                        React.createElement("a", { href: "http://hundefreu-n-de-forum.xobor.de/", target: "_blank" }, "Forum"))))));
    };
    Main.prototype.render = function () {
        return (
        // tslint:disable-next-line:no-unused-expression
        React.createElement("div", { id: 'page' },
            React.createElement("div", { id: 'header_and_content', className: 'layout background', style: {} },
                React.createElement("div", { id: 'header', style: {} },
                    React.createElement("div", { style: { display: 'flex' } },
                        React.createElement("div", { className: 'header_item', style: { width: '12.5%', float: 'left' } },
                            React.createElement("img", { src: pic2, alt: 'bild', style: {} })),
                        React.createElement("div", { className: 'header_item', style: { width: '75%' } },
                            React.createElement("img", { src: pic1, alt: 'bild', style: {} })),
                        React.createElement("div", { className: 'header_item', style: { width: '12.5%', float: 'right' } },
                            React.createElement("img", { src: pic4, alt: 'bild', style: {} }))),
                    React.createElement("div", { style: { width: '100%' } },
                        React.createElement("hr", { style: {
                                backgroundColor: 'rgb(255, 212, 45)',
                                height: '8px',
                                border: '0',
                                width: '100%',
                            } }),
                        React.createElement("hr", { style: {
                                backgroundColor: 'rgb(255, 255, 255)',
                                height: '3px',
                                border: '0',
                                width: '100%',
                            } }))),
                React.createElement("div", null,
                    React.createElement(Router, null,
                        React.createElement("div", { id: 'page_content' },
                            this.renderSider(),
                            React.createElement(Content, { className: 'background', style: { overflow: 'hidden' } },
                                React.createElement(Route, { exact: true, path: '/willkommen', render: function () { return (React.createElement(WelcomePage, { name: 'diete' })); } }),
                                React.createElement(Route, { exact: true, path: '/', render: function () { return (React.createElement(WelcomePage, { name: 'diete' })); } }),
                                React.createElement(Route, { exact: true, path: '/ueberUns', render: function () { return (React.createElement(UeberUns, { name: '' })); } }),
                                this.renderRoutes(),
                                React.createElement(Route, { exact: true, path: '/kontakt', render: function () { return (React.createElement(Kontakt, { name: 'diete' })); } }),
                                React.createElement(Route, { exact: true, path: '/AGBs', render: function () { return (React.createElement(AGBs, null)); } }),
                                React.createElement(Route, { exact: true, path: '/Datenschutz', render: function () { return (React.createElement(Datenschutz, null)); } }),
                                React.createElement(Route, { exact: true, path: '/Impressum', render: function () { return (React.createElement(Impr, { name: '' })); } })))))),
            React.createElement("div", { id: 'fixed_footer', style: {} },
                React.createElement(DogCarousel, null))));
    };
    Main.prototype.renderRoutes = function () {
        var obj = [];
        var _loop_1 = function (categorie) {
            var utitel = categorie.titel;
            if (categorie.xy) {
                // mach das selbe nur mit 
                obj.push((React.createElement(Route, { key: 'route' + categorie.titel, exact: true, path: categorie.path, render: function () {
                        if (categorie.subroutes) {
                            return (React.createElement(ListPage, { title: categorie.titel, subtitel: categorie.subtitel, eintraege: categorie.subroutes }));
                        }
                        return;
                    } })));
            }
            else {
                if (categorie.subroutes && categorie.subroutes.length > 0) {
                    var _loop_2 = function (item) {
                        if (item.path !== undefined && item.text !== undefined) {
                            var text_1 = item.text;
                            if (item.text1 !== undefined) {
                                var text1_1 = item.text1;
                                obj.push((React.createElement(Route, { key: 'route' + item.titel, exact: true, path: item.path, render: function () {
                                        return (React.createElement(Training, { utitel: utitel, titel: item.titel, text: text_1, text1: text1_1, pics: item.pics }));
                                    } })));
                            }
                            else {
                                obj.push((React.createElement(Route, { key: 'route' + item.titel, exact: true, path: item.path, render: function () {
                                        return (React.createElement(Training, { utitel: utitel, titel: item.titel, text: text_1, text1: "", pics: item.pics }));
                                    } })));
                            }
                        }
                    };
                    for (var _i = 0, _a = categorie.subroutes; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _loop_2(item);
                    }
                }
                else {
                    if (categorie.path !== undefined && categorie.text !== undefined) {
                        var text_2 = categorie.text;
                        var text1_2 = "";
                        if (categorie.text1 !== undefined) {
                            text1_2 = categorie.text1;
                        }
                        obj.push((React.createElement(Route, { key: 'route' + categorie.titel, exact: true, path: categorie.path, render: function () {
                                return (React.createElement(Training, { utitel: utitel, titel: "", text: text_2, text1: text1_2, pics: categorie.pics }));
                            } })));
                    }
                }
            }
        };
        for (var _i = 0, menu_1 = menu; _i < menu_1.length; _i++) {
            var categorie = menu_1[_i];
            _loop_1(categorie);
        }
        return obj;
    };
    return Main;
}(React.Component));
export default Main;
//# sourceMappingURL=Main.js.map
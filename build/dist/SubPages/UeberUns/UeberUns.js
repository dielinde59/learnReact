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
import pic from '../../images/Ueberuns1.jpg';
import pic1 from '../../images/Ueberuns2.jpg';
import '../../Main.scss';
var UeberUns = /** @class */ (function (_super) {
    __extends(UeberUns, _super);
    function UeberUns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UeberUns.prototype.render = function () {
        // let test = { titel: 'hallo' };
        // const test3 = test.titel;
        // test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        /*     const picStyle = {
              width: "80%",
            } */
        return (React.createElement(Layout, { className: 'srcontainer' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("div", { className: 'titlegross' }, "\u00DCber uns"),
                    React.createElement("br", null))),
            React.createElement(Row, null,
                React.createElement(Col, { span: 18 },
                    React.createElement("div", { className: 'citeBox' },
                        React.createElement("p", null, "Hunde faszinierten mich schon von klein auf. Als vor einigen Jahren die beiden Mischlinge Banya und \u00D6rd\u00F6g in mein Leben traten, wollte ich bei meinen ersten eigenen Hunden auf keinen Fall Fehler machen. Ich ging also regelm\u00E4\u00DFig in die Hundeschule, deckte mich mit Fachliteratur ein und nahm an einer Vielzahl von Kursen, Seminaren und Fachvortr\u00E4gen diverser Hundetrainer und namhafter Hundeexperten teil. Nicht alles, was mir dabei begegnete, war f\u00FCr mich stimmig. Starkzwangmethoden lehne ich rigoros ab, ich halte aber auch wenig davon, den Hund mit einem Berg von Leckerchen buchst\u00E4blich \u201Ean der Nase herumzuf\u00FChren\u201C. Dann hatte ich das gro\u00DFe Gl\u00FCck, auf den Schweizer Hundeexperten Hans Schlegel zu sto\u00DFen. Er begeisterte mich bereits in meinem ersten Seminar bei ihm. Sein klarer, einfacher und vor allem herzlicher Umgang mit dem Partner Hund war die Antwort auf alle meine offenen Fragen und best\u00E4tigte mich darin, mir endlich meinen langgehegten Wunsch zu erf\u00FCllen und Mensch und Hund dabei zu helfen, auf der Basis einer vertrauens- und respektvollen Beziehung zu einem wirklichen Team zusammenzuwachsen, das v\u00F6llig stressfrei jede Alltagssituation meistert."),
                        React.createElement("p", null, "Banya und \u00D6rd\u00F6g unterst\u00FCtzen mich tagt\u00E4glich bei dieser wundervollen Arbeit. Hunde sind unsere besten Lehrmeister, die uns konsequent und best\u00E4ndig jede emotionale Schw\u00E4che aufzeigen. Meinen beiden Lausern an dieser Stelle vielen Dank!"),
                        React.createElement("p", null, "Im Sommer 2015 musste auch ich zur Pr\u00FCfung gem\u00E4\u00DF der 2014 in Kraft getretenen Erg\u00E4nzung des Tierschutzgesetzes \u00A711 antreten, nach der alle Hundetrainer, die \u201Egewerbsm\u00E4\u00DFig Hunde f\u00FCr Dritte trainieren oder die Ausbildung der Hunde anleiten\u201C die Erlaubnis der zust\u00E4ndigen Beh\u00F6rde ben\u00F6tigen. Sowohl die theoretische, m\u00FCndliche und fachpraktische Pr\u00FCfung, die durch das Veterin\u00E4ramt und eine externe Sachverst\u00E4ndige am Landratsamt Traunstein abgehalten wurden, als auch die \u00DCberpr\u00FCfung von Gruppenstunden bei einer Vor-Ort-Kontrolle habe ich auf Anhieb erfolgreich bestanden und somit die offizielle Erlaubnis nach \u00A711 Abs.1 Satz 1 Nr. 8 erhalten."),
                        React.createElement("p", null, "Eben in dieser Zeit, nach Absolvieren des ersten Pr\u00FCfungsteils, ist \u00D6rd\u00F6g pl\u00F6tzlich und unerwartet von dieser Welt gegangen\u2026 Konrad Lorenz schreibt \u201EEs fehlt mir die Ausdrucksm\u00F6glichkeit, um zu beschreiben, wie sehr mir dieser Hund abgeht...\u201C Um Banya und mich wieder in Schwung zu bringen, ist einige Monate sp\u00E4ter Murphy bei uns eingezogen. Der zu der Zeit ca. 1,5-j\u00E4hrige Mischlingsr\u00FCde ist der beste \u201ENachwuchslauser\u201C, den wir uns h\u00E4tten w\u00FCnschen k\u00F6nnen. Er hat sich mit viel Feingef\u00FChl seinen Platz in unseren Herzen erobert. Vielen Dank daf\u00FCr!"))),
                React.createElement(Col, { span: 10, lg: { span: 6 } },
                    React.createElement("img", { style: { padding: "10px 0", marginTop: "5px" }, className: 'image', src: pic, alt: 'bild' }),
                    React.createElement(Row, null,
                        React.createElement("img", { style: { padding: "10px 0", marginTop: "5px" }, className: 'image', src: pic1, alt: 'bild' }))))));
    };
    return UeberUns;
}(React.Component));
export default UeberUns;
//# sourceMappingURL=UeberUns.js.map
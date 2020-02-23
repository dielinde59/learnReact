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
// import pic from '../../images/lauser.jpg';
// import pic1 from {this:props.foto1}
// import pic2 from {this:props.foto2}
import '../../Main.scss';
var AGBs = /** @class */ (function (_super) {
    __extends(AGBs, _super);
    function AGBs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AGBs.prototype.render = function () {
        // let test = { titel: 'hallo' };
        // const test3 = test.titel;
        // test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        // tslint:disable-next-line:no-console
        console.log("agbs page");
        return (React.createElement(Layout, { className: 'container' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("div", { className: 'titlegross' }, "Allgemeine Gesch\u00E4ftsbedingungen"))),
            React.createElement(Row, null,
                React.createElement(Col, { xl: { span: 25 }, xxl: { span: 35 } },
                    React.createElement(Row, { type: 'flex' },
                        React.createElement("br", null),
                        React.createElement("div", { className: 'citeBox' },
                            React.createElement("ol", null,
                                React.createElement("li", null, "Die Hundeschule Hundefreu(n)de \u2013 Monika Frei \u00FCbernimmt keinerlei Haftung f\u00FCr Personen-, Sach- oder Verm\u00F6genssch\u00E4den, die dem Kunden, seinem Hund oder Begleitpersonen w\u00E4hrend der Trainingsstunden entstehen. Einzige Ausnahme f\u00FCr den Haftungsausschluss w\u00E4re vors\u00E4tzliches oder grob fahrl\u00E4ssiges Handeln."),
                                React.createElement("li", null, "F\u00FCr jeden teilnehmenden Hund muss eine Tierhalterhaftpflichtversicherung bestehen, die f\u00FCr Sch\u00E4den an anderen Hunden sowie f\u00FCr jegliche Personen-, Sach- oder Verm\u00F6genssch\u00E4den haftet."),
                                React.createElement("li", null, "Der F\u00FChrer des Hundes bleibt w\u00E4hrend der gesamten Trainingsstunden als Tierhalter- bzw. Tieraufseher aufsichtspflichtig und haftet f\u00FCr die von ihm oder seinem Hund verursachten Sch\u00E4den auch wenn er auf Weisung des Trainers handelt."),
                                React.createElement("li", null, "Kinder unter 16 Jahren d\u00FCrfen nur in Begleitung und unter Aufsicht eines Erziehungsberechtigten teilnehmen. Die Teilnahme erfolgt auf eigenes Risiko des Erziehungsberechtigten."),
                                React.createElement("li", null, "F\u00FCr jeden teilnehmenden Hund muss ein altersgem\u00E4\u00DFer und zeitlich g\u00FCltiger Impfschutz bestehen. Zur \u00DCberpr\u00FCfung kann Einsicht in den Impfausweis verlangt werden."),
                                React.createElement("li", null, "Jegliche Krankheiten sowie Krankheitsanzeichen des Hundes m\u00FCssen der Hundeschule unverz\u00FCglich und vor Trainingsbeginn gemeldet werden, um ein Ansteckungsrisiko ausschlie\u00DFen sowie bei Hunden mit Handicap das Training entsprechend anpassen zu k\u00F6nnen."),
                                React.createElement("li", null, "Die L\u00E4ufigkeit einer H\u00FCndin sowie jegliche Verhaltensauff\u00E4lligkeiten des Hundes, die das Training beeinflussen k\u00F6nnten, sind der Hundeschule unverz\u00FCglich und vor Trainingsbeginn mitzuteilen."),
                                React.createElement("li", null, "Der Hundehalter ist verpflichtet, die Ausstattung seines Hundes (Leine, Halsband, Geschirr, ggf. Maulkorb etc.) vor Trainingsbeginn auf ordnungsgem\u00E4\u00DFen Zustand zu \u00FCberpr\u00FCfen. Die Verwendung von tierschutzwidrigem Zubeh\u00F6r (z. B. Stachelhalsband usw.) ist verboten."),
                                React.createElement("li", null, "Bei unzumutbaren Witterungsbedingungen sowie Gefahr f\u00FCr Hund und Halter kann das Training seitens Hundeschule kurzfristig abgesagt bzw. abgebrochen werden.  Den Anweisungen des Trainers ist Folge zu leisten."),
                                React.createElement("li", null, "Die Unwirksamkeit einzelner Bedingungen hat nicht die Unwirksamkeit der gesamten Gesch\u00E4ftsbedingungen zur Folge."))))))));
    };
    return AGBs;
}(React.Component));
export default AGBs;
//# sourceMappingURL=AGBs.js.map
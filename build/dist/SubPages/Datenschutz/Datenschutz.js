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
var Datenschutz = /** @class */ (function (_super) {
    __extends(Datenschutz, _super);
    function Datenschutz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Datenschutz.prototype.render = function () {
        // let test = { titel: 'hallo' };
        // const test3 = test.titel;
        // test = test;
        // const ageX10 = this.props.age ? this.props.age * 10 : 0;
        // tslint:disable-next-line:no-console
        console.log("agbs page");
        return (React.createElement(Layout, { className: 'container' },
            React.createElement(Row, { type: 'flex', justify: "center" },
                React.createElement(Col, { className: 'center', span: 24 },
                    React.createElement("div", { className: 'titlegross' }, "Datenschutzerkl\u00E4rung"))),
            React.createElement(Row, null,
                React.createElement(Col, { xl: { span: 25 }, xxl: { span: 35 } },
                    React.createElement(Row, { type: 'flex' },
                        React.createElement("br", null),
                        React.createElement("div", { className: 'citeBox' },
                            React.createElement("p", null,
                                "Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:",
                                React.createElement("br", null),
                                "Hundefreu(n)de",
                                React.createElement("br", null),
                                "Monika Frei",
                                React.createElement("br", null),
                                "Sch\u00F6nreit 1",
                                React.createElement("br", null),
                                "83308 Trostberg"),
                            React.createElement("br", null),
                            React.createElement("h3", { className: 'titleleft' }, "Ihre Betroffenenrechte"),
                            React.createElement("p", null, "Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten k\u00F6nnen Sie jederzeit folgende Rechte aus\u00FCben:"),
                            React.createElement("ol", null,
                                React.createElement("li", null, "Auskunft \u00FCber Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),"),
                                React.createElement("li", null, "Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO), "),
                                React.createElement("li", null, "L\u00F6schung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),"),
                                React.createElement("li", null, "Einschr\u00E4nkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht l\u00F6schen d\u00FCrfen (Art. 18 DSGVO),"),
                                React.createElement("li", null, "Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und"),
                                React.createElement("li", null, "Daten\u00FCbertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO). ")),
                            React.createElement("p", null, "Sofern Sie uns eine Einwilligung erteilt haben, k\u00F6nnen Sie diese jederzeit mit Wirkung f\u00FCr die Zukunft widerrufen."),
                            React.createElement("p", null, "Sie k\u00F6nnen sich jederzeit mit einer Beschwerde an eine Aufsichtsbeh\u00F6rde wenden, z. B. an die zust\u00E4ndige Aufsichtsbeh\u00F6rde des Bundeslands Ihres Wohnsitzes oder an die f\u00FCr uns als verantwortliche Stelle zust\u00E4ndige Beh\u00F6rde."),
                            React.createElement("p", null,
                                "Eine Liste der Aufsichtsbeh\u00F6rden (f\u00FCr den nicht\u00F6ffentlichen Bereich) mit Anschrift finden Sie unter:",
                                React.createElement("p", null),
                                React.createElement("p", { className: 'linkklein' },
                                    React.createElement("a", { href: 'https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html', target: "_blank" }, "https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"))),
                            React.createElement("br", null),
                            React.createElement("h3", { className: 'titlegrossleft' }, "Verwendung von Google Maps"),
                            React.createElement("h3", { className: 'titleleft' }, "Art und Zweck der Verarbeitung:"),
                            React.createElement("p", null, "Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend \u201EGoogle\u201C) betrieben. Dadurch k\u00F6nnen wir Ihnen interaktive Karten direkt in der Webseite anzeigen und erm\u00F6glichen Ihnen die komfortable Nutzung der Karten-Funktion."),
                            React.createElement("p", null, "N\u00E4here Informationen \u00FCber die Datenverarbeitung durch Google k\u00F6nnen Sie den Google-Datenschutzhinweisen entnehmen. Dort k\u00F6nnen Sie im Datenschutzcenter auch Ihre pers\u00F6nlichen Datenschutz-Einstellungen ver\u00E4ndern."),
                            React.createElement("p", null, "Ausf\u00FChrliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie hier."),
                            React.createElement("br", null),
                            React.createElement("h3", { className: 'titleleft' }, "Rechtsgrundlage:"),
                            React.createElement("p", null, "Rechtsgrundlage f\u00FCr die Einbindung von Google Maps und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)."),
                            React.createElement("br", null),
                            React.createElement("h3", { className: 'titleleft' }, "Empf\u00E4nger:"),
                            React.createElement("p", null, "Durch den Besuch der Webseite erh\u00E4lt Google Informationen, dass Sie die entsprechende Unterseite unserer Webseite aufgerufen haben. Dies erfolgt unabh\u00E4ngig davon, ob Google ein Nutzerkonto bereitstellt, \u00FCber das Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet."),
                            React.createElement("p", null, "Wenn Sie die Zuordnung in Ihrem Profil bei Google nicht w\u00FCnschen, m\u00FCssen Sie sich vor Aktivierung des Buttons bei Google ausloggen. Google speichert Ihre Daten als Nutzungsprofile und nutzt sie f\u00FCr Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter Gestaltung seiner Webseite. Eine solche Auswertung erfolgt insbesondere (selbst f\u00FCr nicht eingeloggte Nutzer) zur Erbringung bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks \u00FCber Ihre Aktivit\u00E4ten auf unserer Webseite zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Aus\u00FCbung dessen an Google richten m\u00FCssen."),
                            React.createElement("br", null),
                            React.createElement("h3", { className: 'titleleft' }, "Speicherdauer:"),
                            React.createElement("p", null, "Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Maps."),
                            React.createElement("br", null),
                            React.createElement("h3", { className: 'titlegrossleft' }, "\u00C4nderung unserer Datenschutzbestimmungen"),
                            React.createElement("p", null, "Wir behalten uns vor, diese Datenschutzerkl\u00E4rung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um \u00C4nderungen unserer Leistungen in der Datenschutzerkl\u00E4rung umzusetzen, z.B. bei der Einf\u00FChrung neuer Services. F\u00FCr Ihren erneuten Besuch gilt dann die neue Datenschutzerkl\u00E4rung."),
                            React.createElement("br", null),
                            React.createElement("h3", { className: 'titlegrossleft' }, "Fragen an den Datenschutzbeauftragten"),
                            React.createElement("p", null,
                                "Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die f\u00FCr den Datenschutz verantwortliche Person in unserer Organisation:",
                                React.createElement("br", null),
                                "Hundefreu(n)de",
                                React.createElement("br", null),
                                " Monika Frei",
                                React.createElement("br", null),
                                "Sch\u00F6nreit 1",
                                React.createElement("br", null),
                                "83308 Trostberg",
                                React.createElement("br", null),
                                "E-Mail: info@hundefreu-n-de.de "),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement("p", null, "Die Datenschutzerkl\u00E4rung wurde mithilfe der activeMind AG erstellt, den Experten f\u00FCr externe Datenschutzbeauftragte (Version #2019-04-10)."),
                            React.createElement("br", null),
                            React.createElement("br", null)))))));
    };
    return Datenschutz;
}(React.Component));
export default Datenschutz;
//# sourceMappingURL=Datenschutz.js.map
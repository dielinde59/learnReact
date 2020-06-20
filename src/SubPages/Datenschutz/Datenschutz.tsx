import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import '../../Main.scss';

// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  age?: number;
  pics?: string[];
}



class Datenschutz extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;
    // tslint:disable-next-line:no-console
    console.log("agbs page")
    return (
        <Layout className='container'>
          <Row type='flex' justify="center">
            <Col className='center' span={24}>
              <div className='titlegross'>Datenschutzerklärung</div>
            </Col>
          </Row>

          <Row>
            <Col xl={{ span: 25 }} xxl={{ span: 35 }}>
              <Row type='flex' >
  
              <br />
  
                  <div className='citeBox'>
                  <p>
                  Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                  <br/>
                  Hundefreu(n)de 
                  <br/>
                  Monika Frei 
                  <br/>
                  Schönreit 1 
                  <br/>
                  83308 Trostberg
                  </p>
                  <br/>
                  <h3 className='titleleft'>Ihre Betroffenenrechte</h3>
                  <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
                  <ol>
                  <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
                  <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO), </li>
                  <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                  <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                  <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                  <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO). </li>
                  </ol>
                  <p>
                  Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                  </p>
                  <p>
                  Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
                   </p>
                  <p>
                  Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:<p/><p className='linkklein'><a href='https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html' target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a></p>
                  </p>
                  <br/>
                  <h3 className='titlegrossleft'>Verwendung von Google Maps</h3>
                  <h3 className='titleleft'>Art und Zweck der Verarbeitung:</h3>
                  <p>
                  Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google“) betrieben. Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.
                  </p>
                  <p>
                  Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.
                  </p>
                  <p>
                  Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie hier.
                  </p>
                  <br/>
                  <h3 className='titleleft'>Rechtsgrundlage:</h3>
                  <p>
                  Rechtsgrundlage für die Einbindung von Google Maps und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                  </p>
                  <br/>
                  <h3 className='titleleft'>Empfänger:</h3>
                  <p>
                  Durch den Besuch der Webseite erhält Google Informationen, dass Sie die entsprechende Unterseite unserer Webseite aufgerufen haben. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet.
                  </p>
                  <p>Wenn Sie die Zuordnung in Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons bei Google ausloggen. Google speichert Ihre Daten als Nutzungsprofile und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter Gestaltung seiner Webseite. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Webseite zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google richten müssen.</p>
                  <br/>
                  <h3 className='titleleft'>Speicherdauer:</h3>
                  <p>Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Maps.</p>
                  <br/>
                  <h3 className='titlegrossleft'>Änderung unserer Datenschutzbestimmungen</h3>
                  <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
                  <br/>
                  <h3 className='titlegrossleft'>Fragen an den Datenschutzbeauftragten</h3>
                  <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:<br/>Hundefreu(n)de<br/>Monika Frei<br/>Schönreit 1<br/>83308 Trostberg<br/>E-Mail: info@hundefreu-n-de.de </p>
                  <br/>
                  <br/>
                  <br/>
                  <p>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für externe Datenschutzbeauftragte (Version #2019-04-10).</p>
                  <br/>
                  <br/>
                  </div>
              </Row>
            </Col>
          </Row>
        </Layout>
      );
  }
}



export default Datenschutz;
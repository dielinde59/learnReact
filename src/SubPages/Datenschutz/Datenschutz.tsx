import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { } from 'react-router';
// import pic from '../../images/lauser.jpg';
// import pic1 from {this:props.foto1}
// import pic2 from {this:props.foto2}
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
                  Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:<p/><p className='linkklein'><a href='https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html'  target="_blank">Text</a></p>
                  </p>
                  <p className='link'><a href='https://www.google.de/maps/place/Sch%C3%B6nreit+1,+83308+Trostberg/@48.0602285,12.5311945,17z/data=!3m1!4b1!4m5!3m4!1s0x4775df0ee6f5adb9:0xe930772648571d63!8m2!3d48.0602285!4d12.5333832?hl=de'  target="_blank">Anfahrt</a></p>
                  <p>
                  9. Bei unzumutbaren Witterungsbedingungen sowie Gefahr für Hund und Halter kann das Training seitens Hundeschule kurzfristig abgesagt bzw. abgebrochen werden.  Den Anweisungen des Trainers ist Folge zu leisten. 
                  </p>
                  <p>
                  10. Die Unwirksamkeit einzelner Bedingungen hat nicht die Unwirksamkeit der gesamten Geschäftsbedingungen zur Folge. 
                  </p>
                  </div>
             
  
              </Row>
            </Col>
  
            {/* <Col>
              <div className='colRight'>
                  <img className='image35' src={pic} alt='bild' />
              </div>
            </Col> */}
  
          </Row>
  
        </Layout>
      );
  }
}



export default Datenschutz;
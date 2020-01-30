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



class AGBs extends React.Component<IProps, object> {
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
              <div className='titlegross'>Allgemeine Geschäftsbedingungen</div>
            </Col>
          </Row>

          <Row>
            <Col xl={{ span: 25 }} xxl={{ span: 35 }}>
              <Row type='flex' >
  
              <br />
  
                  <div className='citeBox'>
                  <p>
                      1. Die Hundeschule Hundefreu(n)de – Monika Frei übernimmt keinerlei Haftung für Personen-, Sach- oder Vermögensschäden, die dem Kunden, seinem Hund oder Begleitpersonen während der Trainingsstunden entstehen. Einzige Ausnahme für den Haftungsausschluss wäre vorsätzliches oder grob fahrlässiges Handeln.
                  </p>
                  <p>
                      2. Für jeden teilnehmenden Hund muss eine Tierhalterhaftpflichtversicherung bestehen, die für Schäden an anderen Hunden sowie für jegliche Personen-, Sach- oder Vermögensschäden haftet.
                  </p>
                  <p>
                  3. Der Führer des Hundes bleibt während der gesamten Trainingsstunden als Tierhalter- bzw. Tieraufseher aufsichtspflichtig und haftet für die von ihm oder seinem Hund verursachten Schäden auch wenn er auf Weisung des Trainers handelt. 
                  </p>
                  <p>
                  4. Kinder unter 16 Jahren dürfen nur in Begleitung und unter Aufsicht eines Erziehungsberechtigten teilnehmen. Die Teilnahme erfolgt auf eigenes Risiko des Erziehungsberechtigten.
                  </p>
                  <p>
                  5. Für jeden teilnehmenden Hund muss ein altersgemäßer und zeitlich gültiger Impfschutz bestehen. Zur Überprüfung kann Einsicht in den Impfausweis verlangt werden.
                  </p>
                  <p>
                  6. Jegliche Krankheiten sowie Krankheitsanzeichen des Hundes müssen der Hundeschule unverzüglich und vor Trainingsbeginn gemeldet werden, um ein Ansteckungsrisiko ausschließen sowie bei Hunden mit Handicap das Training entsprechend anpassen zu können.  
                  </p>
                  <p>
                  7. Die Läufigkeit einer Hündin sowie jegliche Verhaltensauffälligkeiten des Hundes, die das Training beeinflussen könnten, sind der Hundeschule unverzüglich und vor Trainingsbeginn mitzuteilen. 
                   </p>
                  <p>
                  8. Der Hundehalter ist verpflichtet, die Ausstattung seines Hundes (Leine, Halsband, Geschirr, ggf. Maulkorb etc.) vor Trainingsbeginn auf ordnungsgemäßen Zustand zu überprüfen. Die Verwendung von tierschutzwidrigem Zubehör (z. B. Stachelhalsband usw.) ist verboten.
                  </p>
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



export default AGBs;
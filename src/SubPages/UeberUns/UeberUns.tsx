import { Col, Row } from 'antd';
import { Layout } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic from '../../images/Ueberuns1.jpg'
import pic1 from '../../images/Ueberuns2.jpg'
import './UeberUns.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class UeberUns extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;
    const picStyle = {
      width: "80%",
    }
    return (
      <Layout className='container'>
        <Row type='flex' justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>Über uns</h1>

          </Col>
        </Row>
        <Row>

          <Col span={16}>
            <Row type='flex' >
              <div className='citeBox'>
                <p>Hunde faszinierten mich schon von klein auf. Als vor einigen Jahren die beiden
                Mischlinge Banya und Ördög in mein Leben traten, wollte ich bei meinen ersten
              eigenen Hunden auf keinen Fall Fehler machen. Ich ging also regelmäßig in die
              Hundeschule, deckte mich mit Fachliteratur ein und nahm an einer Vielzahl von
              Kursen, Seminaren und Fachvorträgen diverser Hundetrainer und namhafter
              Hundeexperten teil. Nicht alles, was mir dabei begegnete, war für mich stimmig.
              Starkzwangmethoden lehne ich rigoros ab, ich halte aber auch wenig davon,
                den Hund mit einem Berg von Leckerchen buchstäblich „an der Nase herumzuführen“. </p>
               
                <p>Dann hatte ich das große Glück, auf den Schweizer Hundeexperten Hans Schlegel
                zu stoßen. Er begeisterte mich bereits in meinem ersten Seminar bei ihm.
                Sein klarer, einfacher und vor allem herzlicher Umgang mit dem Partner Hund
                war die Antwort auf alle meine offenen Fragen und bestätigte mich darin, mir
                endlich meinen langgehegten Wunsch zu erfüllen und Mensch und Hund dabei zu
                helfen, auf der Basis einer vertrauens- und respektvollen Beziehung zu einem
                wirklichen Team zusammenzuwachsen, das völlig stressfrei jede Alltagssituation
                meistert.</p>
                <p>
                  Banya und Ördög unterstützen mich tagtäglich bei dieser wundervollen Arbeit.
                  Hunde sind unsere besten Lehrmeister, die uns konsequent und beständig jede
                  emotionale Schwäche aufzeigen. Meinen beiden Lausern an dieser Stelle vielen Dank!
                </p>
                <p>
                Im Sommer 2015 musste auch ich zur Prüfung gemäß der 2014 in Kraft getretenen Ergänzung 
                des Tierschutzgesetzes §11 antreten, nach der alle Hundetrainer, die „gewerbsmäßig Hunde 
                für Dritte trainieren oder die Ausbildung der Hunde anleiten“ die Erlaubnis der zuständigen 
                Behörde benötigen. Sowohl die theoretische, mündliche und fachpraktische Prüfung, die durch 
                das Veterinäramt und eine externe Sachverständige am Landratsamt Traunstein abgehalten wurden, 
                als auch die Überprüfung von Gruppenstunden bei einer Vor-Ort-Kontrolle habe ich auf Anhieb erfolgreich 
                bestanden und somit die offizielle Erlaubnis nach §11 Abs.1 Satz 1 Nr. 8 erhalten. 
                </p>
                <p>
                Eben in dieser Zeit, nach Absolvieren des ersten Prüfungsteils, ist Ördög plötzlich und unerwartet 
                von dieser Welt gegangen… Konrad Lorenz schreibt „Es fehlt mir die Ausdrucksmöglichkeit, um zu beschreiben, 
                wie sehr mir dieser Hund abgeht...“ 
                </p>
                <p>
                Um Banya und mich wieder in Schwung zu bringen, ist einige Monate später Murphy bei uns eingezogen. Der zu 
                der Zeit ca. 1,5-jährige Mischlingsrüde ist der beste „Nachwuchslauser“, den wir uns hätten wünschen können. 
                Er hat sich mit viel Feingefühl seinen Platz in unseren Herzen erobert. Vielen Dank dafür!
                </p>

              </div>
            </Row>
          </Col>

          <Col span={8}>
            <div>
              <img className='image35' src={pic} alt='bild' style={picStyle} />
            </div>
            <div>
              <img className='image35' src={pic1} alt='bild' style={picStyle} />
            </div>
          </Col>
          <br />
                <br />
                <br />
                <br />                <br />
                <br />
                <br />
                <br />
        </Row>

      </Layout>
    );
  }
}

export default UeberUns;

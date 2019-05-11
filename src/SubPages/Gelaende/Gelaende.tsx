import { Col, Row } from 'antd';
import { Layout } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic from '../../images/Trainingsplatz.jpg'
import pic1 from '../../images/Stüberl4.jpg'
// import '../UeberUns/UeberUns.scss';
import './Gelaende.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class Gelaende extends React.Component<IProps, object> {
  public render() {

    const obj = {
      feld1: 'hallo',
      feld5: 4,
      irgendwas: undefined,
    }

    for(const sth in obj){
      if(sth!==undefined && sth ==='feld1'){
        obj[sth]= 'tschuesss'
      }
    }
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout className='container'>
        <Row type='flex' justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>Trainingsgelände</h1>
          </Col>
        </Row>
        <Row>
          <Col span={16}>

            <Row type='flex' >
              <div className='citeBox'>
                <p>Die Hundeschule Hundefreu(n)de – Monika Frei liegt im schönen Chiemgau in Oberbayern. Unser ca. 2.500 m² großer, eingezäunter Trainingsplatz befindet sich in ländlicher Umgebung mit freiem Bergblick und garantiert entspannte Atmosphäre für Hund und Halter.</p>
                <br />
                <p>An heißen Tagen steht selbstverständlich jedem ein entspanntes Schattenplätzchen zur Verfügung.</p>
                <br/>
                <p>Dank unserer Außenbeleuchtung können wir auch in der Winterzeit unsere regulären Trainingszeiten bis in die Abendstunden einhalten.</p>
                <br/>
                <p>In unserem gemütlichen „Stüberl“ nehmen wir uns Zeit für Theorie und Sachkundeunterricht, feiern aber auch gerne die Erfolge unserer Hundefreunde.</p>
                <br />
              </div>

            </Row>
          </Col>

          <Col span={8}>
            <Row justify="center">
              <div className='colRight'>
                <div>
                  <img className='image35' src={pic} alt='bild' style={{ width: "80%" }} />
                </div>
              </div>
            </Row>
            <Row>

              <div>
                <img className='image35' src={pic1} alt='bild' style={{ width: "80%" }} />
              </div>
            </Row>
          </Col>

        </Row>

      </Layout>
    );
  }
}

export default Gelaende;

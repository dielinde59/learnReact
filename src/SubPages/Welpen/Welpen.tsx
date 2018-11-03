import { Col, Row } from 'antd';
import { Layout } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic1 from '../../images/welpen1k.jpg'
import pic2 from '../../images/Welpen2k.jpg'

import './Welpen.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class Welpen extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout className='container'>
        <Row type={'flex'} justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>Grundausbildung</h1>

          </Col>
        </Row>
        <br/>
        <Row>

          <Col xl={{ span: 10 }} xxl={{ span: 15 }}>
            <Row type='flex' >
            <div className='citeBox1'> Welpen</div>
              <div className='citeBox1'>               
                <div>
                Nachdem der Welpe die ersten Wochen im neuen Zuhause verbracht und in dieser Zeit eine Beziehung zu seinen Menschen aufgebaut hat, wird er nun bei uns behutsam an Artgenossen und die restliche „große Welt“ herangeführt. In unseren Welpenstunden vermitteln wir ersten Grundbenimm im Umgang mit anderen Hunden und Menschen bei gleichzeitiger Festigung der Bindung zum Halter. Wir helfen, die Grundkommandos Sitz, Platz und Steh mit viel Spaß und Zuneigung sowie notwendiger Konsequenz zu erlernen. Beim kontrollierten Spiel mit Artgenossen ist meistens ein gut sozialisierter, erwachsener Hund anwesend. Zudem werden die Welpen nach Größe und Temperament aufeinander abgestimmt.
              </div>
              </div>
            </Row>
          </Col>




          <Col>
            <div className='colRight'>
              <div>
                <img className='image20' src={pic1} alt='bild' />
              </div>
              </div>
              <div className='colRight'>
              <div>
                <img className='image20' src={pic2} alt='bild' />
              </div>
              </div>
          </Col>

        </Row>

      </Layout>
    );
  }
}

export default Welpen;

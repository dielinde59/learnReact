import { Col, Row } from 'antd';
import { Layout } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic from '../../images/lauser.jpg'
// import '../UeberUns/UeberUns.scss';
import './Gelaende.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class Gelaende extends React.Component<IProps, object> {
  public render() {
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
        <table>
          <Col xl={{ span: 10 }} xxl={{ span: 12 }}>

            <Row type='flex' >
              <div className='citeBox'>
                <p>Hunde faszinierten mich schon von klein auf. Als vor einigen Jahren die beiden
                Mischlinge Banya und Ördög in mein Leben traten, wollte ich bei meinen ersten
                eigenen Hunden auf keinen Fall Fehler machen.</p>
                <br />
                <p>Dann hatte ich das große Glück, auf den Schweizer Hundeexperten Hans Schlegel
                zu stoßen. </p>
                <br />
                <p>
                  Banya und Ördög unterstützen mich tagtäglich bei dieser wundervollen Arbeit.
                  Hunde sind unsere besten Lehrmeister, die uns konsequent und beständig jede
                  emotionale Schwäche aufzeigen. Meinen beiden Lausern an dieser Stelle vielen Dank!
                </p>

              </div>

            </Row>
          </Col>

          <Col>
            <Row justify="center">
              <div className='colRight'>
                <div>
                  <img className='image35' src={pic} alt='bild' />
                </div>
                <div>
                  <img className='image35' src={pic} alt='bild' />
                </div>
              </div>
            </Row>
          </Col>

        </table>

      </Layout>
    );
  }
}

export default Gelaende;

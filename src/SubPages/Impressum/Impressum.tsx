import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic1 from '../../images/Aktuelles20161.jpg';
import pic2 from '../../images/Aktuelles20162.jpg';
import './Impressum.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class Impressum extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout className='container'>
        <Row type='flex' justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>Impressum</h1>

          </Col>
        </Row>
        <Row>
          <Col xl={{ span: 10 }} xxl={{ span: 15 }}>
            <Row type='flex' >
              <div className='citeBox'>
                <div>
                  <p>Aktuelle Themen.</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>Text2!</p>
                </div>
              </div>
            </Row>
          </Col>

          <Col>
            <div className='colRight'>
              <div>
                <img className='image35' src={pic1} alt='bild' />
              </div>
              <br />
              <div>
                <img className='image35' src={pic2} alt='bild' />
              </div>
            </div>
            <div className='colRight'>
              <div>
                <img className='image35' src={pic2} alt='bild' />
              </div>
            </div>
          </Col>

        </Row>
      </Layout>
    );
  }
}

export default Impressum;

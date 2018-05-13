import { Col, Row } from 'antd';
import { Layout } from 'antd';
import * as React from 'react';
import {} from 'react-router';
import './App.scss';
import pic from './images/main_center.jpg'
// const { Header, Footer, Sider, Content } = Layout;

class WelcomePage extends React.Component {
  public render() {
    let test = { titel: 'hallo' };
    const test3 = test.titel;
    test = test;


    return (
      <Layout className='container'>
        <Row type='flex' justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>Willkommen {test3}</h1>

          </Col>
        </Row>
        <Row type='flex' justify="center">
          <Col xs={{ span: 20 }} xxl={{ span: 16 }} >
            <img className='image' src={pic} alt='bild' />
            <div className='center citeBox'>
              <div>
                <p>Jede Beziehung zwischen einem Tier und einem Menschen</p>
                <p>ist eine einzigartige Brücke, gebaut, um nur diese beiden zu tragen.</p>
                <p>Deshalb muss sie auch von ihnen selbst erschaffen werden.</p> </div>
              <div className='author'>Suzanne Clothier</div>
            </div>
          </Col>

        </Row>
      </Layout>
    );
  }
}

export default WelcomePage;

import { Col, Row } from 'antd';
import { Layout } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic from '../../images/Startseite.jpg'
import './WelcomePage.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class WelcomePage extends React.Component<IProps, object> {
  public render() {
    let test = { titel: 'hallo' };
    const test3 = test.titel;
    test = test;
    const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout className='container'>
        <Row type='flex' justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>Willkommen {test3} {this.props.name} {ageX10}</h1>

          </Col>
        </Row>
        <hr style={{
          height: '20px',
          backgroundColor: 'rgb(255, 240, 203)', 
          border:'0'}}
          />
          

          
        <Row type='flex' justify="center"  >
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
        <hr style={{
          height: '30px',
          backgroundColor: 'rgb(255, 240, 203)', 
          border:'0'}}
          />
      </Layout>
    );
  }
}

export default WelcomePage;

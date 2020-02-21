import { Col, Row } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic from '../../images/Startseite.jpg';
import './WelcomePage.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class WelcomePage extends React.Component<IProps, object> {
  public render() {
    //  let test = { titel: 'hallo' };
    // const test3 = test.titel;
    //  test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <div className=''>
        <Row type='flex' justify="center">
          <Col className='text-center' span={20}>
          <div className='titlegross'>Willkommen </div>
          </Col>
        </Row>
        <hr style={{
          height: '15px',
          border: '0'
        }}
        />
        <Row type='flex' justify="center"  >
          <Col span={24}>
            <img id='welcomeIMG' src={pic} alt='bild' />
            <div className='text-center' style={{fontSize: "18px"}}>
              <p text-align="center">Jede Beziehung zwischen einem Tier und einem Menschen</p>
              <p>ist eine einzigartige Brücke, gebaut, um nur diese beiden zu tragen.</p>
              <p>Deshalb muss sie auch von ihnen selbst erschaffen werden.</p>
              <div className='author'>Suzanne Clothier</div>
            </div>
          </Col>

        </Row>
        <hr style={{
          height: '30px',
          backgroundColor: 'rgb(255, 240, 203)',
          border: '0'
        }}
        />
      </div>
    );
  }
}

export default WelcomePage;

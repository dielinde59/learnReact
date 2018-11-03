import { Col, Row } from 'antd';
import { Layout } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic1 from '../../images/welpen1k.jpg'
import pic2 from '../../images/Welpen2k.jpg'
// import pic1 from {this:props.foto1}
// import pic2 from {this:props.foto2}
import './Training.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  titel: string;
  foto1: string;
  foto2: string;
  text: string;
  age?: number;
  name: string;
}



class Training extends React.Component<IProps, object> {
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

          <Col xl={{ span: 15 }} xxl={{ span: 25 }}>
            <Row type='flex' >
            <div className='citeBox2'> {this.props.titel}</div>
            <br />
              <div className='citeBox2'>               
                <div>
                {this.props.text}
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

export default Training;

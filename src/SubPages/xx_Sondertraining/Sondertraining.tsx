import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic from '../../images/lauser.jpg';
import './Sondertraining.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class Sondertraining extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout className='container'>
        <Row type='flex' justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>Sondertraining</h1>

          </Col>
        </Row>
        <Row>

          <Col xl={{ span: 10 }} xxl={{ span: 15 }}>
            <Row type='flex' >
              <div className='citeBox'>
                <div>
                  <p>Sondertraining.</p>
                  <br />
                  <p>Text2!</p>
                </div>
              </div>
            </Row>
          </Col>

      
          <Col>
          <Row>
            <div className='colRight'>
              <div>
                <img className='image35' src={pic} alt='bild' />
              </div>
            </div>
            </Row>
            <Row>
            <div className='colRight'>
                <img className='image35' src={pic} alt='bild' />
            </div>
            </Row>
          </Col>

        </Row>

      </Layout>
    );
  }
}

export default Sondertraining;

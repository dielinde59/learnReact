import { Col, Row } from 'antd';
import { Layout } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic from '../../images/lauser.jpg'
import './Rueckblick.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class Rueckblick extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout className='container'>
        <Row type='flex' justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>Rückblick</h1>

          </Col>
        </Row>
        <table>

          <Col xl={{ span: 10 }} xxl={{ span: 15 }}>
            <Row type='flex' >
              <div className='citeBox'>
                <div>
                  <p>Rueckblick</p>
                  <br />
                  <p>Text2!</p>
                </div>
              </div>
            </Row>
          </Col>

          <Col>
            <div className='colRight'>
              <div>
                <img className='image35' src={pic} alt='bild' />
              </div>
            </div>
          </Col>

        </table>

      </Layout>
    );
  }
}

export default Rueckblick;

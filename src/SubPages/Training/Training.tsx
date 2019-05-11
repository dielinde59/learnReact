import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { } from 'react-router';
// import pic1 from {this:props.foto1}
// import pic2 from {this:props.foto2}
import './Training.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  utitel: string;
  titel: string;
  titel1?:string;
  text: string;
  text1: string;
  age?: number;
  pics?: string[];
}



class Training extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;
    // tslint:disable-next-line:no-console
    console.log("training page")
    return (
      <Layout className='container'>
        <Row type={'flex'} justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>{this.props.utitel}</h1>
          </Col>
        </Row>
        <br />
        <Row>

          <Col xl={{ span: 15 }} xxl={{ span: 25 }}>
            <Row type='flex' >
              <div className='title'> {this.props.titel}</div>
              <br />
              <div className='citeBox2'>
                <div>
                  {this.props.text}
                </div>

                <div>
                  {this.props.text1}
                </div>
              </div>
            </Row>
          </Col>



          {this.props.pics &&
          <Col>
            {
              this.props.pics.map((pic, index, array) => {
                // pic: aktuelles element aus Array
                // index: index des aktuelllem elements
                // array: auf rufender array in diesem fall: this.props.pics
                return (
                  <div key={this.props.titel+index} className='colRight'>
                    <div>
                      <img className='image20' src={pic} alt='bild' />
                    </div>

                  </div>
                )
              })
            } 
          </Col>
          }

        </Row>

      </Layout>
    );
  }
}



export default Training;

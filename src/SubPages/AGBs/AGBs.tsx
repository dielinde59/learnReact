import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { } from 'react-router';
// import pic1 from {this:props.foto1}
// import pic2 from {this:props.foto2}
import '../../Main.scss';

// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  utitel: string;
  titel: string;
  titel1?: string;
  text: string;
  text1: string;
  age?: number;
  pics?: string[];
}



class AGBs extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;
    // tslint:disable-next-line:no-console
    console.log("agbs page")
    return (
      <Layout className='container'>
          <Row type={'flex'} justify="center">
          <Col className='center' span={24} >
            <div className='titlegross'>{this.props.utitel}</div>
          </Col>
          </Row>
        <Row type={'flex'} justify="center">
          <Col span={24} lg={{ span: 18 }}>
            <div className='title citeBox'> {this.props.titel}</div>
            <br />
            <div className='citeBox'>
              <p>
                {this.props.text}
              </p>
              <p>
                {this.props.text1}
              </p>
            </div>
          </Col>

          {this.props.pics && 
            <Col span={24} lg={{ span: 6 }}>
              {
                this.props.pics.map((pic, index, array) => {
                  // pic: aktuelles element aus Array
                  // index: index des aktuelllem elements
                  // array: auf rufender array in diesem fall: this.props.pics
                  if (index === 0) {
                    return (
                      // <div key={this.props.titel+index} className='colRight'>
                      <img style={{ padding: "10px 0", marginTop: "58px" }} key={this.props.titel + index} className='image' src={pic} alt='bild' />
                      // </div>
                    )
                  } else {
                    return (
                      // <div key={this.props.titel+index} className='colRight'>
                      <img style={{ padding: "10px 0" }} key={this.props.titel + index} className='image' src={pic} alt='bild' />
                      // </div>
                    )
                  }
                })
              }
            </Col>
          }

        </Row>

      </Layout>
    );
  }
}



export default AGBs;
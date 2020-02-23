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
  titel1?:string;
  text: string;
  text1: string;
//  text2: string;
  age?: number;
  // ctext: string[];
  pics?: string[];
}



class BasicPage extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;
    // tslint:disable-next-line:no-console
    console.log("BasicPage")
    const cStr: string = this.props.text;
    const cStr1: string = this.props.text1;
    // "Welcome-to-Tutorialspoint.com";
    let retval: string[];
    (retval = cStr.split("#"));
    let retval1: string[];
    (retval1 = cStr1.split("#"));
     
     
    
    return (

      
      <Layout className='container'>
        <br />
        <Row type={'flex'} justify="center">
          <Col className='center' span={24}>
            <h1 style={{ color: '#D7A200' }}>{this.props.utitel}</h1>
          </Col>
        </Row>
        <br />

        <Row>
          
          <Col xl={{ span: 15 }} xxl={{ span: 25 }}>
            <Row type={'flex'}  >
              <div className='title'> {this.props.titel}</div>
              <br />
              <div className='citeBox2'>

                {retval &&
                  <Col>
                  {
                    retval.map((cval,index,array) => {
                    return (
                      <div  className='citebox2' key={cval+index}>
                        {cval}
                      </div>
                    )
                  })
                  }
                  </Col>
                  }

<br />

            
                {retval1 &&
                  <Col>
                  {
                    retval1.map((cval1,index,array) => {
                    return (
                      <div key={cval1+index}>
                        {cval1}

                      </div>
                    )
                  })
                  }
                  </Col>
                  }


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
                    <br />

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

export default BasicPage;

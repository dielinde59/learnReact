import { Layout, Row, Col} from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic  from '../../images/Anfahrt1.jpg';
import pic1 from '../../images/Anfahrt2.jpg';
// import './Kontakt.scss';
// const { Header, Footer, Sider, Content } = Layout;
import '../../Main.scss';

interface IProps {
  name: string;
  age?: number;
}

class Kontakt extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout className='scrcontainer'>
        <Row type='flex' justify="center">
          <Col className='center' span={24}>
            <div className='titlegross'> Kontakt / Anfahrt </div>
          </Col>
        </Row>

        <Row>
          <Col xl={{ span: 10 }} xxl={{ span: 15 }}>
            <Row type='flex' >

            <br />

                <div className='title citeBox'>
                  Hundeschule 
                </div>
                <div className='citeBox'> 
                  <p>Hundefreu(n)de - Monika Frei</p>
                  Schönreit 1
                  <br />
                  D-83308 Trostberg 
                  <br />
                  <br />
                  Tel.: +49 (0)178 7308459
                  <br />
                  info@hundefreu-n-de.de
                  <br />
                  www.hundefreu-n-de.de
                <br/>
                <br/>
                <p className='link'><a href='https://www.google.de/maps/place/Sch%C3%B6nreit+1,+83308+Trostberg/@48.0602285,12.5311945,17z/data=!3m1!4b1!4m5!3m4!1s0x4775df0ee6f5adb9:0xe930772648571d63!8m2!3d48.0602285!4d12.5333832?hl=de'  target="_blank">Hier Klicken um Google Maps zu öffnen</a></p>
                </div>


            </Row>

          </Col>

          <Col span={8}>
            <Row justify="center">
              <div className='colRight'>
                <div>
                  <img className='image35' src={pic} alt='bild' style={{ width: "80%" }} />
                </div>
              </div>
            </Row>
            <Row>

              <div>
                <img className='image35' src={pic1} alt='bild' style={{ width: "80%" }} />
              </div>
            </Row>
          </Col>

        </Row>

      </Layout>
    );
  }
}

export default Kontakt;

import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { } from 'react-router';
import pic from '../../images/Impressum01.jpg'
import pic1 from '../../images/Impressum02.jpg'
import '../../Main.scss';
// const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  name: string;
  age?: number;
}

class Impr extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout className='container'>
        <Row type='flex' justify="center">
        <Col className='center' span={24}>
            <div className='titlegross'>Impressum</div>
            <br />
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <div className='citeBox'>
              <p>Hundefreu(n)de</p> 
              <p>Monika Frei</p>
              <p>Schönreit 1</p>
              <p>D-83308 Trostberg</p>
              <br/>
              <p>Tel.: <u> +49 178 7308459</u></p>
              <p>E-Mail: <a href="mailto:info@hundefreu-n-de.de" className='linkklein'> <u>info@hundefreu-n-de.de</u></a></p>
              <br/>
              <p>Steuernummer: 163/218/11764</p>
              <br/>
              <p>Mit Urteil vom Mai 1998 "Haftung für Links" hat das Landgericht (LG) Hamburg entschieden, dass man durch die Anbringung eines Links, die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann - so das LG - nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert. Hiermit distanziere ich mich ausdrücklich von allen Inhalten aller gelinkten Seiten auf unserer Website und machen uns diese Inhalte nicht zu eigen. Diese Erklärung gilt für alle auf dieser Website angebrachten Links.</p>
            </div>
          </Col>

          <Col span={10} lg={{ span: 6 }}>
            {/* <Row> */}
              <img style={{ padding: "10px 0", marginTop: "5px" }} className='image' src={pic} alt='bild' />
            {/* </Row> */}

            <Row>
            <img style={{ padding: "10px 0", marginTop: "5px" }} className='image' src={pic1} alt='bild' />
              {/* <img className='image70' src={pic1} alt='bild' style={picStyle} /> */}
            </Row>

          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Impr;

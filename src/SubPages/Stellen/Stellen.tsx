import { Layout, Col, Row} from 'antd';
import * as React from 'react';
import { } from 'react-router';
import '../../Main.scss';

interface IProps {
  name: string;
  age?: number;
}

class Stellen extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout >
           <Row type='flex' justify="center">
          <Col className='center' span={22}>
          <div className='titlegross'> Kontakt / Anfahrt </div>
          <br/>
          <iframe style={{width: '100%', height: '150%' }}  src='./Aktuell.html' />
          </Col>
 </Row>


      </Layout>
    );
  }
}

export default Stellen;

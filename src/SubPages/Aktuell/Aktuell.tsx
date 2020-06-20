import { Layout, Col, Row} from 'antd';
import * as React from 'react';
import { } from 'react-router';
import '../../Main.scss';

interface IProps {
  name: string;
  age?: number;
}

class Aktuell extends React.Component<IProps, object> {
  public render() {
    // let test = { titel: 'hallo' };
    // const test3 = test.titel;
    // test = test;
    // const ageX10 = this.props.age ? this.props.age * 10 : 0;

    return (
      <Layout >
           <Row type='flex' justify="center">
             <Col className='center' span={22}>
              <iframe style={{width: '105%', height: '420%'}}  src='./Aktuell.html' />
            </Col>
          </Row>
      </Layout>
    );
  }
}

export default Aktuell;

import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { IMenuItem } from '../pageContent'
import '../../Main.scss';

interface IProps {
  title: string
  subtitel?: string
  eintraege: IMenuItem[]
}

class ListPage extends React.Component<IProps, object> {
  public render() {
    const { title, eintraege } = this.props;

    return (
      <Layout className='container'>

        <Row type={'flex'} justify="center">
          <Col className='center' span={24} >
            <div className='titlegross'> {title} </div>
          </Col>
        </Row>

        <Row className='container'>
          {eintraege.map((eintrag, index) => {
            return (

              <div key={`eintrag-${index}`} >
                <Row type={'flex'} justify="start">
                  <Col span={24} lg={{ span: 18 }}>
                    <div className='title citeBox'>{eintrag.titel}</div>
                    <div className='title citeBox'>{eintrag.subtitel}</div>
                    <br />
                    <div className='citeBox'>
                      <p> {eintrag.text} </p>
                      <p> {eintrag.text1}  </p>
                      <br />
                      {eintrag.pdf &&
                        <a href={eintrag.pdf} target="_blank">weiterlesen</a>
                      }
                    </div>
                  </Col>

                  <Col span={24} lg={{ span: 6 }}>
                    {eintrag.pics &&
                      <Row>
                        {eintrag.pics.map((pic, picIndex) => {
                          if (picIndex === 0) {
                            return (
                              <img key={`list:${title}picture#${picIndex}`} className='image70' src={pic} alt='bild' style={picIndex === 0 ? { padding: '0 10px 0 0 ' } : { padding: '0 10px 0 0', marginTop: "58px" }} />
                            )
                          } else {
                            return (
                              <img key={`list:${title}picture#${picIndex}`} className='image70' src={pic} alt='bild' style={picIndex === 0 ? { padding: '0 10px 0 0 ' } : { padding: '0 10px 0 0' }} />
                            )
                          }
                        }
                        )}
                      </Row>
                    }
                  </Col>
                </Row>
                <hr style={{ borderColor: 'black' }} />
              </div>
            )
          }
          )}
        </Row>
      </Layout>
    );
  }
}

export default ListPage;

import { Col, Row } from 'antd';
import * as React from 'react';
import {IMenuItem} from '../pageContent'
import '../../Main.scss';

interface IProps {
  title: string
  subtitel?: string
  eintraege: IMenuItem[]
}

class ListPage extends React.Component<IProps, object> {
  public render() {
    const {title,eintraege} = this.props; 

    return(
     
    <div style={{textAlign:'left',padding:'35px'}}>
        <h1 style={{textDecoration: "underline"}}>{title}</h1>
      <Row className='container'>
        <Col style={{width:'70%'}}>
        {eintraege.map((eintrag,index)=>{
          return(
            <div key={`eintrag-${index}`} >
              <h1>{eintrag.titel}</h1>
              <h2>{eintrag.subtitel}</h2>
              <div>
                {eintrag.text}
                {eintrag.text1}
                <br/>
                {eintrag.pdf &&
                  <a href={eintrag.pdf} target = "_blank">Mehr lesen</a>
                }

              </div>
              <br/>
              {eintrag.pics &&
                <Row>
                  {eintrag.pics.map((pic,picIndex)=>{
                    return(
                      <img key={ `list:${title}picture#${picIndex}` } className='image20' src={pic} alt='bild' />
                    )
                  })}
                </Row>
              }
              <hr style={{borderColor: 'black'}}/>
            </div>
          )
        }
        )}
        </Col>
      </Row>
      </div>
   
    )
}
}

export default ListPage;

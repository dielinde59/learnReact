// tslint:disable:jsx-no-lambda
import { Col, Layout, Menu, Row } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'rc-menu/assets/index.css';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { DogCarousel } from './components/DogCarousel';
import pic2 from './images/header-photo.jpg';
import pic1 from './images/header-text.jpg';
import pic3 from './images/Logo.jpg';
import './Main.scss';
// import Gelaende from './SubPages/Gelaende/Gelaende';
// import Welpen from './SubPages/Welpen/Welpen';
import Kontakt from './SubPages/Kontakt/Kontakt';
import { menu } from './SubPages/pageContent';
// import Rueckblick from './SubPages/Rueckblick/Rueckblick';
// import Training from './SubPages/Training/Training';
import BasicPage from './SubPages/BasicPage/BasicPage';
import UeberUns from './SubPages/UeberUns/UeberUns';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';
import ListPage from './SubPages/ListPage/ListPage'


const { Header, Sider, Content, Footer } = Layout;

class Main extends React.Component {
    constructor(props: any) {
        super(props);
        this.renderSider = this.renderSider.bind(this);
    }


    public renderSider() {
        return (
            < Sider className='background' >
                <Menu className='menubackground' defaultSelectedKeys={['1']} mode="vertical" >
                    {menu.map((categorie, index) => {
                        if (categorie.subroutes && !categorie.xy && categorie.subroutes.length > 0) {
                            return (
                                <SubMenu className='menubackground' title={<div>{categorie.titel} </div>} key={index}>
                                    {categorie.subroutes.map((item, itemIndex) => {
                                        return (
                                            // todo
                                            <Menu.Item className='menubackground' key={`${index}-${itemIndex}`}>
                                                {item.path &&
                                                    <Link to={item.path}>
                                                        <span>{item.titel}</span>
                                                    </Link>
                                                }
                                            </Menu.Item>
                                        )
                                    })}
                                </SubMenu>
                            )
                        }
                        // todo: maybe not neccessary ;)
                        else {
                            return (
                                // todo
                                <Menu.Item key={index}>
                                    {categorie.path &&
                                        <Link to={categorie.path}>
                                            <span>{categorie.titel}</span>
                                        </Link>
                                    }
                                </Menu.Item>
                            )
                        }
                    })}
                    {/* <Menu.Item key="6">
                        <Link to='/gelaende'>
                            <span>Trainingsgelände</span>
                        </Link>
                    </Menu.Item> */}
                    <Menu.Item className='menubackground' key="6">
                        <Link to='/kontakt'>
                            <span>Kontakt/Anfahrt</span>
                        </Link>
                    </Menu.Item>
 {/* 09.05.2019 Versuch, den weissen Fleck im menü wegzubekommen */}
{/*                     <hr style={{
                            backgroundColor: 'rgb(255, 240, 203)',
                            height: '50px',
                            border: '0',
                            margin: '0',
                            padding: '0',
                            width: '100%',
                        }} /> */}


                </Menu>
                <div id='Logo' />
                <Col xs={30}>
                <img src={pic3} alt='bild' style={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    // height: '100%',
                                    // display: 'inline-block',
                                    // width: 'auto',
                                }} />
                <div className='citeBox'>
                <a href="mailto:info@hundefreu-n-de.de" className='link'>info@hundefreu-n-de.de</a>
                </div>
                    </Col>
            </Sider>


        )
    }


    public render() {
        return (
            // tslint:disable-next-line:no-unused-expression
            <Router >
                <Layout className='layout background' style={{ minHeight: "100%" }}>
                    <Header className='header' style={{ width: '100%', padding: '0px', height: 'auto' }} >
                        <Row type={"flex"}
                            align={'middle'}
                            style={{
                                // width: '100%',
                                // display: 'inline-block',
                                maxHeight: '120px',
                                backgroundColor: 'white'
                            }}
                            justify={'center'}
                        >
                            <Col xs={6}>
                                <img src={pic2} alt='bild' style={{
                                    maxHeight: '100%',
                                    maxWidth: '100%'
                                    // height: '100%',
                                    // display: 'inline-block',
                                    // width: 'auto'
                                }} />
                            </Col>
                            <Col xs={18}>
                                <img src={pic1} alt='bild' style={{
                                    maxHeight: '100%',
                                    maxWidth: '100%'
                                }} />
                            </Col>
                        </Row>
                        <hr style={{
                            backgroundColor: 'rgb(255, 212, 45)',
                            height: '8px',
                            border: '0',
                            margin: '0',
                            padding: '0',
                            width: '100%',
                        }} />
                        <hr style={{
                            backgroundColor: 'rgb(255, 255, 255)',
                            height: '3px',
                            border: '0',
                            margin: '0',
                            padding: '0',
                            width: '100%',
                        }} />
                    </Header>

                    <Layout>

                        {this.renderSider()}

                        <Content className='background' style={{ overflow: 'hidden' }}>
                             { <Route
                                exact={true}
                                path='/willkommen'
                                render={() => {
                                    return(
                                        <div/>
                                    )}
                                }
                            /> }

                            <Route exact={true} path='/willkommen' render={
                                () => (
                                    <WelcomePage name='diete' />
                                )
                            } />

                            <Route exact={true} path='/ueberUns' render={
                                () => (
                                    <UeberUns name='' />
                                )
                            } />
                            {this.renderRoutes()}


                            {/* <Route exact={true} path='/gelaende' render={
                                () => (
                                    <Gelaende name='diete' />
                                )
                            } /> */}
                            <Route exact={true} path='/kontakt' render={
                                () => (
                                    <Kontakt name='diete' />
                                )
                            } />
                        </Content>

                    </Layout>
                    <Footer className='footer2'>
                        <DogCarousel />
                    </Footer>
                </Layout>

            </Router >
        );
    }
    public renderRoutes() {
        const obj: JSX.Element[] = [];
        for (const categorie of menu) {
            const utitel: string=categorie.titel;
            if (categorie.xy) {
                // mach das selbe nur mit 
                obj.push(
                    (
                        <Route key={'route' + categorie.titel} exact={true} path={categorie.path} render={
                            () => {
                                if(categorie.subroutes){
                                    return (
                                            <ListPage title={categorie.titel} subtitel={categorie.subtitel} eintraege={categorie.subroutes} />
                                    )
                                }
                                return 
                            }}
                        />
                    )
                )
            } else {
                if (categorie.subroutes && categorie.subroutes.length > 0) {
                    for (const item of categorie.subroutes) {
                        if (item.path !== undefined && item.text !== undefined) {
                            const text: string = item.text;
                            // const br: string = "\n \r \n \t";
                            if (item.text1 !==undefined) 
                            { 
                                // const nlocation =  item.text1.search('<br>');
                                // const nlength = item.text1.length;
                                // const text1:string  = item.text1.substring(0,nlocation);
                                // const teil2:string = item.text1.substring(nlocation + 4,nlength);
                               const text1:string = item.text1; 
                               // let text2:string = "";
                               // const ctext:string[] = item.ctext[];
                                // if(nlength > nlocation) { text2 = teil2} else {text2= "";};
                                obj.push(
                                    (
                                        <Route key={'route' + item.titel} exact={true} path={item.path} render={
                                            () => {
                                                return (
                                                    <BasicPage utitel={utitel} titel={item.titel} text={text} text1={text1} pics={item.pics} />
                                                )
                                            }}
                                        />
                                    )
                                )
    
                            }
                            else
                            {
                                obj.push(
                                    (
                                        <Route key={'route' + item.titel} exact={true} path={item.path} render={
                                            () => {
                                                return (
                                                    <BasicPage utitel={utitel} titel={item.titel} text={text} text1={""} pics={item.pics} />
                                                )
                                            }}
                                        />
                                    )
                                )
    
                            }
                        }
                    }
                }
                else 
                {
                    if (categorie.path !==undefined && categorie.text !==undefined){
                        const text: string = categorie.text;
                        let text1:string = "";
                        if (categorie.text1 !==undefined) 
                        { 
                            text1 = categorie.text1
                        }
                    obj.push(
                        (
                            <Route key={'route' + categorie.titel} exact={true} path={categorie.path} render={
                                () => {
                                    
                                        return (
                                            <BasicPage utitel={utitel} titel="" text={text} text1={text1} pics={categorie.pics} />
                                        )
                                    
                                }}
                            />
                        )
                    )
                }
                }
            }
        }
        return obj;
    }
}
export default Main; 
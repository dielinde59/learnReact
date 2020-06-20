// tslint:disable:jsx-no-lambda
import { Col, Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'rc-menu/assets/index.css';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { DogCarousel } from './components/DogCarousel';
//  Photo links
import pic1 from './images/header-text.jpg';
import pic2 from './images/header-photo.jpg';
import pic3 from './images/Logo.jpg';
import pic4 from './images/header-photo1.jpg';
import './Main.scss';
import AGBs from './SubPages/AGBs/AGBs';
import Datenschutz from './SubPages/Datenschutz/Datenschutz';
import Kontakt from './SubPages/Kontakt/Kontakt';
import ListPage from './SubPages/ListPage/ListPage';
import { menu } from './SubPages/pageContent';
import Training from './SubPages/Training/Training';
// import BasicPage from './SubPages/BasicPage/BasicPage';
import UeberUns from './SubPages/UeberUns/UeberUns';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';
import Aktuell from './SubPages/Aktuell/Aktuell';
import Impr from './SubPages/Impressum/Impressum'
// import Iframe from 'react-iframe'
// import HTMLDocument from '../node_modules/react-html-document';

// tslint:disable-next-line:no-var-requires
 // const data = require( process.env.PUBLIC_URL+"/json/test.json");



const { Sider, Content } = Layout;
interface IMainState {
    collapsed: boolean
}

class Main extends React.Component<any, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = { collapsed: false }
        this.renderSider = this.renderSider.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.setState({ collapsed: false })
    }
    public onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    }

    public renderSider() {
        return (
            < Sider
                className='background container'
                // collapsible /// diese zeile entfernen um normale seitenleist zu bekommen
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                style={{ padding: '60px 0', margin: '0 20px 0 0' }}
            // style ={{padding: '60px 0 120 0',margin:'0'}}
            >
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
                    {/* {<Menu.Item key="12">
                        <Link to='/Aktuell'>
                            <span>Aktuelles</span>
                        </Link>
                    </Menu.Item>} */}
                </Menu>
                <div id='Logo'>
                    <Col xs={30}>
                        <img src={pic3} alt='bild' style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            // height: '100%',
                            // display: 'inline-block',
                            // width: 'auto',
                        }} />

                        <div className='citeBox'>
                            <a href="http://hundefreu-n-de-forum.xobor.de/" target="_blank">hier geht's zum Forum</a>
                        </div>
                    </Col>
                </div>
            </Sider>


        )
    }


    public render() {
        // tslint:disable-next-line:variable-name ban-types
        // const test_data: String = JSON.parse(require(process.env.PUBLIC_URL+'/json/test.json')) 
        // JSON.stringify( data )// JSON.parse(data)
        return (
            // tslint:disable-next-line:no-unused-expression
            <div id='page'>
                <div id='header_and_content' className='layout background' style={{}}>

                    <div id='header' style={{}} >
                        <div style={{ display: 'flex' }}>
                            <div className='header_item' style={{ width: '12.5%', float: 'left' }}>
                                <img src={pic2} alt='bild' style={{

                                }} />
                            </div>
                            <div className='header_item' style={{ width: '75%' }}>
                                <img src={pic1} alt='bild' style={{}} />
                            </div>
                            <div className='header_item' style={{ width: '12.5%', float: 'right' }}>
                                <img src={pic4} alt='bild' style={{}} />
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <hr style={{
                                backgroundColor: 'rgb(255, 212, 45)',
                                height: '8px',
                                border: '0',
                                width: '100%',
                            }} />
                            <hr style={{
                                backgroundColor: 'rgb(255, 255, 255)',
                                height: '3px',
                                border: '0',
                                width: '100%',
                            }} />
                        </div>
                    </div>

                    <div>
                        <Router >
                            <div id='page_content'>
                                {this.renderSider()}
                                <Content className='background' style={{ overflow: 'hidden' }}>
                                    <Route exact={true} path='/willkommen' render={
                                        () => (
                                            <WelcomePage name='diete' />
                                        )
                                    } />

                                    <Route exact={true} path='/' render={
                                        () => (
                                            <WelcomePage name='diete' />
                                        )
                                    } />

                                    <Route exact={true} path='/ueberUns' render={
                                        () => (
                                            <UeberUns name='' />
                                        )
                                    } />
                                    <Route exact={true} path='/Aktuell' render={
                                        () => (
                                            <Aktuell name = '' />
                                           // <iframe style={{width: '90%', height: '100%'}}  src='./Aktuell.html' />
                                           // <Iframe url= './Aktuell.html' width='90%' height='100%' position='center' />
                                        )
                                    } />
                                    {this.renderRoutes()}

                                    <Route exact={true} path='/kontakt' render={
                                        () => (
                                            <Kontakt name='diete' />
                                        )
                                    } />
                                    <Route exact={true} path='/AGBs' render={
                                        () => (
                                            <AGBs />
                                        )
                                    } />
                                    <Route exact={true} path='/Datenschutz' render={
                                        () => (
                                            <Datenschutz />
                                        )
                                    } />
                                    <Route exact={true} path='/Impressum' render={
                                        () => (
                                            <Impr name='' />
                                        )
                                    } />
                                </Content>
                            </div>
                        </Router >

                    </div>
                </div>
                <div id='fixed_footer' style={{}}>
                    {/* <div style={{padding: '0'}}> */}
                    <DogCarousel />
                    {/* </div> */}
                </div>
            </div>
        );
    }
    public renderRoutes() {
        const obj: JSX.Element[] = [];
        for (const categorie of menu) {

            const utitel: string = categorie.titel;
            if (categorie.xy) {
                // mach das selbe nur mit 
                obj.push(
                    (
                        <Route key={'route' + categorie.titel} exact={true} path={categorie.path} render={
                            () => {
                                if (categorie.subroutes) {
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
                            if (item.text1 !== undefined) {
                                const text1: string = item.text1;
                                obj.push(
                                    (
                                        <Route key={'route' + item.titel} exact={true} path={item.path} render={
                                            () => {
                                                return (
                                                    <Training utitel={utitel} titel={item.titel} text={text} text1={text1} pics={item.pics} />
                                                )
                                            }}
                                        />
                                    )
                                )
                            }
                            else {
                                obj.push(
                                    (
                                        <Route key={'route' + item.titel} exact={true} path={item.path} render={
                                            () => {
                                                return (
                                                    <Training utitel={utitel} titel={item.titel} text={text} text1={""} pics={item.pics} />
                                                )
                                            }}
                                        />
                                    )
                                )

                            }
                        }
                    }
                }
                else {
                    if (categorie.path !== undefined && categorie.text !== undefined) {
                        const text: string = categorie.text;
                        let text1: string = "";
                        if (categorie.text1 !== undefined) {
                            text1 = categorie.text1
                        }
                        obj.push(
                            (
                                <Route key={'route' + categorie.titel} exact={true} path={categorie.path} render={
                                    () => {

                                        return (
                                            <Training utitel={utitel} titel="" text={text} text1={text1} pics={categorie.pics} />
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
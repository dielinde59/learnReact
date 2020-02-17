// tslint:disable:jsx-no-lambda
import { Col, Layout, Menu, Row } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'rc-menu/assets/index.css';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { DogCarousel } from './components/DogCarousel';
//  Photo links
import pic2 from './images/header-photo.jpg';
import pic4 from './images/header-photo1.jpg';
import pic1 from './images/header-text.jpg';
import pic3 from './images/Logo.jpg';
import './Main.scss';
import AGBs from './SubPages/AGBs/AGBs';
// import Gelaende from './SubPages/Gelaende/Gelaende';
// import Welpen from './SubPages/Welpen/Welpen';
import Kontakt from './SubPages/Kontakt/Kontakt';
import ListPage from './SubPages/ListPage/ListPage';
import { menu } from './SubPages/pageContent';
import Training from './SubPages/Training/Training';
// import BasicPage from './SubPages/BasicPage/BasicPage';
import UeberUns from './SubPages/UeberUns/UeberUns';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';
// import Impressum from './SubPages/Impressum/Impressum'

const { Header, Sider, Content } = Layout;
interface IMainState {
    collapsed: boolean
}

class Main extends React.Component<any,IMainState> {
    constructor(props: any) {
        super(props);
        this.state={collapsed: false}
        this.renderSider = this.renderSider.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.setState({collapsed: false})
    }
    public onCollapse = (collapsed:boolean) => {
        this.setState({ collapsed });
      }

    public renderSider() {
        return (
            < Sider
                className='background container'
                // collapsible /// diese zeile entfernen um normale seitenleist zu bekommen
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                style={{padding: '60px 0',margin:'0'}}
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
                    {/* <Menu.Item key="6">
                        <Link to='/gelaende'>
                            <span>Trainingsgelände</span>
                        </Link>
                    </Menu.Item> */}
                    {/* <Menu.Item className='menubackground' key="8">
                        <Link to='/kontakt'>
                            <span>Kontakt/Anfahrt</span>
                        </Link>
                    </Menu.Item> */}
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
                            <a href="mailto:info@hundefreu-n-de.de" className='link'>info@hundefreu-n-de.de</a>
                        </div>
                        <div className='citeBox'>
                        <a href="http://hundefreu-n-de-forum.xobor.de/" target="_blank">Forum</a> 
                        </div>         
                    </Col>
                </div>         
            </Sider>


        )
    }


    public render() {
        return (
            // tslint:disable-next-line:no-unused-expression
        <div id='page'>
            <Layout id='header_and_content' className='layout background' style={{}}>
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
                        <Col xs={3}style={{
                            backgroundColor: 'white'
                        }}>
                            <img src={pic2} alt='bild' style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                backgroundColor:'white' 
                                // height: '100%',
                                // display: 'inline-block',
                                // width: 'auto'
                            }} />
                        </Col>
                        <Col xs={18}style={{
                            backgroundColor: 'white'
                        }}>
                            <img src={pic1} alt='bild' style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                backgroundColor:'white' 
                            }} />
                        </Col>
                        <Col xs={3}style={{
                            backgroundColor: 'white'
                        }}>
                            <img src={pic4} alt='bild' style={{
                                padding: "5px" ,
                                float: 'right',
                                maxHeight: '80%',
                                maxWidth: '80%',
                                backgroundColor:'white' 
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
                    <Router >
                        <div id='page_content'>
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

                                        <Route exact={true} path='/willkommen'   render={
                                            () => (
                                                <WelcomePage name='diete' />
                                            )
                                        } />

                                        <Route exact={true} path='/'   render={
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
                                    </Content>
                        </div>
                    </Router >

                </Layout>
            </Layout>
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
                            if (item.text1 !==undefined) 
                            { 
                               const text1:string = item.text1; 
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
                            else
                            {
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
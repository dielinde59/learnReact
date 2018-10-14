// tslint:disable:jsx-no-lambda
import { Layout, Menu, Row, Col } from 'antd';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'rc-menu/assets/index.css';
import pic2 from './images/header-photo.jpg'
import pic1 from './images/header-text.jpg'
import './Main.scss';

import Aktuelles from './SubPages/Aktuelles/Aktuelles';
import Gelaende from './SubPages/Gelaende/Gelaende';
import Grundausbildung from './SubPages/Grundausbildung/Grundausbildung';
import Kontakt from './SubPages/Kontakt/Kontakt';
import Rueckblick from './SubPages/Rueckblick/Rueckblick';
import Sondertraining from './SubPages/Sondertraining/Sondertraining';
import UeberUns from './SubPages/UeberUns/UeberUns';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';
import SubMenu from 'antd/lib/menu/SubMenu';
import { DogCarousel } from './components/DogCarousel';


const { Header, Sider, Content, Footer } = Layout;

class Main extends React.Component {
    public render() {
        return (
            // tslint:disable-next-line:no-unused-expression
            <Router >
                <Layout className='layout background'>
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
                        < Sider className='background' >
                            
                            <Menu className='menubackground' defaultSelectedKeys={['1']} mode="vertical" >
                                <Menu.Item key="1" itemicon='./images/MenuIcon1.JPG'>
                                    <Link to='/willkommen'>
                                        <span>Willkommen</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to='/UeberUns'>
                                        <span>Über uns</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to='/aktuelles'>
                                        <span>Aktuelles</span>
                                    </Link>
                                </Menu.Item>

                                <SubMenu className='menubackground' border='0' title={<span>Grundausbildung</span>} key="4">
                                    <Menu.Item className='menubackground'  key="4-1">Welpen</Menu.Item>
                                    <Menu.Item className='menubackground' key="4-2">Junghunde</Menu.Item>
                                    <Menu.Item className='menubackground' key="4-3">Gemischte Gruppen</Menu.Item>

                                    <Menu.Item className='menubackground' key="4-4">
                                        <Link to='/aktuelles'>
                                            <span>Einzelstunden</span>
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item className='menubackground' key="4-5">
                                    <Link to='/aktuelles'>
                                    <span>Vorbereitung auf die Begleithundeprüfung</span>
                                      </Link>
                                    </Menu.Item>
                                </SubMenu>

                                <Menu.Item key="5">
                                    <Link to='/sondertraining'>
                                        <span>Sondertraining</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to='/gelaende'>
                                        <span>Trainingsgelände</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to='/kontakt'>
                                        <span>Kontakt/Anfahrt</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to='/rueckblick'>
                                        <span>Rückblick </span>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                            <div id='Logo' />
                          
                        </Sider>


                        <Content className='background' style={{ overflow: 'hidden' }}>
                            {/* { <Route
                                exact={true}
                                path='/willkommen'
                                render={() => {
                                    return(
                                        <div/>
                                    )}
                                }
                            /> } */}

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

                            <Route exact={true} path='/aktuelles' render={
                                () => (
                                    <Aktuelles name='' />
                                )
                            } />
                            <Route exact={true} path='/grundausbildung' render={
                                () => (
                                    <Grundausbildung name='diete' />
                                )
                            } />
                            <Route exact={true} path='/sondertraining' render={
                                () => (
                                    <Sondertraining name='diete' />
                                )
                            } />
                            <Route exact={true} path='/gelaende' render={
                                () => (
                                    <Gelaende name='diete' />
                                )
                            } />
                            <Route exact={true} path='/kontakt' render={
                                () => (
                                    <Kontakt name='diete' />
                                )
                            } />

                            <Route exact={true} path='/rueckblick' render={
                                () => (
                                    <Rueckblick name='diete' />
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
}
export default Main; 
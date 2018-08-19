// tslint:disable:jsx-no-lambda
import { Layout, Menu } from 'antd';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import Carousel from './components/Carousel';
import pic1 from './images/header.jpg'
import './Main.scss';

import Aktuelles from './SubPages/Aktuelles/Aktuelles';
import Gelaende from './SubPages/Gelaende/Gelaende';
import Grundausbildung from './SubPages/Grundausbildung/Grundausbildung';
import Kontakt from './SubPages/Kontakt/Kontakt';
import Rueckblick from './SubPages/Rueckblick/Rueckblick';
import Sondertraining from './SubPages/Sondertraining/Sondertraining';
import UeberUns from './SubPages/UeberUns/UeberUns';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';

const { Header, Sider, Content, Footer } = Layout;

class Main extends React.Component {
    public render() {
        return (
            <Router >
                <Layout className='layout background'>
                    <Header className='header' >
                        <img className='image' src={pic1} alt='bild' />
                    </Header>

                    <Layout>
                        <Sider className='background' >
                            <Menu defaultSelectedKeys={['1']} mode="inline" >
                                <Menu.Item key="1" >
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
                                <Menu.Item key="4">
                                    <Link to='/grundausbildung'>
                                        <span>Grundausbildung</span>
                                    </Link>
                                </Menu.Item>
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

                        <Content className='background'>
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
                        {<h1 className='background'>Fußzeile2</h1>}
                    </Footer>
                </Layout>

            </Router>
        );
    }
}
export default Main; 
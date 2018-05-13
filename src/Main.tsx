// tslint:disable:jsx-no-lambda
import { Layout, Menu } from 'antd';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './Main.scss';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';
const { Header, Sider, Content } = Layout;

class Main extends React.Component {
    public render() {
        return (
            <Router >
                <Layout className='layout background'>
                    <Sider className='background'>
                        <div id='Logo' />
                        <Menu defaultSelectedKeys={['1']} mode="inline">

                            <Menu.Item key="1">
                                <Link to='/willkommen'>
                                    <span>Willkommen</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to='/willkommen2'>
                                    <span>Willkommen age 870</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className='header' >
                            <h1 className='alignRight' id='title'>Hundefreu(n)de - Monika Frei</h1>
                            <h2 className='alignRight' id='subtitle'>Erziehung durch Beziehung</h2>
                        </Header>

                        <Content className='background'>

                            <Route
                                exact={true}
                                path='/'
                                render={() => {
                                    return(
                                        <div/>
                                    )}
                                }
                            />

                            <Route exact={true} path='/willkommen' render={
                                () => (
                                    <WelcomePage name='diete' />
                                )
                            } />

                            <Route exact={true} path='/willkommen2' render={
                                () => (
                                    <WelcomePage name='diete' age={87} />
                                )
                            } />


                        </Content>
                    </Layout>
                    {/* <Footer className='background'>Footer</Footer> */}
                </Layout>
            </Router>
        );
    }
}
export default Main; 
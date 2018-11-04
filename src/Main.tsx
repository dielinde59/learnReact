// tslint:disable:jsx-no-lambda
import { Col, Layout, Menu, Row } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'rc-menu/assets/index.css';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { DogCarousel } from './components/DogCarousel';
import pic2 from './images/header-photo.jpg';
import pic1 from './images/header-text.jpg';
import './Main.scss';
import Aktuelles from './SubPages/Aktuelles/Aktuelles';
import Gelaende from './SubPages/Gelaende/Gelaende';
// import Welpen from './SubPages/Welpen/Welpen';
import Kontakt from './SubPages/Kontakt/Kontakt';
import { menu } from './SubPages/pageContent';
import Rueckblick from './SubPages/Rueckblick/Rueckblick';
import Training from './SubPages/Training/Training';
// import Sondertraining from './SubPages/Sondertraining/Sondertraining';
import UeberUns from './SubPages/UeberUns/UeberUns';
import WelcomePage from './SubPages/WelcomePage/WelcomePage';


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
                    <Menu.Item key="1" itemicon={pic2} alt='bild'>
                        <Link style={{ height: '100%' }} to='/willkommen'>
                            <span >Willkommen</span>
                            {/* <div style={{marginTop: '50%' ,height: "50%", backgroundColor: 'white'}}>
                            <span >Willkommen</span>
                            </div> */}
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link style={{ height: '100%' }} to='/UeberUns'>
                            <span>Über uns</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/aktuelles'>
                            <span>Aktuelles</span>
                        </Link>
                    </Menu.Item>

                    {/* <SubMenu className='menubackground' border='0' title={<span>Grundausbildung</span>} key="4"> */}
                    {menu.map((categorie) => {
                        if (categorie.subroutes && categorie.subroutes.length > 0) {
                            return (
                                <SubMenu className='menubackground' title={<span>Grundausbildung</span>} key="4">
                                    {categorie.subroutes.map((item) => {
                                        return (
                                            // todo
                                            <Menu.Item className='menubackground' key="4-1">
                                                <Link to='/welpen'>
                                                    <span>Welpen</span>
                                                </Link>
                                                Welpen
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
                                <Menu.Item key="3">
                                    <Link to='/aktuelles'>
                                        <span>Aktuelles</span>
                                    </Link>
                                </Menu.Item>
                            )
                        }
                    })}

                    {/* <SubMenu className='menubackground' title={<span>Grundausbildung</span>} key="4">
                        <Menu.Item className='menubackground' key="4-1">
                            <Link to='/welpen'>
                                <span>Welpen</span>
                            </Link>
                            Welpen
                </Menu.Item>

                        <Menu.Item className='menubackground' key="4-2">
                            <Link to='/junghunde'>
                                <span>Junghunde</span>
                            </Link>
                            Junghunde
                </Menu.Item>
                        <Menu.Item className='menubackground' key="4-3">
                            <Link to='/gemischt'>
                                <span>Gemischte Gruppen</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item className='menubackground' key="4-4">
                            <Link to='/einzel'>
                                <span>Einzelstunden</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item className='menubackground' key="4-5">
                            <Link to='/begleit'>
                                <span>Vorbereitung auf die Begleithundeprüfung</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu className='menubackground' border='0' title={<span>Sondertraining</span>} key="5">
                        <Menu.Item className='menubackground' key="5-1">
                            <Link to='/obi'>
                                <span>Obedience</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item className='menubackground' key="5-2">
                            <Link to='/longieren'>
                                <span>Longierarbeit</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item className='menubackground' key="5-3">
                            <Link to='/stoebern'>
                                <span>Stöbern</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item className='menubackground' key="5-4">
                            <Link to='/stadt'>
                                <span>Stadt- und Spaziergänge</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item className='menubackground' key="5-5">
                            <Link to='/kurse'>
                                <span>Kurse externer Hundetrainer</span>
                            </Link>
                        </Menu.Item>

                    </SubMenu> */}
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
                    <Menu.Item className='menubackground' key="8">
                        <Link to='/rueckblick'>
                            <span>Rückblick </span>
                        </Link>
                    </Menu.Item>
                </Menu>
                <div id='Logo' />

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
                            {/* <Route exact={true} path={pages[0].path} render={
                                () => {
                                    return (
                                        <Training name={pages[0].name} titel={pages[0].titel} text={pages[0].text} pics={pages[0].pics} />
                                    )
                                }
                            } /> */}
                            {this.renderRoutes()}



                            {/* {pages.forEach(page => {
                                // tslint:disable-next-line:no-console
                                console.log(`rendering ${page.path}`)
                                return (
                                    <div>
                                        {
                                        // tslint:disable-next-line:no-console
                                        console.log(`in for Each ${page.path}`) 
                                        }  
                                        <Route exact={true} path={page.path} render={
                                            () => {
                                                return (
                                                    <Training name={page.name} titel={page.titel} text={page.text} pics={page.pics} />
                                                )
                                            }
                                        } />
                                    </div>
                                )
                            })} 
                            
                            <Route exact={true} path='/welpen' render={
                                () => (
                                    <Training name='' titel='Welpen' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Nachdem der Welpe die ersten Wochen im neuen Zuhause verbracht und in dieser Zeit eine Beziehung zu seinen Menschen aufgebaut hat, wird er nun bei uns behutsam an Artgenossen und die restliche „große Welt“ herangeführt. In unseren Welpenstunden vermitteln wir ersten Grundbenimm im Umgang mit anderen Hunden und Menschen bei gleichzeitiger Festigung der Bindung zum Halter. Wir helfen, die Grundkommandos Sitz, Platz und Steh mit viel Spaß und Zuneigung sowie notwendiger Konsequenz zu erlernen. Beim kontrollierten Spiel mit Artgenossen ist meistens ein gut sozialisierter, erwachsener Hund anwesend. Zudem werden die Welpen nach Größe und Temperament aufeinander abgestimmt.'
                                    />
                                )
                            } />


                            <Route exact={true} path='/gemischt' render={
                                () => (
                                    <Training name='' titel='Gemischte Gruppen' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Nach erfolgreicher erster Grundausbildung werden die bekannten Übungen intensiviert und der Schwierigkeitsgrad bei Konfrontationen und Ablenkungen erhöht. 
                                    Neben der Unterordnung (Fuß-Gehen, Sitz und Platz aus der Bewegung etc.) gibt es immer wieder Spielerisches wie Apportieren, Hürdenspringen u.a.
                                    Wir arbeiten mit maximal sechs Hunden pro Gruppe/Stunde, um genügend Zeit zu haben, uns der Probleme der einzelnen Mensch-Hund-Teams anzunehmen.'
                                    />
                                )
                            } />

                            <Route exact={true} path='/einzel' render={
                                () => (
                                    <Training name='' titel='Einzelstunden' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Bei Unsicherheiten seitens des Hundes oder Halters und bei speziellen Problemen bieten wir zudem individuelles Einzeltraining an – wenn gewünscht, auch gerne zu Hause beim Halter. Dabei schulen und stärken wir zunächst den Menschen in allen Problemsituationen und helfen ihm anschließend dabei, seinem Hund das Gelernte ruhig, gelassen und mit der nötigen Souveränität eines Rudelführers zu vermitteln.
                                    Nach dem Einzelunterricht empfiehlt sich eine Verfestigung unter Ablenkung in Gruppenstunden.
                                    Termine für Einzelstunden können jederzeit telefonisch oder per E-Mail vereinbart werden.'
                                    />
                                )
                            } />


                            <Route exact={true} path='/begleit' render={
                                () => (
                                    <Training name='' titel='Vorbereitung auf die Begleithundeprüfung' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Die Begleithundeprüfung ist in allen Vereinen des VDH eine Basisprüfung, in der der Gehorsam des Hundes und sein Verhalten in der Öffentlichkeit (z. B. beim Zusammentreffen mit Fußgängern, Joggern und Radfahrern) geprüft werden. Wir bauen zusammen mit dem Halter die einzelnen Prüfungselemente wie sauberes Fuß-Gehen an lockerer Leine und in Freifolge, präzises, schnelles Sitz und Platz aus der Bewegung, Abruf mit korrektem Vorsitzen, Verhalten in Menschengruppen, im Verkehr und gegenüber Artgenossen sukzessive auf, fördern die Konzentration von Hund und Halter, bereiten den Sachkundetest vor und besprechen die Fragebögen des theoretischer Prüfungsteils. Wir organisieren auf Wunsch den Startplatz für die Prüfung und begleiten Mensch und Hund bis zur (bestandenen) Prüfung.
                                    Wir arbeiten mit maximal vier Hunden pro Gruppe/Stunde, um jedes Team zum Erfolg zu führen.'
                                    />
                                )
                            } />

                            <Route exact={true} path='/obi' render={
                                () => (
                                    <Training name='' titel='Obedience' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Hinter dem englischen Wort für Gehorsam verbirgt sich eine Hundesportart, bei der es besonders auf die harmonische, schnelle und exakte Ausführung bestimmter Übungen eines eingespielten Mensch-Hund-Teams ankommt. Obedience wird gerne auch als die „Hohe Schule“ der Unterordnung bezeichnet und ist für jeden Hund geeignet, unabhängig von Alter und Größe. Neben dem Gehorsam des Hundes geht es auch um seine Sozialverträglichkeit anderen Menschen und Artgenossen gegenüber. In vielen Bereichen ähnelt Obedience mit seinen drei Prüfungsstufen dem Gehorsamsteil von Rettungshunde- und Schutzhundeprüfungen. Vergleichbar sind beispielsweise das Fuß-Gehen mit und ohne Leine, das Sitz, Platz und Steh aus der Bewegung, die Bleib-Übungen mit und ohne Sichtkontakt, das Abrufen, das Vorausschicken, das Apportieren und die Geruchsidentifikation aus mehreren Hölzern. Ein weiterer Bestandteil der Obedienceprüfungen ist die Distanzkontrolle, bei der der Hund in einem großen Abstand zu seinem Halter eine Reihe von Positionswechseln (Sitz, Platz, Steh) ausführen muss, ohne sich dabei von der Stelle bewegen zu dürfen. Im Gegensatz zum Schutzhundesport werden die Kommandos präziser und eleganter gearbeitet. Auf dem Prüfungsgelände geht es sehr viel leiser zu, es wird „weicher“ geführt und das Niveau ist, aus Sicht der Unterordnung, um einiges höher. Beim Obedience müssen die Übungen von Hund und Mensch nicht einfach nur ausgeführt werden, mit ihnen soll gleichzeitig Harmonie, Vertrauen und die Freude an der gemeinsamen Arbeit zum Ausdruck gebracht werden.'
                                    />
                                )
                            } />

                            <Route exact={true} path='/longieren' render={
                                () => (
                                    <Training name='' titel='Longierarbeit' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Richtig aufgebautes Longieren ersetzt unzählige einseitige Beschäftigungsformen und Auslastungsmodelle, die den Hund lediglich auf Trab halten. Durch das Dualführsystem, das von Hans Schlegel entwickelt wurde, wird der Hund nicht nur körperlich, sondern auch kopfmäßig sinnvoll ausgelastet, was zugleich die Beziehung zum Menschen fördert und das Umweltverhalten des Hundes positiv beeinflusst. Heute gilt die Pionierarbeit von Hans Schlegel weltweit als effizienteste Form der Therapie von verhaltensauffälligen Hunden; Familienhunde werden durch das Longieren zu stressfreien Partnern.
                                    Wir bauen das vom Experten gelernte, richtige Longieren individuell mit jedem Mensch-Hund-Team auf und bringen damit dem Hund bei, auf Distanz mit seinem Menschen zu kooperieren – eine vor allem auch im Alltag nahezu unverzichtbare Fähigkeit.'
                                    />
                                )
                            } />

                            <Route exact={true} path='/stoebern' render={
                                () => (
                                    <Training name='' titel='Stöbern' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Suchen und Stöbern, die sogenannte „Nasenarbeit“, ist eine wunderbare Beschäftigung für den Hund und seinen Halter, die beiden Freude macht und bei der der Hund auf artgerechte Weise seinen Suchtrieb ausleben kann. Bei dieser anspruchsvollen Aufgabe wird der Hund sowohl körperlich als auch geistig gefordert und ist somit auf ganz natürliche Weise ausgelastet. 
                                    Beim Stöbern geht es darum, dass der Hund eine Fläche nach vorher ausgelegten Gegenständen absucht. Der Hundeführer schickt den Hund dabei an die Stellen, an denen er noch nicht gesucht hat. Sobald der Hund einen Gegenstand gefunden hat, soll er diesen verweisen indem er sich davor ablegt. 
                                    Das Stöbern kann jeder Hund, egal welcher Rasse oder welchen Alters erlernen.'
                                    />
                                )
                            } />

                            <Route exact={true} path='/stadt' render={
                                () => (
                                    <Training name='' titel='Stadt- und Spaziergänge' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Mit Hilfe seines geschulten Halters soll der Hund lernen, mit Stresssituationen ruhig und gelassen umzugehen. Das richtige Verhalten im Straßenverkehr, in Geschäften, am Bahnhof usw. und Rücksichtnahme gegenüber Mitmenschen und anderen Tieren wie Katzen, Rehen, Hasen u.a. trainieren wir „live“ vor Ort bei gemeinsamen Spaziergängen in Stadt, Wald und Flur.'
                                    />
                                )
                            } />
                            <Route exact={true} path='/kurse' render={
                                () => (
                                    <Training name='' titel='Kurse externer Hundetrainer' foto1='../../images/welpen1k.jpg' foto2='../../images/welpen1k.jpg' 
                                    text='Wir laden immer wieder auswärtige Trainer und Hundeexperten ein, die bei uns in speziellen Seminaren ihre Fachgebiete und Trainingsmethoden vorstellen.
                                    Termine werden rechtzeitig hier angekündigt.'
                                    />
                                )
                            } /> 
                            
                            <Route exact={true} path='/sondertraining' render={
                                () => (
                                    <Sondertraining name='diete' />
                                )
                            } /> */}
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
    public renderRoutes() {
        const obj: JSX.Element[] = [];
        for (const categorie of menu) {
            if (categorie.subroutes && categorie.subroutes.length > 0) {
                for (const item of categorie.subroutes) {
                    if (item.path !== undefined && item.text !== undefined) {
                        const text: string = item.text;
                        obj.push(
                            (
                                <Route key={'route' + item.titel} exact={true} path={item.path} render={
                                    () => {
                                        return (
                                            <Training titel={item.titel} text={text} pics={item.pics} />
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
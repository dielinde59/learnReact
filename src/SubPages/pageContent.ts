
// export const pages = [
//     {
//         titel:'Junghunde',
//         pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg')],
//         text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
//         path: '/junghunde',
//     },
//     {
//         path: '/welpen',
//         titel:'Welpen',
//         pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
//         text: 'WelpenWelpenWelpenWelpenWelpenWelpenWelpenWelpenWelpenWelpen'
//     }
// ]

export interface IMenuItem {
    titel: string,
    subtitel?: string,
    pics?: string[],
    text?: string,
    path?: string,
    subroutes?: IMenuItem[],
    xy?:boolean,
    pdf?: string,
}



export const menu: IMenuItem[] = 
[
    {
        titel: "Willkommen",
        path: "/willkommen"
    },
    {
        titel: "Über uns",
        path: "/UeberUns"
    },
    {
        titel: "Aktuelles",
        path: "/aktuelles",
        xy: true,
        subroutes:[
            {
                titel:'Trainingsplan',
                subtitel:'ab November 2018',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Trainingsplan bitte hier ansehen.',
                pdf: './pdfs/p2.pdf'
            },
            {
                titel:'Stadtgang am Sonntag',
                text: 'entfällt am 11.11.2018',
            },
            {
                titel:'Nochmal Stadtgang am Sonntag',
                text: 'entfällt nicht am 11.11.2018',
            },
        ]

    },
    {
        titel: "Grundausbildung",
        subroutes:[

            {
                titel:'Welpen',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Nachdem der Welpe die ersten Wochen im neuen Zuhause verbracht und in dieser Zeit eine Beziehung zu seinen Menschen aufgebaut hat, wird er nun bei uns behutsam an Artgenossen und die restliche „große Welt“ herangeführt. In unseren Welpenstunden vermitteln wir ersten Grundbenimm im Umgang mit anderen Hunden und Menschen bei gleichzeitiger Festigung der Bindung zum Halter. Wir helfen, die Grundkommandos Sitz, Platz und Steh mit viel Spaß und Zuneigung sowie notwendiger Konsequenz zu erlernen. Beim kontrollierten Spiel mit Artgenossen ist meistens ein gut sozialisierter, erwachsener Hund anwesend. Zudem werden die Welpen nach Größe und Temperament aufeinander abgestimmt.',
                path: '/welpen',
            },
            {
                titel:'Junghunde',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                path: '/junghunde',
            },
            {
                titel:'Gemischte Gruppen',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Nach erfolgreicher erster Grundausbildung werden die bekannten Übungen intensiviert und der Schwierigkeitsgrad bei Konfrontationen und Ablenkungen erhöht. Neben der Unterordnung (Fuß-Gehen, Sitz und Platz aus der Bewegung etc.) gibt es immer wieder Spielerisches wie Apportieren, Hürdenspringen u.a. Wir arbeiten mit maximal sechs Hunden pro Gruppe/Stunde, um genügend Zeit zu haben, uns der Probleme der einzelnen Mensch-Hund-Teams anzunehmen.',
                path: '/gemischt',
            },
            {
                titel:'Einzeltraining',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Bei Unsicherheiten seitens des Hundes oder Halters und bei speziellen Problemen bieten wir zudem individuelles Einzeltraining an – wenn gewünscht, auch gerne zu Hause beim Halter. Dabei schulen und stärken wir zunächst den Menschen in allen Problemsituationen und helfen ihm anschließend dabei, seinem Hund das Gelernte ruhig, gelassen und mit der nötigen Souveränität eines Rudelführers zu vermitteln. Nach dem Einzelunterricht empfiehlt sich eine Verfestigung unter Ablenkung in Gruppenstunden. Termine für Einzelstunden können jederzeit telefonisch oder per E-Mail vereinbart werden.',
                path: '/einzel',
            },

            {
                titel:'Vorbereitung auf die Begleithundeprüfung',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Die Begleithundeprüfung ist in allen Vereinen des VDH eine Basisprüfung, in der der Gehorsam des Hundes und sein Verhalten in der Öffentlichkeit (z. B. beim Zusammentreffen mit Fußgängern, Joggern und Radfahrern) geprüft werden. Wir bauen zusammen mit dem Halter die einzelnen Prüfungselemente wie sauberes Fuß-Gehen an lockerer Leine und in Freifolge, präzises, schnelles Sitz und Platz aus der Bewegung, Abruf mit korrektem Vorsitzen, Verhalten in Menschengruppen, im Verkehr und gegenüber Artgenossen sukzessive auf, fördern die Konzentration von Hund und Halter, bereiten den Sachkundetest vor und besprechen die Fragebögen des theoretischer Prüfungsteils. Wir organisieren auf Wunsch den Startplatz für die Prüfung und begleiten Mensch und Hund bis zur (bestandenen) Prüfung. Wir arbeiten mit maximal vier Hunden pro Gruppe/Stunde, um jedes Team zum Erfolg zu führen.',
                path: '/begleit',
            },

        ]
    },
    {
        titel: "Sondertraining",
        subroutes:[
            {
                titel:'Agility',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Agi-Text.',
                path: '/agi',
            },
            {
                titel:'Obedience',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Hinter dem englischen Wort für Gehorsam verbirgt sich eine Hundesportart, bei der es besonders auf die harmonische, schnelle und exakte Ausführung bestimmter Übungen eines eingespielten Mensch-Hund-Teams ankommt. Obedience wird gerne auch als die „Hohe Schule“ der Unterordnung bezeichnet und ist für jeden Hund geeignet, unabhängig von Alter und Größe. Neben dem Gehorsam des Hundes geht es auch um seine Sozialverträglichkeit anderen Menschen und Artgenossen gegenüber. In vielen Bereichen ähnelt Obedience mit seinen drei Prüfungsstufen dem Gehorsamsteil von Rettungshunde- und Schutzhundeprüfungen. Vergleichbar sind beispielsweise das Fuß-Gehen mit und ohne Leine, das Sitz, Platz und Steh aus der Bewegung, die Bleib-Übungen mit und ohne Sichtkontakt, das Abrufen, das Vorausschicken, das Apportieren und die Geruchsidentifikation aus mehreren Hölzern. Ein weiterer Bestandteil der Obedienceprüfungen ist die Distanzkontrolle, bei der der Hund in einem großen Abstand zu seinem Halter eine Reihe von Positionswechseln (Sitz, Platz, Steh) ausführen muss, ohne sich dabei von der Stelle bewegen zu dürfen. Im Gegensatz zum Schutzhundesport werden die Kommandos präziser und eleganter gearbeitet. Auf dem Prüfungsgelände geht es sehr viel leiser zu, es wird „weicher“ geführt und das Niveau ist, aus Sicht der Unterordnung, um einiges höher. Beim Obedience müssen die Übungen von Hund und Mensch nicht einfach nur ausgeführt werden, mit ihnen soll gleichzeitig Harmonie, Vertrauen und die Freude an der gemeinsamen Arbeit zum Ausdruck gebracht werden.',
                path: '/obi',
            },
            {
                titel:'Longierarbeit',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Richtig aufgebautes Longieren ersetzt unzählige einseitige Beschäftigungsformen und Auslastungsmodelle, die den Hund lediglich auf Trab halten. Durch das Dualführsystem, das von Hans Schlegel entwickelt wurde, wird der Hund nicht nur körperlich, sondern auch kopfmäßig sinnvoll ausgelastet, was zugleich die Beziehung zum Menschen fördert und das Umweltverhalten des Hundes positiv beeinflusst. Heute gilt die Pionierarbeit von Hans Schlegel weltweit als effizienteste Form der Therapie von verhaltensauffälligen Hunden; Familienhunde werden durch das Longieren zu stressfreien Partnern. Wir bauen das vom Experten gelernte, richtige Longieren individuell mit jedem Mensch-Hund-Team auf und bringen damit dem Hund bei, auf Distanz mit seinem Menschen zu kooperieren – eine vor allem auch im Alltag nahezu unverzichtbare Fähigkeit.',
                path: '/longieren',
            },
            {
                titel:'Stöbern',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Suchen und Stöbern, die sogenannte „Nasenarbeit“, ist eine wunderbare Beschäftigung für den Hund und seinen Halter, die beiden Freude macht und bei der der Hund auf artgerechte Weise seinen Suchtrieb ausleben kann. Bei dieser anspruchsvollen Aufgabe wird der Hund sowohl körperlich als auch geistig gefordert und ist somit auf ganz natürliche Weise ausgelastet. Beim Stöbern geht es darum, dass der Hund eine Fläche nach vorher ausgelegten Gegenständen absucht. Der Hundeführer schickt den Hund dabei an die Stellen, an denen er noch nicht gesucht hat. Sobald der Hund einen Gegenstand gefunden hat, soll er diesen verweisen indem er sich davor ablegt. Das Stöbern kann jeder Hund, egal welcher Rasse oder welchen Alters erlernen.',
                path: '/stoebern',
            },

            {
                titel:'Stadt- und Spaziergänge',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Mit Hilfe seines geschulten Halters soll der Hund lernen, mit Stresssituationen ruhig und gelassen umzugehen. Das richtige Verhalten im Straßenverkehr, in Geschäften, am Bahnhof usw. und Rücksichtnahme gegenüber Mitmenschen und anderen Tieren wie Katzen, Rehen, Hasen u.a. trainieren wir „live“ vor Ort bei gemeinsamen Spaziergängen in Stadt, Wald und Flur.',
                path: '/stadt',
            },
            {
                titel:'Kurse externer Hundetrainer',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wir laden immer wieder auswärtige Trainer und Hundeexperten ein, die bei uns in speziellen Seminaren ihre Fachgebiete und Trainingsmethoden vorstellen. Termine werden rechtzeitig hier angekündigt.',
                path: '/kurse',
            },

        ]
    },
    {
        titel: "Rückblick",
        path: "/rueckblick",
        xy: true,
        subroutes:[
            {
                titel:'Erste Hilfe am Hund mit Dr. Christine Mayer',
                subtitel:'am 04.11.2018',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wir laden immer wieder auswärtige Trainer und Hundeexperten ein, die bei uns in speziellen Seminaren ihre Fachgebiete und Trainingsmethoden vorstellen. Termine werden rechtzeitig hier angekündigt.',
                pdf: './pdfs/p2.pdf'
            },
            {
                titel:'Kurse externer Hundetrainer',
                pics: [require('../images/welpen1k.jpg'),require('../images/welpen1k.jpg')],
                text: 'Wir laden immer wieder auswärtige Trainer und Hundeexperten ein, die bei uns in speziellen Seminaren ihre Fachgebiete und Trainingsmethoden vorstellen. Termine werden rechtzeitig hier angekündigt.',
            },
        ]
    }
]

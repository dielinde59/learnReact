
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
    titel1?: string,
    subtitel?: string,
    pics?: string[],
    text?: string,
    text1?: string,
    // ctext?: string[],
    path?: string,
    subroutes?: IMenuItem[],
    xy?:boolean,
    pdf?: string,
}



export const menu: IMenuItem[] = 
[
    {
        titel: "Willkommen",
        path: "/willkommen",
},
    {
        titel: "Über uns",
        path: "/UeberUns",
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
                text1: 'Teil 2 des Textes',
                pdf: './pdfs/p2.pdf'
            },
            {
                titel:'Stadtgang am Sonntag',
                text: 'entfällt am 11.11.2018',
                text1: 'Teil 2 des Textes NEU',
            },
            {
                titel:'Nochmal Stadtgang am Sonntag',
                text: 'entfällt nicht am 11.11.2018',
                text1: 'Neuer Text',
                pdf: './pdfs/p2.pdf'

            },
        ]

    },
    {
        titel: "Grundausbildung",
        subroutes:[

            {
                titel:'Welpen',
                titel1: "Grundausbildung",

                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen3.jpg')],
                text: "Nachdem der Welpe die ersten Wochen im neuen Zuhause verbracht und #in dieser Zeit eine Beziehung zu seinen Menschen aufgebaut hat, wird er nun bei uns behutsam an Artgenossen und die restliche „große Welt“ herangeführt.# In unseren Welpenstunden vermitteln wir ersten Grundbenimm im Umgang mit anderen Hunden und Menschen bei gleichzeitiger Festigung der \n \r \n Bindung zum Halter.",
                text1: 'Wir helfen, die Grundkommandos Sitz, Platz und Steh mit viel Spaß und Zuneigung sowie notwendiger Konsequenz zu erlernen. # Beim kontrollierten Spiel mit Artgenossen ist meistens ein gut sozialisierter, erwachsener Hund anwesend. #Zudem werden die Welpen nach Größe und Temperament aufeinander abgestimmt.',
                path: '/welpen',
            },
            {
                titel:'Junghunde',
                pics: [require('../images/Junghunde1.jpg'),require('../images/Junghunde2.jpg')],
                text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. #Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. #Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.',
                text1:'Wir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                path: '/junghunde',
            },
            {
                titel:'Gemischte Gruppen',
                pics: [require('../images/GemischteGruppen1.jpg'),require('../images/GemischteGruppen2.jpg')],
                text: 'Nach erfolgreicher erster Grundausbildung werden die bekannten Übungen intensiviert und der Schwierigkeitsgrad bei Konfrontationen und Ablenkungen erhöht. Neben der Unterordnung (Fuß-Gehen, Sitz und Platz aus der Bewegung etc.) gibt es immer wieder Spielerisches wie Apportieren, Hürdenspringen u.a.',
                text1: '    Wir arbeiten mit maximal sechs Hunden pro Gruppe/Stunde, um genügend Zeit zu haben, uns der Probleme der einzelnen Mensch-Hund-Teams anzunehmen.',
                path: '/gemischt',
            },
            {
                titel:'Einzeltraining',
                pics: [require('../images/Einzelstunden1.jpg'),require('../images/Einzelstunden2.jpg')],
                text: 'Bei Unsicherheiten seitens des Hundes oder Halters und bei speziellen Problemen bieten wir zudem individuelles Einzeltraining an – wenn gewünscht, auch gerne zu Hause beim Halter. Dabei schulen und stärken wir zunächst den Menschen in allen Problemsituationen und helfen ihm anschließend dabei, seinem Hund das Gelernte ruhig, gelassen und mit der nötigen Souveränität eines Rudelführers zu vermitteln. #Nach dem Einzelunterricht empfiehlt sich eine Verfestigung unter Ablenkung in Gruppenstunden.',
                text1:'Termine für Einzelstunden können jederzeit telefonisch oder per E-Mail vereinbart werden.',
                path: '/einzel',
            },

            {
                titel:'Vorbereitung auf die Begleithundeprüfung',
                pics: [require('../images/VorbereitungBH1.jpg'),require('../images/VorbereitungBH2.jpg')],
                text: 'Die Begleithundeprüfung ist in allen Vereinen des VDH eine Basisprüfung, in der der Gehorsam des Hundes und sein Verhalten in der Öffentlichkeit (z. B. beim Zusammentreffen mit Fußgängern, Joggern und Radfahrern) geprüft werden. #Wir bauen zusammen mit dem Halter die einzelnen Prüfungselemente wie sauberes Fuß-Gehen an lockerer Leine und in Freifolge, präzises, schnelles Sitz und Platz aus der Bewegung, Abruf mit korrektem Vorsitzen, Verhalten in Menschengruppen, im Verkehr und gegenüber Artgenossen sukzessive auf, fördern die Konzentration von Hund und Halter, bereiten den Sachkundetest vor und besprechen die Fragebögen des theoretischer Prüfungsteils.',
                text1:'Wir organisieren auf Wunsch den Startplatz für die Prüfung und begleiten Mensch und Hund bis zur (bestandenen) Prüfung. Wir arbeiten mit maximal vier Hunden pro Gruppe/Stunde, um jedes Team zum Erfolg zu führen.',
                path: '/begleit',
            },

        ]
    },
    {
        titel: "Sondertraining",
        subroutes:[
            {
                titel:'Agility',
                pics: [require('../images/Agility1.jpg'),require('../images/Agility2.jpg')],
                text: 'Bei der ursprünglich aus England stammenden Hundesportart Agility muss der Hund  einen aus mehreren Hindernissen bestehenden Parcours in einer festgelegten Reihenfolge und innerhalb einer vorgegebenen Zeit überwinden. Nach Reglement befinden sich auf dieser Strecke die unterschiedlichsten Hindernissen wie Reifen, Schrägwand, Laufsteg, Slalom, Wippe, Tunnel sowie verschiedene Sprunggeräte und wir haben noch Elemente wie Hängebrücke und Wackelbrett hinzugefügt.',
                text1: 'Bei dieser Hundesportart kommt es sehr auf das Zusammenspiel zwischen Mensch und Hund an, denn der Hundehalter lenkt seinen Hund lediglich durch Körpersprache und Hörzeichen durch den Parcours. Selbstverständlich muss sich der Hund die verschiedenen Geräte erst langsam erarbeiten und kennenlernen, um sie im Parcours sicher bewältigen zu können. #Wir trainieren nicht nach strengen FCI Regeln wie z. B. Vorgaben an Kontaktzonen, Zeitlimit und Mindesthöhen. Unser Ziel ist es, spielerisch durch gemeinsame neue Herausforderungen die Kooperation und Harmonie zwischen Hund und Halter zu stärken und dabei einfach Spaß zu haben.',
                path: '/agi',
            },
            {
                titel:'Obedience',
                pics: [require('../images/Obedience1.jpg'),require('../images/Obedience2.jpg'), require('../images/Obedience3.jpg')],
                text: 'Hinter dem englischen Wort für Gehorsam verbirgt sich eine Hundesportart, bei der es besonders auf die harmonische, schnelle und exakte Ausführung bestimmter Übungen eines eingespielten Mensch-Hund-Teams ankommt. Obedience wird gerne auch als die „Hohe Schule“ der Unterordnung bezeichnet und ist für jeden Hund geeignet, unabhängig von Alter und Größe. Neben dem Gehorsam des Hundes geht es auch um seine Sozialverträglichkeit anderen Menschen und Artgenossen gegenüber. In vielen Bereichen ähnelt Obedience mit seinen drei Prüfungsstufen dem Gehorsamsteil von Rettungshunde- und Schutzhundeprüfungen. Vergleichbar sind beispielsweise das Fuß-Gehen mit und ohne Leine, das Sitz, Platz und Steh aus der Bewegung, die Bleib-Übungen mit und ohne Sichtkontakt, das Abrufen, das Vorausschicken, das Apportieren und die Geruchsidentifikation aus mehreren Hölzern.',
                text1: 'Ein weiterer Bestandteil der Obedienceprüfungen ist die Distanzkontrolle, bei der der Hund in einem großen Abstand zu seinem Halter eine Reihe von Positionswechseln (Sitz, Platz, Steh) ausführen muss, ohne sich dabei von der Stelle bewegen zu dürfen. Im Gegensatz zum Schutzhundesport werden die Kommandos präziser und eleganter gearbeitet. Auf dem Prüfungsgelände geht es sehr viel leiser zu, es wird „weicher“ geführt und das Niveau ist, aus Sicht der Unterordnung, um einiges höher. Beim Obedience müssen die Übungen von Hund und Mensch nicht einfach nur ausgeführt werden, mit ihnen soll gleichzeitig Harmonie, Vertrauen und die Freude an der gemeinsamen Arbeit zum Ausdruck gebracht werden.',
                path: '/obi',
            },
            {
                titel:'Longierarbeit',
                pics: [require('../images/Longieren1.jpg'),require('../images/Longieren2.jpg')],
                text: 'Richtig aufgebautes Longieren ersetzt unzählige einseitige Beschäftigungsformen und Auslastungsmodelle, die den Hund lediglich auf Trab halten. Durch das Dualführsystem, das von Hans Schlegel entwickelt wurde, wird der Hund nicht nur körperlich, sondern auch kopfmäßig sinnvoll ausgelastet, was zugleich die Beziehung zum Menschen fördert und das Umweltverhalten des Hundes positiv beeinflusst.',
                text1: 'Heute gilt die Pionierarbeit von Hans Schlegel weltweit als effizienteste Form der Therapie von verhaltensauffälligen Hunden, Familienhunde werden durch das Longieren zu stressfreien Partnern. Wir bauen das vom Experten gelernte, richtige Longieren individuell mit jedem Mensch-Hund-Team auf und bringen damit dem Hund bei, auf Distanz mit seinem Menschen zu kooperieren – eine vor allem auch im Alltag nahezu unverzichtbare Fähigkeit.',
                path: '/longieren',
            },
            {
                titel:'Stöbern',
                pics: [require('../images/Stöbern1.jpg'),require('../images/Stöbern2.jpg')],
                text: 'Suchen und Stöbern, die sogenannte „Nasenarbeit“, ist eine wunderbare Beschäftigung für den Hund und seinen Halter, die beiden Freude macht und bei der der Hund auf artgerechte Weise seinen Suchtrieb ausleben kann. Bei dieser anspruchsvollen Aufgabe wird der Hund sowohl körperlich als auch geistig gefordert und ist somit auf ganz natürliche Weise ausgelastet. #Beim Stöbern geht es darum, dass der Hund eine Fläche nach vorher ausgelegten Gegenständen absucht. Der Hundeführer schickt den Hund dabei an die Stellen, an denen er noch nicht gesucht hat. Sobald der Hund einen Gegenstand gefunden hat, soll er diesen verweisen indem er sich davor ablegt. Das Stöbern kann jeder Hund, egal welcher Rasse oder welchen Alters erlernen.',
                text1: '',
                path: '/stoebern',
            },

            {
                titel:'Stadt- und Spaziergänge',
                pics: [require('../images/Stadtgang1.jpg'),require('../images/Stadtgang2.jpg')],
                text: 'Mit Hilfe seines geschulten Halters soll der Hund lernen, mit Stresssituationen ruhig und gelassen umzugehen. #Das richtige Verhalten im Straßenverkehr, in Geschäften, am Bahnhof usw. und Rücksichtnahme gegenüber Mitmenschen und anderen Tieren wie Katzen, Rehen, Hasen u.a. trainieren wir „live“ vor Ort bei gemeinsamen Spaziergängen in Stadt, Wald und Flur.',
                text1: '                        #                 #           ',
                path: '/stadt',
            },
            {
                titel:'Kurse externer Experten',
                pics: [require('../images/Experten1.jpg'),require('../images/Experten2.jpg'),require('../images/Experten3.jpg')],
                text: 'Wir laden immer wieder auswärtige Trainer und Hundeexperten ein, die in speziellen Seminaren ihre Fachgebiete und Trainingsmethoden vorstellen.',
                text1: 'Rund um das Thema Gesundheit des Hundes referierten bereits mehrere Tierärzte.#Zuletzt vermittelte uns Frau Dr. Christine Mayer Wissenswertes in allen Notfallsituationen bei einem Erste Hilfe Kurs. Frau Dr. Mayer arbeitete in spezialisierten Kleintierpraxen in Berlin und Regensburg sowie in der Tierklinik Teisendorf. Seit 2014 betreibt sie ihre eigene Tierarztpraxis in Neuötting. #Bereits des öfteren durften wir Georg Weichselbaumer bei seinen sehr lehrreichen Seminaren zum Thema „Wesensanalyse von Hunden“ und auch bei seinen Stöberkursen hier bei uns erleben. Der ehemalige Polizeihundeführer beschäftigt sich seit ca. 40 Jahren mit Hunden, führt zusammen mit seiner Frau eine Hundeschule und erstellt als Sachverständiger für das Hundewesen Gutachten für Behörden, Gerichte usw. #Bei einem besonderen Highlight durften wir die Philosophie und Trainingsmethoden des Schweizer Hundeexperten Hans Schlegel kennenlernen. Wie man durch eine klare, harmonische Beziehung unerwünschte Verhaltensmuster beeinflussen kann war das Hauptthema. Hans Schlegel bildete Polizeihundestaffeln in den USA aus, er lebte unter Wölfen und ist heute einer der renommiertesten Experten in Sachen Hundeerziehung.',
                path: '/kurse',
            },

        ]
    },
    {
        titel: "Trainingsgelände",
        path: "/gelaende",
        xy: false,
        pics: [require('../images/Trainingsplatz.jpg'),require('../images/Stüberl4.jpg')],
        text: "Die Hundeschule Hundefreu(n)de – Monika Frei liegt im schönen Chiemgau in Oberbayern. Unser ca. 2.500 m² großer, eingezäunter Trainingsplatz befindet sich in ländlicher Umgebung mit freiem Bergblick und garantiert entspannte Atmosphäre für Hund und Halter. #An heißen Tagen steht selbstverständlich jedem ein entspanntes Schattenplätzchen zur Verfügung.",
        text1: "Dank unserer Außenbeleuchtung können wir auch in der Winterzeit unsere regulären Trainingszeiten bis in die Abendstunden einhalten. #In unserem gemütlichen „Stüberl“ nehmen wir uns Zeit für Theorie und Sachkundeunterricht, feiern aber auch gerne die Erfolge unserer Hundefreunde.",
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
                text: 'Wir laden immer wieder auswärtige Trainer und Hundeexperten ein, die in speziellen Seminaren ihre Fachgebiete und Trainingsmethoden vorstellen. Rund um das Thema Gesundheit des Hundes referierten bereits mehrere Tierärzte. #Zuletzt vermittelte uns Frau Dr. Christine Mayer Wissenswertes in allen Notfallsituationen bei einem Erste Hilfe Kurs. Frau Dr. Mayer arbeitete in spezialisierten Kleintierpraxen in Berlin und Regensburg sowie in der Tierklinik Teisendorf. Seit 2014 betreibt sie ihre eigene Tierarztpraxis in Neuötting. ',
                text1: 'Bereits des öfteren durften wir Georg Weichselbaumer bei seinen sehr lehrreichen Seminaren zum Thema „Wesensanalyse von Hunden“ und auch bei seinen Stöberkursen hier bei uns erleben. Der ehemalige Polizeihundeführer beschäftigt sich seit ca. 40 Jahren mit Hunden, führt zusammen mit seiner Frau eine Hundeschule und erstellt als Sachverständiger für das Hundewesen Gutachten für Behörden, Gerichte usw. #Bei einem besonderen Highlight durften wir die Philosophie und Trainingsmethoden des Schweizer Hundeexperten Hans Schlegel kennenlernen. Wie man durch eine klare, harmonische Beziehung unerwünschte Verhaltensmuster beeinflussen kann war das Hauptthema. Hans Schlegel bildete Polizeihundestaffeln in den USA aus, er lebte unter Wölfen und ist heute einer der renommiertesten Experten in Sachen Hundeerziehung.',
                pdf: './pdfs/p2.pdf'
            },
            {
                titel:'Seminarwochenende mit dem schweizer Hundeexperten Hans Schlegel',
                subtitel:'am 12. und 13. Februar 2011',
                pics: [require('../images/schlegel_train_2.jpg'),require('../images/schlegel_train_1.jpg'),require('../images/schlegel_train_3.jpg'),require('../images/schlegel_train_3.jpg'),require('../images/schlegel_train_3.jpg'),require('../images/schlegel_train_3.jpg')],
                text: 'Ein besonderes Highlight stellte das Seminarwochenende mit dem schweizer Hundeexperten Hans Schlegel am 12. und 13. Februar 2011 in unserer Trainingshalle in Kastl dar.',
                text1: 'Teil 2 des Textes',
                pdf: './pdfs/Schlegel2011.pdf'
            },
        ]
    }
]

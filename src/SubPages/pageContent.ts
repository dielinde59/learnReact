
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
    xy?: boolean,
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
            path: "/Aktuell",
        },
        // {
        //     titel: "Aktuelles",
        //     path: "/aktuelles",
        //     xy: true,
        //     subroutes: [
        //         {
        //             titel: '... es geht weiter',
        //             text: 'Liebe Hundefreu(n)de,\n\nendlich dürfen auch wir wieder in kleinen Gruppen arbeiten!!!\nDamit wir die begrenzte Teilnehmerzahl nicht überschreiten und keiner umsonst anreist, müsst ihr euch allerdings für die Trainingsstunden bitte zuverlässig bei mir an- oder abmelden. Es reicht z.B. eine WhatsApp mit gewünschtem Tag und Uhrzeit und wenn die Gruppe schon voll sein sollte, melde ich mich bei euch.\nUm möglichst alle Teams auch wieder unterzubringen, habe ich die gewöhnlich stark besuchten Stunden auf zweimal 45 Minuten aufgeteilt. Durch die geringe Teilnehmerzahl können wir intensiver arbeiten und jeder kommt mindestens so oft dran wie zuvor in 60 Minuten, so dass wieder alle auf ihre Kosten kommen. Die genauen Trainingszeiten findet ihr im aktuellen Trainingsplan! Bei Bedarf können wir noch weitere Stunden aufteilen. ',
        //             text1: 'BITTE BEACHTEN:\n* Bitte haltet euch auch zu eurer eigenen Sicherheit an die Hygienemaßnahmen und Abstandsregelungen.\n* Bitte mit ausreichend Abstand hintereinander Parken (nicht Kofferraum an Kofferraum, damit auch beim Aussteigen der Hunde der geforderte Abstand eingehalten werden kann).\n* Das Tor wird ausschließlich vom Trainer geöffnet und geschlossen.\n* Bei Verwendung jeglicher Trainingsutensilien der Hundeschule müssen vorher und nachher die Hände gereinigt und desinfiziert werden.\n* Ein Desinfektionsmittelständer befindet sich im Eingang zum Gerätekammerl.\n* Bitte denkt daran, dass ihr eure eigene Mund-Nase-Bedeckung (Tuch, Schal, Maske) dabei habt.\n\nIch wünsche euch einen schönen Tag und freue mich schon, euch bald wieder zu sehen!\n\nLiebe Grüße,\n\nMonika ',
        //             pdf: './pdfs/Termine.pdf'
        //         },
        //         {
        //             titel: 'Trainingsplan',
        //             subtitel: '',
        //             // pics: [require('../images/welpen1k.jpg'), require('../images/Welpen2k.jpg')],
        //             text: "Montag \n10:00-11:00 Uhr Unterordnung \n17:30-18:15 Uhr Unterordnung \n18:15-19:00 Uhr Unterordnung \n19:00-20:00 Uhr Stöbern \n \nMittwoch \n09:00-10:00 Uhr Longieren \n17:30-18:30 Uhr Obi-Agi \n18:30-19:30 Uhr Obedience \n\n",
        //             text1: "Freitag \n09:00-10:00 Uhr Gruppe gem. (Longieren/UO/Agi) \n17:00-18:00 Uhr Unterordnung gem. \n18:00-18:45 Uhr Unterordnung/Agility \n18:45-19:30 Uhr Unterordnung/Agility \n \nSamstag \n09:00-09:30 Uhr Longieren \n09:30-10:00 Uhr Longieren \n10:00-11:00 Uhr Fortgeschrittene \n16:00-17:00 Uhr Welpen \n17:00-18:00 Uhr Junghunde \n",
        //             pdf: ''
        //         },
        //         {
        //             titel: 'Termine 2020',
        //             text: '',
        //             text1: 'Hier finden Sie alle wichtigen Termine des laufenden Jahres',
        //             pdf: './pdfs/Termine.pdf'
        //         },
        //         {
        //             titel: 'Stadtgang am Sonntag',
        //             text: 'entfällt vorübergehend ',
        //             text1: '',
        //             pdf: ''

        //         },
        //     ]

        // },
        {
            titel: "Grundausbildung",
            subroutes: [

                {
                    titel: 'Welpen',
                    // titel1: "Grundausbildung",
                    pics: [require('../images/Welpen1.jpg'), require('../images/Welpen2.jpg')],
                    text: "Nachdem der Welpe die ersten Wochen im neuen Zuhause verbracht und in dieser Zeit eine Beziehung zu seinen Menschen aufgebaut hat, wird er nun bei uns behutsam an Artgenossen und die restliche „große Welt“ herangeführt./nIn unseren Welpenstunden vermitteln wir ersten Grundbenimm im Umgang mit anderen Hunden und Menschen bei gleichzeitiger Festigung der Bindung zum Halter.",
                    text1: 'Wir helfen, die Grundkommandos Sitz, Platz und Steh mit viel Spaß und Zuneigung sowie notwendiger Konsequenz zu erlernen. \nBeim kontrollierten Spiel mit Artgenossen ist meistens ein gut sozialisierter, erwachsener Hund anwesend. Zudem werden die Welpen nach Größe und Temperament aufeinander abgestimmt.',
                    path: '/welpen',
                },
                {
                    titel: 'Junghunde',
                    pics: [require('../images/Junghunde1.jpg'), require('../images/Junghunde2.jpg')],
                    text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. \nDurch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. \nLernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.',
                    text1: 'Wir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                    path: '/junghunde',
                },
                {
                    titel: 'Gemischte Gruppen',
                    pics: [require('../images/gemGruppen_oben.jpg'), require('../images/GemischteGruppen1.jpg')],
                    text: 'Nach erfolgreicher erster Grundausbildung werden die bekannten Übungen intensiviert und der Schwierigkeitsgrad bei Konfrontationen und Ablenkungen erhöht. Neben der Unterordnung (Fuß-Gehen, Sitz und Platz aus der Bewegung etc.) gibt es immer wieder Spielerisches wie Apportieren, Hürdenspringen u.a.',
                    text1: 'Wir arbeiten mit maximal sechs Hunden pro Gruppe/Stunde, um genügend Zeit zu haben, uns der Probleme der einzelnen Mensch-Hund-Teams anzunehmen.',
                    path: '/gemischt',
                },
                {
                    titel: 'Einzeltraining',
                    pics: [require('../images/Einzelstunden1.jpg'), require('../images/Einzelstunden2.jpg')],
                    text: 'Bei Unsicherheiten seitens des Hundes oder Halters und bei speziellen Problemen bieten wir zudem individuelles Einzeltraining an – wenn gewünscht, auch gerne zu Hause beim Halter. Dabei schulen und stärken wir zunächst den Menschen in allen Problemsituationen und helfen ihm anschließend dabei, seinem Hund das Gelernte ruhig, gelassen und mit der nötigen Souveränität eines Rudelführers zu vermitteln. \nNach dem Einzelunterricht empfiehlt sich eine Verfestigung unter Ablenkung in Gruppenstunden.',
                    text1: 'Termine für Einzelstunden können jederzeit telefonisch oder per E-Mail vereinbart werden.',
                    path: '/einzel',
                },

                {
                    titel: 'Vorbereitung auf die Begleithundeprüfung',
                    pics: [require('../images/VorbereitungBH1.jpg'), require('../images/VorbereitungBH2.jpg')],
                    text: 'Die Begleithundeprüfung ist in allen Vereinen des VDH eine Basisprüfung, in der der Gehorsam des Hundes und sein Verhalten in der Öffentlichkeit (z. B. beim Zusammentreffen mit Fußgängern, Joggern und Radfahrern) geprüft werden. \nWir bauen zusammen mit dem Halter die einzelnen Prüfungselemente wie sauberes Fuß-Gehen an lockerer Leine und in Freifolge, präzises, schnelles Sitz und Platz aus der Bewegung, Abruf mit korrektem Vorsitzen, Verhalten in Menschengruppen, im Verkehr und gegenüber Artgenossen sukzessive auf, fördern die Konzentration von Hund und Halter, bereiten den Sachkundetest vor und besprechen die Fragebögen des theoretischer Prüfungsteils.',
                    text1: 'Wir organisieren auf Wunsch den Startplatz für die Prüfung und begleiten Mensch und Hund bis zur (bestandenen) Prüfung. Wir arbeiten mit maximal vier Hunden pro Gruppe/Stunde, um jedes Team zum Erfolg zu führen.',
                    path: '/begleit',
                },

            ]
        },
        {
            titel: "Sondertraining",
            subroutes: [
                {
                    titel: 'Agility',
                    pics: [require('../images/Agi1.jpg'), require('../images/Agi2.jpg')],
                    text: 'Bei der ursprünglich aus England stammenden Hundesportart Agility muss der Hund  einen aus mehreren Hindernissen bestehenden Parcours in einer festgelegten Reihenfolge und innerhalb einer vorgegebenen Zeit überwinden. Nach Reglement befinden sich auf dieser Strecke die unterschiedlichsten Hindernissen wie Reifen, Schrägwand, Laufsteg, Slalom, Wippe, Tunnel sowie verschiedene Sprunggeräte und wir haben noch Elemente wie Hängebrücke und Wackelbrett hinzugefügt.',
                    text1: 'Bei dieser Hundesportart kommt es sehr auf das Zusammenspiel zwischen Mensch und Hund an, denn der Hundehalter lenkt seinen Hund lediglich durch Körpersprache und Hörzeichen durch den Parcours. Selbstverständlich muss sich der Hund die verschiedenen Geräte erst langsam erarbeiten und kennenlernen, um sie im Parcours sicher bewältigen zu können. \nWir trainieren nicht nach strengen FCI Regeln wie z. B. Vorgaben an Kontaktzonen, Zeitlimit und Mindesthöhen. Unser Ziel ist es, spielerisch durch gemeinsame neue Herausforderungen die Kooperation und Harmonie zwischen Hund und Halter zu stärken und dabei einfach Spaß zu haben.',
                    path: '/agi',
                },
                {
                    titel: 'Obedience',
                    pics: [require('../images/Obedience1.jpg'), require('../images/Obedience2.jpg'), require('../images/Obedience3.jpg')],
                    text: 'Hinter dem englischen Wort für Gehorsam verbirgt sich eine Hundesportart, bei der es besonders auf die harmonische, schnelle und exakte Ausführung bestimmter Übungen eines eingespielten Mensch-Hund-Teams ankommt. Obedience wird gerne auch als die „Hohe Schule“ der Unterordnung bezeichnet und ist für jeden Hund geeignet, unabhängig von Alter und Größe. Neben dem Gehorsam des Hundes geht es auch um seine Sozialverträglichkeit anderen Menschen und Artgenossen gegenüber. In vielen Bereichen ähnelt Obedience mit seinen drei Prüfungsstufen dem Gehorsamsteil von Rettungshunde- und Schutzhundeprüfungen. Vergleichbar sind beispielsweise das Fuß-Gehen mit und ohne Leine, das Sitz, Platz und Steh aus der Bewegung, die Bleib-Übungen mit und ohne Sichtkontakt, das Abrufen, das Vorausschicken, das Apportieren und die Geruchsidentifikation aus mehreren Hölzern.',
                    text1: 'Ein weiterer Bestandteil der Obedienceprüfungen ist die Distanzkontrolle, bei der der Hund in einem großen Abstand zu seinem Halter eine Reihe von Positionswechseln (Sitz, Platz, Steh) ausführen muss, ohne sich dabei von der Stelle bewegen zu dürfen. Im Gegensatz zum Schutzhundesport werden die Kommandos präziser und eleganter gearbeitet. Auf dem Prüfungsgelände geht es sehr viel leiser zu, es wird „weicher“ geführt und das Niveau ist, aus Sicht der Unterordnung, um einiges höher. Beim Obedience müssen die Übungen von Hund und Mensch nicht einfach nur ausgeführt werden, mit ihnen soll gleichzeitig Harmonie, Vertrauen und die Freude an der gemeinsamen Arbeit zum Ausdruck gebracht werden.',
                    path: '/obi',
                },
                {
                    titel: 'Longierarbeit',
                    pics: [require('../images/Longieren1.jpg'), require('../images/Longieren2.jpg')],
                    text: 'Richtig aufgebautes Longieren ersetzt unzählige einseitige Beschäftigungsformen und Auslastungsmodelle, die den Hund lediglich auf Trab halten. Durch das Dualführsystem, das von Hans Schlegel entwickelt wurde, wird der Hund nicht nur körperlich, sondern auch kopfmäßig sinnvoll ausgelastet, was zugleich die Beziehung zum Menschen fördert und das Umweltverhalten des Hundes positiv beeinflusst.',
                    text1: 'Heute gilt die Pionierarbeit von Hans Schlegel weltweit als effizienteste Form der Therapie von verhaltensauffälligen Hunden, Familienhunde werden durch das Longieren zu stressfreien Partnern. Wir bauen das vom Experten gelernte, richtige Longieren individuell mit jedem Mensch-Hund-Team auf und bringen damit dem Hund bei, auf Distanz mit seinem Menschen zu kooperieren – eine vor allem auch im Alltag nahezu unverzichtbare Fähigkeit.',
                    path: '/longieren',
                },
                {
                    titel: 'Stöbern',
                    pics: [require('../images/Stöbern1.jpg'), require('../images/Stöbern2.jpg')],
                    text: 'Suchen und Stöbern, die sogenannte „Nasenarbeit“, ist eine wunderbare Beschäftigung für den Hund und seinen Halter, die beiden Freude macht und bei der der Hund auf artgerechte Weise seinen Suchtrieb ausleben kann. Bei dieser anspruchsvollen Aufgabe wird der Hund sowohl körperlich als auch geistig gefordert und ist somit auf ganz natürliche Weise ausgelastet. \nBeim Stöbern geht es darum, dass der Hund eine Fläche nach vorher ausgelegten Gegenständen absucht. Der Hundeführer schickt den Hund dabei an die Stellen, an denen er noch nicht gesucht hat. Sobald der Hund einen Gegenstand gefunden hat, soll er diesen verweisen indem er sich davor ablegt. Das Stöbern kann jeder Hund, egal welcher Rasse oder welchen Alters erlernen.',
                    text1: '',
                    path: '/stoebern',
                },

                {
                    titel: 'Stadt- und Spaziergänge',
                    pics: [require('../images/Stadtgang1.jpg'), require('../images/Stadtgang2.jpg')],
                    text: 'Mit Hilfe seines geschulten Halters soll der Hund lernen, mit Stresssituationen ruhig und gelassen umzugehen. \nDas richtige Verhalten im Straßenverkehr, in Geschäften, am Bahnhof usw. und Rücksichtnahme gegenüber Mitmenschen und anderen Tieren wie Katzen, Rehen, Hasen u.a. trainieren wir „live“ vor Ort bei gemeinsamen Spaziergängen in Stadt, Wald und Flur.',
                    text1: '                        \n                 \n           ',
                    path: '/stadt',
                },
                {
                    titel: 'Kurse externer Experten',
                    pics: [require('../images/Experten1.jpg'), require('../images/Experten2.jpg'), require('../images/Experten3.jpg')],
                    text: 'Wir laden immer wieder auswärtige Trainer und Hundeexperten ein, die in speziellen Seminaren ihre Fachgebiete und Trainingsmethoden vorstellen.',
                    text1: 'Rund um das Thema Gesundheit des Hundes referierten bereits mehrere Tierärzte.\nZuletzt vermittelte uns Frau Dr. Christine Mayer Wissenswertes in allen Notfallsituationen bei einem Erste Hilfe Kurs. Frau Dr. Mayer arbeitete in spezialisierten Kleintierpraxen in Berlin und Regensburg sowie in der Tierklinik Teisendorf. Seit 2014 betreibt sie ihre eigene Tierarztpraxis in Neuötting. \n\nBereits des öfteren durften wir Georg Weichselbaumer bei seinen sehr lehrreichen Seminaren zum Thema „Wesensanalyse von Hunden“ und auch bei seinen Stöberkursen hier bei uns erleben. Der ehemalige Polizeihundeführer beschäftigt sich seit ca. 40 Jahren mit Hunden, führt zusammen mit seiner Frau eine Hundeschule und erstellt als Sachverständiger für das Hundewesen Gutachten für Behörden, Gerichte usw. \n\nBei einem besonderen Highlight durften wir die Philosophie und Trainingsmethoden des Schweizer Hundeexperten Hans Schlegel kennenlernen. Wie man durch eine klare, harmonische Beziehung unerwünschte Verhaltensmuster beeinflussen kann war das Hauptthema. Hans Schlegel bildete Polizeihundestaffeln in den USA aus, er lebte unter Wölfen und ist heute einer der renommiertesten Experten in Sachen Hundeerziehung.',
                    path: '/kurse',
                },

            ]
        },
        {
            titel: "Trainingsgelände",
            path: "/gelaende",
            xy: false,
            pics: [require('../images/Gelaende01.jpg'), require('../images/Gelaende02.jpg')],
            text: "Die Hundeschule Hundefreu(n)de – Monika Frei liegt im schönen Chiemgau in Oberbayern. Unser ca. 2.500 m² großer, eingezäunter Trainingsplatz befindet sich in ländlicher Umgebung mit freiem Bergblick und garantiert entspannte Atmosphäre für Hund und Halter. \nAn heißen Tagen steht selbstverständlich jedem ein entspanntes Schattenplätzchen zur Verfügung. \nDank unserer Außenbeleuchtung können wir auch in der Winterzeit unsere regulären Trainingszeiten bis in die Abendstunden einhalten. \nIn unserem gemütlichen „Stüberl“ nehmen wir uns Zeit für Theorie und Sachkundeunterricht, feiern aber auch gerne die Erfolge unserer Hundefreunde.",
            text1: " \n \nHundeschule \nHundefreu(n)de – Monika Frei \nSchönreit 1 \nD-83308 Trostberg ",
        },

        {
            titel: "Rückblick",
            path: "/rueckblick",
            xy: true,
            subroutes: [
                /*             {
                                titel:'',
                                subtitel:'',
                                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
                                text: '',
                                text1: '',
                            }, */
                            {
                                titel:'Erste Trainings- und Wandertage am Edberghof im Bayerischen Wald',
                                subtitel:'11.-15. März 2020',
                                pics: [require('../images/Edberghof1.jpg'),require('../images/Edberghof2.jpg'),,require('../images/Edberghof3.jpg'),,require('../images/Edberghof3a.jpg')],
                                text: 'Kurz bevor die Ausgangsbeschränkungen aufgrund der Corona Pandemie beschlossen wurden hatten wir noch das große Glück unsere ersten Trainings- und Wandertage am Edberghof im Bayerischen Wald genießen zu können. Wir wurden auf dem schönen Hof in Alleinlage mit allen Trainings- und Wandermöglichkeiten, die sich ein Hundehalter so wünscht, von einer sehr netten Gastgeberfamilie begrüßt. \n \nVormittags wurde mit den Hunden trainiert. Es stand Agility in der Halle, Hoopers auf dem eingezäunten Außenplatz, Longieren oder Stöbern auf den großen dazugehörenden Wiesen auf dem Programm. ',
                                text1: 'Jeder machte das, was ihm eben Spaß machte. Nach der Mittagspause, die man entweder für sich oder bei einem gemütlichen Hundlerratsch an der Aufenthaltshütte am Hof verbrachte, ging es nachmittags zu einer gemeinsamen Wanderung. Dabei bot das Wetter alles, was es so bieten konnte. Von Schnee und Eis, Regen, Wind und Sturm, aber auch strahlendem Sonnenschein war alles dabei. Für Hunde und Halter waren es auf jeden Fall immer spannende und wunderschöne Ausflüge. Die Abende verbrachten wir beim gemeinsamen Essen in der gemütlichen Aufenthaltshütte. Wohl vorsorglich auf das was nach unserem Aufenthalt passierte wurden dabei schon die ein oder anderen Bakterien und Viren bekämpft... Es waren rundum herrliche und entspannte Tage unter Gleichgesinnten, an die wir alle sehr gerne zurück denken! \n \nWir freuen uns schon auf ein nächstes Mal!',
                            },
                            {
                    titel: 'Adventswanderung in Meggenthal',
                    subtitel: 'am 01.12.2019',
                    pics: [require('../images/Advent1.jpg'), require('../images/Advent2.jpg'), require('../images/Advent3.jpg')],
                    text: 'Am Sonntag, 1. Advent, fand auch in diesem Jahr traditionsgemäß unsere Adventswanderung auf dem Walderlebnispfad in Meggenthal statt. 32 Hunde mit ihren über 40 Menschen trafen sich zu der gemeinsamen Winterwanderung. Auch wenn uns kein winterliches Schneetreiben sondern die üblichen Regenschauer begleiteten, durften wir einen wunderschönen Nachmittag erleben. Für die Hunde (und deren Halter) war es ein spannendes Erlebnis in einem so großen Rudel gemeinsam in Ruhe „zu ziehen“ und das, je nach Ausbildungsstand, natürlich auch ohne Leine. Somit hatten sich alle eine Pause an der Krippe wohl verdient, in der sich die Menschen ein wenig stärkten und die Hunde endlich entspannen konnten.',
                    text1: 'Wir sind immer wieder gerne an diesem wunderschönen vorweihnachtlichen Ausflugsziel und freuen uns schon auf das nächste Jahr!',
                },
                {
                    titel: 'Wanderwochenende im Bayerischen Wald',
                    subtitel: '18.-20. Oktober 2019',
                    pics: [require('../images/BW201910_01.jpg'), require('../images/BW201910_02.jpg'), require('../images/BW201910_03.jpg'), require('../images/BW201910_04.jpg')],
                    text: 'Am Freitag Nachmittag starteten wir zu unserem diesjährigen Herbstausflug in den Bayerischen Wald. Nach einem ersten geselligen Kennenlernabend ging es am Samstag zu unserem ersten Ausflugsziel dem „Nationalparkzentrum Falkenstein“. Bei herrlichem Wetter genossen wir eine wunderschöne Wanderung durch die Wildtiergehege. Nur die Wölfe ließen sich leider nicht sehen. In den wohlverdienten Pausen durften sich unsere Hunde entspannen und die Halter wurden auf ihre Theoriekenntnisse rund um den Hund sowie ihr „Einfühlungsvermögen“ beim blinden Ertasten von Hunden geprüft. Anschließend ging es an den Großen Arbersee, der von allen, die noch gehen konnten und wollten, noch umrundet wurde. Beim gemeinsamen Abendessen durfte dann der ermittelte „Hundeexperte“ seinen schwer erkämpften Wanderpokal in Empfang nehmen.',
                    text1: 'Am Sonntag Morgen fuhren wir bei wiederum blauem Himmel und Sonnenschein nach Frauenau zur Trinkwassertalsperre. Die mehrstündige Wanderung herum bot wunderschöne Naturerlebnisse, was Hunden und Haltern riesig Spaß machte. \nAbgesehen davon, dass beim abschließenden Einkehren so mancher vom Wirt schlichtweg nicht beachtet wurde und somit auf Zwangsdiät gesetzt wurde, war es ein rundum herrlicher und erlebnisreicher Ausflug!',
                },
                {
                    titel: '',
                    subtitel: '',
                    text: '',
                    text1: '*** Aus dem Archiv ***',
                },
                {
                    titel: 'Seminar Wesensanalyse von Hunden mit Georg Weichselbaumer',
                    subtitel: 'am 5. und 6. Mai 2012',
                    pics: [require('../images/analyse1.jpg'), require('../images/analyse2.jpg'), require('../images/analyse3.jpg'),, require('../images/ArchivWesen.jpg')],
                    text: 'An diesem Wochenende konnten wir zwei sehr lehrreiche und spannende Tage erleben, an denen die Teilnehmer sowohl viel theoretisches Wissen als auch einige neue Erkenntnisse über die eigenen Vierbeiner erfahren durften. Das Wetter war zwar ebenso „anspruchsvoll“ wie das Seminar, wodurch sich die begeisterten Hundler aber nicht abschrecken ließen. \nAm Samstag vermittelte uns Georg Weichselbaumer erst mal ausführlich die Wesensgrundlagen und Wesenseigenschaften von Hunden. Dabei wurden u. a. die einzelnen Entwicklungsphasen des Hundes vom Welpen bis zum erwachsenen Hund erläutert und darauf eingegangen, welche Eigenschaften des Hundes genetisch bedingt sind und wie sich diverse Einflüsse in diesen Phasen auf die Charakterbildung auswirken. Bereits hier wurde so manchem Hundehalter bewusst, dass in dem ersten entscheidenden Lebensjahr seines Hundes wohl manches hätte anders laufen sollen und dass bei der Hundeerziehung eben immer wieder „menschliche Fehler“ passieren, die sich bei der Entwicklung des Hundes fatal auswirken können.',
                    text1: 'Anschließend wurden alle teilnehmenden Hunde einzeln auf ihr Wesen beurteilt. Hierbei waren so einige Hundehalter überrascht, wie ihre Vierbeiner in mancher Reizsituation reagieren. Der berühmte Ausspruch „das hat er ja noch nie gemacht“ war durchaus des öfteren zu hören. Fasziniert beobachteten die Teilnehmer die Beurteilungen und versuchten anhand der theoretisch erlernten Kenntnisse die diversen Wesenszüge einzuschätzen. \nAm Sonntag erlernten wir zunächst in Theorie die Zusammenhänge der erfahrenen Wesensgrundlagen und das sich daraus ergebende Lernverhalten der einzelnen Hundetypen. Die entsprechenden Lern- und Trainingsmethoden wurden anschließend mit den einzelnen Mensch-Hund-Teams praktiziert und jegliche weitere Fragen individuell diskutiert und mögliche Lösungsansätze besprochen. \nEin herzliches Dankeschön an Georg Weichselbaumer für dieses sehr informative und beeindruckende Seminar!',
                },
                {
                    titel: 'Begleithundeprüfung',
                    subtitel: 'am Samstag, 21. April 2012',
                    pics: [require('../images/BH_SeppTeddy.jpg'), require('../images/BH_Katharina.jpg')],
                    text: 'Unser Sepp mit seinem Mali-Galgo-Mix Teddy trat am SV OG Traunreut zu seiner Begleithundeprüfung an! Nervenstark (und fast nicht aufgeregt...) haben die Beiden souverän und zuverlässig alle Lektionen durchgeführt und erfolgreich bestanden. Wir gratulieren ganz herzlich und sind stolz auf euch - ihr seid ein tolles Team! Herzlichen Glückwunsch! \n\n',
                    text1: 'Ebenso waren unsere Katharina mit der kleinen Mischlings-Dame Lotte zur BH-Prüfung angetreten. Die süße Lotte, die für ihre ausgeprägte Willensstärke bekannt ist, hatte diesen Termin allerdings wohl eher als Testlauf gesehen und irgendwie ihren Einsatz verpaßt. Ist nicht so schlimm, wahrscheinlich wollte der Richter die Beiden in ein paar Wochen einfach nochmals sehen! Also macht euch nichts draus, wir fanden euch super!',
                }, {
                    titel: 'Das erste Sommerfest zum 1. Geburtstag der Hundefreu(n)de',
                    subtitel: 'am Samstag, 06. August 2011',
                    pics: [require('../images/SF2011_01.jpg'), require('../images/SF2011_02.jpg'),require('../images/IMG_5889.jpg'), require('../images/IMG_7064.jpg')],
                    text: 'Bei herrlichstem Wetter konnten Hunde und Halter einen wundervollen gemeinsamen Tag genießen. \nNachdem alle Gäste bei einem Gläschen Sekt begrüßt wurden, eröffnete Tierarzt Dr. Matzner das offizielle Programm. Er beantwortete den Hundlern jegliche Fragen rund um den Hund, wie z. B. zum richtigen Füttern und Impfen sowie zur Zeckenproblematik, und stand auch zur persönlichen Beratung noch den ganzen Tag zur Verfügung. \nAnschließend wurde uns die Hundesportart Obedience, „die hohe Schule der Unterordnung“ vorgestellt. Unsere Akteure, Elisabeth mit Ferro – Sepp mit Teddy – Christoph mit Moritz und Hans mit Vicko, zeigten trotz großer Nervosität eine wunderschöne Vorführung, die das Publikum sehr begeisterte. Herzlichen Dank an unsere tapferen Hunde und deren Halter!',
                    text1: 'Und dann waren alle dran! Beim ersten Wettbewerb „schneller als die Polizei erlaubt“ wurde der Hund prämiert, der am schnellsten zu seinem Frauchen oder Herrchen lief, das wild mit Leckerli und Spielzeug wedelnd am anderen Ende des Platzes stand. So mancher kam nur über Umwege an, aber auf jeden Fall hatten alle einen riesigen Spaß. \nDer zweite Wettbewerb „Teamwork ist alles“ entfachte vor allem bei den Hundehaltern einen gigantischen Ehrgeiz. Hier mussten Zwei- und Vierbeiner gemeinsam einen Parcours aus diversen Hürden, Tunnel, Wasserbecken etc. meistern. Die teilweise waghalsigen Stunts der Teilnehmer sorgten bei den Zuschauern für große Erheiterung. Am Ende kamen schließlich doch alle gesund und munter an, auch wenn mancher mit seinem Hund unterm Arm durchs Ziel raste! \nNach der glorreichen Siegerehrung war dann auch das Spanferkel fertig, das die komplette Familie Moosbauer über viele Stunden vorzüglichst für uns zubereitet hatte. Abschließend wurden die vielen Ereignisse noch bei einem gemütlichen Zusammensitzen ausführlich besprochen. Die einheitliche Meinung zum Tage: Das machen wir nächstes Jahr wieder!',
                },

                {
                    titel: '1. Stöberkurs mit Georg Weichselbaumer',
                    subtitel: 'am 15. Mai 2011',
                    pics: [require('../images/Stoeberkurs_10.jpg'),require('../images/Stoeberkurs_25.jpg')],
                    text: 'Das Wetter war zwar ziemlich kalt und teilweise nass, dennoch hatten alle Teilnehmer, Hunde sowie deren Halter, viel Spaß an dieser „Nasenarbeit“. Nach einer theoretischen Einführung lernte Georg Weichselbaumer den Teams einzeln auf sehr angenehme, ruhige Art und Weise die ersten Übungen zum korrekten Stöbern und Verweisen und ging dabei ganz individuell auf jedes Mensch-Hund-Team ein. So konnte jeder Hund auf artgerechte Weise, seinem Charakter und Temperament entsprechend, lernen, diese natürliche Beschäftigung korrekt umzusetzen – auch wenn’s mal etwas länger dauerte!',
                    text1: 'Nachdem uns Georg mit seinem Diensthund Jimmy zum Kursende vorführte, wie das Ganze professionell aussieht, stand er uns noch für jegliche Fragen rund um den Hund ausgiebig zur Verfügung. \n Da die maximale Teilnehmerzahl für den Kurs sehr schnell erreicht war und einige Interessenten somit nicht mehr teilnehmen konnten, wollen wir Georg Weichselbaumer für den Herbst zu einem zweiten Kurs einladen. Für die Teams aus dem ersten Kurs werden die Basiskenntnisse ausgebaut und die Schwierigkeitsstufen entsprechend erhöht. ',
                },
                // {
                //     titel: '2. Stöberkurs mit Georg Weichselbaumer',
                //     subtitel: 'am Sonntag, 13. November 2011',
                //     pics: [require('../images/Stoeberkurs_25.jpg')],
                //     text: 'Am 13. November 2011 fand der 2. Teil des Stöberkurses mit Georg Weichselbaumer hier am Außentrainingsplatz in Schönreit statt. Da die maximale Teilnehmerzahl beim 1. Kurs im Mai diesen Jahres sehr schnell erreicht war und einige Interessenten somit nicht mehr teilnehmen konnten, hatten wir beschlossen, Georg Weichselbaumer im Herbst zu einem zweiten Kurs einzuladen, der wiederum sehr schnell ausgebucht war. Für die Teams aus dem ersten Kurs wurden die bereits erlernten Basiskenntnisse überprüft und die Schwierigkeitsstufen entsprechend erhöht. Die „Neulinge“ (Hunde wie Halter) sahen dabei gebannt zu und setzten daraufhin die ersten Übungen zum korrekten Stöbern und Verweisen mit großer Begeisterung sehr schnell um.',
                //     text1: 'Bei schönstem Sonnenschein durften wir wieder einen sehr interessanten und lehrreichen Tag genießen. Vielen Dank an Georg!',
                //     // pdf: './pdfs/Schlegel2011.pdf'
                // },
                {
                    titel: 'Seminarwochenende mit dem schweizer Hundeexperten Hans Schlegel am 12. und 13. Februar 2011',
                    subtitel: 'in unserer Trainingshalle in Kastl',
                    pics: [require('../images/schlegel_train_2.jpg'), require('../images/schlegel_train_1.jpg'), require('../images/schlegel_train_3.jpg')],
                    text: 'Für den Workshop am Samstag mit dem Thema „Unerwünschte Verhaltensmuster“ konnte sich jeder Hundeliebhaber mit oder ohne Hund anmelden. Durch die genaue Mensch-Hund-Analyse von Hans Schlegel und seiner klaren und eindeutigen Trainingsmethode wurde den Teilnehmern dabei geholfen, eine harmonische Beziehung zu ihren Hunden aufzubauen, und somit bei unerwünschten Verhaltensmustern, wie Jagen, Leinenzerren, Ängstlichkeit oder Aggression sicherer mit der Situation umgehen und auf den Hund eingehen zu können. \n',
                    text1: 'Der Sonntag stand ganz im Zeichen der Hundesportfreunde. An dem „Exklusiven Sporthundetag“, der von Hans Schlegel regulär gar nicht mehr angeboten wird, konnten Hundesportler mit bereits erfolgreicher Turnierteilnahme in min. Klasse 1 teilnehmen. Zuschauer ohne Hund waren natürlich auch ohne Turniererfahrung willkommen. Die Themen „Motivationstheorie und Spannungsaufbau – Lernzielzerlegung – Sequenzarbeiten zur Förderung der positiven Erwartungshaltung – Hundeführerschulung und mentale Vorbereitung – Korrektes Führen und Lenken an Prüfungen“ wurden ausführlich und sehr individuell mit jedem Teilnehmer durchgearbeitet. \n \n An beiden Tagen wurde das angesetzte Kursende weit überzogen. Trotz eisiger Temperaturen wurden bis spät abends noch Unklarheiten und Probleme mit Hans Schlegel besprochen bis wirklich alle offenen Fragen geklärt waren und die Teilnehmer somit auch zu Hause und im Alltag auch weiterhin das Erlernte umsetzten können. Für uns alle war es ein sehr spannendes und interessantes Wochenende, an dem wir viel von den langjährigen Erfahrungen von Hans Schlegel lernen konnten. Wir würden uns sehr freuen, ihn wieder bei uns begrüßen zu dürfen.',
                    // pdf: './pdfs/Schlegel2011.pdf'
                },

            ]
        },
        {
            titel: "Kontakt / Anfahrt",
            path: "/kontakt",
        },
        {
            titel: "AGBs",
            path: "/agbs",
        },
        {
            titel: "Datenschutzerklärung",
            path: "/Datenschutz",
        },
        {
            titel: "Impressum",
            path: "/Impressum"
        }

    ]

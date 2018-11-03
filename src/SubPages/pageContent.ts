
export const pages = [
    {
        titel:'Junghunde',
        pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg')],
        text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
        path: '/junghunde',
    },
    {
        path: '/welpen',
        titel:'Welpen',
        pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg')],
        text: 'WelpenWelpenWelpenWelpenWelpenWelpenWelpenWelpenWelpenWelpen'
    }
]

export interface IMenueItem {
    titel: string,
    pics?: string[],
    text?: string,
    path?: string,
    subroutes?: IMenueItem[]
}
export const menue: IMenueItem[] = 
[
    {
        titel: "Sondertraing",
        subroutes:[
            {
                titel:'Junghunde',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                path: '/junghunde',
            },
            {
                titel:'Welpen',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                path: '/junghunde',
            },
            {
                titel:'Junghunde',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                path: '/junghunde',
            },
        ]
    },
    {
        titel: "Grundausbildung",
        subroutes:[
            {
                titel:'Junghunde',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                path: '/junghunde',
            },
            {
                titel:'Welpen',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                path: '/junghunde',
            },
            {
                titel:'Junghunde',
                pics: [require('../images/welpen1k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg'),require('../images/Welpen2k.jpg')],
                text: 'Wenn der Welpe ins „Flegelalter“ kommt, braucht es viel Geduld und Beständigkeit, ihm seinen Rang im Rudel klarzumachen. In dieser Entwicklungsphase will er täglich aufs Neue seine Grenzen ausloten. Durch unmissverständliche Kommandos und deutliche Körpersprache kann dem Hund geholfen werden, zu lernen, was erwünscht und was unerwünscht ist. Lernziele sind darüber hinaus lockeres An-der-Leine-Gehen und freies Bei-mir-Gehen – auch unter Ablenkung durch Artgenossen, andere Menschen etc. – sowie sicherer Rückruf und Freiablage.\nWir trainieren maximal sechs Hunde pro Gruppe/Stunde, um auf jedes Mensch-Hund-Team individuell eingehen zu können.',
                path: '/junghunde',
            },
        ]
    }
]

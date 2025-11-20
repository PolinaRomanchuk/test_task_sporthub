import Ski from '../assets/news/ski.png';
import FootBall from '../assets/news/football.png';
import Snowboard from '../assets/news/snowboard.png';

const DefaultTitle =
  'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?';
const DefaultText =
  'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...';
type News = {
  id: number;
  photo: string;
  date: string;
  tag: string;
  title: string;
  text: string;
  styled: boolean;
}[];

export const news: News = [
  {
    id: 1,
    photo: Snowboard,
    date: 'Сегодня',
    tag: 'болельщикам',
    title: DefaultTitle,
    text: DefaultText,
    styled: false,
  },
  {
    id: 2,
    photo: Ski,
    date: '09.07.19',
    tag: 'любительский_спорт',
    title: DefaultTitle,
    text: DefaultText,
    styled: false,
  },
  {
    id: 3,
    photo: FootBall,
    date: '09.07.19',
    tag: 'профессиональный_спорт',
    title: DefaultTitle,
    text: DefaultText,
    styled: true,
  },
];

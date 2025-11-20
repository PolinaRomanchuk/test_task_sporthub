import Trainer1 from '../assets/news/1.png';
import Trainer2 from '../assets/news/2.png';
import Trainer3 from '../assets/news/3.png';

const DEFAULT_NAME = 'Алексей Михайличенко';
const DEFAULT_TITLE = 'Главный тренер ф.к. Динамо';
const FIRST_QUOTE =
  'Сергей Корниленко станет играющим тренером «Крыльев советов»';
const SECOND_QUOTE = '«Динамо» как бы начинает работать заново';

type Trainer = {
  id: number;
  photo: string;
  name: string;
  title: string;
  quote: string;
}[];

export const trainers: Trainer = [
  {
    id: 1,
    photo: Trainer2,
    name: DEFAULT_NAME,
    title: DEFAULT_TITLE,
    quote: FIRST_QUOTE,
  },
  {
    id: 2,
    photo: Trainer3,
    name: DEFAULT_NAME,
    title: DEFAULT_TITLE,
    quote: SECOND_QUOTE,
  },
  {
    id: 3,
    photo: Trainer1,
    name: DEFAULT_NAME,
    title: DEFAULT_TITLE,
    quote: FIRST_QUOTE,
  },
  {
    id: 4,
    photo: Trainer2,
    name: DEFAULT_NAME,
    title: DEFAULT_TITLE,
    quote: SECOND_QUOTE,
  },
];

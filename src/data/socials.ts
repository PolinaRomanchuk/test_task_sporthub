import VK from '../assets/social/vk.svg?react';
import Facebook from '../assets/social/facebook.svg?react';
import Inst from '../assets/social/instagram.svg?react';
import YouTube from '../assets/social/youtube 1.svg?react';
import Telegram from '../assets/social/telegram.svg?react';
import TikTok from '../assets/social/tiktok.svg?react';
import Twitter from '../assets/social/twitter.svg?react';

type Social = {
  id: number;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  link: string;
}[];

export const socials: Social = [
  {
    id: 1,
    icon: VK,
    link: '',
  },
  {
    id: 2,
    icon: Facebook,
    link: '',
  },
  {
    id: 3,
    icon: Inst,
    link: '',
  },
  {
    id: 4,
    icon: YouTube,
    link: '',
  },
  {
    id: 5,
    icon: Telegram,
    link: '',
  },
  {
    id: 6,
    icon: TikTok,
    link: '',
  },
  {
    id: 7,
    icon: Twitter,
    link: '',
  },
];

import RoundVK from '../assets/footer/vk.svg?react';
import RoundFacebook from '../assets/footer/facebook.svg?react';
import RoundInst from '../assets/footer/instagram.svg?react';
import RoundYouTube from '../assets/footer/youtube.svg?react';
import RoundTelegram from '../assets/footer/telegram.svg?react';
import RoundTikTok from '../assets/footer/tiktok.svg?react';
import RoundTwitter from '../assets/footer/twitter.svg?react';

export const roundSocials: Social = [
  { id: 1, icon: RoundVK, link: '' },
  { id: 2, icon: RoundFacebook, link: '' },
  { id: 3, icon: RoundInst, link: '' },
  { id: 4, icon: RoundYouTube, link: '' },
  { id: 5, icon: RoundTelegram, link: '' },
  { id: 6, icon: RoundTikTok, link: '' },
  { id: 7, icon: RoundTwitter, link: '' },
];

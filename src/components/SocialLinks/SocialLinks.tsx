import type { ReactElement } from 'react';
import './links.scss';
import VK from '../../assets/footer/vk.svg?react';
import Facebook from '../../assets/footer/facebook.svg?react';
import Inst from '../../assets/footer/instagram.svg?react';
import YouTube from '../../assets/footer/youtube.svg?react';
import Telegram from '../../assets/footer/telegram.svg?react';
import TikTok from '../../assets/footer/tiktok.svg?react';
import Twitter from '../../assets/footer/twitter.svg?react';

const SocialLinks = (): ReactElement => {
  return (
    <div className="socials">
      <a className="socials__link" href="">
        <VK className="socials__icon" />
      </a>
      <a className="socials__link" href="">
        <Facebook className="socials__icon" />
      </a>
      <a className="socials__link" href="">
        <Inst className="socials__icon" />
      </a>
      <a className="socials__link" href="">
        <YouTube className="socials__icon" />
      </a>
      <a className="socials__link" href="">
        <Telegram className="socials__icon" />
      </a>
      <a className="socials__link" href="">
        <TikTok className="socials__icon" />
      </a>
      <a className="socials__link" href="">
        <Twitter className="socials__icon" />
      </a>
    </div>
  );
};
export default SocialLinks;

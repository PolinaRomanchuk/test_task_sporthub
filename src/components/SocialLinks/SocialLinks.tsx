import type { ReactElement } from 'react';
import './links.scss';
import VK from '../../assets/footer/vk.svg';
import Facebook from '../../assets/footer/facebook.svg';
import Inst from '../../assets/footer/instagram.svg';
import YouTube from '../../assets/footer/youtube.svg';
import Telegram from '../../assets/footer/telegram.svg';
import TikTok from '../../assets/footer/tiktok.svg';
import Twitter from '../../assets/footer/twitter.svg';

const SocialLinks = (): ReactElement => {
  return (
    <div className="socials">
      <img className="social-icon" src={VK} alt="vk" />
      <img className="social-icon" src={Facebook} alt="Facebook" />
      <img className="social-icon" src={Inst} alt="Facebook" />
      <img className="social-icon" src={YouTube} alt="YouTube" />
      <img className="social-icon" src={Telegram} alt="Telegram" />
      <img className="social-icon" src={TikTok} alt="TikTok" />
      <img className="social-icon" src={Twitter} alt="Twitter" />
    </div>
  );
};
export default SocialLinks;

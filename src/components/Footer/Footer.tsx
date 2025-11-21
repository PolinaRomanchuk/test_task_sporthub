import type { ReactElement } from 'react';
import './footer.scss';
import Logo from '../../assets/footer/logo.png';
import Company from '../../assets/footer/logo2.png';

import VK from '../../assets/footer/vk.svg';
import Facebook from '../../assets/footer/facebook.svg';
import Inst from '../../assets/footer/instagram.svg';
import YouTube from '../../assets/footer/youtube.svg';
import Telegram from '../../assets/footer/telegram.svg';
import TikTok from '../../assets/footer/tiktok.svg';
import Twitter from '../../assets/footer/twitter.svg';

const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="_container">
        <div className="footer__content">
          <div className="footer__info">
            <img src={Logo} alt="logo" className="footer__logo" />
            <span className="footer__nav news-tag">О проекте </span>
            <span className="footer__nav news-tag">Обратная связь</span>
            <div className="footer__ads">
              <span className="footer__ads-label">Реклама:</span>
              <span className="footer__ads-contact">ads@sporthub.news</span>
            </div>
          </div>
          <div className="footer__socials">
            <img className="footer__social-icon" src={VK} alt="vk" />
            <img
              className="footer__social-icon"
              src={Facebook}
              alt="Facebook"
            />
            <img className="footer__social-icon" src={Inst} alt="Facebook" />
            <img className="footer__social-icon" src={YouTube} alt="YouTube" />
            <img
              className="footer__social-icon"
              src={Telegram}
              alt="Telegram"
            />
            <img className="footer__social-icon" src={TikTok} alt="TikTok" />
            <img className="footer__social-icon" src={Twitter} alt="Twitter" />
          </div>
          <div className="footer__copyright">
            <span className="footer__copyright-text">© 2022 «Спортхаб»</span>
            <div className="footer__company">
              <img src={Company} alt="logo" className="footer__company-logo" />
              <span className="footer__company-text">
                Разработка сайта — компания PRAS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

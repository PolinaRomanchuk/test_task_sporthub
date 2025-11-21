import type { ReactElement } from 'react';
import './footer.scss';
import Logo from '../../assets/footer/logo.png';
import Company from '../../assets/footer/logo2.png';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="_container">
        <div className="footer__content">
          <div className="footer__info">
            <img src={Logo} alt="logo" className="footer__logo" />
            <span className="footer__nav text-lg-uppercase">О проекте </span>
            <span className="footer__nav text-lg-uppercase">
              Обратная связь
            </span>
            <div className="footer__ads ">
              <span className="footer__ads-label text-md-bold">Реклама:</span>
              <span className="footer__ads-contact text-xs-light">
                ads@sporthub.news
              </span>
            </div>
          </div>
          <SocialLinks />
          <div className="footer__copyright text-xs-light">
            <span className="footer__copyright-text">© 2022 «Спортхаб»</span>
            <div className="footer__company text-xs-light">
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

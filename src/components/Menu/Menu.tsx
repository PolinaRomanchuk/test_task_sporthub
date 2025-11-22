import { useEffect, type ReactElement } from 'react';
import './menu.scss';
import Logo from '../../assets/footer/logo.png';
import Cross from '../../assets/x.svg';
import { navigation } from '../../data/navigation';
import { sport } from '../../data/sports';
import SocialLinks from '../SocialLinks/SocialLinks';

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ isOpen, onClose }: MenuProps): ReactElement => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <div className={`menu ${isOpen ? 'menu--open' : ''} `}>
      <div className="_container">
        <div className="menu__content">
          <div className="menu__header">
            <img className="menu__logo" src={Logo} alt="logo" />
            <button className="menu__close" onClick={onClose}>
              <img src={Cross} alt="close" />
            </button>
          </div>

          <div className="menu__navigation">
            <nav className="menu__nav">
              <ul className="menu__list">
                {navigation.map((nav, i) => (
                  <li className="menu__item text-md-uppercase" key={i}>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="menu__nav menu__nav--sports">
              <ul className="menu__list">
                {sport.map((sp, i) => (
                  <li className="menu__item text-sm" key={i}>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      {sp.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="menu__nav text-md-uppercase">
              <a href="" target="_blank" rel="noopener noreferrer">
                <span className="menu__item">О проекте</span>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <span className="menu__item">Обратная связь</span>
              </a>
            </nav>
          </div>
          <div className="menu__socials">
            <SocialLinks />
          </div>

          <div className="menu__footer">
            <div className="menu__ads">
              <span className="menu__ads-label text-md-strong">
                Размещение рекламы:
              </span>
              <span className="menu__ads-email text-sm-light">
                ads@sporthub.news
              </span>
            </div>

            <div className="menu__subscribe">
              <span className="menu__subscribe-label text-md-strong">
                Подписка:
              </span>
              <div className="menu__subscribe-form">
                <input
                  className="menu__input text-sm-expanded"
                  type="text"
                  placeholder="Введите ваш email"
                />
                <button className="menu__button">Подписаться</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;

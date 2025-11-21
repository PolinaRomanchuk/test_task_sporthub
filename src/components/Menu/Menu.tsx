import { type ReactElement } from 'react';
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
                {navigation.map((nav) => (
                  <li className="menu__item font" key={nav.id}>
                    {nav.name}
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="menu__nav menu__nav--sports">
              <ul className="menu__list">
                {sport.map((sp) => (
                  <li className="menu__item usual-text" key={sp.id}>
                    {sp.name}
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="menu__nav font">
              <span className="menu__section-link">О проекте</span>
              <span className="menu__section-link">Обратная связь</span>
            </nav>
          </div>
          <div className="menu__socials">
            <SocialLinks />
          </div>

          <div className="menu__footer">
            <div className="menu__ads">
              <span className="menu__ads-label font-menu">
                Размещение рекламы:
              </span>
              <span className="menu__ads-email font-ads">
                ads@sporthub.news
              </span>
            </div>

            <div className="menu__subscribe">
              <span className="menu__subscribe-label font-menu">Подписка:</span>
              <div className="menu__subscribe-form">
                <input
                  className="menu__input"
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

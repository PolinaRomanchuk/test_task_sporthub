import { useState, type ReactElement } from 'react';
import './header.scss';
import Logo from '../../assets/logo.svg';
import Menu from '../Menu/Menu';

const Header = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header className="header">
        <div className="_container">
          <div className="header__content">
            <div className="header__menu">
              <div className="header__menu-wrapper">
                <div className="header__logo">
                  <img src={Logo} alt="logo" />
                </div>
                <nav className="header__navigation">
                  <ul className="header__navigation-list">
                    <li className="header__navigation-item nav-text">Review</li>
                    <li className="header__navigation-item nav-text">
                      Экстрим
                    </li>
                    <li className="header__navigation-item nav-text">
                      Легенды
                    </li>
                    <li className="header__navigation-item nav-text">
                      зож и туризм
                    </li>
                    <li className="header__navigation-item nav-text">Позірк</li>
                    <li className="header__navigation-item nav-text">Треш</li>
                    <button
                      className="header__burger"
                      onClick={() => {
                        setIsOpen((prev) => !prev);
                      }}
                    >
                      <div className="header__burger-icon">
                        <span className="header__burger-line"></span>
                        <span className="header__burger-line"></span>
                      </div>
                    </button>
                  </ul>
                </nav>
              </div>
              <div className="header__headline">
                <span className="header__headline-tag nav-text">#Экстрим</span>
                <h1 className="header__headline-title">
                  Юрий Поклад: «Динамо»<br></br> как бы начинает работать заново
                </h1>
              </div>
            </div>

            <nav className="header__sport-navigation">
              <ul className="header__sport-navigation-list">
                <li className="header__sport-navigation-item usual-text">
                  Футбол
                </li>
                <li className="header__sport-navigation-item usual-text">
                  Хоккей
                </li>
                <li className="header__sport-navigation-item usual-text">
                  Биатлон
                </li>
                <li className="header__sport-navigation-item usual-text">
                  Теннис
                </li>
                <li className="header__sport-navigation-item usual-text">
                  Гандбол
                </li>
                <li className="header__sport-navigation-item usual-text">
                  Баскетбол
                </li>
                <li className="header__sport-navigation-item usual-text">
                  Бокс
                </li>
                <li className="header__sport-navigation-item usual-text">
                  Легкая атлетика
                </li>
                <li className="header__sport-navigation-item usual-text">
                  Другое
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Menu isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default Header;

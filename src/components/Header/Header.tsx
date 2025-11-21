import { useState, type ReactElement } from 'react';
import './header.scss';
import Logo from '../../assets/logo.svg';
import Menu from '../Menu/Menu';
import { navigation } from '../../data/navigation';
import { sport } from '../../data/sports';

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
                    {navigation.map((item) => (
                      <li
                        className="header__navigation-item text-xs-uppercase"
                        key={item.id + Math.random()}
                      >
                        {item.name}
                      </li>
                    ))}
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
                <span className="header__headline-tag text-xs-uppercase">
                  #Экстрим
                </span>
                <h1 className="header__headline-title">
                  Юрий Поклад: «Динамо»<br></br> как бы начинает работать заново
                </h1>
              </div>
            </div>

            <nav className="header__sport-navigation">
              <ul className="header__sport-navigation-list">
                {sport.map((item) => (
                  <li
                    className="header__sport-navigation-item text-sm"
                    key={item.id + Math.random()}
                  >
                    {item.name}
                  </li>
                ))}
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

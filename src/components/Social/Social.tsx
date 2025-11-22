import type { ReactElement } from 'react';
import { socials } from '../../data/socials';

import './social.scss';

const Social = (): ReactElement => {
  return (
    <section className="social">
      <div className="_container">
        <div className="social__content">
          <div className="social__section">
            <span className="social__title text-lg-uppercase">Соцсети</span>
            <div className="social__links">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="social__links-icon" />
                </a>
              ))}
            </div>
          </div>
          <div className="social__section">
            <span className="social__title text-lg-uppercase">Подписка</span>
            <div className="social__form">
              <input
                type="email"
                placeholder="Введите ваш email"
                className="social__input text-sm-soft"
              />
              <button className="social__button">Подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Social;

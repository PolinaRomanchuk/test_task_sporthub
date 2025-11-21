import type { ReactElement } from 'react';
import VK from '../../assets/social/vk.svg';
import Facebook from '../../assets/social/facebook.svg';
import Inst from '../../assets/social/instagram.svg';
import YouTube from '../../assets/social/youtube 1.svg';
import Telegram from '../../assets/social/telegram.svg';
import TikTok from '../../assets/social/tiktok.svg';
import Twitter from '../../assets/social/twitter.svg';

import './social.scss';

const Social = (): ReactElement => {
  return (
    <section className="social">
      <div className="_container">
        <div className="social__content">
          <div className="social__block">
            <span className="news-tag">Соцсети</span>
            <div className="social__links">
              <img src={VK} alt="vk" />
              <img src={Facebook} alt="Facebook" />
              <img src={Inst} alt="Facebook" />
              <img src={YouTube} alt="YouTube" />
              <img src={Telegram} alt="Telegram" />
              <img src={TikTok} alt="TikTok" />
              <img src={Twitter} alt="Twitter" />
            </div>
          </div>
          <div className="social__block">
            <span className="news-tag">Подписка</span>
            <div className="social__subscription">
              <input
                type="text"
                placeholder="Введите ваш email"
                className="social__input text-sm-soft"
              />{' '}
              <button className="social__button">Подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Social;

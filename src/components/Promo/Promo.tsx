import type { ReactElement } from 'react';
import './promo.scss';

const Promo = (): ReactElement => {
  return (
    <section className="promo">
      <div className="_container">
        <div className="promo__content">
          <div className="promo__text">
            <h2>Экстрим</h2>
            <h6 className="promo__news">
              Интервью с Юрием Покладом. Полный список всех медалей Беларуси на
              Европейских играх.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promo;

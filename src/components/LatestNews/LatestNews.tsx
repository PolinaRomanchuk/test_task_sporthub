import type { ReactElement } from 'react';
import NewsCard from './NewsCard';
import { news } from '../../data/news';
import { trainers } from '../../data/trainer';
import './news.scss';
import TrainerCard from './TrainerCard';

const combinedNews = [news[0], news[1], news[2], news[0], news[1], news[2]];

const LatestNews = (): ReactElement => {
  return (
    <section className="news">
      <div className="_container">
        <div className="news__content">
          <div className="news__tag news-tag">
            <span>Последнее</span>
          </div>

          <div className="news__cards-list">
            {combinedNews.slice(0, 4).map((nw) => (
              <NewsCard
                key={nw.id + Math.random()}
                photo={nw.photo}
                date={nw.date}
                tag={nw.tag}
                title={nw.title}
                text={nw.text}
                styled={nw.styled}
              />
            ))}
          </div>

          <div className="news__trainers-list">
            {trainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                photo={trainer.photo}
                name={trainer.name}
                title={trainer.title}
                quote={trainer.quote}
              />
            ))}
          </div>
          <div className="news__cards-list news__cards-list--bottom">
            {combinedNews.slice(4).map((nw) => (
              <NewsCard
                key={nw.id + Math.random()}
                photo={nw.photo}
                date={nw.date}
                tag={nw.tag}
                title={nw.title}
                text={nw.text}
                styled={nw.styled}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestNews;

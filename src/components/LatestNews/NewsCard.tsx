import type { ReactElement } from 'react';
import './newscard.scss';

type NewsCardProps = {
  photo: string;
  date: string;
  tag: string;
  title: string;
  text: string;
  styled: boolean;
};

const NewsCard = ({
  photo,
  date,
  tag,
  title,
  text,
  styled,
}: NewsCardProps): ReactElement => {
  return (
    <div className={`card ${styled ? 'card--styled' : ''}`}>
      <img src={photo} alt="photo" className="card__image" />
      <div className="card__content">
        <div className="card__info">
          <span className="card__date date">{date} |</span>
          <h5 className="card__tag">#{tag}</h5>
        </div>
        <h3 className="card__title">{title}</h3>
        <h6 className="card__text">{text}</h6>
      </div>
    </div>
  );
};
export default NewsCard;

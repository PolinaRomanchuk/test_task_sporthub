import type { ReactElement } from 'react';
import Mark from '../../assets/news/mark.png';
import './trainer.scss';

type TrainerCardProps = {
  photo: string;
  name: string;
  title: string;
  quote: string;
};

const TrainerCard = ({
  photo,
  name,
  title,
  quote,
}: TrainerCardProps): ReactElement => {
  return (
    <div className="trainer-card">
      <div className="trainer-card__images">
        <img className="trainer-card__mark" src={Mark} alt="mark" />
        <img className="trainer-card__photo" src={photo} alt="photo" />
      </div>
      <h4 className="trainer-card__name">{name}</h4>
      <h5 className="trainer-card__title">{title}</h5>
      <h6 className="trainer-card__quote">{quote}</h6>
    </div>
  );
};
export default TrainerCard;

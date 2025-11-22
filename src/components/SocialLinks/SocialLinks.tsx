import type { ReactElement } from 'react';
import './links.scss';
import { roundSocials } from '../../data/socials';

const SocialLinks = (): ReactElement => {
  return (
    <div className="socials">
      {roundSocials.map((social) => (
        <a
          key={social.id}
          className="socials__link"
          href={social.link}
          rel="noopener noreferrer"
        >
          <social.icon className="socials__icon" />
        </a>
      ))}
    </div>
  );
};
export default SocialLinks;

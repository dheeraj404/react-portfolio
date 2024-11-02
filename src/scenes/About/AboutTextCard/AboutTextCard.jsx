import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hey there! I’m{' '}
        <span className={s.purple}>Dheeraj Kumar Maurya,</span> <br />
        a final year student pursuing my B.Tech in Information Technology from the Indian Institute of Engineering Science and Technology, Shibpur. I’m also a developer who’s pretty handy with the frontend... and sometimes the backend... well, maybe less backend and more frontend, but hey, it all depends on the day!
        <br />
        <br />
        When I’m not coding, you can catch me on LeetCode, battling it out with algorithms for fun (and maybe a little bit of pain).
        <br />
        <br />
        My hobbies beyond coding include:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Trying to look like a badminton pro (keyword: trying).
        </li>
        <li className={s.aboutActivity}>
          - Chasing down the latest tech trends (and getting way too excited).
        </li>
        <li className={s.aboutActivity}>
          - Binge-reading articles that range from serious topics to... memes.
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;

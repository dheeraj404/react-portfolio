import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiCss3 } from '@react-icons/all-files/di/DiCss3';
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <BsTerminalFill />
      </li>
      {/* Add C++ icon here if available, otherwise, you may choose to list it without an icon */}
    </ul>
  );
};

export default TechSkills;

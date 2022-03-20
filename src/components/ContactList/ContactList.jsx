import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import s from "./ContactList.module.scss";

const ContactList = ({ filterContactsList, onClickDel }) => {
  const { t } = useTranslation();

  return (
    <ul className={s.contacts__list}>
      {filterContactsList.map(({ name, number, id }) => (
        <li key={id} className={s.contacts__item}>
          <p className={s.contacts__text}>
            {name}: <span className={s.contacts__number}>{number}</span>
          </p>
          <button className="btn" onClick={() => onClickDel(id)} type="button">
            {t("del-btn")}
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContactsList: PropTypes.array,
  onClickDel: PropTypes.func,
};

export default ContactList;

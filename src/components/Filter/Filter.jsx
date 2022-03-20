import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import s from "./Filter.module.scss";

const Filter = ({ onChangeValue, filter }) => {
  const { t } = useTranslation();
  return (
    <div className={s.filter}>
      <label className={s.filter__search}>
        {t("filter")}
        <input
          className={s.filter__input}
          onChange={onChangeValue}
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChangeValue: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;

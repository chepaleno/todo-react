const BoobItem = (props) => {
  const {
    id,
    title,
    author,
    year,
    isRead,
    onSuccessBoobItemComplete,
    onDeleteBoobItem,
  } = props;
  return (
    <li className="boobListItem">
      <input
      className="boob__input__is__read"
        id={id}
        type="checkbox"
        checked={isRead}
        onChange={(e) => onSuccessBoobItemComplete(e.target.checked, id)}
      />
      <label htmlFor="boob-item__label">
        {title}, {author}, {year} 
      </label>
      <button className="boob__delete__button" onClick={() => onDeleteBoobItem(id)}></button>
    </li>
  );
};

export default BoobItem;

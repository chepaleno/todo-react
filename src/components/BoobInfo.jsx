const BoobInfo = (props) => {
  const { boobs, } = props;
  const filtredBoobs = boobs.filter((boob) => boob.isRead === true)
  return (
    <div className="boob__stats">
      Всего книг: {boobs.length}, Прочитано: {filtredBoobs.length}
    </div>
  );
};

export default BoobInfo;

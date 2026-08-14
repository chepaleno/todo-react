import BoobItem from "./BoobItem";

const BoobList = (props) => {
  const { boobs = [], onSuccessBoobItemComplete, onDeleteBoobItem } = props;
  return (
    <ul>
      {boobs.map((boob) => (
        <BoobItem 
        key={boob.id}
        id={boob.id}
        title={boob.title}
        author={boob.author}
        year={boob.year}
        isRead={boob.isRead}
        onSuccessBoobItemComplete={onSuccessBoobItemComplete}
        onDeleteBoobItem={onDeleteBoobItem}
        />
      ))}
    </ul>
  );
};

export default BoobList;

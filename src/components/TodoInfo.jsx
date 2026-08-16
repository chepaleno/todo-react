import { memo } from "react";

const TodoInfo = (props) => {
  console.log('TodoInfo');
  
  const {
    Total,
    Done,
    OnDeleteAllTasksButtonClick
  } = props;
  const isHasTasks = Total > 0;
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Из {Total} сделано {Done}
      </div>
      {isHasTasks && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={OnDeleteAllTasksButtonClick}
        >
          Delete all
        </button>
      )}
    </div>
  );
};

export default memo(TodoInfo);
// export default TodoInfo;

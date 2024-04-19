import {FC} from "react";
import Button from "../UI/Button/Button";
import IconIncrease from "../icons/IconIncrease";
import IconDecrease from "../icons/IconDecrease";
import IconEdit from "../icons/IconEdit";
import IconDelete from "../icons/IconDelete";
import {useDispatch} from "react-redux";
import {deleteTask, editTask} from "../../store/slices/tasksListSlice";
import './index.css';

const ActionsMenu: FC = () => {
  const dispatch = useDispatch();
  function handleEditTask(key, value) {
      console.log('handleEditTask')
    dispatch(editTask({ key: key, value: value}))
  }
  function handleDeleteTask() {
      console.log('handleDeleteTask')
    dispatch(deleteTask())
  }
  return (
      <ul className='action-list'>
        <li className='action-list__item'>
          <Button onClick={() => handleEditTask('pomodoro', 'increase')} variant='light' className='action-list__button'>
            <IconIncrease/>
            <div>Увеличить</div>
          </Button>
        </li>
        <li className='action-list__item'>
          <Button onClick={() => handleEditTask('pomodoro', 'decrease')} variant='light' className='action-list__button'>
            <IconDecrease/>
            <div>Уменьшить</div>
          </Button>
        </li>
        <li className='action-list__item'>
          <Button variant='light' className='action-list__button'>
            <IconEdit/>
            <div>Редактировать</div>
          </Button>
        </li>
        <li className='action-list__item'>
          <Button onClick={handleDeleteTask} variant='light' className='action-list__button'>
            <IconDelete/>
            <div>Удалить</div>
          </Button>
        </li>
      </ul>
  )
}
export default ActionsMenu;

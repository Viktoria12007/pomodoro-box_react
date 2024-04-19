import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import IconMenu from "../icons/IconMenu";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import {selectLengthTasks, selectTask, selectTasks, selectTotalTime} from "../../store/slices/tasksListSlice";
import ActionsMenu from "../ActionsMenu/ActionsMenu";
import './index.css';

const TasksList: FC = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [coordsDropdown, setCoordsDropdown] = useState({
        top: 0,
        left: 0,
    });

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    const lengthTasks = useSelector(selectLengthTasks);
    const totalTime = useSelector(selectTotalTime);
    useEffect(() => {
        localStorage.pomodoroTasks = JSON.stringify(tasks)
    }, [tasks])

    function getCoords(e) {
        const button = e.target.closest('.button')
        const box = button.getBoundingClientRect()
        if (box) {
            setCoordsDropdown({
                top: box.top + window.scrollY + box.height + 5,
                left: box.left + window.scrollX - 60,
            })
        }
        setOpenDropdown(true);
    }
    function handleClickMenuButton(e, task) {
        console.log('handleClickMenuButton')
        getCoords(e)
        dispatch(selectTask(task))
    }
    function hideMenu() {
        console.log('hideMenu')
        setOpenDropdown(false)
    }
  return (
      lengthTasks && <div>
                        <ul className='tasks-list'>
                            {tasks.map((task) => {
                                return (
                                    <li key={task.id} className='tasks-list__item'>
                                        <div className='tasks-list__pomodoro'>{task.pomodoro}</div>
                                        <div className='tasks-list__task'>{task.name}</div>
                                        <Button onClick={(e) => handleClickMenuButton(e, task)} onBlur={hideMenu} className='tasks-list__button' variant='light'>
                                            <IconMenu/>
                                        </Button>
                                    </li>
                                )
                            })}
                        </ul>
                        <Dropdown parentOpen={openDropdown} newStyle={coordsDropdown}>
                          <ActionsMenu/>
                        </Dropdown>
                        <div className='tasks-list__total-time'>{ `${totalTime} мин` }</div>
                    </div>
  )
}
export default TasksList;

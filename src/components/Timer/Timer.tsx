import {FC, useEffect, useState} from "react";
import Button from "../UI/Button/Button";
import IconIncreaseTime from "../icons/IconIncreaseTime";
import {selectFirstTask} from "../../store/slices/tasksListSlice";
import {useSelector} from "react-redux";
import "./index.css";

// const storeListTasks = useListTasksStore()
// const storePomodoro = usePomodoroStore()
// const { firstTask } = storeToRefs(storeListTasks)
// const { pomodoro } = storeToRefs(storePomodoro)
// let seconds = ref(0)
// setInterval(() => {
//   seconds.value++
// }, 1000)
const Timer: FC = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
      console.log('useee')
      const intervalForTimer = setInterval(() => {
          setSeconds(seconds => seconds + 1)
      }, 1000)
      return () => clearInterval(intervalForTimer);
  }, [])
  // setInterval(() => {
  //   setSeconds(seconds + 1)
  // }, 1000)

  const firstTask = useSelector(selectFirstTask);

  function handleStart() {
    console.debug('start');
  }
  function handleStop() {
    console.debug('stop');
  }
  return (
        <div className='timer'>
          <div className='timer__header'>
            <div className='timer__header-task'>{ firstTask?.name || '' }</div>
            <div>{ `Помидор ${firstTask?.pomodoro}` || '' }</div>
          </div>
          <div className='timer__content'>
            {firstTask ? <>
                  <div className='timer__time-wrap'>
                    <div className='timer__time'>{seconds}</div>
                    <Button className='timer__increase-button' variant='light'>
                      <IconIncreaseTime className='timer__icon'/>
                    </Button>
                  </div>
                  <div className='timer__task'>
                    <span className='timer__task_gray'>Задача 1 - </span>
                    <span>{firstTask.name}</span>
                  </div>
                  <div className='timer__action-wrap'>
                    <Button onClick={handleStart}>Старт</Button>
                    <Button onClick={handleStop} variant='outline'>Стоп</Button>
                  </div>
                </>
                : <div>Задач пока нет!</div>
            }
          </div>
        </div>
  )
}
export default Timer;

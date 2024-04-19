import Button from "../UI/Button/Button";
import {FC, useEffect, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/slices/tasksListSlice";
import "./index.css";

// const store = useListTasksStore()
// const { addTask } = store
// const nameTask = ref('')
// const resolveValidation = ref(false)
//
// const validation = computed(() => {
//   if (nameTask.value) {
//     if (nameTask.value.length > 0 && nameTask.value.length < 2) {
//       return 'Название задачи должно содержать минимум 2 символа!'
//     } else if (nameTask.value.length > 40) {
//       return 'Название задачи должно содержать максимум 40 символов!'
//     }
//     return ''
//   }
//   return 'Введите название задачи!'
// })
// watch(nameTask, () => {
//   resolveValidation.value = true
// }, {
//   once: true
// })

const AddTaskForm: FC = () => {
  const [nameTask, setNameTask] = useState('');
  const [resolveValidation, setResolveValidation] = useState(false);
  useEffect(() => {
    setResolveValidation(true)
  }, [nameTask])
  const validation = useMemo(() => {
    if (nameTask) {
      if (nameTask.length > 0 && nameTask.length < 2) {
        return 'Название задачи должно содержать минимум 2 символа!'
      } else if (nameTask.length > 40) {
        return 'Название задачи должно содержать максимум 40 символов!'
      }
      return ''
    }
    return 'Введите название задачи!'
  }, [nameTask])

  const dispatch = useDispatch()

  function handleInputNameTask(e) {
    setNameTask(e.target.value.trim());
  }
  function handleAddTask(e) {
    e.preventDefault();
    dispatch(addTask({
      id: self.crypto.randomUUID(),
      name: nameTask,
      pomodoro: 1,
    }))
    setNameTask('');
    // console.log(e.target);
    // console.log(e.target.reset);
    // e.target.reset()
  }
  return (
    <form onSubmit={handleAddTask} className='add-task-form'>
      <input value={nameTask} onInput={handleInputNameTask} placeholder='Название задачи' className='add-task-form__input'/>
      { validation && resolveValidation && <div className='add-task-form__validation'>{validation}</div> }
      <Button type='submit' disabled={!!validation}>Добавить</Button>
    </form>
  )
}
export default AddTaskForm;

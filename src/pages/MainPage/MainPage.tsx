import {FC} from "react";
import Description from "../../components/Description/Description";
import './index.css';
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import TasksList from "../../components/TasksList/TasksList";
import Timer from "../../components/Timer/Timer";

const MainPage: FC = () => {
  return (
      <div className='main__wrap'>
        <div className='main__left-column'>
          <Description/>
          <AddTaskForm/>
          <TasksList/>
        </div>
        <Timer/>
      </div>
  )
}
export default MainPage;

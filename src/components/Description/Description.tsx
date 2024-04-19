import {FC} from "react";
import './index.css';

const Description: FC = () => {
  return (
    <>
      <h2 className='title description__title'>Ура! Теперь можно начать работать:</h2>
      <ul className='description-list'>
        <li className='description-list__item'>Выберите категорию и напишите название текущей задачи</li>
        <li className='description-list__item'>Запустите таймер («помидор»)</li>
        <li className='description-list__item'>Работайте пока «помидор» не прозвонит</li>
        <li className='description-list__item'>Сделайте короткий перерыв (3-5 минут)</li>
        <li className='description-list__item'>Продолжайте работать «помидор» за «помидором», пока задача не будут
          выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
        </li>
      </ul>
    </>
  )
}
export default Description;

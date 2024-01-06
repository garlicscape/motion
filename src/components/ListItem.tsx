import { Lists } from '../App';
//import { HandleList } from './List';

export default function ListItem({
  list,
  handleDelete,
}: {
  list: Lists;
  handleDelete: Function;
}) {
  const { id, title, content, clickedButton } = list;

  return (
    <div className='flex justify-between p-2'>
      {(clickedButton === 'IMAGE' || clickedButton === 'VIDEO') && (
        <div className='flex'>
          {clickedButton === 'IMAGE' && <img src={content} />}
          {clickedButton === 'VIDEO' && (
            <video controls>
              <source src={content} />
            </video>
          )}
          <span>{title}</span>
        </div>
      )}
      {(clickedButton === 'MEMO' || clickedButton === 'TASK') && (
        <div className='flex flex-col'>
          <span>{title}</span>
          {clickedButton === 'MEMO' && <span>{content}</span>}
          {clickedButton === 'TASK' && (
            <div>
              <input id='content' type='checkbox'></input>
              <label htmlFor='content'>{content}</label>
            </div>
          )}
        </div>
      )}
      <button onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}

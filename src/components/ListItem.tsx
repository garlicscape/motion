import { Lists } from '../App';

export default function ListItem({
  list,
  handleDelete,
}: {
  list: Lists;
  handleDelete: Function;
}) {
  const { id, title, content, clickedButton } = list;

  return (
    <div className='flex justify-between p-2 '>
      {(clickedButton === 'IMAGE' || clickedButton === 'VIDEO') && (
        <div className='flex'>
          {clickedButton === 'IMAGE' && (
            <img
              src={content}
              alt='insertedImg'
              className='max-w-80 max-h-80'
            />
          )}
          {clickedButton === 'VIDEO' && (
            <video controls className='max-w-96'>
              <source src={content} />
            </video>
          )}
          <span className='pl-2 text-lg font-bold'>{title}</span>
        </div>
      )}
      {(clickedButton === 'MEMO' || clickedButton === 'TASK') && (
        <div className='flex flex-col'>
          <span className='font-bold'>{title}</span>
          {clickedButton === 'MEMO' && (
            <span className='my-4 text-lg'>{content}</span>
          )}
          {clickedButton === 'TASK' && (
            <div className='flex'>
              <input id='content' type='checkbox' className='ml-2'></input>
              <label htmlFor='content' className='pl-2 my-3 text-lg'>
                {content}
              </label>
            </div>
          )}
        </div>
      )}
      <button className='self-start' onClick={() => handleDelete(id)}>
        X
      </button>
    </div>
  );
}

import { Lists } from '../App';
import ListItem from './ListItem';

export default function List({
  lists,
  setLists,
}: {
  lists: Lists[];
  setLists: React.Dispatch<React.SetStateAction<Lists[]>>;
}) {
  const hadleDelete = (deleteListId: string) => {
    setLists(lists.filter((list) => list.id !== deleteListId));
  };

  return (
    <>
      <ul className='mt-7 bg-white w-1/2 h-[500px] rounded-l-lg'>
        {lists.map((list) => (
          <li key={list.id}>
            <ListItem list={list} handleDelete={hadleDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}

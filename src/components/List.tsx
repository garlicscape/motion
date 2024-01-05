import { Lists } from '../App';
import ListItem from './ListItem';

export default function List({ lists }: { lists: Lists[] }) {
  return (
    <>
      <ul className='mt-7 bg-white w-1/2 h-[500px] rounded-l-lg'>
        {lists.map((list) => (
          <li key={list.id}>
            <ListItem
              title={list.title}
              content={list.content}
              clickedButton={list.clickedButton}
            />
          </li>
        ))}
      </ul>
      ;
    </>
  );
}

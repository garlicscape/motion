import { Lists } from '../App';
import ListItem from './ListItem';
import { useRef } from 'react';

export default function List({
  lists,
  setLists,
}: {
  lists: Lists[];
  setLists: React.Dispatch<React.SetStateAction<Lists[]>>;
}) {
  const dragItemIdx = useRef<number>(0);
  const enteredIdx = useRef<number>(0);

  const hadleDelete = (deleteListId: string) => {
    setLists(lists.filter((list) => list.id !== deleteListId));
  };

  const handleDragStart = (draggedIdx: number) => {
    dragItemIdx.current = draggedIdx;
  };

  const handleDragging = (index: number) => {
    enteredIdx.current = index;
  };

  const handleDragEnd = () => {
    if (dragItemIdx.current === enteredIdx.current) return;
    const newList = [...lists];
    const movedItem: Lists = lists[dragItemIdx.current];

    newList.splice(dragItemIdx.current, 1);
    newList.splice(enteredIdx.current, 0, movedItem);
    setLists(newList);

    dragItemIdx.current = 0;
    enteredIdx.current = 0;
  };

  return (
    <>
      <ul className='mt-7 bg-white w-1/2 h-[500px] rounded-l-lg'>
        {lists.map((list, index) => (
          <li
            key={list.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragging(index)}
            onDragEnd={() => handleDragEnd()}
          >
            <ListItem list={list} handleDelete={hadleDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}

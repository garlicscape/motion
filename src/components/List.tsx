import { useState } from 'react';

type Lists = {
  title: string;
  content: string;
};

export default function List() {
  const [lists, setLists] = useState<Lists[]>([]);

  return (
    <>
      <ul className='mt-7 bg-white w-1/2 h-[500px] rounded-l-lg'>List</ul>;
    </>
  );
}

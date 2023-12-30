export default function Navbar() {
  return (
    <nav className='text-center flex gap-10'>
      <button className='bg-white w-20 p-2 rounded-md font-medium'>
        IMAGE
      </button>
      <button className='bg-white w-20 rounded-md font-medium'>VIDEO</button>
      <button className='bg-white w-20 rounded-md font-medium'>NOTE</button>
      <button className='bg-white w-20 rounded-md font-medium'>TASK</button>
    </nav>
  );
}

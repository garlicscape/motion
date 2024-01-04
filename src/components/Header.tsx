import { NavbarButtons } from '../App';

export default function Header({
  navbarButtons,
  setClickedButton,
}: {
  navbarButtons: NavbarButtons;
  setClickedButton: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const clicked = e.currentTarget.innerHTML;
    //console.log(e.currentTarget.innerHTML);
    setClickedButton(clicked);
  };
  return (
    <header className='flex flex-col items-center'>
      <h1 className='mt-12 mb-10 text-7xl text-white'>MOTION</h1>
      <ul className='text-center flex gap-10'>
        {navbarButtons.map((button, index) => (
          <li key={index}>
            <button
              onClick={handleClick}
              className='p-2 bg-white w-20 rounded-md font-medium'
            >
              {button}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

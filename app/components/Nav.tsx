import Link from 'next/link';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Agenda',
    path: '/agenda',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Personal Goals',
    path: '/goals',
  },
];

const Nav = () => {
  return (
    <div className='bg-zinc-800 w-full h-10 px-3 gap-3 text-white flex flex-row items-center'>
      {links.map((link) => (
        <Link href={link.path} className='hover:text-blue-500' key={link.name}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default Nav;

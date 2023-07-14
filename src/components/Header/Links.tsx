import Link from 'next/link'

export const links = [
  {
    path: '#profile',
    title: 'Profil',
  },
  {
    path: '#information',
    title: 'Informasi',
  },
  {
    path: '#galery',
    title: 'Galeri',
  },
]

export default function Links() {
  return (
    <ul className='flex gap-8'>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className='text-base font-medium text-gray-600 hover:text-green-500'
        >
          {link.title}
        </Link>
      ))}
    </ul>
  )
}

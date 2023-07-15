interface Props {
  title: string
  desc: string
}

export default function Card({ title, desc }: Props) {
  return (
    <div className='w-full bg-gray-200 p-6'>
      <h1 className='text-xl lg:text-4xl font-semibold'>{title}</h1>
      <p className='text-base'>{desc}</p>
    </div>
  )
}

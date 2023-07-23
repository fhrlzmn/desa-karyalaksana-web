import Image, { StaticImageData } from 'next/image'

interface Props {
  title: string
  date: string
  description: string
  image: StaticImageData
}

export default function InformationItem({
  title,
  date,
  description,
  image,
}: Props) {
  return (
    <article className='w-full p-6 flex flex-col lg:flex-row gap-6 bg-gray-200 hover:scale-[1.005] transition duration-100'>
      <Image src={image} alt={title} width={200} />
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='text-sm text-slate-700'>{date}</p>
        <p className='text-base clip'>{description}</p>
      </div>
    </article>
  )
}

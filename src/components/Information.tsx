import InformationItem from './Information/InformationItem'

import { informations } from './Information/informations'

export default function Information() {
  return (
    <div id='information' className='min-h-screen w-full px-12 py-32'>
      <h1 className='text-3xl lg:text-6xl font-semibold'>Informasi Terkini</h1>
      <div className='flex flex-col gap-6 mt-12'>
        {informations.map((information) => (
          <InformationItem
            key={information.id}
            title={information.title}
            date={information.date}
            description={information.description}
            image={information.image}
          />
        ))}
      </div>
    </div>
  )
}

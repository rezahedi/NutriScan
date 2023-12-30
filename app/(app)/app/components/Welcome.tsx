import Image from 'next/image'

function Welcome({name}: {name: string}) {
  return (
    <div className='flex gap-2 items-center justify-between'>
      <div>
        <h2 className='text-xl font-semibold text-primary'>Hello, {name} 👋</h2>
        <p className='font-light text-text-1'>What groceries you want to buy today?</p>
      </div>
      <Image src={`https://api.dicebear.com/7.x/micah/png?seed=${name}&flip=true`} alt="Avatar" width="48" height="48" className='rounded-full bg-background-1' />
    </div>
  )
}

export default Welcome
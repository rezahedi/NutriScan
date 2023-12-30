
function Stats() {
  return (
    <div className='flex gap-4 items-center justify-between text-center border-2 p-4 border-background-1 rounded-xl'>
      <div className='flex-1'>
        <b className='text-accent text-lg font-bold'>12</b>
        <div className='text-xs font-normal'>Products</div>
      </div>
      <div className='flex-1'>
        <b className='text-accent text-lg font-bold'>312</b>
        <div className='text-xs font-normal'>Calories</div>
      </div>
      <div className='flex-1'>
        <b className='text-accent text-lg font-bold'>45</b>
        <div className='text-xs font-normal'>Fatty</div>
      </div>
      <div className='flex-1'>
        <b className='text-accent text-lg font-bold'>89</b>
        <div className='text-xs font-normal'>Organic</div>
      </div>
    </div>
  )
}

export default Stats
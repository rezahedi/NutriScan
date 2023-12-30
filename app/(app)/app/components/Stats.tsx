
function Stats() {
  return (
    <div className='flex gap-4 items-center justify-between text-center border-2 p-4 border-background-1 rounded-xl'>
      <div className='flex-1'>
        <b className='text-primary text-lg font-bold'>12</b>
        <div className='text-xs font-normal text-text-2'>Products</div>
      </div>
      <div className='flex-1'>
        <b className='text-primary text-lg font-bold'>312</b>
        <div className='text-xs font-normal text-text-2'>Calories</div>
      </div>
      <div className='flex-1'>
        <b className='text-primary text-lg font-bold'>45</b>
        <div className='text-xs font-normal text-text-2'>Fatty</div>
      </div>
      <div className='flex-1'>
        <b className='text-primary text-lg font-bold'>89</b>
        <div className='text-xs font-normal text-text-2'>Organic</div>
      </div>
    </div>
  )
}

export default Stats
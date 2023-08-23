const CreateForm = ({ onCreate }) => {
  function handleSubmit(event) {
    event.preventDefault()
    const standInfo = {
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.min.value),
      maximum_customers_per_hour: parseInt(event.target.max.value),
      average_cookies_per_sale: parseFloat(event.target.avg.value)
    }
    onCreate(standInfo)
    event.target.reset()
  }
  return (
    <>
      <form
        className='p-2 mx-auto my-10 rounded-md'
        style={{ backgroundColor: '#6FE6B7' }}
        onSubmit={handleSubmit}
      >
        <h1 className='my-6 text-2xl text-center'>Create Cookie Stand</h1>
        <div className='flex'>
          <label className='p-2'>Location</label>
          <input name='location' className='flex-auto p-2 rounded focus:outline-none' />
        </div>
        <div className='flex justify-between my-5 '>
          <div className='w-1/2 text-center'>
            Minimum Customers per hour
            <input type='number' name='min' className='w-full rounded' />
          </div>
          &nbsp;
          <div className='w-1/2 text-center'>
            Maximum Customers per hour
            <input type='number' name='max' className='w-full rounded' />
            &nbsp;
          </div>
          &nbsp;
          <div className='w-1/2 text-center'>
            Average Cookies per Sale
            <input
              type='number'
              step='any'
              name='avg'
              className='w-full rounded'
            />
            &nbsp;
          </div>
          &nbsp;
          <button className='w-1/4 px-4 py-2 font-bold text-white bg-green-200 rounded hover:bg-green-700'>
            Create
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateForm


export default function Form(props) {
    return (
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-10 mx-auto bg-green-300 rounded-lg lg:px-8 w-900px ">
        <h1 className="mt-5 text-3xl font-bold leading-9 tracking-tight text-center text-gray-900">Create Cookie Stand</h1>
        <div className="mt-10 sm:w-full sm:max-w-sm w-900px">
          <form className="space-y-6 w-850px " action="#" method="POST" onSubmit={props.handler}>
            <div className='flex justify-between '>
              <label htmlFor="location" className="text-sm font-semibold leading-6 text-gray-900 text-20px"> Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="location"
                required
                className="w-700px rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className='flex justify-between'>
              <div className="items-center w-200px">
                <label htmlFor="Minimum" className="block font-semibold leading-6 text-center text-gray-900 text-20px">
                  Minimum Customers per Hour
                </label>
                <input
                  id="Minimum"
                  name="Minimum"
                  type="number"
                  autoComplete="current-Minimum"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="items-center justify-between w-200px">
                <label htmlFor="Maximum" className="block font-semibold leading-6 text-center text-gray-900 text-20px">
                  Maximum Customers per Hour
                </label>
                <input
                  id="Maximum"
                  name="Maximum"
                  type="number"
                  autoComplete="current-Maximum"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="items-center justify-between w-200px">
                <label htmlFor="Average" className="block font-semibold leading-6 text-center text-gray-900 text-20px">
                  Average Cookies per Sale
                </label>
                <input
                  id="Average"
                  name="Average"
                  type="number"
                  autoComplete="current-Average"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="items-center justify-between w-200px">
                <button
                  type="submit"
                  className="flex w-full items-center h-full justify-center rounded-md bg-green-700 py-1.5 text-20px font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    )
  }
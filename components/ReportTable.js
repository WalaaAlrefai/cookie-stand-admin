import { hours } from "@/data"

const ReportTable = ({ data , onDelete }) => {
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516]
  return (
    <>
      {data.length > 0  ? (
        <table className='mx-auto my-8 text-xl text-center bg-green-300 w-900px'>
          <thead>
            <tr style={{backgroundColor:'#15B981'}}>
              <th className='border border-black center '>Location</th>
              {hours.map((slot) => (
                <th className='border border-black center ' key={slot}>{slot}</th>
              ))}
              <th className='border border-black center '>Totals</th>
            </tr>
          </thead>
          <tbody className='border border-black center '>
            {data.map((stand, dIndex) => {
              return (
                <tr key={dIndex} className='border border-black center '>
                  <td key={dIndex} className='border border-black center '>
                    <div>
                      <p>{stand.location}</p>
                    </div>
                    <span
                      className='flex col-end-2'
                      onClick={() => onDelete(stand.id)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 cursor-pointer'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </td>
                  {hourly_sales.map((item, i) => {
                return <td className='border border-black center ' key={i}>{item}</td>
              })}
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr className='border border-black center '>
              <th className='border border-black center '>Totals</th>
              {hourly_sales.map((item, i) => {
                return <td className='border border-black center ' key={i}>{item * data.length}</td>
              })}
               
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className='text-center'> No Cookies Stands Available</p>
      )}
    </>
  )
}

export default ReportTable

import { hours } from "@/data"

const ReportTable = ({ data }) => {
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 615]
  const totals = []
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
                <tr className='border border-black center '>
                  <td className='border border-black center '>
                    <div>
                      <p>{stand.location}</p>
                    </div>
                  </td>
                  {hours.map((_, index) => {
                    const rnd =
                      Math.random() *
                        (stand.maxCustomers - stand.minCustomers) +
                      1
                    const salesPerHour = Math.ceil(rnd * stand.avgCookies)
                    hourly_sales[index] = hourly_sales[index] + salesPerHour
                    if (index == hours.length - 1) {
                      totals[dIndex] = hourly_sales.reduce(
                        (partial_sum, a) => partial_sum + a,
                        0
                      )
                    }
                    return <td className='border border-black center '>{salesPerHour}</td>
                  })}
                  <td className='border border-black center '>
                    {hourly_sales.reduce(
                      (partial_sum, a) => partial_sum + a,
                      0
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr className='border border-black center '>
              <th className='border border-black center '>Totals</th>
              {hourly_sales.map((item, i) => {
                return <td className='border border-black center ' key={i}>{item}</td>
              })}
              <td className='border border-black center '>{totals.reduce((partial_sum, a) => partial_sum + a, 0)}</td>
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
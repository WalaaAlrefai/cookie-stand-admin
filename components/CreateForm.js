import {hours} from '@/data'

import React from 'react';

const CreateForm = ({data}) => {

    return (
       <>
       { data.length > 0 ?(
        
       <table className='mx-auto my-8 text-xl text-center bg-green-300 w-900px'>
        <thead>
            <tr key="">
                <th className='border border-black center '>Location</th>
                {hours.map(obj =>(
                    <th className='border border-black center '>{obj}</th>
                ))}
                <th className='border border-black center '>Totals</th>

            </tr>
        </thead>
        {/* table body */}
        <tbody>
            {data.map(obj =>(
                <tr>
                    <td className='border border-black center '>{obj.Location}</td>
                    {obj.hourly_sales.map(x =>(
                       <td className='border border-black center '>{x}</td>
                    ))}
                    
                    <td className='border border-black center '>{obj.Average}</td>

                </tr>
            ))}
        </tbody>
       </table>
       ) : <h2 className='mt-10 text-2xl font-semibold text-gray-500'>No Cookie Stands Available</h2>
       }
       </>
    );
}

export default CreateForm;
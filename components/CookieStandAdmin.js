// import React, { useState } from 'react';
// import CreateForm from './CreateForm';
// import Footer from './Footer';
// import Header from './Header';
// import ReportTable from './ReportTable';
// import Head from 'next/head';

// const CookieStandAdmin = () => {
    
//     const [data, set_data] = useState([])
//     const CreateLocation = (event) => {
//       event.preventDefault()
      
//       const form_data = {
//         location: event.target.location.value,
//         minCustomers: event.target.min.value,
//         maxCustomers: event.target.max.value,
//         avgCookies: event.target.avg.value
//       }
//       set_data(() => [...data, form_data])
//     }

//     return (
//         <>
//         <Head>
//           <title>Cookie Stand Admin</title>
//         </Head>
//         <main className='flex flex-col h-screen'>
//           <Header />
//           <CreateForm onCreate={onCreate} />
//           <ReportTable data={data}/>
//           <Footer data={data}/>
//         </main>
//       </>
//     );
// }

// export default CookieStandAdmin;

import React from 'react'
import CreateForm from './CreateForm'
import Footer from './Footer'
import { Header } from './Header'
import ReportTable from './ReportTable'

const CookieStandAdmin = ({ stands, loading, onCreate, onDelete, logout }) => {
  if (loading) return <Loading />
  return (
    <main className='flex flex-col h-screen'>
      
      <Header logout={logout} />
      <CreateForm onCreate={onCreate} />
      <ReportTable data={stands} onDelete={onDelete} />
      <Footer data={stands} />
    </main>
  )
}

export default CookieStandAdmin
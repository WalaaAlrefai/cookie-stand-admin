import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Form from './Form'
import CreateForm from './CreateForm'

export default function Main(props){
  
  return(
        <main className={`flex flex-col items-center justify-between p-20 ${inter.className}`}>
          <Form handler={props.handler} />
          <CreateForm data={props.data} />
        </main>
    )
}
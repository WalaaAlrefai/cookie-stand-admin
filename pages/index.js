import { useState } from "react"
import Hhead from '../components/Hhead';
import Body from "../components/Body";

export default function CookieStandAdmin() {
  const [location, setLocation ] = useState('Cookie Stand Admin ');
  const [minium, setMinimum ] = useState('Cookie Stand Admin ');
  const [maximam, setMaximum ] = useState('Cookie Stand Admin ');
  const [average, setAverage ] = useState('Cookie Stand Admin ');
  const [json, serJson] = useState([])

  async function all(){
    const dataToSave = {
      Location:  location,
      Minimum:  minium,
      Maximum:  maximam,
      Average: average,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    };
    await console.log(dataToSave)

    serJson([...json,dataToSave])
  }

  async function submitHandler(event){
    event.preventDefault();
    await setLocation(event.target.location.value);
    await setMinimum(event.target.Minimum.value);
    await setMaximum(event.target.Maximum.value);
    await setAverage(event.target.Average.value);
    all()
  }
  return (
    <>
      <Hhead />
      <Body handler={submitHandler} data={json} />
    </>

  )
}
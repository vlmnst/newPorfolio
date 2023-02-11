import { useState } from "react";
import LineBoxOne from "../component/LineBox/LineBoxOne";
import LineBoxTwo from "../component/LineBox/LineBoxTwo";
import LineBoxThree from "../component/LineBox/LineBoxThree";
import Button from "../component/Button";

function Home() {
  const [cellPhone, setCellPhone] = useState('hidden')
  const [desktop, setDesktop] = useState('')
  const [colorBg, setColorBg] = useState('bg-yellow-300')
  return (
    <div className={`h-screen flex 
                  ${colorBg} justify-center items-center
                  md:bg-home bg-no-repeat bg-cover `} >
      <div className={` ${cellPhone} flex flex-col h-screen justify-center`}>
        <div>
        <LineBoxOne/>
        </div>
        <div>
        <LineBoxTwo/>
        </div>
        <div>
        <LineBoxThree/>
        </div>
      </div>
      <div className={desktop}>
        <Button text={'DESCUBRE EL CONTENIDO'} setDesktop={setDesktop} setCellPhone={setCellPhone} setColorBg={setColorBg} />
      </div>
    </div>
  )
}

export default Home;
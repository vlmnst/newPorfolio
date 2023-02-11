import { Link } from "react-router-dom";

import Box from "../Boxs/Box";
import BoxText from "../Boxs/BoxText";
import BoxImage from "../Boxs/BoxImage";
import ImgContact from "../../assets/love-letter.png";
import colors  from "../../css-tailwind/colors.js";
import { useState } from "react";

function LineBoxOne() {
  const [boxTitle, setBoxTitle] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    setBoxTitle('CONTACTO')
    setText1( <> <p> ¿Tienes un proyecto a concretar?    Envíame un mail: <br />  <strong className="font-bold" > vale-mansueto@hotmail.com  </strong></p> </>)
    setText2( <> <p> ¿Una vacante que coincide con mi perfil?   Escríbeme por <a target="_blank" href="https://www.linkedin.com/in/valeria-mansueto-dev/"> <strong className="font-bold" >  Linkedin </strong></a> </p>
    <br /> <p> ¿Quieres mirar un poco de código?   ¡Aquí te dejo mi  <a target="_blank" href="https://github.com/vlmnst"> <strong className="font-bold" >  Github </strong>!</a></p> </> )
    
  }

  return (
    <div className="flex justify-center  ">
      <div className={`hidden 
                      md:flex hover:bg-lime-100 shadow-md w-44 h-44 lg:w-52 m-3
        `}>
        <Box/>
      </div>
      <div  className={`hidden
                      md:flex hover:bg-lime-200 w-44 h-44 shadow-md lg:w-52 m-3
        `}>
        <Box/>      
      </div>
      <div  className={`hidden
                      md:flex hover:bg-lime-300 shadow-md w-44 h-44 m-3  lg:w-52
        `}>
        <BoxText boxTitle={boxTitle} texto1={text1} texto2={text2}  />
      </div>

      {/* Botton link para el escritorio */}
        <button className={`hidden md:flex hover:bg-lime-400 w-44 h-44  shadow-md m-3 hover:shadow-inner  lg:w-52`}
                onClick={(e)=>handleClick(e)}>
          <div >
            <BoxImage image={ImgContact} text='CONTACTO' />
          </div>
        </button>
  
      {/* Botton link para el celular */}
      <Link to='/contacto'  className="md:hidden" >
        <button className={`w-44 h-44 ${colors.colorBlue900} shadow-md m-3 hover:shadow-inner `}>
          <div >
            <BoxImage image={ImgContact} text='CONTACTO' />
          </div>
        </button>
      </Link>
    </div>
  )
}

export default LineBoxOne;
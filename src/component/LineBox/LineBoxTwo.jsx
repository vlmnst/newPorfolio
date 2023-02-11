import { Link } from "react-router-dom";
import { useState } from "react";

import BoxImage from "../Boxs/BoxImage";
import BoxText from "../Boxs/BoxText";
import Box from "../Boxs/Box";
import Perfil from "../../assets/sticker.png";
import colors  from "../../css-tailwind/colors.js";


function LineBoxTwo() {

  const [boxTitle, setBoxTitle] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const [boxTitleB, setBoxTitleB] = useState('')
  const [text1B, setText1B] = useState('')
  const [text2B, setText2B] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    setBoxTitle('FRONTEND DEVELOPER')
    setText1( <> <p> Creciendo permanentemente en conocimiento y experiencia. Me entusiasma formar parte de un equipo de trabajo, activo, empatico, donde todos aporten y aprender en conjunto. </p> </>)
    setText2( <> <p> <strong>  Siéntete libre de contactarme  si así lo deseas!</strong> </p> </> )

    setBoxTitleB('STACK TECNOLOGICO')
    setText1B( <> <p> Tengo conocimientos en desarrollo web con JavaScript, React.js, Node.js, Express, Axios, Sequelize, PostgreSQL, mySql,
      MongoDB, HTML, CSS. 
      Además trabajé en el desarrollo de una app movil utilizando React Native
       </p> </>)

  }

  return (
    <div className="flex">
      <div className={`hidden 
                      md:flex hover:bg-lime-200 shadow-md  w-44 h-44 m-3 lg:w-52
        `}>
        <BoxText boxTitle={boxTitle} texto1={text1} texto2={text2} />
      </div>

      {/* Botton link para el celular */}
      <Link to='/perfil' className="md:hidden">
      <button className={`w-44 h-44 ${colors.colorPink500} shadow-md m-3 hover:shadow-inner `}>
      <div >
        <BoxImage image={Perfil} text='PERFIL' />
      </div>
      </button>
      </Link>

      {/* Botton link para el escriptorio */}

      <button className={`hidden md:flex hover:bg-green-300 w-44 h-44 shadow-md m-3 hover:shadow-inner lg:w-52`}
              onClick={(e) => handleClick (e)}>
      <div >
        <BoxImage image={Perfil} text='PERFIL' />
      </div>
      </button>

      
      <div className={`hidden 
                      md:flex hover:bg-green-400 shadow-md w-44 h-44 m-3 lg:w-52
        `}>
        <Box /> 
      </div>
      <div className={`hidden 
                      md:flex hover:bg-green-500 shadow-md w-44 h-44 m-3 lg:w-52
        `}>
        <BoxText  boxTitle={boxTitleB} texto1={text1B} texto2={text2B}/>
      </div>
    </div>
  )
}

export default LineBoxTwo
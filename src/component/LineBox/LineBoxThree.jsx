import { Link } from "react-router-dom";
import { useState } from "react";

import BoxImage from "../Boxs/BoxImage";
import BoxText from "../Boxs/BoxText";
import Box from "../Boxs/Box";
import Experiencia from "../../assets/coffee.png";
import colors from "../../css-tailwind/colors.js";

function LineBoxThree() {
  const [boxTitle, setBoxTitle] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setBoxTitle("EXPERIENCIA");
    setText1(
      <><br />
        <p className="text-left">  
        <span className="font-medium">Backend Dev </span>   <br /> Be Innovation Tech <br /> Digitalizacion de puestos de
          trabajo <br /> Node - Express - mySql
        </p> 
      </>
    );
    setText2(
      <>
        <p className="text-left">  
        <span className="font-medium">Fullstack Dev</span><br />E-commerce  - AstroNet  Administra tu negocio desde tu app movil.
          <br /> React Native - Node - MongoDB
        </p>
        <br />
        <p className="text-left">
        <span className="font-medium">Frontend Dev</span> <br /> Administrador de eventos <br /> Ibiza Club <br /> Agenda de eventos <br /> React - Node -
          MongoDB
        </p><br />
      </>
    );
  };

  return (
    <div className="flex">
      {/* Botton link para el celular */}
      <Link to="/experiencia" className="md:hidden">
        <button
          className={`w-44 h-44 ${colors.colorYellow300} shadow-md m-3 hover:shadow-inner `}
        >
          <div>
            <BoxImage image={Experiencia} text="EXPERIENCIA" />
          </div>
        </button>
      </Link>

      {/* Botton link para el escriptorio */}
      <button
        className={`hidden md:flex hover:bg-green-400 w-44 h-44  shadow-md m-3 hover:shadow-inner lg:w-52`}
        onClick={(e) => handleClick(e)}
      >
        <div>
          <BoxImage image={Experiencia} text="EXPERIENCIA" />
        </div>
      </button>

      <div
        className={`hidden 
                      md:flex hover:bg-green-500 shadow-md w-44 h-44 m-3 lg:w-52
        `}
      >
        <BoxText boxTitle={boxTitle} texto1={text1} />
      </div>
      <div
        className={`hidden 
                      md:flex hover:bg-green-600  shadow-md w-44 h-44 m-3 lg:w-52
        `}
      >
        <BoxText   texto2={text2} />
      </div>
      <div
        className={`hidden 
                      md:flex hover:bg-green-700 shadow-md w-44 h-44 m-3 lg:w-52
        `}
      >
        <Box />
      </div>
    </div>
  );
}

export default LineBoxThree;

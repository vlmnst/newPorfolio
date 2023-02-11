import ButtonBack from "../assets/goBack.png";
import { Link } from "react-router-dom";
import ImgPerfil from "../assets/sticker.png";

function Perfil() {
  return (
      <div className="flex flex-col h-screen justify-evenly  bg-gradient-to-b from-indigo-900 to-pink-500 ">
        <div className=" mt-5 ml-3">
            <Link to={"/"}>
              <img src={ButtonBack} alt="back" />
            </Link>
        </div>
        <div className="flex justify-center mt1">
          <img
            src={ImgPerfil}
            alt="contact-image"
            className="object-contain h-36"
          />
        </div>
        <div className="flex flex-col justify-center items-center font-thin text-white pr-5 pl-5 pt-8  ">
          <span className="font-semibold">FRONTEND DEVELOPER</span>
          <div className="flex flex-col text-center h-96 justify-around">
            <div>
              <p>
              Creciendo permanentemente en conocimiento y experiencia. 
              Me entusiasma formar parte de un equipo de trabajo, activo, 
              empatico, donde todos aporten y aprender en conjunto.
              Siéntete libre de contactarme 
              si así lo deseas!
              </p>
            </div>

            <div>
            <span className="font-semibold">STACK TECNOLOGICO</span>

            </div>

            <div>
              <p>Tengo conocimientos en desarrollo web con JavaScript, React.js, Node.js, Express, Axios, Sequelize, PostgreSQL, 
                  MongoDB, HTML, CSS. Además trabajé en el desarrollo de una app movil utilizando React Native
              </p>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Perfil;

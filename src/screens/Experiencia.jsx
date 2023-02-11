import ButtonBack from "../assets/goBack.png";
import { Link } from "react-router-dom";
import ImgExp from "../assets/coffee.png";

function Experiencia() {
  return (
    <div
      className={`h-screen bg-gradient-to-b from-pink-500 to-rose-300 flex flex-col justify-center items-center `}
    >
      <div className="flex flex-col h-screen justify-start">
        <div className="flex mt-5 ml-3">
            <Link to={"/"}>
              <img src={ButtonBack} alt="back" />
            </Link>
        </div>
        <div className="flex justify-center mt-8">
          <img
            src={ImgExp}
            alt="contact-image"
            className="object-contain h-36"
          />
        </div>
        <div className="flex flex-col justify-center items-center font-thin text-white pr-5 pl-5 mt-10">
          <span className="font-semibold">EXPERIENCIA</span>
          <div className="flex flex-col text-left h-72 justify-between mt-5">
            <div>
              <p>
              Backend Developer- Be Innovation Tech
              Digitalizacion de puestos de trabajo
              Node - Express - mySql
              </p>
            </div>

            <div>
              <p>
              E-commerce - AstroNet  
              Administra tu negocio desde tu app movil.
              Deploy: APK y Heroku
              React Native - Node - MongoDB
              </p>
            </div>

            <div>
              <p>
              Administrador de eventos - Ibiza Club 
              Agenda de eventos
              React - Node - MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;

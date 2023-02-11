import ButtonBack from "../assets/goBack.png";
import { Link } from "react-router-dom";
import ImgContact from "../assets/love-letter.png";

function Contacto() {
  return (
    <div
      className={`h-screen bg-gradient-to-b from-pink-500 to-yellow-300 flex flex-col justify-center items-center `}
    >
      <div className="flex flex-col h-screen justify-start">
        <div className="flex mt-5 ml-3">
            <Link to={"/"}>
              <img src={ButtonBack} alt="back" />
            </Link>
        </div>
        <div className="flex justify-center mt-8">
          <img
            src={ImgContact}
            alt="contact-image"
            className="object-contain h-36"
          />
        </div>
        <div className="flex flex-col justify-center items-center font-thin text-white pr-5 pl-5 mt-16">
          <span className="font-semibold">CONTACTO</span>
          <div className="flex flex-col text-center h-52 justify-around">
            <div>
              <p>
                ¿Tienes un proyecto a concretar? Envíame un mail:
                vale-mansueto@hotmail.com
              </p>
            </div>

            <div>
              <p>
                ¿Una vacante que coincide con mi perfil? Escríbeme por Linkedin
              </p>
            </div>

            <div>
              <p>¿Quieres mirar un poco de código? ¡Aquí te dejo mi GitHub!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;

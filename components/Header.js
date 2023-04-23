import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Web Developer",
    "Tecnólogo en Sistemas de Información",
    "Estudiante de Ingeniería de Software",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <>
      <header className="row h-100">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light rounded-3">
            <div className="row">
              <div className="col-md-4" style={{ height: "300px" }}>
                <div
                  className="image-wrapper"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <img
                    src="foto-perfil.png"
                    alt=""
                    className="img-fluid align-self-center"
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <h1>Jhony Alberto Saenz Hurtado</h1>
                <h3 className="text">{text}.</h3>
                <p className=" mt-2 text-justify">
                  Mi objetivo es utilizar mis habilidades innatas para brindar
                  un desempeño sobresaliente en el área en la que me desempeño.
                  Al asumir responsabilidades y ganar la confianza de mi equipo,
                  espero adquirir una valiosa experiencia que me permita crecer
                  tanto a nivel personal como profesional. Me entusiasma tener
                  la oportunidad de formar parte de equipos dinámicos y
                  contribuir al éxito de la empresa, sintiéndome orgulloso de
                  ser un miembro valioso y activo.
                </p>

                <div className="col-md-12">
                  <div className="col-md-4">
                    <Link href="/correo">
                      <button className="btn btn-light">Contactame</button>
                    </Link>
                  </div>
                  <div className="col-md-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

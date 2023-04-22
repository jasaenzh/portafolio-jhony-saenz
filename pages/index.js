import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import { skills, experiencias, proyectos } from "../db";
import Link from "next/link";
// import Image from "next/image";

import { Carousel, Image } from "react-bootstrap";

const Index = () => {
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
  }, [text]);

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
    <Layout>
      {/* Habilidades y Experciencias */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
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

                <Link href="/correo">
                  <button className="btn btn-light">Contactame</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Primera Seccion */}
      <div className="row py-2">
        <div className="col-md-4 h-100">
          <div className="card bg-light h-100">
            <div className="card-body">
              <h1>Habilidades</h1>
              {/* Div de barra de progreso con las habilidades */}
              {skills.map((skill, indice) => {
                return (
                  <div className="py-3" key={indice}>
                    <h4>{skill.habilidad}</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.porcentaje}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-8 h-100">
          <div className="card bg-light h-100">
            <div className="card-body">
              <h1>Experiencias</h1>
              <ul>
                {experiencias.slice(0, 3).map((experiencia, indice) => {
                  return (
                    <li className="list-unstyled" key={indice}>
                      <h4>{experiencia.cargo}</h4>
                      <p className="text-justify small">
                        {experiencia.nombre_de_la_empresa}
                      </p>
                      <p className="text-justify small">
                        {experiencia.fecha_inicio} -{" "}
                        {experiencia.fecha_fin ? experiencia.fecha_fin : "Act"}
                      </p>
                      <p className="text-justify small">
                        {experiencia.descripcion}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <Link href="/experiencias">
                <button className="btn btn-light">Mas</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Portafolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light"> Portafolio</h1>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <Carousel>
                    {proyectos.map((proyecto) =>
                      proyecto.imagenes.map((imagen, index) => {
                        return (
                          <Carousel.Item key={index}>
                            <div
                              className="d-flex align-items-center justify-content-center"
                              style={{ height: "200px" }}
                            >
                              <Image
                                src={imagen.src}
                                alt={imagen.alt}
                                className="align-self-center m-1"
                                style={{ height: "200px" }}
                              />
                            </div>
                          </Carousel.Item>
                        );
                      })
                    )}
                  </Carousel>

                  <div className="card-body">
                    <h3>Titulo</h3>
                    <p>Descripcion</p>
                    <Link href="/experiencias">
                      <button className="btn btn-light">Mas detalles</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

import React from "react";
import { proyectos, skillsImages } from "../db";
import { Carousel, Image } from "react-bootstrap";
import Link from "next/link";

const Portafolio = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light"> Portafolio</h1>
              </div>

              {proyectos.map((proyecto, indiceProyectos) => {
                return (
                  <div className="col-md-4" key={indiceProyectos}>
                    <div className="card">
                      <Carousel>
                        {proyecto.imagenes.map((imagen, indiceSubProyecto) => {
                          return (
                            <Carousel.Item key={indiceSubProyecto}>
                              <div className="d-flex align-items-center justify-content-center">
                                <Image
                                  src={imagen.src}
                                  alt={imagen.alt}
                                  className="align-self-center m-1"
                                  style={{ height: "200px" }}
                                />
                              </div>
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>

                      <div className="card-body" style={{ height: "300px" }}>
                        <h3>{proyecto.nombre_proyecto}</h3>

                        <div className="row mb-3">
                          <p>Habilidades</p>
                          <div className="col-md-8">
                            {proyecto.skills
                              .filter(
                                (skill, index, self) =>
                                  self.indexOf(skill) === index
                              )
                              .map((habilidad, indice) => (
                                <span
                                  className="text-justify small"
                                  key={indice}
                                >
                                  {habilidad}
                                  {indice === proyecto.skills.length - 1
                                    ? "."
                                    : ", "}
                                </span>
                              ))}
                          </div>
                          <div className="col-md-4 p-3">
                            <Carousel
                              interval={2000}
                              draggable
                              slidestoshow={2}
                              indicators={false}
                              controls={false}
                            >
                              {proyecto.skills.map((skill) => {
                                const imagenesFiltradas = skillsImages.filter(
                                  (imagenFiltrada) =>
                                    skill.includes(imagenFiltrada.titulo)
                                );
                                return (
                                  <Carousel.Item>
                                    {imagenesFiltradas.map(
                                      (imagen, indiceImagenesFiltradas) => {
                                        return (
                                          <div className="d-flex align-items-center justify-content-center">
                                            <Image
                                              key={indiceImagenesFiltradas}
                                              className=" img-fluid"
                                              src={imagen.src}
                                              alt={imagen.alt}
                                              style={{ height: "50px" }}
                                            />
                                          </div>
                                        );
                                      }
                                    )}
                                  </Carousel.Item>
                                );
                              })}
                            </Carousel>
                          </div>
                        </div>

                        <Link href="/experiencias">
                          <button className="btn btn-light">
                            Mas detalles
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center m-4">
              <Link href="/proyectos">
                <button className="btn btn-outline-light">Mas proyectos</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portafolio;

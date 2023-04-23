import React from "react";
import Link from "next/link";

import { skills, experiencias } from "../db";

const SkillsAndExperience = () => {
  return (
    <>
      <div className="row py-2">
        <div className="col-md-4 h-100">
          <div className="card bg-light h-100">
            <div className="card-body">
              <h2>Habilidades</h2>
              {/* Div de barra de progreso con las habilidades */}
              {skills.map((skill, index) => (
                <div key={index} className="py-3">
                  <h4>{skill.habilidad}</h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.porcentaje}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8 h-100">
          <div className="card bg-light h-100">
            <div className="card-body">
              <h2>Experiencias</h2>
              <ul>
                {experiencias
                  .slice(0, 3)
                  .map((experiencia, indiceExperiencia) => {
                    return (
                      <li className="list-unstyled" key={indiceExperiencia}>
                        <h4>{experiencia.cargo}</h4>
                        <p className="text-justify small">
                          {experiencia.nombre_de_la_empresa}
                        </p>
                        <p className="text-justify small">
                          {experiencia.fecha_inicio} -{" "}
                          {experiencia.fecha_fin
                            ? experiencia.fecha_fin
                            : "Act"}
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
    </>
  );
};

export default SkillsAndExperience;

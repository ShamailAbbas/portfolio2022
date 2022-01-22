import React from "react";
import "../css/others.css";
import projects from "../projects";
const Otherprojects = () => {
  return (
    <div className="archivesection">
      <div className="worthyprojects">
        {projects.map((item, id) => {
          return (
            <a href={item.url} rel="noreferrer" target="_blank" key={id}>
              <div className="griditems">
                <h3>{item.title}</h3>
                <p>
                  {item.desc}
                  <br />
                  {item.features.map((feature, key) => {
                    return <li key={key}>{feature}</li>;
                  })}

                  <h3>Tech used to bulid this project</h3>
                  {item.techused.map((techused, key) => {
                    return <li key={key}>{techused}</li>;
                  })}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Otherprojects;

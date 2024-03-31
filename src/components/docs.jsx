import React from "react";

export const Docs = (props) => {
  return (
    <div id="docs" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>MAPISM Docs</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.feature_name}-${i}`} className="col-md-12">
                  <h1>{d.feature_name}</h1>
                  <h4>{d.description}</h4>
                  <hr />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

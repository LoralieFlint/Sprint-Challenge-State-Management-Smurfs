import React, { useEffect } from "react";

const Smurfs = ({ getSmurfs, allSmurfs, isFetching }) => {
  useEffect(() => {
    getSmurfs();
  }, []);

  if (isFetching) {
    return <h3>Getting smurfs</h3>;
  }

  return (
    <div>
      {allSmurfs.map((item, index) => {
        return (
          <div className="smurf-card" key={index}>
            <div>
              <h1>{item.name}</h1>
              <p>Age: {item.age}</p>
              <p>Height: {item.height}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Smurfs;

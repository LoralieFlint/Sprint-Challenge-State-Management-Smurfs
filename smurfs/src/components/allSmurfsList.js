import React, { useEffect } from "react";


const Smurfs = ({ getSmurfs, smurfs, isFetching }) => {
  useEffect(() => {
    getSmurfs();
  }, []);


  if (isFetching) {
    return <h3>Getting smurfs</h3>;
  }

  return (
    <div>
      {smurfs.map((item, index) => {
        return (
          <div className="smurf-card" key={index}>
            <h1>{item.name}</h1>

            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Smurfs;

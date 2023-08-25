import React, { Suspense } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const {
    planetNameArray,
    hostNameArray,
    discoveryMethodArray,
    discoveryYearArray,
    discoveryFacilityArray,
  } = props;

  return (
    <div className={styles.container}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <select name="" id="">
        {planetNameArray.map((name) => (
          <option value={name}>{name}</option>
        ))}
      </select>
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <select name="" id="">
        {hostNameArray.map((hostName) => (
          <option value={hostName}>{hostName}</option>
        ))}
      </select>
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <select name="" id="">
        {discoveryMethodArray.map((discoveryMethodName) => (
          <option value={discoveryMethodName}>{discoveryMethodName}</option>
        ))}
      </select>
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <select name="" id="">
        {discoveryYearArray.map((discoveryYear) => (
          <option value={discoveryYear}>{discoveryYear}</option>
        ))}
      </select>
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <select name="" id="">
        {discoveryFacilityArray.map((discoveryFacility) => (
          <option value={discoveryFacility}>{discoveryFacility}</option>
        ))}
      </select>
      {/* </Suspense> */}

      <button>Search</button>
      <button>Clear</button>
    </div>
  );
};

export default Header;

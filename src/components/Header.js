import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const [filters, setFilters] = useState({
    hostname: "",
    discoveryMethod: "",
    discoveryYear: "",
    discoveryFacility: "",
  });

  const [filteredData, setFilteredData] = useState([]);

  const {
    // planetNameArray,
    hostNameArray,
    discoveryMethodArray,
    discoveryYearArray,
    discoveryFacilityArray,
    uniqueDummyDataArray,
  } = props;

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
    // console.log(filters);
  };

  const getFilteredData = () => {
    let filteredData = uniqueDummyDataArray;

    if (filters.hostname) {
      filteredData = filteredData.filter(
        (item) => item[1] === filters.hostname
      );
    }

    if (filters.discoveryMethod) {
      filteredData = filteredData.filter(
        (item) => item[2] === filters.discoveryMethod
      );
    }

    if (filters.discoveryYear) {
      filteredData = filteredData.filter(
        (item) => item[3] === filters.discoveryYear
      );
    }

    if (filters.discoveryFacility) {
      filteredData = filteredData.filter(
        (item) => item[4] === filters.discoveryFacility
      );
    }

    return filteredData;
  };

  function searchHandler() {
    const arr = getFilteredData();
    setFilteredData(arr);
    console.log(arr);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <select
          onChange={(event) =>
            handleFilterChange("hostname", event.target.value)
          }
        >
          {hostNameArray.map((hostName) => (
            <option value={hostName}>{hostName}</option>
          ))}
        </select>
        <select
          onChange={(event) =>
            handleFilterChange("discoveryMethod", event.target.value)
          }
        >
          {discoveryMethodArray.map((discoveryMethodName) => (
            <option value={discoveryMethodName}>{discoveryMethodName}</option>
          ))}
        </select>
        <select
          onChange={(event) =>
            handleFilterChange("discoveryYear", event.target.value)
          }
        >
          {discoveryYearArray.map((discoveryYear) => (
            <option value={discoveryYear}>{discoveryYear}</option>
          ))}
        </select>
        <select
          onChange={(event) =>
            handleFilterChange("discoveryFacility", event.target.value)
          }
        >
          {discoveryFacilityArray.map((discoveryFacility) => (
            <option value={discoveryFacility}>{discoveryFacility}</option>
          ))}
        </select>

        <button onClick={searchHandler}>Search</button>
        {/* <button>Search</button> */}
        <button>Clear</button>
      </div>
      <div>
        <ul>
          {/* {console.log(filters.discoveryYear)} */}
          {filteredData.map((item) => (
            <div>
              <p>{item[0]}</p>
              <p>{item[1]}</p>
              <p>{item[2]}</p>
              <p>{item[3]}</p>
              <p>{item[4]}</p>
              <br />
              <br />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

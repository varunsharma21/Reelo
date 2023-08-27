import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const {
    // planetNameArray,
    hostNameArray,
    discoveryMethodArray,
    discoveryYearArray,
    discoveryFacilityArray,
    uniqueDummyDataArray,
  } = props;

  const [filters, setFilters] = useState({
    hostname: "",
    discoveryMethod: "",
    discoveryYear: "",
    discoveryFacility: "",
  });

  const [hostnameDefaultOption, setHostnameDefaultOption] = useState(
    hostNameArray[0]
  );
  const [discoveryMethodDefaultOption, setDiscoveryMethodDefaultOption] =
    useState(discoveryMethodArray[0]);
  const [discoveryYearDefaultOption, setDiscoveryYearDefaultOption] = useState(
    discoveryYearArray[0]
  );
  const [discoveryFacilityDefaultOption, setDiscoveryFacilityDefaultOption] =
    useState(discoveryFacilityArray[0]);

  const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));

    if (filterName === "hostname") {
      setHostnameDefaultOption(value);
    } else if (filterName === "discoveryMethod") {
      setDiscoveryMethodDefaultOption(value);
    } else if (filterName === "discoveryYear") {
      setDiscoveryYearDefaultOption(value);
    } else if (filterName === "discoveryFacility") {
      setDiscoveryFacilityDefaultOption(value);
    }
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

  function clearHandler() {
    setFilteredData([]);
    setFilters((prevFilters) => ({
      ...prevFilters,
      hostname: "",
      discoveryMethod: "",
      discoveryYear: "",
      discoveryFacility: "",
    }));

    setHostnameDefaultOption(hostNameArray[0]);
    setDiscoveryMethodDefaultOption(discoveryMethodArray[0]);
    setDiscoveryYearDefaultOption(discoveryYearArray[0]);
    setDiscoveryFacilityDefaultOption(discoveryFacilityArray[0]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <select
          value={hostnameDefaultOption}
          onChange={(event) =>
            handleFilterChange("hostname", event.target.value)
          }
        >
          {/* <option selected>{defaultLabels.hostname}</option> */}
          {hostNameArray.map((hostName) => (
            <option value={hostName}>{hostName}</option>
          ))}
        </select>
        <select
          value={discoveryMethodDefaultOption}
          onChange={(event) =>
            handleFilterChange("discoveryMethod", event.target.value)
          }
        >
          {/* <option selected>{defaultLabels.discoveryMethod}</option> */}
          {discoveryMethodArray.map((discoveryMethodName) => (
            <option value={discoveryMethodName}>{discoveryMethodName}</option>
          ))}
        </select>
        <select
          value={discoveryYearDefaultOption}
          onChange={(event) =>
            handleFilterChange("discoveryYear", event.target.value)
          }
        >
          {discoveryYearArray.map((discoveryYear) => (
            <option value={discoveryYear}>{discoveryYear}</option>
          ))}
          {/* <option selected>{defaultLabels.discoveryYear}</option> */}
        </select>
        <select
          value={discoveryFacilityDefaultOption}
          onChange={(event) =>
            handleFilterChange("discoveryFacility", event.target.value)
          }
        >
          {/* <option selected>{defaultLabels.discoveryFacility}</option> */}
          {discoveryFacilityArray.map((discoveryFacility) => (
            <option value={discoveryFacility}>{discoveryFacility}</option>
          ))}
        </select>

        <button onClick={searchHandler}>Search</button>
        {/* <button>Search</button> */}
        <button onClick={clearHandler}>Clear</button>
      </div>
      <div>
        <ul>
          {/* {console.log(filters.discoveryYear)} */}
          {filteredData.map((item, idx) => (
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

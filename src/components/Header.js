import React, { useState } from "react";
import styles from "./Header.module.css";
import ExoplanetsData from "./ExoplanetsData/ExoplanetsData";

const Header = (props) => {
  const {
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
          id={styles.mySelect1}
          value={hostnameDefaultOption}
          onChange={(event) =>
            handleFilterChange("hostname", event.target.value)
          }
        >
          {hostNameArray.map((hostName) => (
            <option value={hostName}>{hostName}</option>
          ))}
        </select>

        <select
          id={styles.mySelect2}
          value={discoveryMethodDefaultOption}
          onChange={(event) =>
            handleFilterChange("discoveryMethod", event.target.value)
          }
        >
          {discoveryMethodArray.map((discoveryMethodName) => (
            <option value={discoveryMethodName}>{discoveryMethodName}</option>
          ))}
        </select>

        <select
          id={styles.mySelect3}
          value={discoveryYearDefaultOption}
          onChange={(event) =>
            handleFilterChange("discoveryYear", event.target.value)
          }
        >
          {discoveryYearArray.map((discoveryYear) => (
            <option value={discoveryYear}>{discoveryYear}</option>
          ))}
        </select>

        <select
          id={styles.mySelect4}
          value={discoveryFacilityDefaultOption}
          onChange={(event) =>
            handleFilterChange("discoveryFacility", event.target.value)
          }
        >
          {discoveryFacilityArray.map((discoveryFacility) => (
            <option value={discoveryFacility}>{discoveryFacility}</option>
          ))}
        </select>

        <button onClick={searchHandler}>Search</button>
        <button onClick={clearHandler}>Clear</button>
      </div>
      <ExoplanetsData filteredData={filteredData} />
    </div>
  );
};

export default Header;

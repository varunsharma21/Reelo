import React, { useCallback, useEffect, useState } from "react";
import Papa from "papaparse";

import DummyData from "./assets/nasa-exoplanet-data-updated.csv";
// import DummyData from "./assets/dummy-data.csv";
import Header from "./components/Header";

const App = () => {
  const [dummyData, setDummyData] = useState([]);

  let planetName = new Set();
  let hostName = new Set();
  let discoveryMethod = new Set();
  let discoveryYear = new Set();
  let discoveryFacility = new Set();
  let dummyDataSet = new Set();

  const fetchParsedData = useCallback(async () => {
    Papa.parse(DummyData, {
      download: true,
      delimiter: ",",
      complete: (result) => {
        setDummyData(result.data);
        // console.log(result.data);
      },
    });
  }, []);

  useEffect(() => {
    fetchParsedData();
  }, [fetchParsedData]);

  function removeDuplicates(array) {
    const uniqueSet = new Set();

    return array.filter((item) => {
      const serialized = JSON.stringify(item);
      if (!uniqueSet.has(serialized)) {
        uniqueSet.add(serialized);
        return true;
      }
      return false;
    });
  }

  const uniqueDummyDataArray = removeDuplicates(dummyData);
  // console.log(uniqueDummyDataArray);

  for (let i = 0; i < uniqueDummyDataArray.length; i++) {
    planetName.add(uniqueDummyDataArray[i][0]);
    hostName.add(uniqueDummyDataArray[i][1]);
    discoveryMethod.add(uniqueDummyDataArray[i][2]);
    discoveryYear.add(uniqueDummyDataArray[i][3]);
    discoveryFacility.add(uniqueDummyDataArray[i][4]);
  }

  const planetNameArray = Array.from(planetName);
  const hostNameArray = Array.from(hostName);
  const discoveryMethodArray = Array.from(discoveryMethod);
  const discoveryYearArray = Array.from(discoveryYear).sort().reverse();
  const discoveryFacilityArray = Array.from(discoveryFacility);

  return (
    <div>
      <Header
        planetNameArray={planetNameArray}
        hostNameArray={hostNameArray}
        discoveryMethodArray={discoveryMethodArray}
        discoveryYearArray={discoveryYearArray}
        discoveryFacilityArray={discoveryFacilityArray}
        uniqueDummyDataArray={uniqueDummyDataArray}
      />
    </div>
  );
};

export default App;

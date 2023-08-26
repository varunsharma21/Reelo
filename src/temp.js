// //////////// App.js

// import React, { lazy, useCallback, useEffect, useState } from "react";
// import Papa from "papaparse";

// import DummyData from "./assets/nasa-exoplanet-data.csv";
// // import DummyData from "./assets/dummy-data.csv";
// import Header from "./components/Header";

// const App = () => {
//   const [dummyData, setDummyData] = useState([]);

//   let planetName = new Set();
//   let hostName = new Set();
//   let discoveryMethod = new Set();
//   let discoveryYear = new Set();
//   let discoveryFacility = new Set();
//   let dummyDataSet = new Set();

//   const fetchParsedData = useCallback(async () => {
//     Papa.parse(DummyData, {
//       download: true,
//       delimiter: ",",
//       complete: (result) => {
//         setDummyData(result.data);
//         console.log(result.data);
//       },
//     });
//   }, []);

//   useEffect(() => {
//     fetchParsedData();
//   }, [fetchParsedData]);

//   for (let i = 0; i < dummyData.length; i++) {
//     dummyDataSet.add(dummyData[i]);
//   }

//   const nonDuplicateDummyData = Array.from(dummyDataSet);

//   for (let i = 0; i < dummyData.length; i++) {
//     planetName.add(dummyData[i][0]);
//     hostName.add(dummyData[i][1]);
//     discoveryMethod.add(dummyData[i][2]);
//     discoveryYear.add(dummyData[i][3]);
//     discoveryFacility.add(dummyData[i][4]);
//   }

//   const planetNameArray = Array.from(planetName);
//   const hostNameArray = Array.from(hostName);
//   const discoveryMethodArray = Array.from(discoveryMethod);
//   const discoveryYearArray = Array.from(discoveryYear).sort();
//   const discoveryFacilityArray = Array.from(discoveryFacility);

//   return (
//     <div>
//       <Header
//         planetNameArray={planetNameArray}
//         hostNameArray={hostNameArray}
//         discoveryMethodArray={discoveryMethodArray}
//         discoveryYearArray={discoveryYearArray}
//         discoveryFacilityArray={discoveryFacilityArray}
//         dummyData={dummyData}
//       />
//     </div>
//   );
// };

// export default App;

// ///////// Header.js

// import React from "react";
// import styles from "./Header.module.css";

// const Header = (props) => {
//   const {
//     planetNameArray,
//     hostNameArray,
//     discoveryMethodArray,
//     discoveryYearArray,
//     discoveryFacilityArray,
//     dummyData,
//   } = props;

//   let filteredData = dummyData.filter(
//     (item) =>
//       item[3] === "2007" &&
//       item[2] === "Radial Velocity" &&
//       item[4] === "Multiple Observatories"
//   );

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <select name="" id="">
//           {planetNameArray.map((name) => (
//             <option value={name}>{name}</option>
//           ))}
//         </select>
//         <select name="" id="">
//           {hostNameArray.map((hostName) => (
//             <option value={hostName}>{hostName}</option>
//           ))}
//         </select>
//         <select name="" id="">
//           {discoveryMethodArray.map((discoveryMethodName) => (
//             <option value={discoveryMethodName}>{discoveryMethodName}</option>
//           ))}
//         </select>
//         <select name="" id="">
//           {discoveryYearArray.map((discoveryYear) => (
//             <option value={discoveryYear}>{discoveryYear}</option>
//           ))}
//         </select>
//         <select name="" id="">
//           {discoveryFacilityArray.map((discoveryFacility) => (
//             <option value={discoveryFacility}>{discoveryFacility}</option>
//           ))}
//         </select>

//         <button>Search</button>
//         <button>Clear</button>
//       </div>
//       <div>
//         <ul>
//           {filteredData.map((item) => (
//             <h4>
//               {item[0]}
//               <br />
//               {item[3]}
//             </h4>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

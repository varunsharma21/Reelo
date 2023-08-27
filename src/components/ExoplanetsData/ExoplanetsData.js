import React from "react";
import styles from "./ExoplanetsData.module.css";

const ExoplanetsData = (props) => {
  if (props.filteredData.length > 0) {
    return (
      <div className={styles["exoplanet-info-table"]}>
        <table>
          <tr>
            <th>Planet Name</th>
            <th>Host Planet</th>
            <th>Discovery Method</th>
            <th>Discovery Year</th>
            <th>Discovery Facility</th>
          </tr>
          {props.filteredData.map((item) => (
            <tr>
              {item.map((exoplanetInfo) => (
                <td>{exoplanetInfo}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return (
      <div className={styles["no-data"]}>
        <h1>Exoplanets are the planets outside the solar system.</h1>
        <h1>
          Here you can query NASA's Exoplanet Archive and find one you love the
          most.
        </h1>
      </div>
    );
  }
};

export default ExoplanetsData;

// <ul>
//         {/* {console.log(filters.discoveryYear)} */}
//         {props.filteredData.map((item, idx) => (
//           <div className={styles['exoplanet-info']}>
//             <p>{item[0]}</p>
//             <p>{item[1]}</p>
//             <p>{item[2]}</p>
//             <p>{item[3]}</p>
//             <p>{item[4]}</p>
//             <br />
//             <br />
//           </div>
//         ))}
//       </ul>

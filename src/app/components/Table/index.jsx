import React from "react";

// const Row = ({ record }) => {
//   const keys = Object.keys(record);
//   return(
//     <tr key={record}>
//       {keys.map( key => <td key={key}>{record[keys]}</td>)}
//     </tr>
//   )
// }

const Table = ({ data }) => {
  const keys = Object.keys(data);
  return(
    <table>
      <thead>
        {keys.map(key => <tr key={key}>{key}</tr>)}
      </thead>
      <tbody>
        {/* {data.map(record => <Row record={record} />)} */}
      </tbody>
    </table>
  );
}

export default Table
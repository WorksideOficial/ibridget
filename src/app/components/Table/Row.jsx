import React from "react";

const Row = ({ record }) => {
  const keys = Object.keys(record);
  console.log(keys)
  return(
    <tr key={record}>
      {keys.map( key => <td key={key}>{record[keys]}</td>)}
    </tr>
  )
}

export default Row;
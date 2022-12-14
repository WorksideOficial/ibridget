import React from "react";

const Table = ({ TableHeader, TableBody, TableFooter }) => {

  return (
    <table>
      <thead>
        {TableHeader}
      </thead>
      <tbody>
        {TableBody}
      </tbody>
      {TableFooter && <tfoot>{TableFooter}</tfoot>}
    </table>
  );
}

export default Table;
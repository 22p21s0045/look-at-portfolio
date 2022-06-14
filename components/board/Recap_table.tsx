import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
function Recap_table(data: any) {
  const [data_grid, setdata_grid] = useState<any>(data);

  const column: GridColDef[] = [
    { field: "coin_pair", headerName: "Coin Pair", flex: 1 },
    { field: "buy", headerName: "Buy", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    { field: "created_at", headerName: "Created At", flex: 1 },
  ];
  const row: GridRowsProp[] = data_grid.data.data;
  console.log(row);
  return (
    <div>
      Recap_table
      <DataGrid
        columns={column}
        rows={row}
        getRowId={(row) => row.history_id}
        pageSize={5}



        autoHeight={true}
      />
    </div>
  );
}

export default Recap_table;

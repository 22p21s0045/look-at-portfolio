import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { Delete } from "../../public/svg/icon/custom/Add";
import { supabase } from "../login/supabaseClient";
function Recap_table(data: any) {
  const [data_grid, setdata_grid] = useState<any>(data);

  const column: GridColDef[] = [
    { field: "coin_pair", headerName: "Coin Pair", flex: 1 },
    { field: "buy", headerName: "Buy", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    { field: "created_at", headerName: "Created At", flex: 1 },
    {
      field: "acc",
      headerName: "Action",
      renderCell: (params: any) => {
        return (
          <IconButton
            onClick={async () => {
              const { data, error } = await supabase
                .from("Historys")
                .delete()
                .match({ history_id: params.id });
              if (error) {
                alert(error.message);
              } else {
                alert("Delete success ");
                window.location.reload();
              }
            }}
          >
            Delete
            <Delete />
          </IconButton>
        );
      },
      flex: 1,
    },
  ];
  const row: GridRowsProp[] = data_grid.data.data;
  console.log(row);
  return (
    <div>
      
      <DataGrid
        columns={column}
        rows={row}
        getRowId={(row) => row.history_id}
        pageSize={5}
        autoHeight={true}
        sx={{fontFamily: "Mitr"}}
      />
    </div>
  );
}

export default Recap_table;

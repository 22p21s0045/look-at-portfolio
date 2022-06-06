import React from "react";
import {useState, useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import { Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { supabase } from "../../components/login/supabaseClient";
import type { DATA } from "./type";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement);
function Graph_doughnut(data: any) {
    const gloabal_state = useSelector((state: any) => state.save);
  const [graph_data, setGraph_data] = useState({ ...data });
  const handle_newdata = async () => {
    const graph_data = await supabase
      .from<DATA>("Historys")
      .select("buy,created_at,coin_pair,amount");
    // setGraph_data(graph_data);
    console.log(graph_data);
    setGraph_data({ data: graph_data });
  };
  useEffect(() => {
    handle_newdata();
  }, [gloabal_state]);
  return (
    <div>
      <Paper sx={{ height: "50vh" }}>
        <Doughnut
          data={{
            labels: graph_data.data.body.map((item: any) => item.coin_pair),
            datasets: [
              {
                data: graph_data.data.body.map((item: any) => item.buy),
                backgroundColor: [
                  "#DCCFFF",
                  "#FEF1E6",
                  "#90AACB",
                  "#E63E6D",
                  "#FCD2D1",
                  "#FAAD80",
                  "#BDC7C9",
                  "#F9A825",
                  "#FFB396",
                  "#AACDBE",
                  "#EA9ABB",
                  "#EA9ABB",
                  "#FF847C",
                  "#E2DCD5",
                ],
                borderColor: [
                  "#4e4e4e",
                
                ],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
           

          }}
        />
      </Paper>
    </div>
  );
}

export default Graph_doughnut;

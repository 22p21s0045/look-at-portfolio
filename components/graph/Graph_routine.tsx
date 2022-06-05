import React from "react";
import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { supabase } from "../../components/login/supabaseClient";
import type { DATA } from "./type";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Graph_routine(data: any) {
  const [graph_data, setGraph_data] = useState(data);
  useEffect(() => {
    setGraph_data(graph_data);
    console.log(graph_data);
  }, [graph_data]);
  return (
    <div>
      <Paper>
        <Line
          data={{
            labels: graph_data.data.body.map((item: any) =>
              new Date(item.created_at).toLocaleDateString()
            ),
            datasets: [
              {
                label: "Buy",

                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "#000",

                pointHitRadius: 10,

                data: graph_data.data.body.map((item: any) => item.buy),
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.25, // disables bezier curves
              },
            },
          }}
        />
      </Paper>
    </div>
  );
}

export default Graph_routine;

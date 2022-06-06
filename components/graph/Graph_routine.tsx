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
import { useSelector } from "react-redux";

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
  const gloabal_state = useSelector((state: any) => state.save);
  const [graph_data, setGraph_data] = useState({ ...data });
  const [news, setnews] = useState<any>(null);
  const handle_newdata = async () => {
    const graph_data = await supabase
      .from<DATA>("Historys")
      .select("buy,created_at,coin_pair,amount");
    // setGraph_data(graph_data);
    console.log(graph_data);
    setGraph_data({ data: graph_data });
  };
  const title_tooltip = (TooltipItem: any) => {
    console.log(TooltipItem[0].dataIndex);
    return graph_data.data.body[TooltipItem[0].dataIndex].coin_pair;
  };
  const aftertitle_tooltip= (TooltipItem: any) => {
    console.log(TooltipItem[0].dataIndex);
    return graph_data.data.body[TooltipItem[0].dataIndex].amount;
  };
  useEffect(() => {
    handle_newdata();
  }, [gloabal_state]);
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
            plugins: {
              tooltip: {
                callbacks: {
                  title: title_tooltip,
                  afterTitle:aftertitle_tooltip
                },
              },
            },
          }}
        />
      </Paper>
    </div>
  );
}

export default Graph_routine;

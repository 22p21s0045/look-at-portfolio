import React from "react";
import Navbar from "../../components/navbar/Navbar";
import type { Props } from "../../components/navbar/Navbar";
import {InferGetStaticPropsType} from "next";
function id({coin}:InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Navbar coin={coin} />
      [id]
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://api.bitkub.com/api/market/symbols");
  const data:Props = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
export default id;

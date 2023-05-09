import React from "react";
import { BarLoader } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
export default function Loading({ type, color }) {
  return (
    <div className="loading">
      <BarLoader
        text={"Loading Data..."}
        bgColor={"white"}
        center={false}
        width={"150px"}
        height={"150px"}
        
      />
    </div>
  );
}

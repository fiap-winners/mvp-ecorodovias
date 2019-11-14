import React from "react";
import { useParams } from "react-router-dom";

// import bases from "./data";

export default function BasePage() {
  const { baseId } = useParams();
  return <div>Base Page ({baseId})</div>;
}

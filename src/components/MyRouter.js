import React from "react";
import { Route, Routes } from "react-router-dom";
import { CompA } from "./CompA";
import { CompB } from "./CompB";
import { CompC } from "./CompC";
import { CompD } from "./CompD";

export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/A" element={<CompA />} />
      <Route path="/B" element={<CompB />} />
      <Route path="/C" element={<CompC />} />
      <Route path="/D" element={<CompD />} />
      <Route path="/*" element={null} />
    </Routes>
  );
};

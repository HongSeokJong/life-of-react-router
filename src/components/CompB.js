import React, { useEffect, useLayoutEffect } from "react";
import { Logger } from "../lib";

const logger = new Logger([
  "background-color: blue; color: white",
  "background-color: white; color: black",
]);

export const CompB = () => {
  useLayoutEffect(() => {
    logger.log("%cCompB%c: useLayoutEffect");
    return () => {
      logger.log("%cCompB%c: useLayoutEffect cleanup");
    };
  }, []);

  useEffect(() => {
    logger.log("%cCompB%c: useEffect");
    return () => {
      logger.log("%cCompB%c: useEffect cleanup");
    };
  }, []);

  logger.log("%cCompB%c: run");
  return <>CompB</>;
};

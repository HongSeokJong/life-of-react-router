import React, { useEffect, useLayoutEffect } from "react";
import { Logger } from "../lib";

const logger = new Logger([
  "background-color: green; color: white",
  "background-color: white; color: black",
]);

export const CompC = () => {
  useLayoutEffect(() => {
    logger.log("%cCompC%c: useLayoutEffect");
    return () => {
      logger.log("%cCompC%c: useLayoutEffect cleanup");
    };
  }, []);

  useEffect(() => {
    logger.log("%cCompC%c: useEffect");
    return () => {
      logger.log("%cCompC%c: useEffect cleanup");
    };
  }, []);

  logger.log("%cCompC%c: run");
  return <>CompC</>;
};

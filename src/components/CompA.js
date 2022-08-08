import React, { useEffect, useLayoutEffect } from "react";
import { Logger } from "../lib";

const logger = new Logger([
  "background-color: red; color: white",
  "background-color: white; color: black",
]);

export const CompA = () => {
  useLayoutEffect(() => {
    logger.log("%cCompA%c: useLayoutEffect");
    return () => {
      logger.log("%cCompA%c: useLayoutEffect cleanup");
    };
  }, []);

  useEffect(() => {
    logger.log("%cCompA%c: useEffect");
    return () => {
      logger.log("%cCompA%c: useEffect cleanup");
    };
  }, []);

  logger.log("%cCompA%c: run");
  return <>CompA</>;
};

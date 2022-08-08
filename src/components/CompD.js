import React, { useEffect, useLayoutEffect } from "react";
import { Logger } from "../lib";

const logger = new Logger([
  "background-color: yellow; color: black",
  "background-color: white; color: black",
]);

export const CompD = () => {
  useLayoutEffect(() => {
    logger.log("%cCompD%c: useLayoutEffect");
    return () => {
      logger.log("%cCompD%c: useLayoutEffect cleanup");
    };
  }, []);

  useEffect(() => {
    logger.log("%cCompD%c: useEffect");
    return () => {
      logger.log("%cCompD%c: useEffect cleanup");
    };
  }, []);

  logger.log("%cCompD%c: run");
  return <>CompD</>;
};

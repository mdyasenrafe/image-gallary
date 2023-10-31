import React, { useContext } from "react";
import { ConfigContext } from "./config";

export default function useConfigContext() {
  const configContext = useContext(ConfigContext);
  return configContext;
}

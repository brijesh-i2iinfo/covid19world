import React from "react";
import ConfirmedGrap from "./confirmedGrap";

const ICONS = {
  "confirmed-grap": (props) => <ConfirmedGrap {...props} />,
};

const Icon = ({ type = "graph", ...props }) => ICONS[type]?.(props) || null;

export default Icon;
    
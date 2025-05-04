import React from "react";
import { CustomTooltipProps } from "./types";

export const formatYAxis = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
};

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return React.createElement(
      "div",
      { className: "custom-tooltip" },
      React.createElement("p", { className: "label" }, label),
      React.createElement(
        "p",
        { className: "value" },
        payload[0].value.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 0,
        })
      ),
      payload[0].payload.percentage &&
        React.createElement(
          "p",
          { className: "percentage" },
          `${payload[0].payload.percentage}%`
        )
    );
  }
  return null;
};

export const CustomPieTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return React.createElement(
      "div",
      { className: "recharts-default-tooltip" },
      React.createElement("p", null, payload[0].name),
      React.createElement(
        "p",
        null,
        `₦${payload[0].value}M (${payload[0].payload.percentage}%)`
      )
    );
  }
  return null;
};

export const COLORS = ["#39CDCC", "#E9B200", "#DF18FF"];

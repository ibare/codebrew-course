import * as React from "react";
import { FormattedNumber } from "./FormattedNumber";

const DEFAULT_UNIT = "";
const DEFAULT_COLOR = "#000";

interface CounterProps {
  title: string;
  count: number | string;
  color?: string;
  unit?: string;
}

export const Counter: React.FC<CounterProps> = props => {
  const unit = props.unit || DEFAULT_UNIT;
  const color = props.color || DEFAULT_COLOR;

  return (
    <div className="item">
      <p>{props.title}</p>
      <p style={{ color }}>
        <FormattedNumber value={props.count} />
        <span className="unit">{unit}</span>
      </p>
    </div>
  );
};

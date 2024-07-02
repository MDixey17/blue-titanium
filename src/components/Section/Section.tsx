import React from "react";
import { SectionProps } from "./Section.types";
import "./Section.css";

const Section = ({
  align,
  children,
  direction,
  divider,
  isPrimary,
  justify,
}: SectionProps) => {
  return (
    <div
      className={`bt-section ${isPrimary ? "bt-s-primary" : "bt-s-secondary"} ${divider ? "bt-s-divider" : ""}`}
      style={{
        justifyContent: justify,
        flexDirection: direction,
        alignContent: align,
        alignItems: align,
        flexWrap: "nowrap",
      }}
    >
      {children}
    </div>
  );
};

export default Section;

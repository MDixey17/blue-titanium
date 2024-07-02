import React from "react";
import { HeadingProps } from "./Heading.types";
import "./Heading.css";

const Heading = ({ size, isBlue, children }: HeadingProps) => {
  return (
    <>
      {size === "xs" && (
        <h5 className={`${isBlue ? "bt-blue-heading" : "bt-heading"}`}>
          {children}
        </h5>
      )}
      {size === "sm" && (
        <h4 className={`${isBlue ? "bt-blue-heading" : "bt-heading"}`}>
          {children}
        </h4>
      )}
      {size === "md" && (
        <h3 className={`${isBlue ? "bt-blue-heading" : "bt-heading"}`}>
          {children}
        </h3>
      )}
      {size === "lg" && (
        <h2 className={`${isBlue ? "bt-blue-heading" : "bt-heading"}`}>
          {children}
        </h2>
      )}
      {size === "xl" && (
        <h1 className={`${isBlue ? "bt-blue-heading" : "bt-heading"}`}>
          {children}
        </h1>
      )}
    </>
  );
};

export default Heading;

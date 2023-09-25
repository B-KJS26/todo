
import React, { ReactElement, useEffect, useState } from "react";
import ReactDom, { createPortal } from "react-dom";

const Portal = ({ children }: { children: any }) => {
  

  if (typeof window === "undefined") return <></>;

  return  createPortal(children, document.getElementById("modal-root") as HTMLElement) 
};

export default Portal;
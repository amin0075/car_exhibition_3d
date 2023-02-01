"use client";

import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ClientComponent: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      ClientComponent
      {children}
    </div>
  );
};

export default ClientComponent;

import React from "react";

type ProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Provider = ({ children }: ProviderProps) => {
  return <div className="m-8">{children}</div>;
};

export default Provider;

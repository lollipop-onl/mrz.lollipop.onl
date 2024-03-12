import { Outlet } from "@remix-run/react";
import { Document } from "~/components/Document";

export const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

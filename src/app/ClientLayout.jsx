// app/ClientLayout.jsx
"use client";

import { Provider } from "react-redux";
import { store } from "../store"; // مسیر درست store

export default function ClientLayout({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
'use client'
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabuada from "./components/Tabuada";
import { Provider } from 'react-redux';
import store from "../app/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Tabuada />
    </Provider>
  );
}

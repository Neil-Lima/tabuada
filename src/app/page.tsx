'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import TabuadaPage from './pages/TabuadaPage';

export default function Home() {
  return (
    <Provider store={store}>
      <TabuadaPage />
    </Provider>
  );
}

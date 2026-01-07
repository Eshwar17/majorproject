import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';
import {Provider as ReduxProvider} from "react-redux";
import store from './redux/store';
import './index.css';
import Popups from './popups/Popup.jsx';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
      <Popups />
    </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);

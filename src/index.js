import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    secondaryText: 'gray',
    white: 'white',
    backgroundColor: '#f2eded',
    secondaryBgcolor: '#eeeeee',
    tableHeadColor: '#7189b2',
  },
  boxShadow: '2px 2px 10px 1px rgba(166,163,166,1);',
  border: '1px solid #afb1b8',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

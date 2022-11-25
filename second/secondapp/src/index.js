import React from 'react';
import ReactDom from 'react-dom/client';
import App2 from './component/App2';

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<App2/>)
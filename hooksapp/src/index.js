import React from 'react';
import ReactDom from 'react-dom/client';
import HooksComponent from './component/hooksComponent';
const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<HooksComponent/>)
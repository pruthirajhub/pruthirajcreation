import React from 'react';
import ReactDom from 'react-dom/client';
import Home from './Home';

const container = document.getElementById('root');
const root=ReactDom.createRoot(container);
root.render(<Home/>)

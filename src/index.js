import React from 'react';
import ReactDOM from 'react-dom';

const title = "React setup ready!";

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();
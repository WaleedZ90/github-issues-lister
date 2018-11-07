import React from 'react';
import ReactDOM from 'react-dom';
import IssuesGrid from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssuesGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
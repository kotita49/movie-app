import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import CheckBox from './components/checkbox';
import ExpandableFilter from './components/expandablefilter'

import Discover from './pages/discover';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Discover renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Discover />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Checkbox renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('ExpandableFilter renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExpandableFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});




import React from 'react';
import ReactDOM from 'react-dom';
import Sorting from './Sorting';

function setUp() {
   const div = document.createElement('div');
   ReactDOM.render(<Sorting/>, div);
   return div;
}

function expectValues(select, ...values) {
   const options = select.querySelectorAll('option');
   expect(options.length).toEqual(values.length);
   values.forEach((value, index) => expect(options[index].innerHTML).toEqual(value));
}

it('renders without crashing', () => {
   const div = setUp();
   ReactDOM.unmountComponentAtNode(div);
});

it('First select menu has two options with two values, Popularity and Rating', () => {
   const div = setUp();
   const select = div.querySelectorAll('select')[0];
   expectValues(select, 'Popularity', 'Rating');
});

it('Second select menu has two options with two values, Asc and Desc', () => {
   const div = setUp();
   const select = div.querySelectorAll('select')[1];
   expectValues(select, 'Asc', 'Desc');
});

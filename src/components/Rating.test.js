import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating';

function setUp() {
   const div = document.createElement('div');
   ReactDOM.render(<Rating/>, div);
   return div;
}

it('renders without crashing', () => {
   const div = setUp();
   ReactDOM.unmountComponentAtNode(div);
});

it('Should have one input box of type range', () => {
   const div = setUp();
   const input = div.querySelectorAll('input');
   expect(input.length).toEqual(1);
   expect(input[0].type).toEqual('range');
});

// it('Changing value to 5.5 should update label', () => {
//    const div = setUp();
//    const input = div.querySelectorAll('input')[0];
//    input.value = 5.5;
//    input.click();
// });

// function nodeToString ( node ) {
//    var tmpNode = document.createElement( "div" );
//    tmpNode.appendChild( node.cloneNode( true ) );
//    var str = tmpNode.innerHTML;
//    tmpNode = node = null; // prevent memory leaks in IE
//    return str;
// }

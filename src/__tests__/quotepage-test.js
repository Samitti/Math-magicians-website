import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../components/Routes';

it('checks the snapshot of quotepage', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<Routes />, div)
    const quuotepage = document.body.querySelector('#quotepage')
    quotepage.click()
    expect(div).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../components/Routes';

it('checks the snapshot of homepage', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<Routes />, div)
    const home = document.body.querySelector('#homepage')
    expect(div).toMatchSnapshot();
});

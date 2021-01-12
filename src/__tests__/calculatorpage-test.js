import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../components/Routes';

it('checks the snapshot of calculatorpage', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<Routes />, div)
    const calculatorpage = document.body.querySelector('#calculatorpage')
    calculatorpage.click()
    expect(div).toMatchSnapshot();
});

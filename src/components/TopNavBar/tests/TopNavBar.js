import React from 'react';
import TopNavBar  from '../TopNavBar.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('TopNavBar', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<TopNavBar />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

import React from 'react';
import Main  from '../Main.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('Main', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<Main />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

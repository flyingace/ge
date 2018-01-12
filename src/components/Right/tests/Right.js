import React from 'react';
import Right  from '../Right.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('Right', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<Right />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

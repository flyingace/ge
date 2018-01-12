import React from 'react';
import Left  from '../Left.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('Left', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<Left />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

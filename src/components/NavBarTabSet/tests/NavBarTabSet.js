import React from 'react';
import NavBarTabSet  from '../NavBarTabSet.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('NavBarTabSet', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<NavBarTabSet />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

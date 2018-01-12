import React from 'react';
import NavBarLinkSet  from '../NavBarLinkSet.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('NavBarLinkSet', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<NavBarLinkSet />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

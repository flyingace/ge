import React from 'react';
import Header  from '../Header.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('Header', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<Header />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

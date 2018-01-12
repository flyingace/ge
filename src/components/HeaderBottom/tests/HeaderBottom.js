import React from 'react';
import HeaderBottom  from '../HeaderBottom.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('HeaderBottom', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<HeaderBottom />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

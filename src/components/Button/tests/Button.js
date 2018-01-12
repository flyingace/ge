import React from 'react';
import Button  from '../Button.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('Button', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<Button />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

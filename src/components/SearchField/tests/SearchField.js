import React from 'react';
import SearchField  from '../SearchField.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('SearchField', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<SearchField />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

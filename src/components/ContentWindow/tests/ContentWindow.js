import React from 'react';
import ContentWindow  from '../ContentWindow.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('ContentWindow', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<ContentWindow />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});

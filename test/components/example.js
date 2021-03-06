import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Voting from '../../client/components/example';
import {expect} from 'chai';

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const pair = ["Trainspotting", "28 Days Later"];
    const component = renderIntoDocument(
        <Voting pair={pair} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

});
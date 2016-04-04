import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReceiptList from '../../client/components/receipt_list';
import {expect} from 'chai';

describe('Receipt List', () => {
  const receipts = [{
    "divisionNumber": "014",
    "itemCount": "3",
    "storeAddress1": "1234 Some Pl.",
    "storeAddress2": "Cincinnati, OH 45211",
    "storeNumber": "00383",
    "subTotal": "$23.47",
    "tax": "$1.61",
    "terminalNumber": "5",
    "total": "$25.08",
    "transactionDate": 1456780899128,
    "transactionId": "123",
    "transactionTime": "01/22/2015T12:54:00"
  }, {
    "divisionNumber": "014",
    "itemCount": "1",
    "storeAddress1": "1234 Some Pl.",
    "storeAddress2": "Cincinnati, OH 45211",
    "storeNumber": "00383",
    "subTotal": "$120.47",
    "tax": "$11.61",
    "terminalNumber": "2",
    "total": "$133.08",
    "transactionDate": 1456780899128,
    "transactionId": "121",
    "transactionTime": "01/21/2015T12:54:00"
  }];

  it.skip("renders list of receipts", function () {
    const ReceiptList = TestUtils.renderIntoDocument(
        <ReceiptList receipts={receipts} />
    );

    const ReceiptListComponent = TestUtils.scryRenderedDOMComponentsWithTag(
        ReceiptList, 'div'
    );

    expect(ReceiptListComponent.length).toEqual(5);
  });

  it.skip('Renders tr', () => {

    const component = TestUtils.renderIntoDocument(
        <ReceiptList receipts={receipts} />
    );

    console.log("------------", component);

    const ReceiptListRow = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');

    expect(ReceiptListRow.length).to.equal(1);
  });

  it("Should Display the Component DOM", function () {
    const markup = React.renderToStaticMarkup(<ReceiptList receipts={receipts} />);
    var output = '<div class="table-container">' +
                 '<table>' +
                 '<thead>' +
                 '<tr><th>Date of Receipt</th>' +
                 '<th>Fulfillment</th><th class="align-right">Amount</th></tr></thead>' +
                 '<tbody>' +
                 '<tr><td class="selector bold">01/22/2015T12:54:00</td>' +
                 '<td class="bold">In-Store, 1234 Some Pl., Cincinnati, OH 45211</td>' +
                 '<td class="align-right">$25.08</td>' +
                 '</tr>' +
                 '<tr><td class="selector bold">01/21/2015T12:54:00</td>' +
                 '<td class="bold">In-Store, 1234 Some Pl., Cincinnati, OH 45211</td>' +
                 '<td class="align-right">$133.08</td>' +
                 '</tr>' +
                 '</tbody></table></div>';
    expect(markup).to.equal(output);
  });


//var MyComponent = // a React.Component with a <button/> ...
//    describe('MyComponent', function () {
//      it('has button that fires a dom event for click', function (done) {
//        function handleClick() { done() }
//        var detachedComp = TestUtils.renderIntoDocument(<ReceiptList receipts={receipts} />)
//        var button = TestUtils.findRenderedDOMComponentWithClass(detachedComp, 'container')
//        var buttonNode = React.findDOMNode(button)
//        should.exist(buttonNode)
//        TestUtils.Simulate.click(buttonNode)
//      })
//    })
});
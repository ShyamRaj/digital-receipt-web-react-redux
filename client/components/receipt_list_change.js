import React, {PropTypes} from 'react';

const ReceiptList = (props) =>
        <div class="container">
          { props.receipts.map((receipt, index) => {
            return <div key={index}>{receipt.storeAddress1}</div>;
          })}
        </div>;

ReceiptList.propTypes = {
  receipts : PropTypes.array
};

export default ReceiptList;
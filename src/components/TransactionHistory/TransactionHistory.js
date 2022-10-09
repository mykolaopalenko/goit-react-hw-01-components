import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

function TransactionHistory({items}) {
   return (
      <table className={style.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <TransactionHistoryItem
                type={type}
                amount={amount}
                currency={currency}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
}

function TransactionHistoryItem({ type, amount, currency }) {
   return (
     <>
       <td>{type}</td>
       <td>{amount}</td>
       <td>{currency}</td>
     </>
   );
 };


TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
     PropTypes.exact({
       id: PropTypes.string.isRequired,
       type: PropTypes.string.isRequired,
       amount: PropTypes.string.isRequired,
       currency: PropTypes.string.isRequired,
     }).isRequired
   ).isRequired,
 };



 export default TransactionHistory
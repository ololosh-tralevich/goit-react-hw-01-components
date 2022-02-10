import PropTypes from "prop-types";
import styles from './transactionHistory.module.css';

const TransactionHistory = ({items}) => {
  let partOfCode = items.map(item => {
    return (
      <tr key={item.id} className={styles.tableColumn}>
        <td className={styles.tableData}>{item.type}</td>
        <td className={styles.tableData}>{item.amount}</td>
        <td className={styles.tableData}>{item.currency}</td>
      </tr>
    );
  });
  return (
    <div className={styles.mainSection}>
      <table className={styles.transactionsTable}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{partOfCode}</tbody>
      </table>
    </div>
  );
};

TransactionHistory.defaultProps = {
    items: [],
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;

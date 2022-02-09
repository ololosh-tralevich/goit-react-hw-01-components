import PropTypes from "prop-types";
import styles from './fourthTask.module.css';

const FourthTask = ({transactions}) => {
  let partOfCode = transactions.map(item => {
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

FourthTask.defaultProps = {
    transactions: [],
};

FourthTask.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default FourthTask;

import transactionsData from './transactions.json';
import styles from './fourthTask.module.css';

const FourthTask = () => {
  let transactions = transactionsData.map(item => {
    return (
      <tr className={styles.tableColumn}>
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
        <tbody>{transactions}</tbody>
      </table>
    </div>
  );
};

export default FourthTask;

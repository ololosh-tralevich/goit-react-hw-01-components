import transactions from './transactions.json';
import styles from './fourthTask.module.css';

const FourthTask = () => {
  return (
    <table className={styles.transactionTable}>
      <thead>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </thead>
    </table>
  );
};

export default FourthTask;

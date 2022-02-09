import styles from './secondTask.module.css';
import statsData from './data.json';

let randomColor = '';

const secondTask = () => {
  const partOfCode = statsData.map(item => {
    getRandomColor();

    return (
      <li key={item.id} className={styles.listItem} style={{ backgroundColor: randomColor }}>
        <p className={styles.itemText}>{item.label}</p>
        <p className={styles.itemText}>{item.percentage}%</p>
      </li>
    );
  });

  return (
    <div className={styles.mainSection}>
      <h2>UPLOAD STATS</h2>
      <ul className={styles.mainSectionList}>{partOfCode}</ul>
    </div>
  );
};

export default secondTask;

function getRandomColor() {
  randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

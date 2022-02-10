import styles from './statistics.module.css';
import PropTypes from "prop-types";

let randomColor = '';

const Statistics = ({stats}) => {
  const partOfCode = stats.map(item => {
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

Statistics.defaultProps = {
    stats: [],
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Statistics;

function getRandomColor() {
  randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

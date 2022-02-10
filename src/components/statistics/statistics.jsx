import styles from './statistics.module.css';
import PropTypes from 'prop-types';

let randomColor = '';
let titleCode = '';

const Statistics = ({ title, stats }) => {
  const partOfCode = stats.map(item => {
    getRandomColor();

    return (
      <li
        key={item.id}
        className={styles.listItem}
        style={{ backgroundColor: randomColor }}
      >
        <p className={styles.itemText}>{item.label}</p>
        <p className={styles.itemText}>{item.percentage}%</p>
      </li>
    );
  });

  if (title !== '') {
    titleCode = <h2>{title}</h2>;
  }

  return (
    <div className={styles.mainSection}>
      {titleCode}
      <ul className={styles.mainSectionList}>{partOfCode}</ul>
    </div>
  );
};

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

function getRandomColor() {
  randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

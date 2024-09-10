import PropTypes from 'prop-types';
import styles from './HeroPortrait.module.css';

const HeroPortrait = ({ hero, priority }) => {
  const priorityColors = {
    high: 'purple',
    medium: 'gold',
    low: 'gray'
  };

  const getLighterColor = (color) => {
    const colorMap = {
      purple: [128, 0, 128],
      gold: [255, 215, 0],
      gray: [128, 128, 128]
    };

    const [r, g, b] = colorMap[color] || [0, 0, 0];
    return `rgba(${Math.min(r + 100, 255)}, ${Math.min(g + 100, 255)}, ${Math.min(b + 100, 255)}, 0.3)`;
  };

  const portraitStyle = {
    border: `3px solid ${priorityColors[priority]}`,
    backgroundColor: getLighterColor(priorityColors[priority]),
  };

  const name = hero.replace(/ /g, ''); // Replaces all space characters with nothing

  return (
    <div className={styles.heroPortrait} style={portraitStyle}>
      <img className={styles.imagePlaceholder}
        src={`../../public/images/${name}.png`}
        alt={`${hero} Image`}
      />
      <div className={styles.heroName}>
        {hero}
      </div>
    </div>
  );
};

HeroPortrait.propTypes = {
  hero: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['high', 'medium', 'low']).isRequired
};

export default HeroPortrait;
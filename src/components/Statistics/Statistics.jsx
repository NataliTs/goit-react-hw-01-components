import PropTypes from 'prop-types';
import {
  Label,
  Percentage,
  StatisticsSection,
  StatList,
  StatsItem,
  Title,
} from './Statistics.styled';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

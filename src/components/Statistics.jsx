import { Component } from 'react';
import styled from 'styled-components';

const StyledStatistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 30px;

  & h2 {
    font-size: 30px;
  }

  & p {
    font-size: 20px;
    font-weight: 700;
  }
`;

export default class Statistics extends Component {
  state = {
    positivePercentage: 0,
  };

  calcColor = positivePercentage => {
    if (positivePercentage < 30) {
      return 'red';
    }
    if (positivePercentage >= 80) {
      return 'green';
    }
    return 'orange';
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StyledStatistics>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p style={{ color: this.calcColor(positivePercentage) }}>
          Positive feedback: {positivePercentage}%
        </p>
      </StyledStatistics>
    );
  }
}

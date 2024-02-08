import { Component } from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  gap: 20px;

  & button {
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 15px;
    cursor: pointer;
  }
`;

const ColorPattern = {
  good: 'green',
  neutral: 'yellow',
  bad: 'red',
};

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <StyledList>
        {options.map(el => (
          <li key={el}>
            <button
              style={{ backgroundColor: ColorPattern[el] }}
              onClick={() => onLeaveFeedback(el)}
            >
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </button>
          </li>
        ))}
      </StyledList>
    );
  }
}

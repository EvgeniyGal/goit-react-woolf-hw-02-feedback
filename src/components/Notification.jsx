import { Component } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`;

export default class Notification extends Component {
  render() {
    const { message } = this.props;
    return <Paragraph>{message}</Paragraph>;
  }
}

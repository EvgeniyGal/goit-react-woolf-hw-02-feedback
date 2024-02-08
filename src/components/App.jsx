import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  hasFeedback = () => {
    return !!(this.state.good + this.state.bad + this.state.neutral);
  };

  handleAddFeedback = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Section title="Please live feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleAddFeedback}
        />
        {this.hasFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

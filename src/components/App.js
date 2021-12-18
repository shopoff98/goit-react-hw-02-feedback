import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notifiction';
import { Container } from './styled/Container.styled';


class App extends Component {


  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
   

  };

  totalFeedback = () => {
     const { Good, Neutral, Bad } = this.state;

    return Good + Neutral + Bad;
  };

  positiveFeedbackPercentage = () => {
    const { Good } = this.state;
    const totalCount = this.totalFeedback();

    return Math.round((Good * 100) / totalCount) || 0;
  }

  handleFeedback= (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  }
 

  render() {
    const { Good, Neutral, Bad } = this.state;
   
   
    
    return (  
      <Container>
   <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback} />
        {(this.totalFeedback() ?
          (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedbackPercentage()} />
          )
          : (<Notification message="There is no feedback" />))
        }
        </Section>
        </Container>
     )
  };
  
}


export default App;



import { ListItemFeedback, ListFeedback, Button, SectionOfFeedbackOption  } from "./styled/FeedbackOption.styled";


const FeedbackOptions = ({ options, onLeaveFeedback}) => {

    return ( 
      <SectionOfFeedbackOption  >
        <ListFeedback>
            {options.map((option) => {
              return (
                  <ListItemFeedback>
                    <Button
            
                        key={option}
                        onClick={() => onLeaveFeedback(option)
            }
          >
            {option}
          </Button>
                </ListItemFeedback>
        );
            })}
          </ListFeedback>
    </SectionOfFeedbackOption >
)
}

export default FeedbackOptions;
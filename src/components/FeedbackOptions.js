import { ListItemFeedback, ListFeedback, Button, SectionOfFeedbackOption  } from "./styled/FeedbackOption.styled";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback}) => {

    return ( 
      <SectionOfFeedbackOption  >
        <ListFeedback>
            {options.map((option) => {
              return (
                  <ListItemFeedback key={option}>
                    <Button
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

FeedbackOptions.protoTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback:PropTypes.func.isRequired
}



export default FeedbackOptions;
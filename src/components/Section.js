import { SectionTitle } from "./styled/Section.styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return(<section>
        {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </section>)
    
    }

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
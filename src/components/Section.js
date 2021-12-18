import { SectionTitle } from "./styled/Section.styled";
const Section = ({ title, children }) => {
    return(<section>
        {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </section>)
    
    }


export default Section;
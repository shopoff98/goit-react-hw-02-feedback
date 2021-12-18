import styled from '@emotion/styled';

export const Button = styled.button`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: 1px solid ;
border-radius: 4px;
width:70px;
background-color:#ffffff;
&:hover{
    background-color:palevioletred;
}
cursor:pointer;
`;

export const ListFeedback = styled.ul`
list-style:none;
display: flex;

    `;



export const ListItemFeedback = styled.li`
&:not(:last-child) {
    margin-right: 8px;
}
`;

export const SectionOfFeedbackOption = styled.div`
padding-bottom: 10px;
`

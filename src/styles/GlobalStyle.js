import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

    ${normalize}

    body {
        font-family: ${({ props }) => props.theme.font.family.default};
        font-size: ${({ props }) => props.theme.font.size.default};
        line-height: ${({ props }) => props.theme.font.lineHeight.default};
        color: ${({ props }) => props.theme.color.text}
    }
`;

export default GlobalStyle;

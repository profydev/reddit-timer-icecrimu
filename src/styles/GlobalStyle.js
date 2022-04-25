import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

    ${normalize}

    body {

        font-family: ${({ theme }) => theme.font.family.default};
        font-size: ${({ theme }) => theme.font.size.default};
        line-height: ${({ theme }) => theme.font.lineHeight.default};
        color: ${({ theme }) => theme.color.text};
        
    }

    a {
        text-decoration: none;

    }
`;

export default GlobalStyle;

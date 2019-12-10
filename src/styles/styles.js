import styled from 'styled-components'

export const Li = styled.li`
    display: inline-block;

    :before {
    content: ', ';
    }

    :first-child:before {
    display: none;
    }
`
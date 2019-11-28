import styled from 'styled-components'


export const Container = styled.div`
    width: 100%
    display: flex;
`

export const Sidebar = styled.div`
    width: 20%;
    height: 100vh
    border-right: 1px solid #efefef
`

export const Li = styled.li`
    display: inline-block;


    :before {
    content: ', ';
    }

    :first-child:before {
    display: none;
    }
`
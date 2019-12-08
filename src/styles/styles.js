import styled from 'styled-components'

export const Container = styled.div`
    display: flex
    padding: 0px
`
    
export const Sidenav = styled.aside`
    width: 40%
    height: 100vh
    border-right: 1px solid #efefef
`

export const Profile = styled.div`
    width: 100%;
    padding: 2.7em;
`

export const ProfileImage = styled.img`
    margin-bottom: 0px;
`

export const Main = styled.div`
    width: 120vw;
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
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%
    display: flex
`
    
export const Sidenav = styled.div`
    width: 22vw;
    height: 100vh
    border-right: 1px solid #efefef
`

export const Profile = styled.div`
    width: 100%;
    padding: 1.5em;
`

export const ProfileImage = styled.img`
    margin-bottom: 0px;
    border-radius: 50%;
`

export const Main = styled.div`
    width: 75%;
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
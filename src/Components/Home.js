import React from 'react'
import Head from './Head/Head'
import Header from './Header/Header'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Header />
            <Head />
        </Container>
    )
}

export default Home


const Container = styled.div`
    background-image: url('/images/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`
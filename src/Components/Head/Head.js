import React from 'react'
import styled from 'styled-components'

function Head() {
    return (
        <Container>
            <Wrap>
                <p className="explore">Explore</p>
                <h1>sri lanka</h1>
                <p className="phara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum<br></br> 
                    has been the industry’s standard dummy text ever since the 1500s,</p>
                <div className="button">
                    Read more
                </div>
                </Wrap>
        </Container>
    )
}

export default Head


const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .explore{
        letter-spacing: 10px;
        margin-bottom: 0px;
        text-transform: uppercase;
        font-weight: 200;
        font-size: 36px;
    }

    h1{
       font-size: 12rem;
       padding: 0;
       margin: 0;
       text-transform: uppercase;
    }

    .phara{
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 1px;
        margin-top: 2px;
    }
`

const Wrap = styled.div`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;


    .button{
        background-color: #3E89B1;
        width: 150px;
        height: 50px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
`
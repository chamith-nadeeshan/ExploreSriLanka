import React from 'react'
import styled from 'styled-components'

function TopOfWeek() {
    return (
        <Container>
            <Wrap>
                <img src="/images/top.jpeg" width="370px" height="280px" />
                <div className="text">
                    <h2>Top of the week</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> 
                    Lorem Ipsum has been the industry’s standard dummy text ever since the<br></br> 
                    1500s,
                    </p>

                    <div className="button">
                        Book Now
                    </div>
                </div>
            </Wrap>
        </Container>
    )
}

export default TopOfWeek

const Container = styled.div`
    max-width: 1128px;
    margin: auto;
    margin-top: 50px;
    height: 310px;
    border: 1px solid #BEBEBE;
    border-radius: 20px;
    display: flex;
    align-items: center;
`
const Wrap = styled.div`
    padding-left: 15px; 
    display: flex;
    img{
        border-radius: 10px ;
    }

    .button{
        width: 150px;
        height: 50px;
        border-radius: 10px;
        background-color: #3E89B1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        margin-top: 40px;
    }

    .text{
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 20px;

        p{
            display: flex;
            text-align: start;
            color: #898989;
            line-height: 20px;
            font-weight: 300;
        }
    }
`
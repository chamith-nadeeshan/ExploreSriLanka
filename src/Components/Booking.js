import React from 'react'
import styled from 'styled-components'

function Booking() {
    return (
        <Container>
            <Wrap>
                <div className="section" >
                    <p className="location">Location</p>
                    <div className="box" >
                        <p>Kandy</p>
                        <img src="/icons/downArrow.png" />
                    </div>
                </div>

                <div className="section" >
                    <p className="location">Date</p>
                    <div className="box" >
                        <p>02 : May : 2021</p>
                        <img src="/icons/downArrow.png" />
                    </div>
                </div>

                <div className="section" >
                    <p className="location">Members</p>
                    <div className="box" >
                        <p>01</p>
                        <img src="/icons/downArrow.png" />
                    </div>
                </div>

                <div className="button">
                    Book Now
                </div>

            </Wrap>
        </Container>
    )
}

export default Booking

const Container = styled.div`
   margin: auto;
   margin-top: -80px;
`
const Wrap = styled.div`
    display: flex;
    max-width: 1128px;
    height: 150px;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 10px 25px -10px;
    border-radius: 20px;
    shadow-color: red;
    margin:auto;
    align-items: center;

    .section{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-right: 50px;
        .location{
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 5px;

        }
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

    .box{
        display: flex;
        align-items: center;
        border: 1px solid #B7B7B7;
        width: 170px;
        border-radius: 15px;
        justify-content: space-between;
        padding-left: 5px;
        padding-right: 5px;
        
        p{
            color: #D1D1D1;
        }    
}
`
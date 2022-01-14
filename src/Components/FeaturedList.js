import React from 'react'
import styled from 'styled-components'

function FeaturedList() {
    return (
        <Container>
            <Wrap>
                <h1>Featured List</h1>
                <p className="description">
                Lorem Ipsum when an unknown printer took a galley of type and<br></br>
                scrambled it to make a type specimen book. It has survived not only<br></br>
                 five centuries,.
                </p>

                <Display>
                    <div className="box" style={{color: 'white'}} >
                        <div>
                            <img src="/images/kithulgala.jpeg" width="400" height="350" />
                        </div>
                        <div className="intro" style={{background:'#3E89B1'}}>
                            <div className="price" >
                                <div>
                                    <h2>Kithulgala</h2>
                                    <p className="rating">(3.7 Rating)</p>
                                </div>
                                    <p className="amount">$ 250</p>
                            </div>
                            <div>
                                <p className="dis">
                                Lorem Ipsum is simply dummy text of the printing and<br></br>
                                 typesetting industry. Lorem Ipsum has been the industry’s<br></br>
                                  standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="box" style={{color: 'black'}} >
                        <div>
                            <img src="/images/trinco.jpeg" width="400" height="350" />
                        </div>
                        <div className="intro" style={{background:'#ffffff'}}>
                            <div className="price" >
                                <div>
                                    <h2>Trincomalee</h2>
                                    <p className="rating">(3.7 Rating)</p>
                                </div>
                                    <p className="amount">$ 250</p>
                            </div>
                            <div>
                                <p className="dis">
                                Lorem Ipsum is simply dummy text of the printing and<br></br>
                                 typesetting industry. Lorem Ipsum has been the industry’s<br></br>
                                  standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="box" style={{color: 'black'}} >
                        <div>
                            <img src="/images/seegiriya.jpeg" width="400" height="350" />
                        </div>
                        <div className="intro" style={{background:'#ffffff'}}>
                            <div className="price" >
                                <div>
                                    <h2>Seegiriya</h2>
                                    <p className="rating">(3.7 Rating)</p>
                                </div>
                                    <p className="amount">$ 250</p>
                            </div>
                            <div>
                                <p className="dis">
                                Lorem Ipsum is simply dummy text of the printing and<br></br>
                                 typesetting industry. Lorem Ipsum has been the industry’s<br></br>
                                  standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>
                </Display>
            </Wrap>
        </Container>
    )
}

export default FeaturedList

const Container = styled.div`
    margin-top: 50px;
    max-width: 1128px;
    margin: auto;

`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-auto;

    .description{
        line-height: 25px;
        color: #8E8E8E;
        letter-spacing: 2px;
    }
`

const Display = styled.div`
    max-width: 1128px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    margin-left: 10px;
    img{
        border-radius: 20px;
    }

    .box{
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .intro{
        padding: 10px;
        width: 300px;
        height: 150px;
        margin-top: -70px;
        border-radius: 10px;
        

        .dis{
            font-size: 10px;
            text-align: start;


        }
    }

    .price{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .amount{
        font-size: 24px;
        font-weight: 500;
        margin-top: 0px;
    }

    .rating{
        margin-top: -15px;
        font-size: 12px;
    }

`
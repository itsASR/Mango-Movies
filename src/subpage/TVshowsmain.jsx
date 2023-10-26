// import React from 'react'
import { React, useContext, useEffect } from 'react'
import Header from '../Header'
import { consta } from '../App'
import '../Moviepage.css'
import Footer from '../Footer'
import mov from '../movie-background.jpg'
import './TVshowsmain.css'


function TVshowsmain() {

    let imgfixpath = 'https://image.tmdb.org/t/p/original'


    const { title, settitle, tvdata, settvdata, original } = useContext(consta)

    return (
        <>
            <div className="moviepage-head">
                <Header></Header>
                <div className='Browse-new-popular-and-upcoming-movies'><h1>New TV Shows</h1> </div>

                <div className="top-10-movie-div">
                    <div className="top-10-movie-card">
                        <h2>Top 10 TV shows this week</h2>
                        <p>Explore this week's most popular TV shows and find out where to stream them.</p>
                    </div>
                    <div className="top-10-movie-scroll">

                        {
                            tvdata.map((titles) => {
                                return <div className="top-10-movie-scroll1">
                                    <div className="top10map">
                                        <img src={imgfixpath + titles.poster_path}></img>
                                    </div>
                                </div>
                            })
                        }


                    </div>
                </div>

                {/* ****************Single Banner*************** */}

                <div className="single-banner-main-div">
                    <div className="tvsub-single-banner-main-div">
                        <img src={mov}></img>
                        <div className="tvtop-10-movie-div-floating">
                            <div className="top-10-movie-scroll">

                                {
                                    original.map((titles) => {
                                        return <div className="top-10-movie-scroll1">
                                            <div className="tvtop10map">
                                                <img src={imgfixpath + titles.poster_path}></img>
                                            </div>

                                        </div>
                                    })
                                }



                            </div>
                        </div>
                        <div></div>
                    </div>
                    <p className='best-pick'>Best Picks for You</p>
                </div>


                {/* ***************Aftet Movie*********** */}



                <div>
                    <h1 style={{ color: 'white', backgroundColor: 'black', padding: '15px 50px' }}>ALL SHOWS</h1>
                </div>
                <div className="last-div-shows">
                    {
                        tvdata.map((titles) => {
                            return <div className="allshows">
                                <div className="sub-allshows">
                                    <img src={imgfixpath + titles.poster_path}></img>
                                    <img src={imgfixpath + titles.poster_path}></img>
                                </div>

                            </div>
                        })
                    }
                </div>
                <div className="nfn">
                    <Footer></Footer>
                </div>


            </div>













        </>
    )
}

export default TVshowsmain
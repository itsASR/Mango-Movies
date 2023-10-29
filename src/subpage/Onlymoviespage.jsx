import { React, useContext, useEffect } from 'react'
import Header from '../Header'
import { consta } from '../App'
import '../Moviepage.css'
import Footer from '../Footer'
import mov from '../movie-background.jpg'
import './Tvshowsmain.css'


function Onlymoviespage() {
    let imgfixpath = 'https://image.tmdb.org/t/p/original'


    const { title, settitle, tvdata, settvdata, popularmovies , trendingshows} = useContext(consta)
  return (
    <>
            <div className="moviepage-head">
                <Header></Header>
                <div className='Browse-new-popular-and-upcoming-movies'><h1>New TV Shows</h1> </div>

                <div className="top-10-movie-div">
                    <div className="top-10-movie-card">
                        <h2>Top 10 Movies</h2>
                        <p>Explore this week's most popular Movies and Stream with friends and Family.</p>
                    </div>
                    <div className="top-10-movie-scroll">

                        {
                            popularmovies.map((titles) => {
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
                                    trendingshows.map((titles) => {
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
                    <h1 style={{ color: 'white', backgroundColor: 'black', padding: '15px 50px' }}>ALL MOVIES</h1>
                </div>
                <div className="last-div-shows">
                    {
                        title.map((titles) => {
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

export default Onlymoviespage

import { React, useContext } from 'react'
import Header from './Header'
import { consta } from './App'
import './Moviepage.css'
import Footer from './Footer'


function Moviepage() {
    let imgfixpath = 'https://image.tmdb.org/t/p/original'


    const { title, tvdata, trendingshows, popularmovies } = useContext(consta)


    return (
        <>
            <div className="moviepage-head">
                <Header></Header>
                <div className='Browse-new-popular-and-upcoming-movies'><h1>Browse new, popular and upcoming movies & TV Shows</h1> </div>
                <div className="top-10-movie-div">
                    <div className="top-10-movie-card">
                        <h2>Top 10 movies this week</h2>
                        <p>Check out this week's most popular movies and find out where to watch them.</p>
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
                    <div className="sub-single-banner-main-div">
                        {
                            trendingshows.map((titles) => {
                                return <div className="api-sub-single-banner-main-div">
                                    <img src={imgfixpath + titles.backdrop_path}></img>
                                    <div className="single-banner-title">
                                        <h2>{titles.title}</h2>
                                        <p className='single-banner-describe'>{titles.overview.slice(0,150)}.....</p>
                                    </div>



                                </div>


                            })
                        }
                    </div>
                </div>


                {/* ***************Aftet Movie*********** */}



                <div>
                    <h1 style={{ color: 'white', backgroundColor: 'black', padding: '15px 50px' }}>NEW MOVIES</h1>
                </div>
                <div className="top-10-movie-div">
                    <div className="top-10-movie-card">
                        <h2>New TV Shows</h2>
                        <p>Put your eyes on our Top Tv Shows series wide range and get some chill in life.</p>

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
                <div>
                    <h1 style={{ color: 'white', backgroundColor: 'black', padding: '15px 50px' }}>NEW TV SHOWS</h1>
                </div>
                <div className="top-10-movie-div">
                    <div className="top-10-movie-card">
                        <h2>New Movies</h2>
                        <p>Take a look at every new movie that recently became available on streaming services.</p>

                    </div>
                    <div className="top-10-movie-scroll">

                        {
                            title.map((titles) => {
                                return <div className="top-10-movie-scroll1">
                                    <div className="top10map">
                                        <img src={imgfixpath + titles.poster_path}></img>
                                    </div>

                                </div>
                            })
                        }




                    </div>
                </div>



                <Footer></Footer>
            </div>







        </>
    )
}

export default Moviepage
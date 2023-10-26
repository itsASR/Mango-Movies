import React from 'react'
import axios from 'axios'
import { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import { consta } from '../App'


function Popup() {
    const [titleall, settitleall] = useState([])
    const [trailerURL, setTrailerURL] = useState("")
    let a = 'https://image.tmdb.org/t/p/original'
    const { singledesc } = useContext(consta)

    useEffect(() => {
        function callmovie() {
            axios
                // https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=8125db8f67d23da1d30f6063b1b794b8
                .get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8125db8f67d23da1d30f6063b1b794b8")
                .then((data) => {
                    settitleall(data.data.results)
                    // console.log(a+data.data.results[0].poster_path)
                    //   console.log(data.data.results[0])
                })
        } callmovie()
    }, [])


    function handleClick(movie) {
        // console.log(movie)
        movieTrailer(movie?.title || "")
            .then((url) => {
                const urlParam = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParam.get("v"));
            })
    }


    return (

        <>
            <div className="maindiv">
                {
                    trailerURL ? (
                        <YouTube videoId={trailerURL} opts={{ height: "390", width: "100%", autoplay: 1 }} />
                    ) : ""
                }
                {
                   
                       <div className='infobox' >
                            <div className="imgdiv">
                                <div className="maindivss">
                                    <button onClick={() => handleClick(singledesc)}>Watch Trailer</button>
                                </div>
                                <img src={a + singledesc.poster_path} ></img>
                            </div>
                            <h1>{singledesc.title}</h1>

                        </div>
                    }
                
            </div>

            {/* onMouseEnter={setstyle({display: 'block'})} */}
            {/* onMouseLeave={setstyle({display: 'none'})} */}


            {/* <div className="popup">
                    <div className="trailerwindow">
                    <img src={a + "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" }></img>
                    </div>
                </div> */}



        </>
    )
}

export default Popup
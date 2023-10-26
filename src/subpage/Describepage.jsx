import './Describepage.css'
import Header from '../Header'
import Footer from '../Footer'
import React, { useContext, useEffect } from 'react'
import { consta } from '../App'
import Popup from './Popup'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Describepage() {


  let imgfixpath = 'https://image.tmdb.org/t/p/original'

  const [showpop, setshowpop] = useState(false)
  const [blur, setblur] = useState("")
  const [heights, setheights] = useState("")
  const [titleall, settitleall] = useState([])
  const [trailerURL, setTrailerURL] = useState("")
  let a = 'https://image.tmdb.org/t/p/original'
  const { singledesc } = useContext(consta)

 

  function handleClick(movie) {
    // console.log(movie)
    movieTrailer(movie?.title || "")
      .then((url) => {
        const urlParam = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParam.get("v"));
      })
  }






  let Popta = () => {
    if (showpop === true) {
      setblur('hidden')
      setheights('100vh')
      return <>
        <div className="maindiv-popup">
          <button className='close-popup' onClick={() => { setshowpop(false), setblur(''),
      setheights('') }}>Close</button>
          {
            trailerURL ? (
              <YouTube videoId={trailerURL} opts={{ height: "600", width: "100%", autoplay: 1 }} />
            ) : ""
          }




        </div>


      </>
    }
  }

  return (
    <><div className="whole" style={{ overflow: blur, height: heights }}>
      <Header></Header>
      <div className="describe-page" >
        <div className="hover-image">
          <img src={imgfixpath + singledesc.backdrop_path} ></img>
        </div>


        <div className="main-describe-page">
          <div className="left-describe-page">
            <img src={imgfixpath + singledesc.poster_path} ></img>
          </div>
          <div className="right-describe-page">
            <h1>{singledesc.title}</h1>
            <p>my rating</p>
            <p>FREE</p>
            <p>{singledesc.overview}</p>
            <div className="watch-button">
              {/* <Link to='/popup'><button>WATCH</button></Link> */}
              <button onClick={() => { setshowpop(true), handleClick(singledesc) }}>WATCH</button>

            </div>


          </div>
          <Popta />

        </div>

      </div>
      <Footer></Footer>
    </div>





    </>

  )
}

export default Describepage
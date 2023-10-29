import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { consta } from '../App'
import Header from '../Header'
import '../Moviepage.css'
// import Footer from '../Footer'
import './Tvshowsmain.css'

function Search() {
  const { search, searchaxios, setsearchaxios, count, singledesc, setsingledesc } = useContext(consta)
  
  let imgfixpath = 'https://image.tmdb.org/t/p/original'
  let completeURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8125db8f67d23da1d30f6063b1b794b8'

  useEffect(() => {
    function searchapi() {
      if (search.length > 0) {
        completeURL = 'https://api.themoviedb.org/3/search/movie?query=' + search + '&api_key=9050502cb4f092054e46a7f47ebde0dc'
      }
      axios
        .get(completeURL)
        .then((response) => {

          setsearchaxios(response.data.results)
          



        })
    } searchapi()
  }, [count])

  
    return (
      <>
        <div>
          <Header></Header>
          <h1 style={{ color: 'white', backgroundColor: 'black', padding: '15px 50px' }}>ALL MOVIES</h1>
        </div>
        <div className="last-div-shows">
          {
            searchaxios.map((titles) => {
              return <div className="allshows">
                <div className="sub-allshows" onClick={() => { setsingledesc(titles) }}>
                  <Link to='/single'><img src={imgfixpath + titles.poster_path} ></img></Link>
                </div>

              </div>
            })
          }
        </div>
        <div className="nfn">

        </div>





      </>
    )
  }



export default Search

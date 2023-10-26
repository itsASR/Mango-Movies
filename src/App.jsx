import './App.css'
import Moviepage from './Moviepage'
import FrontStore from './FrontStore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import TVshowsmain from './subpage/TVshowsmain'
import Search from './subpage/Search'
import Onlymoviespage from './subpage/Onlymoviespage'
import { ProtectedRoute } from './protectRoute/protectRoute'
import Describepage from './subpage/Describepage'
import Popup from './subpage/Popup'


export const consta = createContext()




function App() {
  const [title, settitle] = useState([])
  const [tvdata, settvdata] = useState([])
  const [search, setsearch] = useState('')
  const [searchaxios, setsearchaxios] = useState([])
  const [count, setcount] = useState(0)
  const [singledesc, setsingledesc] = useState([])
  const [popularmovies, setpopularmovies] = useState([])
  const [trendingshows, settrendingshows] = useState([])
  const [original, setOriginal] = useState([])

  // const [trailer , settrailer] = useState()


  useEffect(() => {
    function callmovie() {
      // axios
      // https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=8125db8f67d23da1d30f6063b1b794b8
      const moviesapi = axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8125db8f67d23da1d30f6063b1b794b8&limit=10")
      const tvapi = axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8125db8f67d23da1d30f6063b1b794b8')
      const popmovies = axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8125db8f67d23da1d30f6063b1b794b8&language=en-US')
      const trending = axios.get('https://api.themoviedb.org/3//trending/all/week?api_key=8125db8f67d23da1d30f6063b1b794b8&language=en-US')
      const originals = axios.get('https://api.themoviedb.org/3/discover/tv?api_key=8125db8f67d23da1d30f6063b1b794b8&with_networks=213')
      Promise.all([moviesapi, tvapi, popmovies, trending, originals]).then((data) => {
        settitle(data[0].data.results)
        settvdata(data[1].data.results)
        setpopularmovies(data[2].data.results)
        settrendingshows(data[3].data.results)
        setOriginal(data[4].data.results)

        // console.log(a+data.data.results[0].poster_path)
        //   console.log(data.data.results[0])
      })
    } callmovie()
  }, [])

  return (
    <>
      <consta.Provider value={{ original, count, setcount, title, settitle, tvdata, settvdata, search, setsearch, searchaxios, setsearchaxios, singledesc, setsingledesc, popularmovies, trendingshows }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FrontStore />}></Route>
            <Route path='tv' element={<ProtectedRoute>
              <TVshowsmain />
            </ProtectedRoute>}></Route>
            <Route path='movies' element={<ProtectedRoute><Onlymoviespage /></ProtectedRoute>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='signup' element={<Signup />}></Route>
            <Route path='main' element={<ProtectedRoute><Moviepage /></ProtectedRoute>}></Route>
            <Route path='search' element={<ProtectedRoute><Search /></ProtectedRoute>}></Route>
            <Route path='single' element={<ProtectedRoute><Describepage /></ProtectedRoute>}></Route>
            <Route path='popup' element={<ProtectedRoute><Popup /></ProtectedRoute>}></Route>
          </Routes>
        </BrowserRouter>
      </consta.Provider >
    </>
  )
}

export default App

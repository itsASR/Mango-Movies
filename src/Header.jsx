import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './logo.png'
import './Header.css'
import { consta } from './App'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons'


function Header() {

  const { search, setsearch, count, setcount } = useContext(consta)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear('user')
    navigate('/')
  }

  console.log(count)


  return (
    <>
      <div className="logo-div-header">
        <Link to='/main'><p>HOME</p></Link>
        <div className="sub-logo-div-header">
          <img src={logo}></img>
        </div>
        <button className='logout-btn' onClick={logout}><FontAwesomeIcon icon={faPersonHiking} color='white' /></button>

      </div>


      {/* **********Below Header********** */}

      <div className="below-header-div">
        <Link to='/main'><p>All</p></Link>
        <Link to='/movies'><p>Movies</p></Link>
        <Link to='/tv'><p>Tv</p></Link>
        <input className='below-header-input-search'
          placeholder='Search Here...'
          type="text"
          value={search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate('/search')
              setcount(count + 1)
            }
          }}
      onChange={((e) => {
            setsearch(e.target.value)
          })}


        ></input>
        <Link to='/search' onClick={() => { setcount(count + 1) }} ><button className='searchbtn'><FontAwesomeIcon icon={faMagnifyingGlass} color='white' /></button></Link>


      </div>


    </>
  )
}

export default Header
import React, { useState, useEffect, useContext } from 'react'
import tv from './tv.png'
import mobile from './mobile.jpg'
import mac from './mac.png'
import mangowalk from './mangowalk.gif'
import logo from './logo.png'
import { consta } from './App'
import TVshows from './TVshows'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function FrontStore() {
    const [logostatic, setlogostatic] = useState('none')
    const { title, settitle } = useContext(consta)
    let imgfixpath = 'https://image.tmdb.org/t/p/original'
    

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setlogostatic('block')
        }, 3000);

    }, []);


    return (
        <>
            <header className='frontheader'>
                <div className="leftdivcontent">
                    <div className="divlogo">
                        <img className='logo' src={logo} style={{ display: logostatic }}></img>

                    </div>
                    <div className="runninglogo">
                        <div className="runningmangoimgdiv">
                            <img className='runningmango' src={mangowalk}></img>
                        </div>
                    </div>
                </div>
                <Link to='login' style={{color:'white'}}>Login</Link>
            </header>

            <div className="section1">
                <div className="section1data">
                    <h1>The Biggest Free Site</h1>
                    <h1>To Watch Free Movies</h1>
                    <p>Join Today @ 0 INR</p>
                    <div className="auth-button">
                    <Link to= 'login'><button style={{margin: '15px 15px'}}>LOGIN</button></Link>
                    <Link to= 'signup'><button style={{margin: '15px 15px'}} >REGISTER</button></Link>
                    </div>
                    
                </div>
            </div>

            <div className="slidermaindiv">
                <div className="slidername">
                    <h2>NEW RELEASE</h2>
                </div>

                <div className="slider">
                    <div className="subslider">
                        {/* un comment later */}
                        {
                            title.map((titles) => {
                                return <div className="slidercard">
                                    <div className="slidercardimgdiv">
                                        <img src={imgfixpath + titles.poster_path}></img>
                                    </div>

                                </div>
                            })
                        }



                    </div>
                </div>

            </div>
            <TVshows></TVshows>





            <div className="section2">
                <div className="section2imgdiv">
                    <img src={tv}></img>
                </div>
                <div className="section2textdiv">
                    <h2>Enjoy on your TV</h2>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
            </div>

            <div className="section2">
                <div className="section2textdiv">
                    <h2>Download your movies to watch offline</h2>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
                <div className="section2imgdiv">
                    <img src={mobile}></img>
                </div>

            </div>

            <div className="section2">
                <div className="section2imgdiv">
                    <img src={mac}></img>
                </div>
                <div className="section2textdiv">
                    <h2>Watch on your PC</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>

            </div>

                        <Footer></Footer>
        </>
    )
}

export default FrontStore
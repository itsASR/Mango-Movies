import React, { useContext, useEffect, useState } from 'react'
import { consta } from './App'

function TVshows() {

    const {tvdata , settvdata} = useContext(consta)
    let imgfixpath = 'https://image.tmdb.org/t/p/original'

   



  return (
    <>
    <div className="tvslidermaindiv">
                <div className="tvslidername">
                    <h2>TOP TVs SHOWS</h2>
                </div>

                <div className="tvslider">
                    <div className="tvsubslider">
                        {
                            tvdata.map((tvdatas) => {
                                return <div className="tvslidercard">
                                    <div className="tvslidercardimgdiv">
                                        <img src={imgfixpath + tvdatas.poster_path}></img>
                                    </div>

                                </div>
                            })
                        }



                    </div>
                </div>

            </div>
    
    
    </>
  )
}

export default TVshows
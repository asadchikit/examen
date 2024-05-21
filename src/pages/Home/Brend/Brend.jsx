import React from 'react'
import "./brend.css"
import sony from "../../../assets/images/sony.png"

export const Brend = () => {
  return (
    <div>
        <section>
            <div className="container">
                <div className="sony_head">
                    <div className="top">
                    Top Brands
                    </div>
                </div>
                <hr  className='sony-hr' />
                <div className="sony-blogs">
                    <div className="sony-item">
                        <img src={sony} alt="" />
                    </div>
                    <div className="sony-item">
                        <img src={sony} alt="" />
                    </div>
                    <div className="sony-item">
                        <img src={sony} alt="" />
                    </div>
                    <div className="sony-item">
                        <img src={sony} alt="" />
                    </div>
                    <div className="sony-item">
                        <img src={sony} alt="" />
                    </div>
                    <div className="sony-item">
                        <img src={sony} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img 
            className="photo" 
            src="https://m.media-amazon.com/images/I/61Vw-6jV3sL.jpg" />
            <div className="subContent">
                <h1>Cat man</h1>
                <h4>Fullstack Developer</h4>
                <p>Catman.website</p>
                <div className="btn">
                    <a href="#" className="mailBtn"><i class="fa-solid fa-envelope"></i> Email</a>
                    <a href="#" className="lknBtn"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                </div>
            </div>
        </div>
    )
}
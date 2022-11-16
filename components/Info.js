import React from "react"

export default function Info()
{
    return(
        <>
        <img className="pfp" src="https://imgs.search.brave.com/lyBIxSFLMx1Mhy2gcMSXuMa0zy6NSBcFtKMQdfO-5Ms/rs:fit:287:300:1/g:ce/aHR0cHM6Ly9ha2Fz/aHNvbWFzdW5kYXJh/bi5maWxlcy53b3Jk/cHJlc3MuY29tLzIw/MjEvMDYvaW1hZ2Ut/NC5wbmc_dz0yODg"/>
        <div className="backdrop">
        </div>
        <h1 className="name">Akash S</h1>
        <p className="job">Frontend Developer</p>
        <p className="website">flight.mitindia.edu</p>
        <button type="button" className="btn btn-text"><i className="fa-sharp fa-solid fa-envelope"></i>Email</button>
       
        <button type="button" className="btn-2 btn-text-2"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
        </>
    )
}
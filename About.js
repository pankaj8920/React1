import React from 'react';
import videoBug from './videoBg.mp4'

function About() {
    
    const [hovered, setHovered] = React.useState(false);

  
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoBug} autoPlay loop muted />

            <div className="content"  >
                <div className="div1" 
                 style={{
                    transition: 'margin-left 0.5s ease',
                    marginLeft: hovered ? 'calc(20% - 50px)' : '0',
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                
               >
                    <p>Watch the</p>
                    <h1>MOVIE</h1>
                    <div className='hr'></div>
                    <br />
                    <h5>Full</h5>
                    <h3>Concert</h3>
                    <p>at Hull City Mall</p>
                </div>
                <div className="div1" 
                 style={{
                    transition: 'margin-left 0.5s ease',
                    marginLeft: hovered ? 'calc(20% - 50px)' : '0',
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                    <p>Explore the</p>
                    <h1>TRACKLIST</h1>
                    <div className="hr"></div>
                    <br />
                    <h5>Listen all the </h5>
                    <h3>Tracks</h3>
                    <p>for chapter</p>
                </div>
                <div className="div1" 
                 style={{
                    transition: 'margin-left 0.5s ease',
                    marginLeft: hovered ? 'calc(20% - 50p)' : '0',
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}>
                    <p>Visit the</p>
                    <h1>GALLERY</h1>
                    <div className="hr"></div>
                    <br />
                    <h5>Relive the</h5>
                    <h3>Emotion</h3>
                    <p>of the Concert</p>
                </div>
            </div>


                

        </div>
    )
}
export default About;
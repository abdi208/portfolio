import React from 'react';
import FlipCard from "react-flip-cards";
import './App.css';
import 'react-flip-cards/build/index.css';
// class Projects extends React.Component {
//     render(){
//         return (
//             <>
//             <h1>Projects</h1>
//             <div style={{display: 'inline'}}>
//             <a href='https://infinite-crag-79632.herokuapp.com/'><img src={'/img/Screen.png'} style={{marginRight: '20px', display: 'inline-block'}} height='200px' width='350px'></img></a>  
//             {/* <a href='https://abdi208.github.io/Pong/'><img src={'/img/Pong.png'} style={{marginTop: '200px', marginRight: '20px'}} height='200px' width='350px'></img></a> */}
//             </div>
//             <div style={{display: 'inline'}}>
//             <a href='https://stark-taiga-64747.herokuapp.com/'><img src={'/img/tisDa.png'} style={{marginleft: '0px', display: 'inline-block'}} height='200px' width='350px'></img></a>
//             </div><br />
//             <div>
//             <a href='https://abdi208.github.io/Pong/'><img src={'/img/Pong.png'} style={{display: 'inline', marginTop: '200px', marginRight: '20px'}} height='200px' width='350px'></img></a>

//             </div>
//             {/* <a href='https://abdi208.github.io/Pong/'><img src={'/img/Pong.png'} style={{display: 'inline', marginTop: '100px', marginRight: '20px'}} height='200px' width='350px'></img></a> */}
//             </>
//         )
//     }
// }

const Projects = <>

        <h1 style={{fontSize: '50px'}}>Projects</h1><br/>
        


        <div className="container">
                <div className="col-3">
                        <FlipCard img={'/img/Screen.png'} // without children
                        fontTitle="Adventure Awaits"
                        fontSubTitle="Begin your adventure today!!!"
                        backTitle="List out your adventures! And easily organize your future adventures."
                        backText="Click the link below"
                        >
                        <a style={{color:'red'}}href="https://infinite-crag-79632.herokuapp.com/">Adventure Awaits</a>
                        </FlipCard>
                </div>
                <div className="col-3">
                        <FlipCard // with children
                                img={'/img/tisDa.png'}
                                fontTitle="'tisDaSeason'"
                                fontSubTitle="Start shopping today!!!"
                                backTitle="Create holiday gift ideas for your loved ones"
                                backText="Click the link below"
                        >
                                <a style={{color:'red'}} href="https://stark-taiga-64747.herokuapp.com/">tisDaSeason</a>
                        </FlipCard>
                        </div>
                <div className="col-3">
                        <FlipCard // with children
                                img={'/img/Pong.png'}
                                fontTitle="'Pong Revolution"
                                fontSubTitle="Lets Play!!!"
                                backTitle="A revamped two player version of the old school arcade game"
                                backText="Click the link below"
                        >
                                <a style={{color:'red'}} href="https://abdi208.github.io/Pong/">Try it yourself</a>
                        </FlipCard>
                        </div>
        </div>

        {/* <a href='https://infinite-crag-79632.herokuapp.com/' target="_blank"><img src={'/img/Screen.png'} height='100px' width='250px'></img></a>  
        <h3 style={{fontSize: '20px', fontWeight: 'normal', width: '340px', margin: '0 auto', fontFamily: 'times new Roman'}}>List out your adventures! Adventure Awaits is an app where you can easily organize your future adventures. Allows users to build a bucket list of adventures based on certain categories such as travel and entertainment. <br/> <br/> Technologies used: <br/>  MongoDB <br/>  Express <br/>  React <br/>  Node.js</h3>
        </div>
        <div style={{display: 'inline-block'}}>
        <a href='https://stark-taiga-64747.herokuapp.com/' target="_blank"><img src={'/img/tisDa.png'} height='250px' width='350px'></img></a>
        <h3 style={{fontSize: '20px', fontWeight: 'normal',width: '340px', margin: '0 auto', fontFamily: 'times new Roman'}}>'tisDaSeason is an App that allows yout to create holiday gift ideas for your loved ones, with the ability to search and compare prices online.<br/> <br/> Technologies used: <br/>  MongoDB <br/>  Express <br/>  React <br/>  Node.js</h3>
        </div>
        <div>
        <a href='https://abdi208.github.io/Pong/' target="_blank"><img src={'/img/Pong.png'} style={{display: 'inline', marginTop: '100px', marginRight: '20px'}} height='200px' width='350px'></img></a>
        <h3 style={{fontSize: '20px', fontWeight: 'normal',width: '340px', margin: '0 auto', fontFamily: 'times new Roman'}}>A revamped two player version of the old school arcade game where The objective of the game is to score points by knocking the pong ball out of the other players side of the board. <br/> <br/> Technologies used: <br/>  HTML <br/> CSS <br/>  Javascript <br/> </h3>
        
        
        
         */}
        
</>



export default Projects;
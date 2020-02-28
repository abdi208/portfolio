import React from 'react';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from 'react-particles-js';
import { faArrowCircleDown, faHandSpock } from '@fortawesome/free-solid-svg-icons';
const Me =
    <>
        < Particles className="particles"
            params={{
                "particles": {
                    "number": {
                        "value": 43,
                        "density": {
                            "enable": true,
                            "value_area": 1042.21783956259
                        }
                    },
                    "color": {
                        "value": "#4c96eb"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 1,
                            "color": "#4c96eb"
                        },
                        "polygon": {
                            "nb_sides": 6
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.7455866083024681,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1.136908097221883,
                            "opacity_min": 0.162415442460269,
                            "sync": true
                        }
                    },
                    "size": {
                        "value": 24.05118091298284,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 176.3753266952075,
                        "color": "#ffffff",
                        "opacity": 0.48102361825965684,
                        "width": 0.8017060304327615
                    },
                    "move": {
                        "enable": true,
                        "speed": 8.017060304327615,
                        "direction": "none",
                        "random": false,
                        "straight": true,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }} />

        <Typist avgTypingSpeed={40} startDelay={500} cursor={{ hideWhenDone: true }}>
            <h1 style={{ fontSize: '65px', fontStyle: 'bold', fontfamily: 'times new roman', display: 'inline',  }}>Hey <FontAwesomeIcon style={{ fontSize: '87px' }} icon="hand-spock" /> <br /> I'm Abdi <br /> Full Stack Software Developer.</h1>
            <br /><h4 style={{ fontSize: '46px', fontfamily: 'times new roman', display: 'inline-block',  }}> Welcome to my porfolio site!</h4></Typist>

        <p className="scrolldown">

            <a style={{
                bottom: '120px',
                left: '50%',
                marginLeft: '350px',
                color: '#000',
                display: 'block',
                height: '42px',
                width: '42px',
                fontSize: '82px',
                //lineHeight: '42px',
                color: 'black',
                //borderRadius: '100%',
                transition: 'all .3s ease-in-ou',
            }} className="scrollslow" href="#section1"><div id="arrow-down">
                    <i class="fa fa-arrow-down"></i>
                </div></a>

        </p>

    </>
export default Me;
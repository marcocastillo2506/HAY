import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class GallCarousel extends Component {
    render() {
        return (
            <Carousel style={styles}>
                <div>
                    <img src="https://i.imgur.com/l3jtTUL.jpg?2" />
                    <p className="legend">Hola Code</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/OTdnkkY.jpg?1" />
                    <p className="legend">Cohort 1</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/OVc4PK1.jpg?1" />
                    <p className="legend">Hola Code</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/lvsImVK.jpg?1" />
                    <p className="legend">Cohort 1</p>
                </div>

                <div>
                    <img src="https://i.imgur.com/b4GaEuI.jpg?1" />
                    <p className="legend">Cohort 1</p>
                </div>


            </Carousel>
        );
    }
};

export default GallCarousel;

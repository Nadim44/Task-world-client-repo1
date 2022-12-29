import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="https://d57439wlqx3vo.cloudfront.net/iblock/f5d/f5dcf76697107ea302a1981718e33c95/1f68f84b53199df9cae4b253225eae63.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="https://static4.depositphotos.com/1021974/371/i/950/depositphotos_3713053-stock-photo-completed.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="https://tasksoftware.com.au/assets/content/images/_1200x630_crop_center-center_82_none/task-logo-square-400px.png?mtime=1564720780"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;
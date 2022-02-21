import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const Intro = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="banner">
        <img
          src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/giftcards/hero/2021/PROD-21861_GiftCard_Hero_12-20.jpg"
          alt=""
          className="img1"
        />
      </div>
      <Carousel className="intro">
        <Carousel.Item>
          <img
            className="introImg"
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2021/12/29/50OffhundredsBooks_dual.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="introImg"
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/01/18/Gateway_Billboard-D_NYNY_Maybe_r1.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="introImg"
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/01/18/Gateway_Billboard-C_Valentines.jpg"
          />
        </Carousel.Item>
      </Carousel>
      <div className="aboutus">
        <div className="aboutusLeft">
          <h2>For the Love of Reading</h2>
          <div className="aboutusText">
            <h3>Selection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              minima repellat dicta doloribus fugiat pariatur expedita quasi
              praesentium, autem, provident debitis blanditiis!
            </p>
          </div>
          <div className="aboutusText">
            <h3>Purchasing Power</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              laborum tenetur temporibus repudiandae? Laudantium accusantium
              aliquam, sapiente illo nulla beatae aliquid distinctio explicabo
              voluptates est reprehenderit nihil id non itaque autem pariatur.
            </p>
          </div>
          <div className="aboutusText">
            <h3>FREE Shipping & More</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ea dicta voluptates accusamus, itaque illo, error velit ducimus
              architecto beatae voluptas mollitia iusto consequuntur rem placeat
              deserunt. Vel cupiditate consequuntur eveniet nemo.
            </p>
            <button className="btn btn-ab" onClick={() => setOpen(true)}>
              More About Us
            </button>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="tlmIrkWPA4s"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
        <iframe
          className="video"
          width="660"
          height="415"
          src="https://www.youtube.com/embed/tlmIrkWPA4s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Intro;

import { array } from "prop-types";
// components
import Card from "../Card";
// styles
import styles from "./CardCtas.module.scss";
import { Heading, Text } from "../UILib";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default function CardCtas({ cards }) {
  const youtubeVideoUrl = "https://www.youtube.com/watch?v=I5rgmJC2wjU";

  return (
    <>
      <section className={styles.cards}>
        <div className="container">
          {cards.map((card) => (
            <Card
              key={card.key}
              href={card.href}
              target={card.target}
              text={card.text}
              backgroundImageSrc={card.bgImg}
            />
          ))}
        </div>
      </section>
      <section className={styles.pagecards}>
        <div className="container">
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <Heading align="center" type="h1">
              Welcome to Almaville Bamboo!
            </Heading>
            <ReactPlayer
              className={styles.ReactPlayerRespo}
              url={youtubeVideoUrl}
              controls={true}
              light={false} // Enables thumbnail preview
            />
          </div>
          <div className={styles.cards__graph}>
            <Text type="p2" align="center">
              Whether you are in Nashville, Middle Tennessee or in the
              surrounding states, you may be intersted to know that we are
              unusual because we are a 4 season nursery. Commercial contractors
              don&apos;t have select planting seasons, so we don&apos;t either. Home
              owners or DIY folks are welcome, and we provide consulting
              services to help with planning and design. If you are new to
              bamboo, you may have questions after viewing our videos. We are
              happy to answer questions before or during your visit.
            </Text>
          </div>

          <Carousel
            showThumbs={false} // Hide thumbnail navigation
            showStatus={false} // Hide status indicators
            infiniteLoop={true} // Loop the carousel infinitely
            autoPlay={true} // Automatically play slides
            interval={50000} // Slide transition interval in milliseconds
            stopOnHover={false} // Don't stop autoplay on hover
            emulateTouch={true} // Emulate touch events for non-touch devices
            width="100%" // Set the width of the carousel
            dynamicHeight={true} // Adjust slide height dynamically
          >
            <div>
              <ReactPlayer
                className={styles.ReactPlayerRespo}
                url="https://www.youtube.com/watch?v=NX-3W2T3uac"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                controls={true} // Show video controls
              />
            </div>
            <div>
              <ReactPlayer
                className={styles.ReactPlayerRespo}
                url="https://www.youtube.com/watch?v=QOFoubXF7EY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                controls={true} // Show video controls
              />
            </div>
          </Carousel>
          <Heading align="center" type="h1">
            Come Visit US!
          </Heading>
          <div className={styles.cards__graph}>
            <Text type="p2" align="center">
              Almaville Bamboo is easy to find, the park is open 24/7 for you to
              walk around on your own and hike all 32 acres. Guided tours can be
              provided with a scheduled appointment, while the property doesn&apos;t
              offer food or drinks the well-known Almaville Market has both for
              you and your family to enjoy after a hike.
            </Text>
            <Text type="p2" align="center">
              We are located at 7361 Almaville Rd, Arrington, TN 37014
            </Text>
          </div>
        </div>
      </section>
    </>
  );
}

CardCtas.propTypes = {
  cards: array, // eslint-disable-line
};

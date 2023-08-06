import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/deeksha-marko-7b024419b/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dxe33x8bb/image/upload/v1665915485/cld-sample.jpg"
              alt="Founder"
            />
            <Typography>Deeksha Marko</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit linkedin
            </Button>
            <span>
              This is a sample wesbite made by Deeksha Marko and Group.purpose to learn MERN Stack</span>
          </div>
          <div className="aboutSectionContainer2">
            {/* <Typography component="h2">Our Brands</Typography>
            <a
              href=""
              target="blank"
            >
            </a>

            <a href="" target="blank">
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

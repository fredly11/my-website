import React from "react";
import { useGlobalContext } from "../context";
import corwyn from "../images/corwyn.jpg";

const About = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="about" onMouseOver={closeSubmenu}>
      <div className="about-title">
        <h1>About Me</h1>
        <div className="about-underline"></div>
      </div>
      <div className="about-subtitle" id="family">
        <h2>My Family</h2>
      </div>
      <div className="about-info">
        <p>
          I live with my wife, Natasha, in Provo, UT. We also have a cat named
          Mipha. We've been married for about 5 years. Natasha is a full-time
          comic artist and author of the comic Pot of Gold on Webtoon. <br />
          <br />
          Together we love watching movies and shows as well as playing
          Dungeon's and Dragons. We also enjoy fencing and spending time with
          our friends.
          <br />
          <br />
          Mipha's favorite hobbies are catching an old lanyard as I fling it
          around and begging me for treats.
        </p>
        <img src={corwyn} alt="" className="about-photo" />
      </div>
      <div className="underline"></div>
      <div className="about-subtitle" id="hobbies">
        <h2>My Hobbies</h2>
      </div>
      <div className="about-info">
        <img src={corwyn} alt="" className="about-photo" />
        <p>
          Being the nerd that I am, I enjoy quite a variety of activities. I
          love Dungeons and Dragons, Warhammer 40k, Magic: The Gathering, and a
          large variety of video games <br /> <br />
          On the more physical side of things, I also enjoy LARPing and fencing,
          as well as working out. <br />
          <br />I also love coding, both web and app development, along with
          creating video games, particularly in the Unity game engine. In
          general, I love tinkering with and learning new things
        </p>
      </div>
    </section>
  );
};

export default About;

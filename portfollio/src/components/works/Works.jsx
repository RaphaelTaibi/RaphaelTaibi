import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Spotify",
      desc:
        "Projet Spotify en react avec une API en PHP. L'API a été recoder en NodeJs pour en faire un projet MERN ",
      img:
        "https://cdn.dribbble.com/users/10226073/screenshots/17145434/media/2016540abfabfa107bd5ab093d11dc81.png?compress=1&resize=800x600",
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Maquette HTML5 CSS3",
      desc:
        "Reproduire une maquette en HTML5 et CSS3, projet d'initiation a l'intégration Web.",
      img:
        "https://cdn.dribbble.com/users/10226073/screenshots/17144977/media/07f56e9198de4da8ea57c685d2adf211.png",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Puissance 4",
      desc: 
        "Projet de puissance 4 réalisé en jQuery.",
      img: 
        "https://cdn.dribbble.com/users/10226073/screenshots/17141745/media/f7abaf5ba1eb7eac600a9df94a59ed32.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href="#portfolio">Projects</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="./assets/right-arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

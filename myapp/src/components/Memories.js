import React from "react";
import "./Memories.css";

const Memories = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          paddingTop: "25px",
          color: "white",
          marginBottom: "0px",
        }}
      >
        <span
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 10%, green 10%, green 90%, transparent 90%)",
            backgroundSize: "100% 5px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 100%",
          }}
        >
          <strong id="memories" style={{ fontSize: "1.3em" }}>
            Memories
          </strong>
        </span>
      </h2>
      <section id="Memories">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
          </div>
          <div className="carousel-inner" style={{ textAlign: "center" }}>
            <div className="carousel-item active">
              <img
                className="mimg"
                src="img1.webp"
                alt="Riviera , IEEE TEMS Vellore"
              />
              <div className="carousel-caption">
                <h3>Riviera 2023</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="mimg"
                src="img2.webp"
                alt="Ice-Breaking , IEEE TEMS Vellore"
              />
              <div className="carousel-caption">
                <h3>Ice-Breaking Session 2023</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="mimg"
                src="img3.webp"
                alt="Innovision , IEEE TEMS Vellore"
              />
              <div className="carousel-caption">
                <h3>Innovision 2023</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="mimg"
                src="img7.webp"
                alt="Code Rush , IEEE TEMS Vellore"
              />
              <div className="carousel-caption">
                <h3>Code Rush 2023</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="mimg"
                src="img4.webp"
                alt="Riviera , IEEE TEMS Vellore"
              />
              <div className="carousel-caption">
                <h3>Riviera 2023</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="mimg"
                src="img8.webp"
                alt="Gravitas, IEEE TEMS Vellore"
              />
              <div className="carousel-caption">
                <h3>Gravitas 2023</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="mimg"
                src="img5.webp"
                alt="Innovision, IEEE TEMS Vellore"
              />
              <div className="carousel-caption">
                <h3>Innovision 2023</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="mimg"
                src="img6.webp"
                alt="Team 2022-23, IEEE TEMS Vellore"
              />
              <div className="carousel-caption">
                <h3>Team 2022-23</h3>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <img src="arrow2.svg" className="svg" alt="arrow" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <img src="arrow.svg" className="svg" alt="arrow" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Memories;

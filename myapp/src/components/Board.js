import React, { useState, useEffect } from "react";
import "./Board.css";

const Board = () => {
  const [activeTab, setActiveTab] = useState("2024");
  const [activeYearBoard, setActiveYearBoard] = useState("Board2024");

  const handleTabClick = (year) => {
    setActiveTab(year);
    setActiveYearBoard(year === "2024" ? "Board2024" : "Board2023");
  };

  useEffect(() => {
    const tabs = document.querySelector(".tabs");
    const selector = document.querySelector(".selector");
    const activeItem = tabs.querySelector(".active");
    const activeWidth = activeItem ? activeItem.offsetWidth : 0;
    if (activeItem) {
      selector.style.left = `${activeItem.offsetLeft}px`;
      selector.style.width = `${activeWidth}px`;
    }

    const handleTabSelector = (event) => {
      const activeItem = event.target;
      if (activeItem.tagName === "A") {
        const activeWidth = activeItem.offsetWidth;
        selector.style.left = `${activeItem.offsetLeft}px`;
        selector.style.width = `${activeWidth}px`;
      }
    };

    tabs.addEventListener("click", handleTabSelector);

    return () => {
      tabs.removeEventListener("click", handleTabSelector);
    };
  }, []);

  return (
    <div>
      <section id="Board">
        <br />
        <br />
        <h2
          style={{
            textAlign: "center",
            paddingBottom: "40px",
            color: "white",
            paddingTop: "0px",
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
            <strong style={{ fontSize: "1.3em" }}>Board</strong>
          </span>
        </h2>
        <div className="wrapper" id="content-desktop">
          <nav className="tabs">
            <div className="selector"></div>
            <a
              href="#Board"
              id="Board-switch-2024"
              className={
                activeTab === "2024"
                  ? "active no-border-on-link"
                  : "no-border-on-link"
              }
              style={{
                backgroundColor: activeTab === "2024" ? "green" : "transparent",
                color: activeTab === "2024" ? "white" : "inherit",
                borderRadius: activeTab === "2024" ? "50px" : "0",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => handleTabClick("2024")}
            >
              2024
            </a>
            <a
              href="#Board"
              id="Board-switch-2023"
              className={
                activeTab === "2023"
                  ? "active no-border-on-link"
                  : "no-border-on-link"
              }
              style={{
                backgroundColor: activeTab === "2023" ? "green" : "transparent",
                color: activeTab === "2023" ? "white" : "inherit",
                borderRadius: activeTab === "2023" ? "50px" : "0",

                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => handleTabClick("2023")}
            >
              2023
            </a>
          </nav>
        </div>
        <div
          className={`Board2024 board-content ${activeYearBoard === "Board2024" ? "active-year-board highlight" : ""
            }`}
          id="Board2024"
        >
          <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Piyush.webp"
                    className="card-img"
                    alt="Piyush Padia, IEEE TEMS VIT"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Piyush Padia</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Chairperson</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/piyush_padia?igsh=emtyZXprMG5uMGkx"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/piyush-padia-a47766215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Srihitha.webp"
                    className="card-img"
                    alt="Srihitha Reddy, IEEE TEMS VIT"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Srihitha Reddy</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Vice-Chairperson</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.linkedin.com/in/-srihitha-reddy"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Anisha.webp"
                    className="card-img"
                    alt="Anisha, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Anisha Chandavarkar</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Secretary</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/anisha_c26?igsh=dGF4ZjJuNTR6dTY1"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anisha-chandavarkar?trk=contact-info"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Sachita.webp"
                    className="card-img"
                    alt="Sachita, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Sachita Manna</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Co-Secretary</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.linkedin.com/in/sachita-manna-98340824b/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Samanvitha.webp"
                    className="card-img"
                    alt="Samanvitha, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Vakati Samanvitha</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Management Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/samanvitha_reddy_16?igsh=b3dhbG9kMWlmM3pt&utm_source=qr"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samanvitha-reddy-9aa84b21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Bharath.webp"
                    className="card-img"
                    alt="Bharath, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Bharath Mudduluru</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Technical Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/bharath0616?igsh=MTljaWUzYno5OXd3MA=="
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bharath-mudduluru-a6a331139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Harsh.webp"
                    className="card-img"
                    alt="Harsh, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Harsh Pandey</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Events Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/harsh._pndy20/?next=%2F"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/harsh-pandey-fd21/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`Board2024 board-content ${activeTab === "2024" ? "active-year-board" : ""
            }`}
          id="Board2024"
        >
          <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Priyansh.webp"
                    className="card-img"
                    alt="Priyansh, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Priyansh Kotak</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Project Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/priyansh_kotak_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/priyanshkotak/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Sriya.webp"
                    className="card-img"
                    alt="Sriya, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Chundru Sai Sriya</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Editorial Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/17_sriya?igsh=ZTE0bG1uajlwODY4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sriya-chundru-881301268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Tapesh.webp"
                    className="card-img"
                    alt="Tapesh, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Tapesh Khandelwal</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Finance Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/tapeshkhandelwal?igsh=aml6N2x1cXEyNnBs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tapesh-khandelwal-7b5498246/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`Board2023 board-content ${activeYearBoard === "Board2023" ? "active-year-board" : ""
            }`}
          id="Board2023"
        >
          <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2023/Tanvir.webp"
                    className="card-img"
                    alt="Piyush Padia, IEEE TEMS VIT"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Tanvir</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Chairperson</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/piyush_padia?igsh=emtyZXprMG5uMGkx"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/piyush-padia-a47766215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Srihitha.webp"
                    className="card-img"
                    alt="Srihitha Reddy, IEEE TEMS VIT"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Srihitha Reddy</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Vice-Chairperson</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.linkedin.com/in/-srihitha-reddy"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Anisha.webp"
                    className="card-img"
                    alt="Anisha, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Anisha Chandavarkar</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Secretary</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/anisha_c26?igsh=dGF4ZjJuNTR6dTY1"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anisha-chandavarkar?trk=contact-info"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Sachita.webp"
                    className="card-img"
                    alt="Sachita, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Sachita Manna</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Co-Secretary</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.linkedin.com/in/sachita-manna-98340824b/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Samanvitha.webp"
                    className="card-img"
                    alt="Samanvitha, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Vakati Samanvitha</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Management Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/samanvitha_reddy_16?igsh=b3dhbG9kMWlmM3pt&utm_source=qr"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samanvitha-reddy-9aa84b21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Bharath.webp"
                    className="card-img"
                    alt="Bharath, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Bharath Mudduluru</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Technical Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/bharath0616?igsh=MTljaWUzYno5OXd3MA=="
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bharath-mudduluru-a6a331139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Harsh.webp"
                    className="card-img"
                    alt="Harsh, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Harsh Pandey</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Events Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/harsh._pndy20/?next=%2F"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/harsh-pandey-fd21/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Priyansh.webp"
                    className="card-img"
                    alt="Priyansh, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Priyansh Kotak</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Project Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/priyansh_kotak_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/priyanshkotak/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Sriya.webp"
                    className="card-img"
                    alt="Sriya, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Chundru Sai Sriya</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Editorial Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/17_sriya?igsh=ZTE0bG1uajlwODY4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sriya-chundru-881301268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card__1 card-color__1">
                <div className="image">
                  <img
                    src="board/2024/Tapesh.webp"
                    className="card-img"
                    alt="Tapesh, IEEE TEMS Vellore"
                  />
                </div>
                <div className="content">
                  <div className="card-heading" id="board-name">
                    <p style={{ color: "white" }}>Tapesh Khandelwal</p>
                  </div>
                  <div className="card-heading" id="board-post">
                    <p style={{ color: "green" }}>Finance Head</p>
                  </div>
                  <div className="social">
                    <a
                      href="https://www.instagram.com/tapeshkhandelwal?igsh=aml6N2x1cXEyNnBs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tapesh-khandelwal-7b5498246/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;

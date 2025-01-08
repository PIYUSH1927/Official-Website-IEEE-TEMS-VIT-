import React, { useState, useEffect, useRef } from "react";
import "./Event.css";

const Event = () => {
    const [activeYear, setActiveYear] = useState("2023");
    const [activeContent, setActiveContent] = useState("content1");
    const eventRef = useRef(null);

    const handleYearChange = (year) => {
        setActiveYear(year);
        setActiveContent("content1");
    };

    const handleContentChange = (contentId) => {
        setActiveContent(contentId);
    };

    useEffect(() => {
        if (eventRef.current) {
            const links = eventRef.current.querySelectorAll(".Event-tabs a");
            const selector = eventRef.current.querySelector(".Event-selector");

            links.forEach((link) => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    const activeLink = eventRef.current.querySelector(".Event-tabs .active");
                    if (activeLink) activeLink.classList.remove("active");
                    this.classList.add("active");

                    const targetId = this.getAttribute("id");
                    eventRef.current.querySelectorAll(".Event-active-year").forEach((section) => {
                        section.classList.add("hidden");
                        if (section.id === `${targetId}events`) {
                            section.classList.remove("hidden");
                        }
                    });

                    // Move selector
                    const linkRect = this.getBoundingClientRect();
                    selector.style.width = `${linkRect.width}px`;
                    selector.style.left = `${linkRect.left}px`;
                });
            });

            return () => {
                links.forEach((link) => {
                    link.removeEventListener("click", () => { });
                });
            };
        }
    }, []);

    return (
        <div>
            <h2
                style={{ textAlign: "center", paddingBottom: "40px", color: "white" }}
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
                    <strong style={{ fontSize: "1.3em" }} id="Event">
                        Events
                    </strong>
                </span>
            </h2>

            <div className="wrapper" id="content-desktop">
                <nav className="tabs">
                    <div className="selector"></div>
                    <a
                        href="#Event"
                        id="2023"
                        className={
                            activeYear === "2023"
                                ? "active no-border-on-link"
                                : "no-border-on-link"
                        }
                        onClick={() => handleYearChange("2023")}
                    >
                        2023
                    </a>
                    <a
                        href="#Event"
                        id="2022"
                        className={
                            activeYear === "2022"
                                ? "active no-border-on-link"
                                : "no-border-on-link"
                        }
                        onClick={() => handleYearChange("2022")}
                    >
                        2022
                    </a>
                </nav>
            </div>

            <section className="yo" style={{ marginTop: "50px" }}>
                <div
                    className={`active-year evnentContent ${activeYear === "2023" ? "" : "hidden"}`}
                    id="2023events"
                >
                    <div className="container1">
                        <div className="event-icon">
                            <div
                                className={`imgBx ${activeContent === "content1" ? "active" : ""
                                    }`}
                                style={{ "--i": 1 }}
                                data-id="content1"
                                onClick={() => handleContentChange("content1")}
                            >
                                <img
                                    src="events/2023/codeRush.webp"
                                    alt="Code Rush, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content2" ? "active" : ""
                                    }`}
                                style={{ "--i": 2 }}
                                data-id="content2"
                                onClick={() => handleContentChange("content2")}
                            >
                                <img src="events/2023/react.webp" alt="React, IEEE TEMS" />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content3" ? "active" : ""
                                    }`}
                                style={{ "--i": 3 }}
                                data-id="content3"
                                onClick={() => handleContentChange("content3")}
                            >
                                <img src="events/2023/BB.webp" alt="BB, IEEE TEMS" />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content4" ? "active" : ""
                                    }`}
                                style={{ "--i": 4 }}
                                data-id="content4"
                                onClick={() => handleContentChange("content4")}
                            >
                                <img
                                    src="events/2023/innovision.webp"
                                    alt="Innovision Talk, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content5" ? "active" : ""
                                    }`}
                                style={{ "--i": 5 }}
                                data-id="content5"
                                onClick={() => handleContentChange("content5")}
                            >
                                <img
                                    src="events/2023/pixelPerfect.webp"
                                    alt="Pixel Perfect, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content6" ? "active" : ""
                                    }`}
                                style={{ "--i": 6 }}
                                data-id="content6"
                                onClick={() => handleContentChange("content6")}
                            >
                                <img
                                    src="events/2023/data.webp"
                                    alt="Data Science, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content7" ? "active" : ""
                                    }`}
                                style={{ "--i": 7 }}
                                data-id="content7"
                                onClick={() => handleContentChange("content7")}
                            >
                                <img
                                    src="events/2023/bootstrap.webp"
                                    alt="Bootstrap, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content8" ? "active" : ""
                                    }`}
                                style={{ "--i": 8 }}
                                data-id="content8"
                                onClick={() => handleContentChange("content8")}
                            >
                                <img
                                    src="events/2023/code-crafters.webp"
                                    alt="Code Crafters, IEEE TEMS"
                                />
                            </div>
                        </div>

                        <div className="content1">
                            <div
                                className={`contentBx ${activeContent === "content1" ? "active" : ""
                                    }`}
                                id="content1"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2023/codeRush.webp"
                                            alt="Code Rush, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content2" ? "active" : ""
                                    }`}
                                id="content2"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img src="events/2023/react.webp" alt="REACT, IEEE TEMS" />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content2" ? "active" : ""
                                    }`}
                                id="content2"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img src="events/2023/react.webp" alt="REACT, IEEE TEMS" />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content3" ? "active" : ""
                                    }`}
                                id="content3"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2023/BB.webp"
                                            alt="Bezzie Bench, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content4" ? "active" : ""
                                    }`}
                                id="content4"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2023/innovision.webp"
                                            alt="Innovision, IEEE TEMS VIT"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content5" ? "active" : ""
                                    }`}
                                id="content5"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2023/pixelPerfect.webp"
                                            alt="Pixel Perfect, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content6" ? "active" : ""
                                    }`}
                                id="content6"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img src="events/2023/data.webp" alt="Data, IEEE TEMS" />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content7" ? "active" : ""
                                    }`}
                                id="content7"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2023/bootstrap.webp"
                                            alt="Bootstrap, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`contentBx ${activeContent === "content8" ? "active" : ""
                                    }`}
                                id="content8"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2023/code-crafters.webp"
                                            alt="Code Crafters, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="event-description">
                        <div className="event-description-content">
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content1" ? "event-active" : ""
                                    }`}
                                id="content1_description"
                            >
                                <h2 style={{ padding: "0px" }}>Code Rush</h2>
                                <p>
                                    The adrenaline-fueled event, "Code Rush: Ignite the Coder in
                                    You," was a thrilling opportunity that took participants'
                                    coding skills to the next level. In this intense coding relay
                                    race, attendees experienced the excitement of solving
                                    real-world problems under pressure, racing against time to
                                    showcase their coding prowess. The event was not just a
                                    challenge; it was a chance for participants to collaborate,
                                    compete, and conquer the coding world. Those who participated
                                    not only proved their mettle but also earned well-deserved
                                    bragging rights in this past high-stakes coding competition.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content2" ? "event-active" : ""
                                    }`}
                                id="content2_description"
                            >
                                <h2 style={{ padding: "0px" }}>Unlocking React.js</h2>
                                <p>
                                    Dived into the world of React JS, the JavaScript library has
                                    showcased its transformative impact on the way we construct
                                    web applications. Participants explored the magic behind
                                    creating responsive, dynamic, and user-friendly interfaces
                                    with unparalleled ease. The event provided insights and
                                    hands-on experiences, unveiling the capabilities of React JS
                                    in shaping the future of web development.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content3" ? "event-active" : ""
                                    }`}
                                id="content3_description"
                            >
                                <h2 style={{ padding: "0px" }}>Bezzie Bench</h2>
                                <p>
                                    Bezzie Bench was all about discovering how well you and your
                                    friend worked together, offering a unique opportunity to
                                    explore the dynamics of your friendship. During the event,
                                    attendees had the chance to check out a variety of amazing
                                    homemade crafts, including tiaras, bracelets, and dream
                                    catchers, all available at affordable prices. These crafts
                                    added a special touch to the occasion, providing a delightful
                                    way to light up memories and create lasting moments.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content4" ? "event-active" : ""
                                    }`}
                                id="content4_description"
                            >
                                <h2 style={{ padding: "0px" }}>Innovision Talk</h2>
                                <p>
                                    It was an inspiring morning with Madhav Bahl, a Microsoft
                                    Software Development Engineer and proud VIT alumnus, at our
                                    InnoVision Talks! Madhav Behl, an inspiration to many, shared
                                    his remarkable journey from VIT to Microsoft, a true testament
                                    to dedication and ambition. He unveiled the 'Tech Mantras'
                                    that guided him through his career, offering invaluable
                                    insights into the tech world. It was a unique opportunity to
                                    gain knowledge from a Microsoft veteran, and we hope you
                                    didn't miss out!
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content5" ? "event-active" : ""
                                    }`}
                                id="content5_description"
                            >
                                <h2 style={{ padding: "0px" }}>Pixel Perferct</h2>
                                <p>
                                    Design enthusiasts had an outstanding opportunity to explore
                                    the impact of UI/UX cloning at the 'Pixel Perfect: The UI/UX
                                    Cloning Masterclass.' This event went beyond design practice,
                                    emphasizing the societal benefits of dissecting and enhancing
                                    digital interfaces. The practice contributed to user-friendly
                                    experiences, ensuring smoother navigation, improved
                                    accessibility, and economic growth. UI/UX cloning emerged as
                                    the creative key for collective innovation and superior
                                    design. Participants delved into user-centered design, ethical
                                    considerations, and more, gaining insights into the positive
                                    changes UI/UX cloning can catalyze.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content6" ? "event-active" : ""
                                    }`}
                                id="content6_description"
                            >
                                <h2 style={{ padding: "0px" }}>Data to Decision</h2>
                                <p>
                                    For those curious about regression in machine learning and its
                                    potential business applications, IEEE TEMS offered valuable
                                    insights in a recent session. Whether you were interested in
                                    understanding what regression is, how it's used, or its
                                    benefits for your business, this session had it all. Covering
                                    applications such as answering business-related questions and
                                    assessing product performance, regression analytics was
                                    showcased as a powerful tool for making impactful decisions.
                                    From customer retention rates to estimated trends in a matter
                                    of months, the session provided guidance on leveraging
                                    regression for smarter business decisions.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content7" ? "event-active" : ""
                                    }`}
                                id="content7_description"
                            >
                                <h2 style={{ padding: "0px" }}>Inovate With Bootstrap</h2>
                                <p>
                                    Ever wondered about mastering coding efficiency? The event
                                    provided a platform for participants to explore the mastery of
                                    Bootstrap, a robust frontend framework that enables web
                                    developers to effortlessly craft impressive, adaptable, and
                                    intuitive websites. With its extensive array of pre-designed
                                    elements and a flexible grid structure, Bootstrap expedites
                                    the design and coding process, ensuring consistent performance
                                    on various screen sizes. Enthusiasts had the opportunity to
                                    dive into the realm of design boundaries with Bootstrap, as
                                    the event aimed to inspire and reshape the way participants
                                    approach web design.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content8" ? "event-active" : ""
                                    }`}
                                id="content8_description"
                            >
                                <h2 style={{ padding: "0px" }}>Code Crafters</h2>
                                <p>
                                    The Code Crafters session was designed to guide participants
                                    through the foundations of web development, focusing on HTML
                                    and CSS. The hands-on event covered everything from
                                    structuring web pages with HTML to adding beautiful styles and
                                    layouts using CSS. Whether attendees were complete beginners
                                    or had some experience, the session provided essential skills
                                    for building websites from scratch. The incredible opportunity
                                    to learn and dive into web development was open to all.
                                    Participants were encouraged to register on VTOP to secure
                                    their spot and join in unlocking the world of web creation
                                    together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className={`active-year evnentContent ${activeYear === "2022" ? "" : "hidden"}`}
                    id="2022events"
                >
                    <div className="container1">
                        <div className="event-icon">
                            <div
                                className={`imgBx ${activeContent === "content1" ? "active" : ""
                                    }`}
                                style={{ "--i": 1 }}
                                data-id="content1"
                                onClick={() => handleContentChange("content1")}
                            >
                                <img
                                    src="events/2022/alumiTAlk.webp"
                                    alt="Alumini Talk, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content2" ? "active" : ""
                                    }`}
                                style={{ "--i": 2 }}
                                data-id="content2"
                                onClick={() => handleContentChange("content2")}
                            >
                                <img src="events/2022/caughtInGiffy.webp" alt="Caught in a Giffy, IEEE TEMS" />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content3" ? "active" : ""
                                    }`}
                                style={{ "--i": 3 }}
                                data-id="content3"
                                onClick={() => handleContentChange("content3")}
                            >
                                <img src="events/2022/devops.webp" alt="Devops, IEEE TEMS" />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content4" ? "active" : ""
                                    }`}
                                style={{ "--i": 4 }}
                                data-id="content4"
                                onClick={() => handleContentChange("content4")}
                            >
                                <img
                                    src="events/2022/exploit.webp"
                                    alt="Exploit, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content5" ? "active" : ""
                                    }`}
                                style={{ "--i": 5 }}
                                data-id="content5"
                                onClick={() => handleContentChange("content5")}
                            >
                                <img
                                    src="events/2022/go.webp"
                                    alt="Go, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content6" ? "active" : ""
                                    }`}
                                style={{ "--i": 6 }}
                                data-id="content6"
                                onClick={() => handleContentChange("content6")}
                            >
                                <img
                                    src="events/2022/guideToCSS.webp"
                                    alt="Guide to CSS, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content7" ? "active" : ""
                                    }`}
                                style={{ "--i": 7 }}
                                data-id="content7"
                                onClick={() => handleContentChange("content7")}
                            >
                                <img
                                    src="events/2022/jsRoadToResponsive.webp"
                                    alt="Road to Responsive, IEEE TEMS"
                                />
                            </div>
                            <div
                                className={`imgBx ${activeContent === "content8" ? "active" : ""
                                    }`}
                                style={{ "--i": 8 }}
                                data-id="content8"
                                onClick={() => handleContentChange("content8")}
                            >
                                <img
                                    src="events/2022/managingStartups.webp"
                                    alt="Managing Startups, IEEE TEMS"
                                />
                            </div>
                        </div>

                        <div className="content1">
                            <div
                                className={`contentBx ${activeContent === "content1" ? "active" : ""
                                    }`}
                                id="content1"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2022/alumiTAlk.webp"
                                            alt="Alumini Talk, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content2" ? "active" : ""
                                    }`}
                                id="content2"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img src="events/2022/caughtInGiffy.webp" alt="Caught in Giffy, IEEE TEMSS" />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content2" ? "active" : ""
                                    }`}
                                id="content2"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img src="events/2022/devops.webp" alt="Devops, IEEE TEMS" />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content3" ? "active" : ""
                                    }`}
                                id="content3"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2022/exploit.webp"
                                            alt="Exploit, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content4" ? "active" : ""
                                    }`}
                                id="content4"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2022/go.webp"
                                            alt="Go, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content5" ? "active" : ""
                                    }`}
                                id="content5"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2022/guideToCSS.webp"
                                            alt="Guide to CSS, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content6" ? "active" : ""
                                    }`}
                                id="content6"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img src="events/2022/jsRoadToResponsive.webp" alt="Road to Responsive, IEEE TEMS" />
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`contentBx ${activeContent === "content7" ? "active" : ""
                                    }`}
                                id="content7"
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img
                                            src="events/2022/managingStartups.webp"
                                            alt="Managing Startups, IEEE TEMS"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="event-description">
                        <div className="event-description-content">
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content1" ? "event-active" : ""
                                    }`}
                                id="content1_description"
                            >
                                <h2 style={{ padding: "0px" }}>Alumni Talk</h2>
                                <p>
                                    Participants had the unique opportunity to delve into the diverse experiences of
                                    professionals in various career roles during an insightful event. The session featured
                                    esteemed guests, previous IEEE TEMS members, currently employed in diverse roles and a few
                                    engaged in further education pursuits. The alumni generously shared their valuable insights,
                                    discussing their individual experiences, the intricacies of their roles, and the preparation
                                    they undertook for their respective careers. The event also included an engaging Q&A
                                    session, where the audience had the chance to pose questions that were thoughtfully
                                    addressed by the experienced panel. It was an enriching occasion that provided a firsthand
                                    glimpse into the dynamic journeys and knowledge of accomplished professionals in the field.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content2" ? "event-active" : ""
                                    }`}
                                id="content2_description"
                            >
                                <h2 style={{ padding: "0px" }}>Caught In A Giffy</h2>
                                <p>
                                    Participants had the exclusive opportunity to explore the inception of Facebook's first
                                    JavaScript Library, React. This engaging event featured Mr. Praveen Kumar Purushottam, a
                                    distinguished full-stack web developer, graphic designer, and mentor with a Master's in
                                    Cloud Computing. Held on 3rd July at 1 pm, the session provided hands-on experience and
                                    valuable insights into React's user-friendly features, making it an ideal toolkit addition
                                    for beginners. Attendees interacted with Mr. Purushottam, gaining unique perspectives on
                                    ReactJS and benefiting from the expertise of an industry leader.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content3" ? "event-active" : ""
                                    }`}
                                id="content3_description"
                            >
                                <h2 style={{ padding: "0px" }}>OOPS! Is This Devops</h2>
                                <p>
                                    Participants explored the realm of DevOps with a knowledgeable speaker who shared insights on
                                    its significance and practical applications. Attendees gained hands-on expertise in tools
                                    like Jenkins, AWS, Red Hat Linux, and more, discovering how DevOps fosters collaboration and
                                    innovation in modern workplaces. The event provided a concise yet comprehensive overview of
                                    the integral role of DevOps in today's professional landscape.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content4" ? "event-active" : ""
                                    }`}
                                id="content4_description"
                            >
                                <h2 style={{ padding: "0px" }}>xᴘʟoiᴛ 2.0</h2>
                                <p>
                                    In the recently concluded "xᴘʟoiᴛ 2.0," participants engaged in a hands-on, two-day workshop
                                    that delved into the realms of network forensics, file systems, emails, mobile devices, and
                                    social media. Led by a seasoned professional with real-world expertise, attendees had the
                                    opportunity to use tools employed in digital forensics investigations. The workshop included
                                    discussions on real-world cases and a competition with cash prizes. Installation and setup
                                    were taken care of, requiring only sign-up and attendance for a comprehensive learning
                                    experience.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content5" ? "event-active" : ""
                                    }`}
                                id="content5_description"
                            >
                                <h2 style={{ padding: "0px" }}>On The Go With GO</h2>
                                <p>
                                    Participants explored the popularity and efficiency of Golang, a programming language known
                                    for its speed and simplicity. The session highlighted features such as its runtime
                                    environment, garbage collection, and concurrency approach, making it a superb choice for
                                    both beginners and experienced developers. The event celebrated Golang's effectiveness in
                                    creating large, high-performance apps quickly.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content6" ? "event-active" : ""
                                    }`}
                                id="content6_description"
                            >
                                <h2 style={{ padding: "0px" }}>CSS - A Programers Guide To Design</h2>
                                <p>
                                    Participants delved into the art of website design and styling during an engaging session
                                    focused on CSS (Cascading Style Sheet). The session commenced from the basics, catering to
                                    both beginners and those aspiring to reach developer-level proficiency. Attendees had the
                                    opportunity to explore the transformative impact of CSS, understanding how it plays a
                                    pivotal role in creating visually appealing and stylish websites. The session aimed to
                                    demystify CSS, allowing participants to witness firsthand how this powerful tool can
                                    entirely alter the aesthetic of a website.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content7" ? "event-active" : ""
                                    }`}
                                id="content7_description"
                            >
                                <h2 style={{ padding: "0px" }}>JavaScript Road To Responsive Web Design</h2>
                                <p>
                                    Participants delved into the world of JavaScript, discovering its role in managing the
                                    dynamics of web pages. The event emphasized the importance of interactivity for enhancing
                                    user experience and adding functionality to websites. Attendees learned how, like any other
                                    programming language, JavaScript allows for variable declaration, loop creation, and
                                    function building. The hands-on session provided insights into handling real-time events
                                    such as clicks, hovers, scrolls, and more. Those who joined the session on a past Sunday
                                    gained valuable knowledge about JavaScript's capabilities and its impact on creating dynamic
                                    and responsive web pages.
                                </p>
                            </div>
                            <div
                                className={`event-description-content-text descriptionBx ${activeContent === "content8" ? "event-active" : ""
                                    }`}
                                id="content8_description"
                            >
                                <h2 style={{ padding: "0px" }}>The Art Of Managing A Startup</h2>
                                <p>
                                    Insightful session on the Art of Managing Startups featuring Mr. Vincent Herald Wilson, a
                                    distinguished faculty member from SMEC with extensive knowledge about startups. The session
                                    aimed to address the challenges of running a startup, acknowledging the words of Dhirubhai
                                    Ambani that the success of young entrepreneurs is key to India's transformation in the new
                                    millennium. Participants had the opportunity to gain valuable insights into the intricacies
                                    of startup management, understanding that while ideas may be easy, successful implementation
                                    requires strategic planning. The event provided practical guidance for entrepreneurs stuck
                                    with questions about when, where, what, and how to propel their business plans forward.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Event;

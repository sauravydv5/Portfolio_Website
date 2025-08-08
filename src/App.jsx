import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import headerBg from "./assets/Header_bg.jpeg"; // Import image upar

import { Typewriter } from "react-simple-typewriter";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  const toggleMenu = () => setMenuActive(!menuActive);

  useEffect(() => {
    const handleScroll = () => {
      setBgColor(
        window.scrollY > 250
          ? "bg-[#29323c]/90 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = () => setMenuActive(false);

  const projects = [
    {
      title: "Interactive Quiz App",
      subtitle: "Engaging Learning Experience",
      desc: "A dynamic quiz app with interactive questions and scoring.",
      img: "/assets/images/quiz-app.avif",
    },
    {
      title: "E-Commerce Website",
      subtitle: "Seamless Online Shopping",
      desc: "A full e-commerce site with React + Firebase.",
      img: "/assets/images/e-commerc-website",
    },
    {
      title: "Portfolio Website",
      subtitle: "Showcase Your Work",
      desc: "Personal portfolio site with animations and contact form.",
      img: "/assets/images/Portfolio-Website.webp",
    },
    {
      title: "Task Manager App",
      subtitle: "Boost Productivity",
      desc: "To-do and task manager with drag-drop using Vue.js.",
      img: "/assets/images/task-managment.webp",
    },
    {
      title: "Weather Forecast App",
      subtitle: "Real-Time Weather Updates",
      desc: "Weather app using OpenWeather API and JS.",
      img: "/assets/images/Weather-Forecast-App.webp",
    },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${bgColor} ${
          menuActive ? "backdrop-blur-md bg-[#1f2937]/80" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text">
            <a href="#hero">
              <h1 className="transition-transform duration-300 hover:scale-105">
                <span className="text-yellow-400">S</span>AURAV{" "}
                <span className="text-yellow-400">K</span>UMAR
              </h1>
            </a>
          </div>

          {/* Hamburger */}
          <div className="z-50 cursor-pointer md:hidden" onClick={toggleMenu}>
            <div
              className={`w-6 h-1 bg-white mb-1 transition-all duration-300 origin-top-left ${
                menuActive ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-1 bg-white mb-1 transition-opacity duration-300 ${
                menuActive ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-1 bg-white transition-all duration-300 origin-bottom-left ${
                menuActive ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>

          {/* Menu Items */}
          <ul
            className={`md:flex md:space-x-8 absolute md:static bg-[#1f2937] md:bg-transparent w-full md:w-auto left-0 top-full transition-all duration-500 ease-in-out ${
              menuActive
                ? "opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }`}
          >
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <li key={item} className="group">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={handleItemClick}
                    className="relative block px-6 py-3 text-white transition duration-300 hover:text-yellow-400"
                  >
                    {item}
                    {/* Animated underline */}
                    <span className="absolute left-6 bottom-2 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-1/2"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center h-screen text-center text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${headerBg})` }} // Image background yahan lagaya
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 space-y-6" // z-10 taaki overlay ke upar aaye
        >
          {/* Greeting */}
          <h1 className="text-4xl font-bold md:text-6xl">Hello,</h1>

          {/* Intro */}
          <h2 className="text-3xl md:text-5xl">My Name is</h2>

          {/* 3D Animated Name */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={2000}
          >
            <h1 className="text-5xl font-extrabold text-yellow-400 md:text-7xl drop-shadow-lg">
              SAURAV KUMAR
            </h1>
          </Tilt>

          {/* Typing Effect */}
          <div className="mt-2 text-2xl font-medium md:text-4xl">
            <span>I’m a </span>
            <span className="text-yellow-400">
              <Typewriter
                words={[
                  "Frontend Developer 💻",
                  "Backend Developer 💻",
                  "Mern Developer 💻",
                  "React Enthusiast ⚛️",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="#projects"
            className="inline-block px-8 py-3 text-white transition-transform bg-yellow-500 rounded-full shadow-lg hover:scale-110 hover:bg-yellow-600"
          >
            View Portfolio
          </a>
        </motion.div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 text-center text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-bold"
        >
          Serv<span className="text-yellow-400">i</span>ces
        </motion.h1>

        <p className="max-w-xl mx-auto mb-10 text-gray-300">
          I offer comprehensive web development services tailored to meet your
          unique business needs...
        </p>

        <div className="grid max-w-6xl gap-6 px-4 mx-auto md:grid-cols-4">
          {[
            {
              icon: "https://img.icons8.com/bubbles/100/000000/code.png",
              title: "Web Development",
              desc: "Creating modern responsive websites using HTML5, CSS3, and JS.",
            },
            {
              icon: "https://img.icons8.com/bubbles/100/000000/design.png",
              title: "Frontend Design",
              desc: "Crafting intuitive user interfaces for seamless UX.",
            },
            {
              icon: "https://img.icons8.com/bubbles/100/000000/react.png",
              title: "React Development",
              desc: "Building dynamic apps using React.js and JS libraries.",
            },
            {
              icon: "https://img.icons8.com/bubbles/100/000000/speed.png",
              title: "Performance Optimization",
              desc: "Enhancing speed and code optimization.",
            },
          ].map((service, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#facc15"
              glarePosition="all"
              scale={1.05}
              transitionSpeed={2500}
              className="relative p-6 duration-500 border shadow-2xl bg-white/10 backdrop-blur-xl rounded-3xl border-yellow-400/20 group hover:shadow-yellow-400/30"
            >
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex flex-col items-center"
              >
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-20 h-20 mb-4 animate-pulse"
                />
                <h2 className="mb-2 text-xl font-bold text-yellow-300">
                  {service.title}
                </h2>
                <p className="text-gray-200">{service.desc}</p>
              </motion.div>

              {/* Gradient animated border effect */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 z-[-1]" />
            </Tilt>
          ))}
        </div>
      </section>

      {/* Experience Section (Timeline Style) */}
      <section
        id="experience"
        className="py-20 text-gray-800 bg-white dark:bg-gray-900 dark:text-white"
      >
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">
            My <span className="text-yellow-500">Experience</span>
          </h2>

          <div className="relative pl-6 border-l-4 border-yellow-500 space-y-14">
            {/* Experience 1: CodeBucket Pvt Ltd */}
            <div className="relative">
              <div className="absolute w-4 h-4 bg-yellow-500 border-4 border-white rounded-full -left-6 top-1 dark:border-gray-900" />
              <div className="p-6 transition-all duration-300 shadow-md bg-yellow-50 dark:bg-white/5 rounded-xl hover:shadow-lg">
                <h3 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-yellow-300">
                  MERN Stack Developer Intern
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">CodeBucket Pvt Ltd, Patna</span>{" "}
                  • <em>Jan 2025 – Present</em>
                </p>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside dark:text-gray-200">
                  <li>
                    <strong>
                      Developed Full-Stack AI-powered healthcare platform
                    </strong>{" "}
                    using React.js, Node.js, Express.js, and MongoDB — including
                    patient-doctor dashboards, appointment systems, and chatbot
                    integration.
                  </li>
                  <li>
                    <strong>
                      Implemented JWT-based Authentication & Role-based Access
                    </strong>{" "}
                    for secure login/signup with separate doctor and patient
                    access control.
                  </li>
                  <li>
                    Integrated <strong>Infermedica Symptom Checker API</strong>{" "}
                    for intelligent symptom prediction and medical suggestions.
                  </li>
                  <li>
                    Optimized backend performance by 25% via{" "}
                    <strong>
                      indexed queries, async route handlers, and MongoDB
                      aggregation pipelines
                    </strong>
                    .
                  </li>
                  <li>
                    Designed{" "}
                    <strong>
                      responsive frontend interfaces with Tailwind CSS
                    </strong>{" "}
                    and animations using Framer Motion and Parallax Tilt.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2: Bharat Intern */}
            <div className="relative">
              <div className="absolute w-4 h-4 bg-yellow-500 border-4 border-white rounded-full -left-6 top-1 dark:border-gray-900" />
              <div className="p-6 transition-all duration-300 shadow-md bg-yellow-50 dark:bg-white/5 rounded-xl hover:shadow-lg">
                <h3 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-yellow-300">
                  Full Stack Web Development Intern
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Bharat Intern (Remote)</span> •{" "}
                  <em>July 2024 – Aug 2024</em>
                </p>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside dark:text-gray-200">
                  <li>
                    Built a <strong>Money Tracker Web Application</strong> that
                    lets users manage daily expenses with CRUD operations stored
                    in MongoDB.
                  </li>
                  <li>
                    Developed a secure{" "}
                    <strong>registration and login system</strong> using plain
                    JS and server-side input validation.
                  </li>
                  <li>
                    Created <strong>intuitive and responsive UI</strong> using
                    vanilla CSS, focusing on mobile-first design and
                    accessibility.
                  </li>
                  <li>
                    Implemented <strong>data visualization features</strong>{" "}
                    using bar charts and budget summary highlights.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 text-center bg-white dark:bg-black"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-4xl font-bold text-gray-900 dark:text-white"
        >
          Recent <span className="text-yellow-500">Projects</span>
        </motion.h1>

        <div className="grid max-w-6xl gap-6 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={1000}
              className="rounded-3xl"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="overflow-hidden transition-all border shadow-xl bg-white/20 dark:bg-white/10 backdrop-blur-md border-white/20 dark:border-white/10 rounded-3xl hover:shadow-2xl"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-5 text-left">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    {p.title}
                  </h2>
                  <h3 className="text-gray-600 dark:text-gray-300">
                    {p.subtitle}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] dark:from-[#0f172a] dark:to-[#1e293b]"
      >
        <div className="container flex flex-col items-center gap-8 px-6 mx-auto md:flex-row">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.25}
              glareColor="#38bdf8"
              glarePosition="all"
              scale={1.05}
            >
              <div className="p-4 border shadow-2xl bg-white/30 dark:bg-white/10 backdrop-blur-2xl rounded-3xl border-blue-300/20 dark:border-sky-400/10">
                <img
                  src="/image/img-2.jpg"
                  alt="about"
                  className="w-40 h-auto rounded-xl" // w-40 = width 10rem (160px approx)
                />
              </div>
            </Tilt>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:w-1/2 md:text-left"
          >
            <h1 className="mb-2 text-4xl font-bold text-sky-900 dark:text-white">
              About <span className="text-sky-500">Me</span>
            </h1>
            <h2 className="mb-4 text-2xl text-sky-700 dark:text-sky-300">
              Front End Developer
            </h2>
            <p className="mb-6 leading-relaxed text-sky-800 dark:text-sky-200">
              I'm a creative Frontend Developer specialized in modern responsive
              UI using React, TailwindCSS, and animations to craft engaging web
              experiences.
            </p>
            <a
              href="/assets/my-cv.pdf"
              download
              className="inline-block px-6 py-2 font-medium text-white transition rounded-full shadow-md bg-sky-500 hover:bg-sky-600"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Contact <span className="text-yellow-500">info</span>
        </motion.h1>
        <div className="grid max-w-5xl gap-8 px-4 mx-auto text-center md:grid-cols-3">
          {["Phone", "Email", "Address"].map((type) => (
            <motion.div
              key={type}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(250, 204, 21, 0.4)",
              }}
              transition={{ duration: 0.3 }}
              className="p-6 border shadow-md cursor-pointer bg-white/20 dark:bg-gray-800 backdrop-blur-md rounded-xl hover:shadow-xl border-yellow-300/30"
            >
              <img
                src={`https://img.icons8.com/bubbles/80/000000/${
                  type.toLowerCase() === "phone"
                    ? "phone"
                    : type.toLowerCase() === "email"
                    ? "new-post"
                    : "map-marker"
                }.png`}
                alt={type}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-yellow-400">
                {type}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {type === "Phone"
                  ? "+92 300 123 4567"
                  : type === "Email"
                  ? "mehtab.alam@gmail.com"
                  : "Karachi, Sindh, Pakistan"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="py-10 bg-[#29323c] dark:bg-gray-900 text-white text-center px-4"
      >
        <h1 className="mb-1 text-2xl font-bold">
          <span className="text-yellow-500">S</span>auarv{" "}
          <span className="text-yellow-500">K</span>umar
        </h1>
        <h2 className="mb-6 text-sm opacity-80">Your Complete Web Solution</h2>
        <div className="flex justify-center gap-6 mb-6">
          {["linkedin", "github", "twitter", "youtube"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="transition duration-300 transform hover:scale-125 hover:text-yellow-400"
              aria-label={platform}
            >
              <img
                src={`/assets/icons/${platform}.png`}
                alt={platform}
                className="w-6 h-6 filter brightness-90 hover:brightness-110"
              />
            </a>
          ))}
        </div>
        <p className="text-xs opacity-70">
          © 2025 Saurav. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;

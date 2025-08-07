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
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            <a href="#hero">
              <h1 className="hover:scale-105 transition-transform duration-300">
                <span className="text-yellow-400">S</span>AURAV{" "}
                <span className="text-yellow-400">K</span>UMAR
              </h1>
            </a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
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
                    className="block text-white px-6 py-3 hover:text-yellow-400 transition duration-300 relative"
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
        className="h-screen flex items-center justify-center bg-center bg-cover text-center text-white relative"
        style={{ backgroundImage: `url(${headerBg})` }} // Image background yahan lagaya
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 relative z-10" // z-10 taaki overlay ke upar aaye
        >
          {/* Greeting */}
          <h1 className="text-4xl md:text-6xl font-bold">Hello,</h1>

          {/* Intro */}
          <h2 className="text-3xl md:text-5xl">My Name is</h2>

          {/* 3D Animated Name */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={2000}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg">
              SAURAV KUMAR
            </h1>
          </Tilt>

          {/* Typing Effect */}
          <div className="text-2xl md:text-4xl mt-2 font-medium">
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
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full hover:scale-110 hover:bg-yellow-600 transition-transform shadow-lg"
          >
            View Portfolio
          </a>
        </motion.div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Serv<span className="text-yellow-400">i</span>ces
        </motion.h1>

        <p className="max-w-xl mx-auto text-gray-300 mb-10">
          I offer comprehensive web development services tailored to meet your
          unique business needs...
        </p>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
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
              className="relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-yellow-400/20 shadow-2xl group hover:shadow-yellow-400/30 duration-500"
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
                <h2 className="text-xl font-bold mb-2 text-yellow-300">
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

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-white dark:bg-black text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Recent <span className="text-yellow-500">Projects</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
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
                className="bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-left">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    {p.title}
                  </h2>
                  <h3 className="text-gray-600 dark:text-gray-300">
                    {p.subtitle}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
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
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 gap-8">
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
              <div className="bg-white/30 dark:bg-white/10 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border border-blue-300/20 dark:border-sky-400/10">
                <img
                  src="/image/img-2.jpg"
                  alt="about"
                  className="rounded-xl w-40 h-auto" // w-40 = width 10rem (160px approx)
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
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl font-bold mb-2 text-sky-900 dark:text-white">
              About <span className="text-sky-500">Me</span>
            </h1>
            <h2 className="text-2xl mb-4 text-sky-700 dark:text-sky-300">
              Front End Developer
            </h2>
            <p className="text-sky-800 dark:text-sky-200 mb-6 leading-relaxed">
              I'm a creative Frontend Developer specialized in modern responsive
              UI using React, TailwindCSS, and animations to craft engaging web
              experiences.
            </p>
            <a
              href="/assets/my-cv.pdf"
              download
              className="inline-block bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition font-medium shadow-md"
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
          className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
        >
          Contact <span className="text-yellow-500">info</span>
        </motion.h1>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4 text-center">
          {["Phone", "Email", "Address"].map((type) => (
            <motion.div
              key={type}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(250, 204, 21, 0.4)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/20 dark:bg-gray-800 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer border border-yellow-300/30"
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
                className="mx-auto mb-4 w-20 h-20"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-yellow-400">
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
        <h1 className="text-2xl font-bold mb-1">
          <span className="text-yellow-500">M</span>ehtab{" "}
          <span className="text-yellow-500">A</span>lam
        </h1>
        <h2 className="text-sm mb-6 opacity-80">Your Complete Web Solution</h2>
        <div className="flex justify-center gap-6 mb-6">
          {["linkedin", "github", "twitter", "youtube"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="transform transition duration-300 hover:scale-125 hover:text-yellow-400"
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
          © 2020 Mehtab. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;

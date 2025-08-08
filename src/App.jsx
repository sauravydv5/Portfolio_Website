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
      title: "Inventory Management System App",
      subtitle: "Simple Stock CRUD Manager",
      desc: "A lightweight inventory tracking app built with React and Firebase, supporting create, read, update, and delete operations for products.",
      img: "/image/ims.png", //,
    },
    {
      title: "E-commerce Website",
      subtitle: "React + Redux Shopping Platform",
      desc: "A modern e-commerce app built with React and Redux featuring API-based product fetching, cart functionality, and class-based components.",
      img: "/image/ecom.png",
    },

    {
      title: "Portfolio Website",
      subtitle: "Showcase Your Work",
      desc: "Personal portfolio site with animations and contact form.",
      img: "/image/port.png",
    },
    {
      title: "Job Portal App",
      subtitle: "MERN Stack Job Listing Platform",
      desc: "A responsive job portal built with the MERN stack featuring secure JWT authentication, job listings, application tracking, and image upload with Cloudinary.",
      img: "/image/job.png",
    },
    {
      title: "DoctorOnCall System",
      subtitle: "Full-Stack Doctor Appointment Platform",
      desc: "A dynamic appointment system built with React, Node.js, Prisma, and PostgreSQL. Features include authentication, email notifications, doctor/patient dashboards, and real-time prescription and invoice generation.",
      img: "/image/doct.png", // ✅ Update to your actual image path
    },
    {
      title: "Social Media Web App",
      subtitle: "MERN Stack Social Platform",
      desc: "A full-stack social media platform built with React, Node.js, Express, and MongoDB. Users can create posts, like/unlike, follow/unfollow, and manage profiles with JWT-based authentication.",
      img: "/image/soical.png", // ✅ Replace with correct path to your image
    },
  ];

  const skills = [
    { name: "HTML", img: "/image/html.png" },
    { name: "CSS", img: "/image/css.jpeg" },
    { name: "JavaScript", img: "/image/js.png" },
    { name: "React", img: "/image/react.png" },
    { name: "Node.js", img: "/image/node.jpeg" },
    { name: "MongoDB", img: "/image/mongo.png" },
    { name: "SQL", img: "/image/sql.png" },
    { name: "Express", img: "/image/express.png" },
    { name: "Redux", img: "/image/redux.png" },
    { name: "Tailwind", img: "/image/tailwind.jpeg" },
    { name: "Bootstrap", img: "/image/bootstrap.jpeg" },
    { name: "Python", img: "/image/python.jpeg" },
    { name: "Git", img: "/image/git.png" },

    { name: "Postman", img: "/image/post.png" },
    { name: "RestFul Api", img: "/image/rest.jpeg" },
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
            className={`md:flex md:space-x-6 absolute md:static bg-[#1f2937] md:bg-transparent w-full md:w-auto left-0 top-full transition-all duration-500 ease-in-out ${
              menuActive
                ? "opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }`}
          >
            {[
              "Home",
              "Services",
              "Skills",
              "Experience",
              "Projects",
              "About",
              "Contact",
            ].map((item) => (
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
            ))}
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

        <p className="max-w-4xl mx-auto mb-10 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
          I specialize in delivering{" "}
          <span className="font-semibold text-white">
            end-to-end web development solutions
          </span>{" "}
          that are designed to align perfectly with your{" "}
          <span className="font-semibold text-white">business goals</span>. From
          building{" "}
          <span className="font-semibold text-white">
            responsive, user-friendly front-end interfaces
          </span>{" "}
          to creating{" "}
          <span className="font-semibold text-white">
            robust and scalable back-end architectures
          </span>
          , I ensure every aspect of your website{" "}
          <span className="font-semibold text-white">functions seamlessly</span>
          . Whether you're looking to{" "}
          <span className="font-semibold text-white">launch a new product</span>
          ,{" "}
          <span className="font-semibold text-white">
            enhance your digital presence
          </span>
          , or{" "}
          <span className="font-semibold text-white">
            streamline internal workflows
          </span>
          , I provide{" "}
          <span className="font-semibold text-white">tailored solutions</span>{" "}
          that <span className="font-semibold text-white">drive results</span>{" "}
          and{" "}
          <span className="font-semibold text-white">deliver real value</span>{" "}
          to your users.
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

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-[#f0fdfa] to-[#ccfbf1] dark:from-[#0f172a] dark:to-[#1e293b]"
      >
        <div className="px-6 mx-auto text-center max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-4xl font-bold text-teal-800 dark:text-white"
          >
            <span className="text-pink-500">My</span> Skills
          </motion.h1>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareBorderRadius="1rem"
                  scale={1.05}
                >
                  <div className="relative w-full h-40 overflow-hidden transition-all duration-300 border shadow-lg rounded-2xl border-white/20 group hover:scale-105 backdrop-blur-md">
                    {/* Gradient Glow Background */}
                    <div className="absolute transition-all duration-500 -inset-1 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 blur opacity-20 group-hover:opacity-40" />

                    {/* Skill Image Full Fill */}
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="object-cover w-full h-full"
                    />

                    {/* Skill Name Overlay */}
                    <div className="absolute inset-0 flex items-end justify-center bg-black/30">
                      <p className="pb-2 text-base font-bold text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-600 bg-clip-text drop-shadow-md">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
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
                  <span className="text-xl font-semibold text-blue-400">
                    CodeBucket Pvt Ltd, Patna • <em>Jan 2025 – July 2025</em>
                  </span>
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
                  <span className="text-xl font-semibold text-blue-400">
                    Bharat Intern(Remote) • <em>July 2024 – Aug 2025</em>
                  </span>
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
      {/* Enhanced Projects Section */}
      <section
        id="projects"
        className="py-20 text-center bg-white dark:bg-black"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          <span className="text-yellow-500">Projects</span>
        </motion.h1>

        <div className="grid max-w-6xl gap-8 px-4 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 rounded-3xl hover:shadow-2xl bg-white dark:bg-[#1a1a1a] transition-all duration-300"
              >
                <div className="w-full overflow-hidden h-52">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6 text-left">
                  <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                    {p.title}
                  </h2>
                  <h3 className="mb-2 text-gray-600 text-md dark:text-gray-400">
                    {p.subtitle}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {p.desc}
                  </p>

                  {/* Optional Links */}
                  {(p.github || p.demo) && (
                    <div className="flex gap-4 mt-4">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] dark:from-[#0f172a] dark:to-[#1e293b] flex justify-center items-center"
      >
        <div className="flex flex-col items-center w-full max-w-5xl gap-10 px-6 md:flex-row">
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-5 border shadow-2xl bg-white/30 dark:bg-white/10 backdrop-blur-2xl rounded-3xl border-blue-300/20 dark:border-sky-400/10"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.25}
              glareColor="#38bdf8"
              glarePosition="all"
              scale={1.05}
            >
              <img
                src="/image/unnamed.jpg"
                alt="about"
                className="h-auto w-72 rounded-xl" // ⬅️ Image size increased
              />
            </Tilt>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl text-center md:text-left"
          >
            <h1 className="mb-2 text-4xl font-bold text-sky-900 dark:text-white">
              About <span className="text-sky-500">Me</span>
            </h1>
            <h2 className="mb-4 text-2xl text-sky-700 dark:text-sky-300">
              MERN Stack Developer | AI Enthusiast
            </h2>
            <p className="mb-6 leading-relaxed text-sky-800 dark:text-sky-200">
              I’m Saurav Kumar, a passionate Full Stack MERN Developer currently
              have Completed my Master’s in Computer Science from Central
              University of South Bihar. I build modern, scalable, and AI-driven
              web applications using React.js, Node.js, Express, and MongoDB.{" "}
              <br />
              <br />
              As a developer intern at CodeBucket Pvt Ltd, I’ve worked on
              healthcare platforms with features like JWT authentication,
              doctor-patient dashboards, and real-time APIs. I love solving
              real-world problems using clean UI, optimized backend logic, and
              powerful APIs like OpenAI, Gemini, and Infermedica.
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
                  ? "+91 72774 43664"
                  : type === "Email"
                  ? "sauravkumar91937@gmail.com"
                  : "Khusropur, Patna, Bihar (India)"}
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
          <span className="text-yellow-500">S</span>aurav{" "}
          <span className="text-yellow-500">K</span>umar
        </h1>
        <h2 className="mb-6 text-sm opacity-80">Your Complete Web Solution</h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sauravkumar5/" // ✅ replace with yours if different
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-125 hover:text-yellow-400"
            aria-label="LinkedIn"
          >
            <img
              src="/image/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 filter brightness-90 hover:brightness-110"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sauravydv5" // ✅ replace with yours if different
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-125 hover:text-yellow-400"
            aria-label="GitHub"
          >
            <img
              src="/image/github.png"
              alt="GitHub"
              className="w-6 h-6 filter brightness-90 hover:brightness-110"
            />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/Saurav_ydv_5" // ✅ replace with yours if different
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-125 hover:text-yellow-400"
            aria-label="Twitter"
          >
            <img
              src="/image/x.png"
              alt="Twitter"
              className="w-6 h-6 filter brightness-90 hover:brightness-110"
            />
          </a>

          {/* YouTube */}
          <a
            href="https://www.instagram.com/saurav_ydv5/" // ✅ replace with yours if different
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-125 hover:text-yellow-400"
            aria-label="Instagram"
          >
            <img
              src="/image/insta.jpeg"
              alt="Instagram"
              className="w-6 h-6 filter brightness-90 hover:brightness-110"
            />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="text-xs opacity-70">
          © 2025 Saurav. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;

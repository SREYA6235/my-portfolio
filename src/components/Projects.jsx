import { motion } from "framer-motion";

function Projects() {

  const section = {
    padding: "100px 10%",
    color: "white"
  };


  const container = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px"
  };


  const card = {
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "25px",
    border: "1px solid rgba(255,255,255,.1)",
    boxShadow: "0 0 20px rgba(91,140,255,.3)"
  };


  const title = {
    textAlign: "center",
    fontSize: "50px",
    marginBottom: "60px"
  };


  const linkStyle = {
    color: "#22D3EE",
    textDecoration: "none",
    display: "block",
    marginTop: "10px"
  };


  const cardAnimation = {
    initial: {
      opacity: 0,
      y: 80
    },

    whileInView: {
      opacity: 1,
      y: 0
    },

    transition: {
      duration: 0.6
    },

    viewport: {
      once: true
    },

    whileHover: {
      scale: 1.05,
      boxShadow: "0 0 35px rgba(145,94,255,0.5)"
    }
  };


  return (

    <section id="projects" style={section}>


      <motion.h1

        style={title}

        initial={{
          opacity:0,
          y:-50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.7
        }}

        viewport={{
          once:true
        }}

      >

        Projects

      </motion.h1>



      <motion.div

        style={container}

        initial={{
          opacity:0
        }}

        whileInView={{
          opacity:1
        }}

        transition={{
          duration:0.8
        }}

      >



        <motion.div style={card} {...cardAnimation}>

          <h2 style={{ color: "#915EFF" }}>
            WorkPulse
          </h2>

          <p style={{ marginTop: "15px", color: "#aaa6c3" }}>
            CRM, attendance, and leave management system built using React Native,
            Node.js, and MongoDB. Designed for employee tracking and workflow automation.
          </p>

        </motion.div>




        <motion.div style={card} {...cardAnimation}>

          <h2 style={{ color: "#5B8CFF" }}>
            Jalamithram (Android App)
          </h2>

          <p style={{ marginTop: "15px", color: "#aaa6c3" }}>
            Smart water management system that allows users to track water usage,
            report leakages, and pay bills in real-time using Java and Firebase.
          </p>


          <a style={linkStyle}
          href="https://drive.google.com/file/d/13haBOjOOK8WzVlxm87zwQCkAe5t6TCrz/view?usp=sharing"
          target="_blank">
            ▶ Demo Video
          </a>


          <a style={linkStyle}
          href="https://drive.google.com/file/d/148eTuPaLkh3HSu9y1fZiApc9E8L9mEU3/view?usp=sharing"
          target="_blank">
            📱 Live APP
          </a>

        </motion.div>





        <motion.div style={card} {...cardAnimation}>

          <h2 style={{ color: "#4ADE80" }}>
            Retail Sales Management System
          </h2>


          <p style={{ marginTop: "15px", color: "#aaa6c3" }}>
            Full-stack retail management system built using React (Vite), Node.js,
            Express, and MySQL. Includes search, sorting, pagination, and optimized database queries.
          </p>


          <a
          style={linkStyle}
          href="https://github.com/SREYA6235/retailsalesmanagementsystem"
          target="_blank">

            🔗 GitHub Repository

          </a>

        </motion.div>





        <motion.div style={card} {...cardAnimation}>

          <h2 style={{ color: "#F472B6" }}>
            Full-Stack Task Engine
          </h2>


          <p style={{ marginTop: "15px", color: "#aaa6c3" }}>
            Task management system built with Node.js, MySQL, and REST APIs.
            Supports CRUD operations with optimized backend routing.
          </p>


          <a
          style={linkStyle}
          href="https://github.com/SREYA6235/todo-fullstack-app"
          target="_blank">

            🔗 GitHub Repository

          </a>


        </motion.div>





        <motion.div style={card} {...cardAnimation}>


          <h2 style={{ color: "#60A5FA" }}>
            Stopwatch Web App
          </h2>


          <p style={{ marginTop: "15px", color: "#aaa6c3" }}>
            A simple and responsive stopwatch web application designed for accurate time tracking.
            It features smooth controls and real-time updates.
          </p>


          <p style={{ marginTop:"10px", color:"#aaa6c3" }}>
            <b>Features:</b> Start, Pause, Reset, Restart, Lap, Reset Lap
          </p>


          <a style={linkStyle}
          href="https://nimble-ganache-5d0943.netlify.app/"
          target="_blank">

            🚀 Live Stopwatch App

          </a>


          <a style={linkStyle}
          href="https://github.com/SREYA6235/Stopwatch-"
          target="_blank">

            🔗 GitHub Repository

          </a>


        </motion.div>





        <motion.div style={card} {...cardAnimation}>


          <h2 style={{ color:"#22D3EE" }}>
            Emissions Dashboard
          </h2>


          <p style={{ marginTop:"15px", color:"#aaa6c3" }}>
            Multi-tenant carbon emissions tracking dashboard supporting Scope 1, 2, and 3 data.
            Includes audit logs, approval workflow, and CO₂e normalization engine.
          </p>


          <p style={{ marginTop:"10px", color:"#aaa6c3" }}>
            Tech Stack: React, Django REST Framework, PostgreSQL
          </p>


          <a
          style={linkStyle}
          href="https://emissions-dashboard-one.vercel.app/"
          target="_blank">

            🚀 Live website

          </a>


        </motion.div>


      </motion.div>


    </section>

  );

}


export default Projects;
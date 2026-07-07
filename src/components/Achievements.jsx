import { motion } from "framer-motion";

function Achievements() {

  const sectionStyle = {
    padding: "100px 10%",
    color: "white"
  };


  const cardStyle = {
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "25px",
    boxShadow: "0 0 25px rgba(145,94,255,0.3)",
    border: "1px solid rgba(255,255,255,0.1)"
  };


  const animation = {
    initial:{
      opacity:0,
      x:-100
    },

    whileInView:{
      opacity:1,
      x:0
    },

    transition:{
      duration:0.7
    },

    viewport:{
      once:true
    },

    whileHover:{
      scale:1.03,
      boxShadow:"0 0 40px rgba(0,229,255,0.5)"
    }
  };


  return (

    <section id="achievements" style={sectionStyle}>


      <motion.h1

        initial={{
          opacity:0,
          y:-50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.8
        }}

        style={{
          textAlign:"center",
          fontSize:"55px",
          marginBottom:"60px"
        }}

      >

        Achievements

      </motion.h1>




      <motion.div {...animation} style={cardStyle}>

        <h2 style={{color:"#22D3EE"}}>
          🎓 Academic Excellence (MCA - CUSAT University)
        </h2>

        <p style={{marginTop:"15px",color:"#cccccc"}}>
          In my MCA program, I was the First Class Topper in the 2nd semester,
          and Second Class Topper in the 1st, 3rd, and 4th semesters at College
          of Engineering Thalassery under CUSAT University.
        </p>

      </motion.div>





      <motion.div {...animation} style={cardStyle}>

        <h2 style={{color:"#FFD700"}}>
          🏆 CodeChef Silver Badge
        </h2>

        <p style={{marginTop:"15px",color:"#cccccc"}}>
          Solved 250+ coding problems and earned the CodeChef Silver Badge.
        </p>

      </motion.div>





      <motion.div {...animation} style={cardStyle}>

        <h2 style={{color:"#915EFF"}}>
          🎓 NPTEL Silver Badge
        </h2>

        <p style={{marginTop:"15px",color:"#cccccc"}}>
          Earned Silver Badge in NPTEL certification by successfully completing
          Introduction to Internet of Things (81%).
        </p>

      </motion.div>





      <motion.div {...animation} style={cardStyle}>

        <h2 style={{color:"#00E5FF"}}>
          📈 Entrance Exam Achievements
        </h2>

        <p style={{marginTop:"15px",color:"#cccccc"}}>
          LBS MCA Entrance Exam 2024: Ranked 226 among 3,553 candidates (Top 6%).
          <br/>
          CUSAT CAT 2024 (MSc Artificial Intelligence): All India Rank 264.
          <br/>
          CUSAT CAT 2024 (MSc Data Science): All India Rank 253.
        </p>

      </motion.div>





      <motion.div {...animation} style={cardStyle}>

        <h2 style={{color:"#915EFF"}}>
          ☁ Cloud Computing Certification
        </h2>

        <p style={{marginTop:"15px",color:"#cccccc"}}>
          Completed certifications in Cloud Computing, IoT,
          and Power BI Data Visualization.
        </p>

      </motion.div>





      <motion.div {...animation} style={cardStyle}>

        <h2 style={{color:"#4ADE80"}}>
          🚀 Full Stack Development Projects
        </h2>

        <p style={{marginTop:"15px",color:"#cccccc"}}>
          Built WorkPulse and Jalamithram applications using Java,
          React Native, Node.js, MongoDB and Firebase.
        </p>

      </motion.div>



    </section>

  );
}

export default Achievements;
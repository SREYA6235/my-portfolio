import { motion } from "framer-motion";

function Skills() {

  const section = {
    padding: "100px 10%",
    color: "white",
    background: "#080816"
  };


  const categories = [
    {
      title: "💻 Programming Languages",
      skills: [
        "Java",
        "Python",
        "C++",
        "C"
      ]
    },

    {
      title: "🌐 Web Development",
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "AngularJS",
        "Node.js",
        "HTML5",
        "CSS3"
      ]
    },


    {
      title: "🗄 Database Management",
      skills: [
        "Firebase Realtime Database",
        "MySQL",
        "MySQL Workbench",
        "MongoDB"
      ]
    },


    {
      title: "🛠 Tools & Platforms",
      skills: [
        "Android Studio",
        "Git & GitHub",
        "Power BI",
        "VS Code",
        "Linux",
        "Windows",
        "MS Excel"
      ]
    },


    {
      title: "🧠 Computer Science Fundamentals",
      skills: [
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "Computer Networks",
        "Database Management Systems",
        "Operating Systems"
      ]
    },


    {
      title: "🚀 Professional Skills",
      skills: [
        "Communication Skills",
        "Leadership",
        "Team Collaboration",
        "Presentation Skills",
        "Problem Solving",
        "Critical Thinking",
        "Time Management",
        "Adaptability"
      ]
    },


    {
      title: "🎨 Creative & Analytical Skills",
      skills: [
        "Data Visualization",
        "UI/UX Understanding",
        "Analytical Thinking",
        "Research Skills",
        "Project Planning"
      ]
    }

  ];



  const cardStyle = {

    background:
    "rgba(255,255,255,0.05)",

    backdropFilter:
    "blur(20px)",

    borderRadius:
    "25px",

    padding:
    "30px",

    border:
    "1px solid rgba(255,255,255,0.15)",

    boxShadow:
    "0 0 25px rgba(145,94,255,0.25)",

    transition:
    "0.4s",

  };



  return (

    <section id="skills" style={section}>


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
          duration:0.7
        }}

        style={{
          textAlign:"center",
          fontSize:"50px",
          marginBottom:"70px",
          color:"#00E5FF"
        }}

      >

        Technical & Professional Skills

      </motion.h1>



      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",

          gap:"35px"

        }}

      >


        {
          categories.map((category,index)=>(


            <motion.div

              key={index}

              style={cardStyle}


              initial={{
                opacity:0,
                y:50
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              transition={{
                duration:0.6,
                delay:index*0.1
              }}


              whileHover={{
                scale:1.05,
                boxShadow:
                "0 0 35px rgba(0,229,255,0.5)"
              }}


            >


              <h2

                style={{

                  fontSize:"22px",

                  marginBottom:"20px",

                  color:"#915EFF"

                }}

              >

                {category.title}

              </h2>



              <ul

                style={{

                  paddingLeft:"20px",

                  lineHeight:"2",

                  color:"#ddd"

                }}

              >


              {
                category.skills.map((skill,i)=>(

                  <li key={i}>

                    {skill}

                  </li>

                ))
              }


              </ul>



            </motion.div>


          ))
        }


      </div>


    </section>

  );

}


export default Skills;
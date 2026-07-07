import { useState } from "react";

import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";

function Profile() {
  
  const [active, setActive] = useState("education");
  

  const tabs = [
    { id: "education", label: "🎓 Education", component: <Education /> },
    { id: "achievements", label: "🏆 Achievements", component: <Achievements /> },
    { id: "skills", label: "💻 Skills", component: <Skills /> },
    { id: "projects", label: "🚀 Projects", component: <Projects /> },
    { id: "experience", label: "💼 Experience", component: <Experience /> },
  ];

  const styles = {
    container: {
      background: "#050816",
      color: "white",
      padding: "60px 8%",
      minHeight: "100vh",
    },

    title: {
      textAlign: "center",
      fontSize: "45px",
      marginBottom: "40px",
    },

    purple: {
      color: "#915EFF",
    },

    menu: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "50px",
    },

    button: {
      padding: "15px 30px",
      background: "#1d1836",
      color: "white",
      border: "2px solid #915EFF",
      borderRadius: "30px",
      cursor: "pointer",
      fontSize: "18px",
      transition: "0.3s",
    },

    activeButton: {
      background: "#915EFF",
    },

    content: {
      marginTop: "30px",
    },
  };

  const activeTab = tabs.find((tab) => tab.id === active);

  return (
    
  <section id="profile" style={styles.container}>
      <h1 style={styles.title}>
        My <span style={styles.purple}>Profile</span>
      </h1>

      {/* MENU */}
      <div style={styles.menu}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            style={{
              ...styles.button,
              ...(active === tab.id ? styles.activeButton : {}),
            }}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        {activeTab?.component}
      </div>
    </section>
    
  );
}

export default Profile;
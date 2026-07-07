function Experience() {
  const styles = {
    section: {
      padding: "100px 10%",
      color: "white",
      position: "relative",
    },

    title: {
      textAlign: "center",
      fontSize: "50px",
      marginBottom: "80px",
    },

    timeline: {
      position: "relative",
      marginLeft: "20px",
    },

    line: {
      position: "absolute",
      left: "10px",
      top: "0",
      bottom: "0",
      width: "2px",
      background: "#915EFF",
      opacity: "0.5",
    },

    item: {
      position: "relative",
      marginBottom: "60px",
      paddingLeft: "40px",
    },

    dot: {
      position: "absolute",
      left: "2px",
      top: "10px",
      width: "18px",
      height: "18px",
      background: "#915EFF",
      borderRadius: "50%",
      boxShadow: "0 0 10px #915EFF",
    },

    card: {
      background: "rgba(255,255,255,0.05)",
      padding: "30px",
      borderRadius: "18px",
      border: "1px solid rgba(145, 94, 255, 0.2)",
    },

    role: {
      color: "#915EFF",
      fontSize: "22px",
      marginBottom: "5px",
    },

    company: {
      color: "#b0b0d0",
      fontSize: "15px",
      marginBottom: "15px",
    },

    text: {
      color: "#aaa6c3",
      lineHeight: "1.6",
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Experience</h1>

      <div style={styles.timeline}>
        {/* vertical line */}
        <div style={styles.line}></div>

        {/* 1st Experience */}
        <div style={styles.item}>
          <div style={styles.dot}></div>

          <div style={styles.card}>
            <h2 style={styles.role}>Software Developer Intern</h2>

            <h3 style={styles.company}>
              Bitfix Technology Private Limited, Kozhikode, Kerala (Feb 2026 – May 2026)
            </h3>

            <p style={styles.text}>
              Worked on Java, React, REST APIs and Full Stack Development projects.
            </p>
          </div>
        </div>

        {/* 2nd Experience */}
        <div style={styles.item}>
          <div style={styles.dot}></div>

          <div style={styles.card}>
            <h2 style={styles.role}>Marketing HR Intern</h2>

            <h3 style={styles.company}>
              Kotlinkode Technology, Kanpur, Uttar Pradesh (Sep 2024 – Dec 2024)
            </h3>

            <p style={styles.text}>
              Assisted in recruitment activities including screening resumes and scheduling interviews. <br />
              Contributed to marketing outreach by coordinating campaigns and promoting company services. <br />
              Helped manage internal communication between HR and marketing teams. <br />
              Participated in social media and branding activities to increase company visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
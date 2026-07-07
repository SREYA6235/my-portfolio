function Education() {

  const section = {
    padding: "100px 10%",
    color: "white"
  };

  const card = {
    background: "rgba(255,255,255,.05)",
    padding: "30px",
    borderRadius: "25px",
    marginBottom: "25px",
    boxShadow: "0 0 20px rgba(145,94,255,.3)"
  };

  return (
    <section style={section}>

      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "60px"
        }}
      >
        Education
      </h1>

      <div style={card}>
        <h2 style={{ color: "#915EFF" }}>
          MCA(Master of Computer Application)
        </h2>

        <p style={{ color: "#aaa6c3", marginTop: "15px" }}>
          Cochin University of Science and Technology
          CGPA:9.1/10
        </p>
      </div>
       <div style={card}>
        <h2 style={{ color: "#915EFF" }}>
          BSc Computer Science
        </h2>

        <p style={{ color: "#aaa6c3", marginTop: "15px" }}>
          Kannur University
          CGPA:8.7/10
        </p>
      </div>
         <div style={card}>
        <h2 style={{ color: "#915EFF" }}>
          Higher Secondary(Computer Science)
        </h2>

        <p style={{ color: "#aaa6c3", marginTop: "15px" }}>
          Kerala board of higher secondary school
          CGPA:9.7/10
        </p>
      </div>

    </section>
  );
}

export default Education;
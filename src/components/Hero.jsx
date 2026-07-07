function Hero() {

  const styles = {

    hero: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10%",
      color: "white"
    },

    title: {
      fontSize: "90px",
      fontWeight: "700",
      lineHeight: "100px"
    },

    purple: {
      color: "#915EFF"
    },

    subtitle: {
      color: "#aaa6c3",
      marginTop: "20px",
      fontSize: "24px"
    },
 h1:
  {
    color:"white"
  },
    button1: {
      marginTop: "40px",
      background: "linear-gradient(to right,#915EFF,#5B8CFF)",
      border: "none",
      color: "white",
      padding: "18px 40px",
      borderRadius: "50px",
      cursor: "pointer",
      marginRight: "20px"
    },

    button2: {
      border: "2px solid #915EFF",
      background: "transparent",
      color: "white",
      padding: "18px 40px",
      borderRadius: "50px",
      cursor: "pointer"
    },

    circle: {
      width: "380px",
      height: "380px",
      borderRadius: "50%",
      overflow: "hidden",
      background:("/sreya.png"),
      border: "6px solid #915EFF",
      boxShadow: "0 0 60px #915EFF"
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }

  };

  return (
    <section id="home" style={styles.hero}>

      <div>

        <h3 style={{color:"#aaa6c3"}}>
          Hello, I'm
        </h3>

        <h1 style={styles.title}>
          <span style={styles.purple}>Sreya T</span>
        </h1>

        <h2>
          Software Engineer
        </h2>

        <p style={styles.subtitle}>
          Java Developer • Full Stack Developer • React Developer
        </p>
<a
  href="https://drive.google.com/uc?export=download&id=1CWnaxoyoCsaG_oy4rzOzzR6_MO70z4uJ"
  target="_blank"
  rel="noopener noreferrer"
>
  <button style={styles.button1}>
    Download Resume
  </button>
</a>
        <a href="#contact">
  <button style={styles.button2}>
    Contact Me
  </button>
</a>

      </div>

      <div style={styles.circle}>
        <img
          src="/new.png"
          alt="profile"
          style={styles.image}
        />
      </div>

    </section>
  );
}

export default Hero;
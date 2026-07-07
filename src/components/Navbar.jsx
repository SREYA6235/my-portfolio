function Navbar() {

  const styles = {

    nav: {
      position: "fixed",
      top: "20px",
      left: "5%",
      width: "90%",
      height: "70px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 35px",
      background: "rgba(15,15,35,0.75)",
      backdropFilter: "blur(15px)",
      borderRadius: "20px",
      border: "1px solid rgba(145,94,255,0.3)",
      boxShadow: "0 0 30px rgba(145,94,255,0.2)",
      zIndex: 1000,
    },

    logo: {
      fontSize: "32px",
      fontWeight: "800",
      color:"#00E5FF",
      cursor:"pointer",
      letterSpacing:"1px"
    },

    logoSpan:{
      color:"#915EFF"
    },

    ul:{
      display:"flex",
      alignItems:"center",
      gap:"35px",
      listStyle:"none",
      margin:0,
      padding:0
    },

    link:{
      color:"#ffffff",
      textDecoration:"none",
      fontSize:"17px",
      fontWeight:"500",
    },

    button:{
      padding:"12px 25px",
      borderRadius:"30px",
      border:"none",
      background:
      "linear-gradient(90deg,#915EFF,#5B8CFF)",
      color:"white",
      fontSize:"16px",
      cursor:"pointer",
      fontWeight:"600",
      boxShadow:"0 0 20px rgba(145,94,255,0.5)"
    }

  };


  return (

    <nav style={styles.nav}>

      <h1 style={styles.logo}>
        Sreya
        <span style={styles.logoSpan}>
          T
        </span>
      </h1>


      <ul style={styles.ul}>

        <li>
          <a href="#home" style={styles.link}>
            Home
          </a>
        </li>


        <li>
          <a href="#skills" style={styles.link}>
            Skills
          </a>
        </li>


        <li>
          <a href="#profile" style={styles.link}>
           profile
          </a>
        </li>


        <li>
          <a href="#contact" style={styles.link}>
            Contact
          </a>
        </li>


        <li>
          <a href="#contact">
            <button style={styles.button}>
              Hire Me
            </button>
          </a>
        </li>

      </ul>

    </nav>

  );
}


export default Navbar;
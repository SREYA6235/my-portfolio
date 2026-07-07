import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const sendWhatsApp = () => {
    if (!formData.message.trim()) {
      alert("Please enter your message");
      return;
    }

    const whatsappMessage = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
`;

    const url = `https://wa.me/916235876136?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };


  const sendEmail = () => {

    const emailBody = `
Name: ${formData.name}

Email:
${formData.email}

Message:
${formData.message}
`;

    window.location.href =
      `mailto:sreya.t6235@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(emailBody)}`;
  };


  const styles = {

    section: {
      padding: "100px 10%",
      color: "white",
      textAlign: "center",
      minHeight: "100vh",
    },


    title: {
      fontSize: "50px",
      marginBottom: "20px",
    },


    subtitle: {
      color: "#aaa6c3",
      marginBottom: "40px",
      fontSize: "18px",
    },


    card: {
      maxWidth: "650px",
      margin: "auto",
      padding: "40px",
      borderRadius: "20px",
      background: "#151030",
      boxShadow: "0 0 40px rgba(145,94,255,0.3)",
    },


    input: {
      width: "100%",
      padding: "15px",
      marginBottom: "20px",
      borderRadius: "10px",
      border: "1px solid #555",
      background: "#1d1836",
      color: "white",
      fontSize: "16px",
      outline: "none",
    },


    textarea: {
      width: "100%",
      height: "150px",
      padding: "15px",
      borderRadius: "10px",
      border: "1px solid #555",
      background: "#1d1836",
      color: "white",
      fontSize: "16px",
      resize: "none",
      outline: "none",
    },


    button: {
      marginTop: "25px",
      padding: "15px 35px",
      borderRadius: "50px",
      border: "none",
      background:
        "linear-gradient(to right,#915EFF,#5B8CFF)",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
      marginRight: "15px",
    },


    whatsapp: {
      background:"#25D366",
      marginTop:"25px",
      padding:"15px 35px",
      borderRadius:"50px",
      border:"none",
      color:"white",
      fontSize:"16px",
      cursor:"pointer"
    }

  };


  return (

    <section id="contact" style={styles.section}>


      <h1 style={styles.title}>
        Contact Me
      </h1>


      <p style={styles.subtitle}>
        Have a project or opportunity? Feel free to send me a message.
      </p>



      <div style={styles.card}>


        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />


        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />



        <textarea
          style={styles.textarea}
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
        />



        <br/>


        <button
          style={styles.button}
          onClick={sendEmail}
        >
          Send Email
        </button>



        <button
          style={styles.whatsapp}
          onClick={sendWhatsApp}
        >
          WhatsApp
        </button>


      </div>


    </section>

  );
}


export default Contact;
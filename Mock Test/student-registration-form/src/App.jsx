import React from "react";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <form
        style={{
          width: "380px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "30px",
            fontSize: "30px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Student Registration
        </h1>

        <input
          type="text"
          placeholder="Student Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Course"
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            background:
              "linear-gradient(to right, #00c6ff, #0072ff)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px",
            transition: "0.3s ease",
            boxShadow: "0 4px 15px rgba(0,114,255,0.4)",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  border: "none",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.2)",
  color: "#fff",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
  backdropFilter: "blur(5px)",
};

export default App;

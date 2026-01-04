import React from "react";

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    localStorage.setItem("userName", name);
    window.location.href = "/protofolio.html";
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Hello </h1>
        <input type="text" placeholder="What's your name?" id="userName" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;

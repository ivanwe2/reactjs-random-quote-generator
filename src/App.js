import "./styles.css";
import Quote from "./Components/Quote.jsx";

function App() {
  const refreshColors = () => {
    const app = document.querySelector(".App");
    app.style.setProperty(
      "--main-color",
      `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    );

    function randomNumber() {
      return Math.floor(Math.random() * 256);
    }
  };

  return (
    <div className="App">
      <Quote refreshColors={refreshColors}></Quote>
      <footer style={{ color: "white", padding: "5px" }}>by ivan</footer>
    </div>
  );
}

export default App;

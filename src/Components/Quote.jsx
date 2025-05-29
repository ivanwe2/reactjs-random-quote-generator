import { useState, useEffect, useCallback } from "react";
import "../styles.css";

const Quote = (props) => {
  const [quote, setQuote] = useState({
    content: "Loading...",
    author: "Loading...",
  });
  const [quoteApi] = useState("https://api.quotable.io/random");

  const fetchQuote = useCallback(async () => {
    const response = await fetch(quoteApi);
    const data = await response.json();

    setQuote({ content: data.content, author: data.author });
  }, [quoteApi]);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const handleUpdateQuote = () => {
    fetchQuote();
    props.refreshColors();
  };

  return (
    <div
      id="quote-box"
      style={{
        backgroundColor: "white",
        maxWidth: "40%",
        padding: "20px 40px",
        borderRadius: "5px",
        fontSize: "1.3em",
      }}
    >
      <div id="text" style={{ maxHeight: "450px" }} className="animated-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
        </svg>
        &nbsp;
        <span>{quote.content}</span>
        &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
        </svg>
      </div>
      <div id="author" style={{ marginTop: "20px" }}>
        - {quote.author}
      </div>
      <div
        id="buttons"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          paddingTop: "10px",
          marginTop: "20px",
        }}
      >
        <button type="button" id="new-quote" onClick={handleUpdateQuote}>
          New quote
        </button>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-twitter-x"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Quote;

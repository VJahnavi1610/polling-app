import React, { useState } from "react";

const Poll = () => {
  const pollData = {
    question: "Which is your favorite frontend framework?",
    options: ["React", "Vue", "Angular", "Svelte"],
  };

  const [votes, setVotes] = useState(new Array(pollData.options.length).fill(0));
  const [voted, setVoted] = useState(false);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
    setVoted(true);
  };

  const resetVote = () => {
    setVotes(new Array(pollData.options.length).fill(0));
    setVoted(false);
  };

  const totalVotes = votes.reduce((acc, val) => acc + val, 0);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h2>{pollData.question}</h2>
      {pollData.options.map((option, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={() => handleVote(index)}
            disabled={voted}
            style={{
              width: "100%",
              maxWidth: "300px",
              padding: "12px 0",
              textAlign: "center",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: voted ? "not-allowed" : "pointer",
              fontSize: "16px",
            }}
          >
            {option}
          </button>
        </div>
      ))}

      {voted && (
        <div style={{ marginTop: "30px", textAlign: "left" }}>
          <h3>Results:</h3>
          {pollData.options.map((option, idx) => {
            const percent = totalVotes ? ((votes[idx] / totalVotes) * 100).toFixed(1) : 0;
            return (
              <div key={idx} style={{ marginBottom: "8px" }}>
                <strong>{option}</strong> — {votes[idx]} votes ({percent}%)
              </div>
            );
          })}
          <div style={{ textAlign: "center" }}>
            <button
              onClick={resetVote}
              style={{
                marginTop: "20px",
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px 30px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Vote Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Poll;
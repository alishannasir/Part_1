import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [votes, setVotes] = useState({});

  const quotes = [
    "Adding manpower to a late software project makes it later!",
    "The best way to get a project done faster is to start sooner",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Even the best planning is not so omniscient as to get it right the first time.",
    "How does a project get to be a year late?... One day at a time.",
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const displayRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  const voteForQuote = () => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [quote]: (prevVotes[quote] || 0) + 1
    }));
  };

  const getMostVoted = () => {
    if (Object.keys(votes).length === 0) return ''; // Handle case when there are no votes
    const mostVoted = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
    return mostVoted;
  };

  const mostVotedQuote = getMostVoted();

  return (
    <>
      <p>{quote}</p>
      <p>This quote has {votes[quote] || 0} votes.</p>
      <button onClick={displayRandomQuote}>Next Quote</button>
      <button onClick={voteForQuote} disabled={!quote}>Vote</button>
      
      <h1>Anecdote with most votes:</h1>
      <p>{mostVotedQuote}</p>
      <p>This quote has {votes[mostVotedQuote] || 0} votes.</p>
    </>
  );
}

export default App;

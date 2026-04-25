import css from './App.module.css';
import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStarts from '../VoteStats/VoteStats';

function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (type: VoteType): void => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
      <VoteStarts votes={votes} />
    </div>
  );
}

export default App;

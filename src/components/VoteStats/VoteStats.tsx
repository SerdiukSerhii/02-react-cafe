import styles from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

type VoteStatsProps = {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
};

function VoteStats({
  votes: { good, neutral, bad },
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  const stat = styles.stat;

  return (
    <div className={styles.container}>
      <p className={stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}

export default VoteStats;

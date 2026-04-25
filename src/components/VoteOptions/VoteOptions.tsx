import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  const btn = css.button;

  return (
    <div className={css.container}>
      <button className={btn} onClick={() => onVote('good')}>
        Good
      </button>

      <button className={btn} onClick={() => onVote('neutral')}>
        Neutral
      </button>

      <button className={btn} onClick={() => onVote('bad')}>
        Bad
      </button>

      {canReset && (
        <button className={`${btn} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;

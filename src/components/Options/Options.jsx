
import css from './Oprions.module.css'

const Options = ({totalFeedback, updateFeedback, resetFeedback}) => {
    return (
        <div className={css.optionsBox}>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            { totalFeedback > 0 && (<button onClick={resetFeedback}>Reset</button>)}
        </div>
    );
};

export default Options;


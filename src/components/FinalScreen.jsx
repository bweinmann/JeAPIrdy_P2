import './FinalScreenStyle.css';
import NewScore from './NewScore';


const FinalScreen = ({score}) => {

    const restart = () => window.location.reload();

    return (
        <>
            <div className='heading'>Finished!</div>
             <div className='score'>Your score is {score} out of 10!</div>
                 <div className='options'>
                     <NewScore />
                  <button className='button' onClick={restart}>Retry</button>
            </div>
        </>
    )
}

export default FinalScreen
import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import ProgressBar from './component/ProgressBar';
import InderminateProgressBar from './component/IndeterminateProgress';

function App() {
  const [loadingPercentage, setLoadingPercentage] = React.useState(0)
  const [loaderInterval, setLoaderInterval] = React.useState(null)

  function displayLoader() {

    if (loaderInterval) {
      clearInterval(loaderInterval);
    }


    const intervalId = setInterval(() => {
      setLoadingPercentage(prev => {
        const newPercentage = prev + 1;
        if (newPercentage === 100) {
          clearInterval(intervalId);
        }

        return newPercentage;
      });
    }, 100);


    setLoaderInterval(intervalId);
  }

  return (
    <div className='container'>
      {/* <ProgressBar
        role="progressBar"
        value={loadingPercentage}
      /> */}
      <InderminateProgressBar />
      <button className='button' onClick={displayLoader}>Start</button>
    </div>
  );
}

export default App;

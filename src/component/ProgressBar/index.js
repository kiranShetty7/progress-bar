
import * as React from 'react'
import './ProgressBar.css'


function ProgressBar({ value }) {
    const [percentageValue, setPercentageValue] = React.useState(0)

    React.useEffect(() => {
        setPercentageValue(() => {
            if (value < 0)
                return 0
            else if (value > 100)
                return 100
            else
                return value
        })
    }, [value])


    return (
        <div className='progressContainer'>
            <div className='loadingIndicator' style={{ transform: `scaleX(${percentageValue / 100})`, transformOrigin: 'left' }}>
            </div>
            <span className='loadingPercentage'>{percentageValue} %</span>
        </div>
    );
}

export default ProgressBar;

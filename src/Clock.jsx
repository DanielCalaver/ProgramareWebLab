import { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(function() {
        const timer = setInterval(function() {
            setTime(new Date());
        }, 1000);

        return function() {
            clearInterval(timer);
        };
    }, []);
    
    return <p>{time.toLocaleTimeString()}</p>;
}

export default Clock;
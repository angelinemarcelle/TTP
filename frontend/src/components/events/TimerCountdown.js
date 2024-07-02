import React, { useEffect, useState } from 'react';
import { TimerLogic } from './TimerLogic';

export const TimerCountdown = () => {
    const eventDate = "2024-07-11T17:00:00";
    const [countdown, setCountdown] = useState(() => TimerLogic(eventDate) || []);

    useEffect(() => {
        const updateCountdown = setInterval(() => {
            const newCountdown = TimerLogic(eventDate) || [];
            setCountdown(newCountdown);
        }, 1000);

        return () => clearInterval(updateCountdown);
    }, [eventDate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center">
            <h1 className="text-4xl font-bold mb-4">Stay Tuned!<br></br>Our next event starts in<br></br><br></br></h1>
            {countdown === false ? (
                <p className="text-4xl text-black font-semibold">
                    That is all folks!
                </p>
            ) : (
                <div className="flex items-baseline text-6xl text-black font-bold">
                    {countdown.map((count, index) => (
                        <React.Fragment key={index}>
                            <div className="text-center">
                                <p>
                                    {count < 10 ? `0${count}` : count}
                                </p>
                                <p className="text-lg uppercase">
                                    {['Days', 'Hours', 'Minutes', 'Seconds'][index]}
                                </p>
                            </div>
                            {index < countdown.length - 1 && (
                                <span className="mx-8">:</span> // Adjusted to appear right next to the number
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimerCountdown;
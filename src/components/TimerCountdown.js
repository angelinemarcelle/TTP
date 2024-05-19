import React, { useEffect, useState } from 'react';
import { TimerLogic } from './TimerLogic';

export const TimerCountdown = () => {
    // Set the event date here
    const eventDate = "2024-05-20T00:00:00";

    const [countdown, setCountdown] = useState(() => TimerLogic(eventDate) || []);

    useEffect(() => {
        const updateCountdown = setInterval(() => {
            const newCountdown = TimerLogic(eventDate) || [];
            setCountdown(newCountdown);
        }, 1000);

        return () => clearInterval(updateCountdown);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen">
            {countdown === false ? (
                <p className="text-4xl text-black font-semibold">
                    That is all folks!
                </p>
            ) : (
                <div className="flex gap-8 text-6xl text-black font-bold"> {/* Increased gap to 8 for more space */}
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
                                <span className="mx-4">:</span>  // Added margin to the colon for additional spacing
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimerCountdown;
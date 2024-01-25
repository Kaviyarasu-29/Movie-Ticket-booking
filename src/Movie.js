import React, { useState } from 'react';
import './Movie.css';

const Movie = () => {
    const [sctAvng, setSctAvng] = useState([]);
    const [bsAvng, setBsAvng] = useState([]);
    const [scAvng, setScAvng] = useState(0);
    const [amtAvng, setAmtAvng] = useState(0);

    const [sctIron, setSctIron] = useState([]);
    const [bsIron, setBsIron] = useState([]);
    const [scIron, setScIron] = useState(0);
    const [amtIron, setAmtIron] = useState(0);

    const [slctdMv, setSlctdMv] = useState('Avengers');
    const hdlg = () => {
    };
    const scClick = (row, col) => {
        const seat = `${row}-${col}`;
        const isAvng = slctdMv === 'Avengers';
        const isIron = slctdMv === 'IronMan';
        let updtSeats;
        let setSct;
        let setSc;
        let setAmt;
        if (isAvng) {
            updtSeats = [...sctAvng];
            setSct = setSctAvng;
            setSc = setScAvng;
            setAmt = setAmtAvng;
        } else if (isIron) {
            updtSeats = [...sctIron];
            setSct = setSctIron;
            setSc = setScIron;
            setAmt = setAmtIron;
        }

        const isSelected = updtSeats.includes(seat);
        const isBooked = isAvng ? bsAvng.includes(seat) : bsIron.includes(seat);

        if (isBooked) return;

        if (isSelected) {
            updtSeats = updtSeats.filter((s) => s !== seat);
        } else {
            updtSeats.push(seat);
        }

        setSct(updtSeats);
        setSc(updtSeats.length);
        setAmt(updtSeats.length * 100);
    };

    const hdlBookButtonClick = () => {
        const isAvng = slctdMv === 'Avengers';
        const isIron = slctdMv === 'IronMan';
        if (isAvng) {
            setBsAvng((prevBookedSeats) => [...prevBookedSeats, ...sctAvng]);
            setSctAvng([]);
            setScAvng(0);
            setAmtAvng(0);
        } else if (isIron) {
            setBsIron((prevBookedSeats) => [...prevBookedSeats, ...sctIron]);
            setSctIron([]);
            setScIron(0);
            setAmtIron(0);
        }
    };

    const MovieCng = (e) => {
        setSlctdMv(e.target.value);
    };

    return (
        <div className='Container-main'>
            <div className='Cntner'>
            <h1>Movie Seat Booking</h1>
            <div className='Mv-lb'>
                <label>Select Movie:</label>
                <select value={slctdMv} onChange={MovieCng}>
                    <option value="Avengers">Avengers</option>
                    <option value="IronMan">IronMan</option>
                </select>
            </div>
            

            <div className="legend">
                <div className="legend-box gray-box"></div>
                <span>: N/A</span>
                <div className="legend-box green-box"></div>
                <span>: Selected</span>
                <div className="legend-box yellow-box"></div>
                <span>: Booked</span>
            </div>
            <div className="seat-container">
                {[...Array(4)].map((_, row) => (
                    <div key={row}>
                        {[...Array(5)].map((_, col) => {
                            const seat = `${row}-${col}`;
                            const isSelected = slctdMv === 'Avengers' ? sctAvng.includes(seat) : sctIron.includes(seat);
                            const isBooked = slctdMv === 'Avengers' ? bsAvng.includes(seat) : bsIron.includes(seat);

                            return (
                                <button
                                    key={col}
                                    onClick={() => scClick(row, col)}
                                    className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : ''}`}
                                    disabled={isBooked}
                                ></button>
                            );
                        })}
                    </div>
                ))}
            </div>
            
            <div>
                <p>Selected Seats: {slctdMv === 'Avengers' ? scAvng : scIron}</p>
                <p>Total Amount: ${slctdMv === 'Avengers' ? amtAvng : amtIron}</p>
            </div>

            <button onClick={hdlBookButtonClick}>Book</button>
            </div>
        </div>
    );
};

export default Movie;

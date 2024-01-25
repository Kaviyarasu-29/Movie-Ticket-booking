import React, { useState } from 'react';
import './Movie.css';

const Movie = () => {
    const [selectedSeatsAvengers, setSelectedSeatsAvengers] = useState([]);
    const [bookedSeatsAvengers, setBookedSeatsAvengers] = useState([]);
    const [seatCountAvengers, setSeatCountAvengers] = useState(0);
    const [amountAvengers, setAmountAvengers] = useState(0);

    const [selectedSeatsIronMan, setSelectedSeatsIronMan] = useState([]);
    const [bookedSeatsIronMan, setBookedSeatsIronMan] = useState([]);
    const [seatCountIronMan, setSeatCountIronMan] = useState(0);
    const [amountIronMan, setAmountIronMan] = useState(0);

    const [selectedMovie, setSelectedMovie] = useState('Avengers');
    const handleBooking = () => {
    };
    const seatClick = (row, col) => {
        const seat = `${row}-${col}`;
        const isAvengers = selectedMovie === 'Avengers';
        const isIronMan = selectedMovie === 'IronMan';
        let updatedSeats;
        let setSelectedSeats;
        let setSeatCount;
        let setAmount;
        if (isAvengers) {
            updatedSeats = [...selectedSeatsAvengers];
            setSelectedSeats = setSelectedSeatsAvengers;
            setSeatCount = setSeatCountAvengers;
            setAmount = setAmountAvengers;
        } else if (isIronMan) {
            updatedSeats = [...selectedSeatsIronMan];
            setSelectedSeats = setSelectedSeatsIronMan;
            setSeatCount = setSeatCountIronMan;
            setAmount = setAmountIronMan;
        }

        const isSelected = updatedSeats.includes(seat);
        const isBooked = isAvengers ? bookedSeatsAvengers.includes(seat) : bookedSeatsIronMan.includes(seat);

        if (isBooked) return;

        if (isSelected) {
            updatedSeats = updatedSeats.filter((s) => s !== seat);
        } else {
            updatedSeats.push(seat);
        }

        setSelectedSeats(updatedSeats);
        setSeatCount(updatedSeats.length);
        setAmount(updatedSeats.length * 100);
    };

    const handleBookButtonClick = () => {
        const isAvengers = selectedMovie === 'Avengers';
        const isIronMan = selectedMovie === 'IronMan';
        if (isAvengers) {
            setBookedSeatsAvengers((prevBookedSeats) => [...prevBookedSeats, ...selectedSeatsAvengers]);
            setSelectedSeatsAvengers([]);
            setSeatCountAvengers(0);
            setAmountAvengers(0);
        } else if (isIronMan) {
            setBookedSeatsIronMan((prevBookedSeats) => [...prevBookedSeats, ...selectedSeatsIronMan]);
            setSelectedSeatsIronMan([]);
            setSeatCountIronMan(0);
            setAmountIronMan(0);
        }
    };

    const movieChange = (e) => {
        setSelectedMovie(e.target.value);
    };

    return (
        <div className='Container-main'>
            <div className='Cntner'>
            <h1>Movie Seat Booking</h1>
            <div className='Mv-lb'>
                <label>Select Movie:</label>
                <select value={selectedMovie} onChange={movieChange}>
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
                            const isSelected = selectedMovie === 'Avengers' ? selectedSeatsAvengers.includes(seat) : selectedSeatsIronMan.includes(seat);
                            const isBooked = selectedMovie === 'Avengers' ? bookedSeatsAvengers.includes(seat) : bookedSeatsIronMan.includes(seat);

                            return (
                                <button
                                    key={col}
                                    onClick={() => seatClick(row, col)}
                                    className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : ''}`}
                                    disabled={isBooked}
                                ></button>
                            );
                        })}
                    </div>
                ))}
            </div>
            
            <div>
                <p>Selected Seats: {selectedMovie === 'Avengers' ? seatCountAvengers : seatCountIronMan}</p>
                <p>Total Amount: ${selectedMovie === 'Avengers' ? amountAvengers : amountIronMan}</p>
            </div>

            <button onClick={handleBookButtonClick}>Book</button>
            </div>
        </div>
    );
};

export default Movie;

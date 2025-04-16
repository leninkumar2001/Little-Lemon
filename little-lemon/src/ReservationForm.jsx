import React, { useState } from 'react';
import './ReservationForm.css';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    requests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    alert('Table reserved successfully!');
  };

  return (
    <section className="reservation-section">
      <h2>Reserve a Table</h2>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="20"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label htmlFor="requests">Special Requests</label>
        <textarea
          id="requests"
          name="requests"
          value={formData.requests}
          onChange={handleChange}
          placeholder="Any allergies, celebrations, etc."
        />

        <button type="submit">Book Table</button>
      </form>
    </section>
  );
}

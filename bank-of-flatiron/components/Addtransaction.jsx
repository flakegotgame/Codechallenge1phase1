import React, { useState } from 'react';

function AddTransaction({ onAdd }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate input fields (optional)
        // Create a new transaction object
        const newTransaction = {
            date,
            description,
            category,
            amount: parseFloat(amount) // Convert amount to a number
        };
        // Call the onAdd function passed from the parent component
        // Pass the new transaction to the parent component for adding to the records
        onAdd(newTransaction);
        // Reset form fields
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default AddTransaction;

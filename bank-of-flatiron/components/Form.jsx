
import React, { useState } from 'react';

function Form({ AddToForm }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputData = { date, description, category, amount };

        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData)
        })
        .then(response => response.json())
        .then(data => {
            AddToForm(data);
            setDate("");
            setDescription("");
            setCategory("");
            setAmount("");
        })
        .catch(error => console.error('Error:', error));
    };

    const appendToTable = () => {
        const table = document.getElementById('transaction-table');
        const newRow = table.insertRow(-1);

        const cell1 = newRow.insertCell(0);
        cell1.textContent = date;

        const cell2 = newRow.insertCell(1);
        cell2.textContent = description;

        const cell3 = newRow.insertCell(2);
        cell3.textContent = category;

        const cell4 = newRow.insertCell(3);
        cell4.textContent = amount;
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    id='date'
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={handleDateChange}
                />

                <input
                   id='date'
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                />

                <input
                    id='date'
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={handleCategoryChange}
                />

                <input
                    id='date'
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleAmountChange}
                />

                <br />
                
                <button id="check" onClick={appendToTable}>Add Transaction</button>
            </form>
                   

                   <table id="transaction-table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*the Rows will be appended here */}
                        </tbody>
                      </table>


        </>
    );
}

export default Form;
import React, { useState } from 'react';

export default function Stock() {
    const [stock, setstock] = useState([
        {
            stockCode: '',
            stockName: '',
            stockQty: '',
            stockAvg: '',
            stockLTP: ''
        }
    ]);
    const [invested] = useState('0');  // State for 'Invested' value
    const [current] = useState('0');   // State for 'Current' value

    const handleAddstock = () => {
        const newstock = {
            stockCode: '',
            stockName: '',
            stockQty: '',
            stockAvg: '',
            stockLTP: ''
        };
        setstock([...stock, newstock]);
    };

    const handleChange = (event, index) => {
        const { name, value } = event.target;
        const updatedstock = [...stock];
        updatedstock[index][name] = value;
        setstock(updatedstock);
    };

    return (
        <div className='flex'>
            <div>
                {/* Displaying Invested and Current values */}
                <div className="mb-4">
                    <strong className='text-2xl text-[#536162]' >Invested: </strong><span className='mr-2 text-[#536162] text-2xl'>{invested}</span>
                    <strong className='text-2xl mr-2 text-[#536162]'>Current: </strong><span className='text-[#536162] text-2xl'>{current}</span>
                    <button
                    type="button"
                    onClick={handleAddstock}
                    className="bg-[#536162] hover:bg-[#C06014] text-2xl text-white ml-5 mt-2 px-3 py-1 rounded"
                >
                    Add Stock
                </button>
                </div>

                <table className="table-auto w-full mt-6">
                    <thead>
                        <tr>
                            <th className="text-[#536162] px-4 py-2">Stock Code</th>
                            <th className="text-[#536162] px-4 py-2">Stock Name</th>
                            <th className="text-[#536162] px-4 py-2">Stock Quantity</th>
                            <th className="text-[#536162] px-4 py-2">Stock Average</th>
                            <th className="text-[#536162] px-4 py-2">Stock LTP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stock.map((stock, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="stockCode"
                                        value={stock.stockCode || ''}
                                        onChange={(event) => handleChange(event, index)}
                                        className="border border-gray-300 px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="stockName"
                                        value={stock.stockName || ''}
                                        onChange={(event) => handleChange(event, index)}
                                        className="border border-gray-300 px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="stockQty"
                                        value={stock.stockQty || ''}
                                        onChange={(event) => handleChange(event, index)}
                                        className="border border-gray-300 px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="stockAvg"
                                        value={stock.stockAvg || ''}
                                        onChange={(event) => handleChange(event, index)}
                                        className="border border-gray-300 px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="stockLTP"
                                        value={stock.stockLTP || ''}
                                        onChange={(event) => handleChange(event, index)}
                                        className="border border-gray-300 px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

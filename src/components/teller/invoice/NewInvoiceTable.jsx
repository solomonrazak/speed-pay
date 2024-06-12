import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

export default function NewInvoiceTable() {
  const [rows, setRows] = useState([
    { id: 1, itemName: '', category: 'Food & Drinks', description: '', quantity: '', price: '', tax: '', amount: '$1560.00' }
  ]);

  const addRow = () => {
    const newRow = { id: rows.length + 1, itemName: '', category: 'Food & Drinks', description: '', quantity: '', price: '', tax: '', amount: '$1560.00' };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows);
  };

  return (
    <div className="w-full px-3 py-3">
      <table className="w-full px-3">
        <thead className="text-[12px] text-start">
          <tr>
            <th className="rounded-l-lg text-start pl-2 font-thin">ITEMS</th>
            <th className="text-start pl-2 font-thin">CATEGORY</th>
            <th className="text-start pl-1 font-thin">DESCRIPTION</th>
            <th className="text-start font-thin">QUANTITY</th>
            <th className="text-start font-thin">PRICE</th>
            <th className="text-start font-thin">TAX</th>
            <th className="text-start font-thin">AMOUNT</th>
            <th className="rounded-r-lg"></th>
          </tr>
        </thead>
        <tbody className="px-3">
          {rows.map((row, index) => (
            <tr key={row.id} className="border-1 py-3 bg-orange-100 border-orange-400 mb-2 rounded-lg">
              <td className="py-3 px-3 rounded-l-lg"><input type="text" placeholder="Enter Product Name" className="py-1 pl-2 border-1 border-black" value={row.itemName} onChange={(e) => {
                const newRows = [...rows];
                newRows[index].itemName = e.target.value;
                setRows(newRows);
              }} /></td>
              <td className=""><select className="py-1 pl-2 px-4 border-1 border-black" value={row.category} onChange={(e) => {
                const newRows = [...rows];
                newRows[index].category = e.target.value;
                setRows(newRows);
              }}>
                <option>Food & Drinks</option>
                <option>Deserts & Meals</option>
              </select></td>
              <td className=""><input type="text" placeholder="Enter Description" className="py-1 pl-2 border-1 border-black" value={row.description} onChange={(e) => {
                const newRows = [...rows];
                newRows[index].description = e.target.value;
                setRows(newRows);
              }} /></td>
              <td className=""><input type="text" placeholder="Qty" className="py-1 pl-2 border-1 border-black w-14" value={row.quantity} onChange={(e) => {
                const newRows = [...rows];
                newRows[index].quantity = e.target.value;
                setRows(newRows);
              }} /></td>
              <td className=""><input type="text" placeholder="Price" className="py-1 pl-2 border-1 border-black w-14" value={row.price} onChange={(e) => {
                const newRows = [...rows];
                newRows[index].price = e.target.value;
                setRows(newRows);
              }} /></td>
              <td className=""><input type="text" placeholder="Rate" className="py-1 pl-2 border-1 border-black w-14" value={row.tax} onChange={(e) => {
                const newRows = [...rows];
                newRows[index].tax = e.target.value;
                setRows(newRows);
              }} /></td>
              <td className="text-[14px] font-medium">
                <input type="text" placeholder="Amount" className="w-full bg-transparent border-none focus:outline-none" value={row.amount} onChange={(e) => {
                  const newRows = [...rows];
                  newRows[index].amount = e.target.value;
                  setRows(newRows);
                }} />
              </td>
              <td className="px-2 rounded-r-lg"><button onClick={() => deleteRow(row.id)}><RiDeleteBin6Line className="text-red-600" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-start mt-5">
        <button className="flex items-center gap-1 bg-orange-100 text-orange-400 px-1 text-[13px]" onClick={addRow}>
          Add an Item <GoPlus className="mt-1" />
        </button>
      </div>
      
    </div>
  );
}

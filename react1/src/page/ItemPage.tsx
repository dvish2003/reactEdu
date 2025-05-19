import { useState } from "react";
import * as React from "react";
import type { Item } from "../type/Item.ts";
import { itemData } from "../data/ItemData.ts";

export default function ItemPage() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [items, setItems] = useState<Item[]>(itemData);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (editMode) {
            const updatedItems = items.map(item =>
                item.id === id ? { ...item, name, price, qty } : item
            );
            setItems(updatedItems);
            setEditMode(false);
        } else {
            const newItem: Item = { id, name, price, qty };
            setItems([...items, newItem]);
        }

        setId(0);
        setName("");
        setPrice(0);
        setQty(0);
    }

    function handleEdit(item: Item) {
        setId(item.id);
        setName(item.name);
        setPrice(item.price);
        setQty(item.qty);
        setEditMode(true);
    }

    function handleDelete(id: number) {
        setItems(items.filter(item => item.id !== id));
    }

    function handleCancel() {
        setId(0);
        setName("");
        setPrice(0);
        setQty(0);
        setEditMode(false);
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Item Management</h1>

            <div className="card mb-4">
                <div className="card-header">
                    <h5>{editMode ? "Edit Item" : "Add New Item"}</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="id"
                                    value={id}
                                    onChange={(e) => setId(Number(e.target.value))}
                                    placeholder="Enter ID"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="price" className="form-label">Unit Price</label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="qty" className="form-label">Available Quantity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="qty"
                                    name="qty"
                                    value={qty}
                                    onChange={(e) => setQty(Number(e.target.value))}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary me-2">
                            {editMode ? "Update" : "Add"}
                        </button>
                        {editMode && (
                            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                                Cancel
                            </button>
                        )}
                    </form>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h5>Item List</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
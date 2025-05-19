import {useState} from "react";
import * as React from "react";

type Customer = {  // customer type object
    id1: number;
    name1: string,
    age1: number
}


export default function Home() {
    const [customers, setCustomers] = useState<Customer[]>([]);  // customer type array
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    function  addCustomer(e: React.FormEvent) {
        e.preventDefault();
        console.log(id,name,age)

        const newCustomer: Customer = {
            id1: id,
            name1: name,
            age1: age
        };

        setCustomers([...customers,newCustomer]);


        setId(0);
        setName("");
        setAge(0);

    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Customer Management</h1>

            <div className="card mb-5">
                <div className="card-header bg-primary text-white">
                    <h5>Add New Customer</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={addCustomer}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="id"
                                    value={id}
                                    onChange={(e) => setId(Number(e.target.value))}  // get input field values and set useState variables
                                    placeholder="Enter ID"
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    value={age}
                                    onChange={(e) => setAge(Number(e.target.value))}
                                    placeholder="Enter age"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Customer</button>
                    </form>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-success text-white">
                    <h5>Customer List</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map(customer => (
                                <tr key={customer.id1}>
                                    <td>{customer.id1}</td>
                                    <td>{customer.name1}</td>
                                    <td>{customer.age1}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2">Edit</button>

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
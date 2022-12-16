import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import List from './List';
import { newContext } from '../../App';

const Form = () => {

    const { setdm, count, setCount } = useContext(newContext);
    const [transc, setTransc] = useState({
        title: "",
        type: "",
        amount: ""
    })





    const handelInp = (e) => {
        const { name, value } = e.target;
        setTransc((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();

        try {
            const { title, type, amount } = transc;

            if (!title || !type || !amount) {
                window.alert("Enter all Field")
                throw new Error("ENter all fields");
            }


            const token = localStorage.getItem('token');
            const data = await axios.post("https://expensetrackerback.onrender.com/transaction/update", { transc, token });

            if (data.status === 200) {
                console.log("Transaction Noted");
                setCount(1);
            } else {
                console.log(`${data.status} Transaction not inserted`);
            }

            setTransc({
                title: "",
                type: "",
                amount: ""
            });

        } catch (error) {
            console.log(error);
        }
    }

    const getData = async () => {

        try {
            const token = localStorage.getItem('token')
            const result = await axios.get("https://expensetrackerback.onrender.com/transaction/request", {
                headers: {
                    "authorization": token
                }
            });

            // setlist(result.data.do);
            setdm(result.data.do);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
        // count++;
        setCount(10);
        // sett(false)
        // eslint-disable-next-line
    }, [count])

    return (
        <>
            <div className="d-flex flex-column" style={{ width: "80%" }}>
                <div>
                    <h4 className='text-center mb-3'>Transactions</h4>

                    <form method='POST' onSubmit={postData}>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control shadow" id="title" placeholder="Enter Title" name="title" value={transc.title} onChange={handelInp} />
                        </div>
                        <select className="custom-select mb-3 shadow" name="type" value={transc.type} onChange={handelInp}>
                            <option defaultValue>Select Transaction Type</option>
                            <option value="cash">Cash</option>
                            <option value="expense">Expense</option>
                            <option value="investment">Investment</option>
                        </select>
                        <div className="form-group mb-3 shadow">
                            <input type="number" className="form-control" id="amount" placeholder="Enter Amount" name="amount" value={transc.amount} onChange={handelInp} />
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn text-white border shadow" style={{ background: "indigo", width: "100%" }}>Add Entry</button>
                        </div>
                    </form>
                </div>
                <div>

                    <List />
                </div>
            </div>
        </>
    )
}

export default Form

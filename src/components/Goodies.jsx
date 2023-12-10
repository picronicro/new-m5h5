import React from 'react';
import products from "../data/products.json";
import {useDispatch} from "react-redux";

function Goodies(props) {
    const dispatch = useDispatch()

    function addItem(item) {
        return {
            type: "ADD_ITEM",
            payload: item
        }
    }

    return (
        <div className="container">
            {
                products && products.map(good => <div key={good._id}>
                    <div className="good">
                        <div className="info">
                            <h2>{good.name}</h2>
                            <h2>{good.price}</h2>
                        </div>
                        <button onClick={event => dispatch(addItem(good))}>i want it af</button>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Goodies;
import React, { useContext } from 'react'
import { getSum } from '../../helper/helper'

import { newContext } from '../../App';


const Labels = () => {

    const { dm } = useContext(newContext);


    const getColor = (type) => {
        return type === "cash" ? "green" : type === "expense" ? "red" : "blue"
    }


    return (
        <>
            {getSum(dm, 'type').map((val, id) => {
                const color = getColor(val.type);
                return <LabelComponent key={id} data={val} color={color} />
            })}
        </>
    )
}


function LabelComponent({ data, color }) {
    if (!data) return <></>;
    return (
        <div className="d-flex justify-content-center rounded shadow p-2 m-2" style={{ borderLeft: `8px solid ${color}` }}>
            <span className='d-block w-100'>{data.type.toUpperCase() ?? ''}</span>
            <span className='d-block w-100 text-right' style={{ color: color }}>{data.total ?? ''} Rs</span>

        </div>
    )
}
export default Labels
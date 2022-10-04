import React, { useContext } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import "./Graph.css"
import Labels from './Labels';
import { getAvail, getLabels, getSum } from '../../helper/helper';
import { newContext } from '../../App';

Chart.register(ArcElement);



const Graph = () => {

    const { dm } = useContext(newContext);

    const config = {
        data: {

            datasets: [{
                data: getSum(dm),
                backgroundColor:
                    getLabels(dm).map((val, i) => {
                        return val.type === "cash" ? "green" : val.type === 'expense' ? "red" : "blue";
                    })
                // 'green',
                // '#ff2727',
                // 'blue'
                ,
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10,
                borderColor: '#6c757d'
            }]
        },
        options: {
            cutout: 115
        }
    }

    // setdm({})
    return (
        <>
            <div className="d-flex flex-column">
                <div>
                    <div className="total mb-3">
                        <h4>Available Cash</h4><h4 style={{ color: getAvail(dm).color }}> {getAvail(dm).t} Rs</h4>
                    </div>
                    <Doughnut {...config} />


                </div>
                <div className='d-flex flex-column mt-5'>
                    <Labels />
                </div>
            </div>
        </>
    )
}

export default Graph
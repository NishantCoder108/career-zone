
import React from "react";
import "./Areacharts.css"
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import data from "../../data.json"

export default function Areacharts() {
    return (
          
        <ResponsiveContainer width="100%" height={400}>

            <AreaChart data={data} >

                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                    </linearGradient>
                </defs>

                <Area dataKey={'price'} stroke="#2451B7" fill="url(#color)" />

                <XAxis dataKey={"name"} tickLine={true} axisLine={false} />

                <YAxis dataKey={"price"} axisLine={false} tickLine={false} tickCount={8} tickFormatter={(number) => `${"₹" + number}`} />

                <Tooltip content={<CustomTooltip />} />

                <CartesianGrid opacity={0.1} vertical={false} />
            </AreaChart>

        </ResponsiveContainer>
    );
}



function CustomTooltip({ active, payload, label }) {
    // console.log(payload)
    if (active) {
        const age = payload[0].payload.age
        return (
            <div className="tooltip">
                <h4> {label}</h4>
                <p>  Age: {age ? age : 6} years </p>
                <p>  Price: ₹{payload[0].value} </p>
            </div>
        )
    }
}
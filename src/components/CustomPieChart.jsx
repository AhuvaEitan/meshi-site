import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";
import Succeeded from "./Succeeded";


const initialData = [
  { name: "Part 1",  value: 25 },
  { name: "Part 2",  value: 25},
  { name: "Part 3",   value: 25},
  { name: "Part 4", value: 25 },
];
      
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF19AF",
];

const COLORSDATA=[
  "red",
  "blue",
  "pink",
  "#AF19FF"
]
const PieChart2 = () => {
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(null);
 const[part,setPart]=useState(null);

  



  const onPieClick = (clickedData, index) => {
    
   
    
    // Divide the clicked part into four
    const originalValue = data[index].value;
    const newValue = originalValue / 6;
  
    const newData = data.map((item, i) => {
      // if (i === index) {
        return { ...item, value: newValue };
      // }
      // return item;
    });

      // const newData = data.map((item, i) => {
      //   if (i === index) {
      //     return { ...item, value: originalValue - (3 * newValue) };
      //   } else if (item.value !== newValue) {
      //     return { ...item, value: newValue };  
      //   }
      //   return item;
      // });
    
      setActiveIndex(index); 
    // Update the data with the new values
    setData(newData);
  };
  
  
    
  // };


  return (

  <div>

    <PieChart width={4000} height={4000}>
      <Pie
        activeIndex={activeIndex}
        activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={COLORS[activeIndex]}>
          
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={(endAngle - startAngle) / 6 + startAngle}
              fill={COLORS[activeIndex]} 
              onClick={()=>{setPart(0)}}
              
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) / 6 + startAngle}
              endAngle={(endAngle - startAngle) / 3 + startAngle}
              fill={COLORS[(activeIndex + 1) % COLORS.length]}
              onClick={()=>{setPart(1)}}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) / 3 + startAngle}
              endAngle={(endAngle - startAngle) /2 + startAngle}
              fill={COLORS[(activeIndex + 2) % COLORS.length]}
              onClick={()=>{setPart(2)}}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) /2 + startAngle}
              endAngle={(endAngle - startAngle) *2/3 + startAngle}
              fill={COLORS[(activeIndex + 3) % COLORS.length]}
              onClick={()=>{setPart(3)}}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) *2/3 + startAngle}
              endAngle={(endAngle - startAngle) *5/6 + startAngle}
              fill={COLORS[(activeIndex + 4) % COLORS.length]}
              onClick={()=>{setPart(4)}}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle)  *5/6  + startAngle}
              endAngle={endAngle}
              fill={COLORS[(activeIndex + 5) % COLORS.length]}
              onClick={()=>{setPart(5)}}
            />
          </g>
        )}
        data={data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={200}
        fill="#8884d8"
        onClick={(clickedData, index) => onPieClick(clickedData, index)}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORSDATA[index % COLORSDATA.length] } />
        ))}
      </Pie>
    </PieChart>
   {console.log("part=",part)}
    {part!==null && <Succeeded part={part}></Succeeded>}
 
    
    </div>
  );
};



export default PieChart2;

// // // import React, { useState } from "react";
// // // import { PieChart, Pie, Cell, Sector } from "recharts";

// // // const initialData = [
// // //   { name: "Part 1", value: 25 },
// // //   { name: "Part 2", value: 25 },
// // //   { name: "Part 3", value: 25 },
// // //   { name: "Part 4", value: 25 },
// // // ];

// // // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


// // // const CustomPieChart = () => {
// // //   const [data, setData] = useState(initialData);
// // //   const [activeIndex, setActiveIndex] = useState(null);


// // //   const onPieClick = (clickedData, index) => {
// // //     if (activeIndex === index) {
// // //       setActiveIndex(null);
// // //     } else {
// // //       const originalValue = data[index].value;
// // //       const newValue = originalValue / 4;
  
// // //       const newData = data.map((item, i) => {
// // //         if (i === index) {
// // //           return { ...item, value: originalValue - (3 * newValue) };
// // //         } else if (item.value !== newValue) {
// // //           return { ...item, value: newValue };
// // //         }
// // //         return item;
// // //       });
  
// // //       setActiveIndex(index);
// // //       setData(newData);
// // //     }
// // //   };
  
    
// // //   // };


// // //   return (
// // //     <PieChart width={4000} height={4000}>
// // //       <Pie
// // //         activeIndex={activeIndex}
// // //         activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle,payload }) => (
// // //           <g>
// // //             <text x={cx} y={cy} dy={8} textAnchor="middle" fill={COLORS[activeIndex]}>
// // //             {activeIndex !== null && (
// // //         <a href={payload.link} target="_blank" rel="noopener noreferrer">
// // //           Click Me
// // //         </a>
// // //       )}
// // //             </text>
// // //             <Sector
// // //               cx={cx}
// // //               cy={cy}
// // //               innerRadius={innerRadius}
// // //               outerRadius={outerRadius}
// // //               startAngle={startAngle}
// // //               endAngle={(endAngle - startAngle) / 4 + startAngle}
// // //               fill={COLORS[activeIndex]}
// // //             />
// // //             <Sector
// // //               cx={cx}
// // //               cy={cy}
// // //               innerRadius={innerRadius}
// // //               outerRadius={outerRadius}
// // //               startAngle={(endAngle - startAngle) / 4 + startAngle}
// // //               endAngle={(endAngle - startAngle) / 2 + startAngle}
// // //               fill={COLORS[(activeIndex + 1) % COLORS.length]}
// // //             />
// // //             <Sector
// // //               cx={cx}
// // //               cy={cy}
// // //               innerRadius={innerRadius}
// // //               outerRadius={outerRadius}
// // //               startAngle={(endAngle - startAngle) / 2 + startAngle}
// // //               endAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
// // //               fill={COLORS[(activeIndex + 2) % COLORS.length]}
// // //             />
// // //             <Sector
// // //               cx={cx}
// // //               cy={cy}
// // //               innerRadius={innerRadius}
// // //               outerRadius={outerRadius}
// // //               startAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
// // //               endAngle={endAngle}
// // //               fill={COLORS[(activeIndex + 3) % COLORS.length]}
// // //             />
// // //           </g>
// // //         )}
// // //         data={data}
// // //         dataKey="value"
// // //         cx={200}
// // //         cy={200}
// // //         outerRadius={200}
// // //         fill="#8884d8"
// // //         onClick={(clickedData, index) => onPieClick(clickedData, index)}
// // //       >
// // //         {data.map((entry, index) => (
// // //           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // //         ))}
// // //       </Pie>
// // //     </PieChart>
// // //   );
// // // };



// // // export default CustomPieChart;


// // import React, { useState } from "react";
// // import { PieChart, Pie, Cell, Sector } from "recharts";

// // const initialData = [
// //   { name: "Part 1", value: 25 ,
// //   smallParts: [
// //     { name: "Subpart 1.1", value: 6, link: "https://example.com" },
// //     { name: "Subpart 1.2", value: 6, link: "https://example.com" },
// //     { name: "Subpart 1.3", value: 6, link: "https://example.com" },
// //     { name: "Subpart 1.4", value: 7, link: "https://example.com" },
// //   ], },
// //   { name: "Part 2", value: 25 },
// //   { name: "Part 3", value: 25 },
// //   { name: "Part 4", value: 25 },
// // ];

// // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// // const CustomPieChart = () => {
// //   const [data, setData] = useState(initialData);
// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const onPieClick = (clickedData, index) => {
// //     if (activeIndex === index) {
// //       setActiveIndex(null);
// //     } else {
// //       const originalValue = data[index].value;
// //       const newValue = originalValue / 4;

// //       const newData = data.map((item, i) => {
// //         if (i === index) {
// //           return { ...item, value: originalValue - (3 * newValue) };
// //         } else if (item.value !== newValue) {
// //           return { ...item, value: newValue };
// //         }
// //         return item;
// //       });

// //       setActiveIndex(index);
// //       setData(newData);
// //     }
// //   };

// //   return (
// //     <PieChart width={400} height={400}>
// //       <Pie
// //         activeIndex={activeIndex}
// //         activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => (
// //           <g>
// //             {activeIndex !== null &&
// //               data[activeIndex].subparts.map((entry, index) => (
// //                 <a key={`subpart-link-${index}`} href={entry.link} target="_blank" rel="noopener noreferrer">
// //                   Click Me - {entry.name}
// //                 </a>
// //               ))}
// //               <Sector
// //                 cx={cx}
// //                 cy={cy}
// //                 innerRadius={innerRadius}
// //                 outerRadius={outerRadius}
// //                 startAngle={startAngle}
// //                 endAngle={(endAngle - startAngle) / 4 + startAngle}
// //                 fill={COLORS[activeIndex]}
// //               />
// //               <Sector
// //                 cx={cx}
// //                 cy={cy}
// //                 innerRadius={innerRadius}
// //                 outerRadius={outerRadius}
// //                 startAngle={(endAngle - startAngle) / 4 + startAngle}
// //                 endAngle={(endAngle - startAngle) / 2 + startAngle}
// //                 fill={COLORS[(activeIndex + 1) % COLORS.length]}
// //               />
// //               <Sector
// //                 cx={cx}
// //                 cy={cy}
// //                 innerRadius={innerRadius}
// //                 outerRadius={outerRadius}
// //                 startAngle={(endAngle - startAngle) / 2 + startAngle}
// //                 endAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
// //                 fill={COLORS[(activeIndex + 2) % COLORS.length]}
// //               />
// //               <Sector
// //                 cx={cx}
// //                 cy={cy}
// //                 innerRadius={innerRadius}
// //                 outerRadius={outerRadius}
// //                 startAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
// //                 endAngle={endAngle}
// //                 fill={COLORS[(activeIndex + 3) % COLORS.length]}
// //               />
// //             </g>
// //           );
// //         }}
// //         data={data}
// //         dataKey="value"
// //         cx={200}
// //         cy={200}
// //         outerRadius={80}
// //         fill="#8884d8"
// //         onClick={(clickedData, index) => onPieClick(clickedData, index)}
// //       >
// //         {data.map((entry, index) => (
// //           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //         ))}
// //       </Pie>
// //     </PieChart>
// //   );
// // };

// // export default CustomPieChart;



// import React, { useState } from "react";
// import { PieChart, Pie, Cell, Sector } from "recharts";

// const initialData = [
//   {
//     name: "Part 1",
//     value: 25,
//     subparts: [
//       { name: "Subpart 1.1", value: 6, link: "https://example.com/link1" },
//       { name: "Subpart 1.2", value: 6, link: "https://example.com/link2" },
//       { name: "Subpart 1.3", value: 6, link: "https://example.com/link3" },
//       { name: "Subpart 1.4", value: 7, link: "https://example.com/link4" },
//     ],
//   },
//   {
//     name: "Part 2",
//     value: 25,
//     subparts: [
//       { name: "Subpart 2.1", value: 6, link: "https://example.com/link5" },
//       { name: "Subpart 2.2", value: 6, link: "https://example.com/link6" },
//       { name: "Subpart 2.3", value: 6, link: "https://example.com/link7" },
//       { name: "Subpart 2.4", value: 7, link: "https://example.com/link8" },
//     ],
//   },
//   // כאן תמשיכי להוסיף את שאר החלקים הגדולים והחלקים הקטנים בהתאם
//   { name: "Part 3", value: 25 },
//     { name: "Part 4", value: 25 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const CustomPieChart = () => {
//   const [data, setData] = useState(initialData);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onPieClick = (clickedData, index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//     } else {
//       const originalValue = data[index].value;
//       const newValue = originalValue / 4;

//       const newData = data.map((item, i) => {
//         if (i === index) {
//           return { ...item, value: originalValue - (3 * newValue) };
//         } else if (item.value !== newValue) {
//           return { ...item, value: newValue };
//         }
//         return item;
//       });

//       setActiveIndex(index);
//       setData(newData);
//     }
//   };

//   const subparts = data.flatMap((part, index) =>
//     part.value === initialData[0].value ? [] : part.subparts
//   );

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         activeIndex={activeIndex}
//         activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => (
//           <g>
//             {activeIndex !== null &&
//               subparts.map((entry, index) => (
//                 <a key={`subpart-link-${index}`} href={entry.link} target="_blank" rel="noopener noreferrer">
//                   Click Me - {entry.name}
//                 </a>
//               ))}
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={startAngle}
//               endAngle={(endAngle - startAngle) / 4 + startAngle}
//               fill={COLORS[activeIndex]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) / 4 + startAngle}
//               endAngle={(endAngle - startAngle) / 2 + startAngle}
//               fill={COLORS[(activeIndex + 1) % COLORS.length]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) / 2 + startAngle}
//               endAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
//               fill={COLORS[(activeIndex + 2) % COLORS.length]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
//               endAngle={endAngle}
//               fill={COLORS[(activeIndex + 3) % COLORS.length]}
//             />
//           </g>
//         )}
//         data={data}
//         dataKey="value"
//         cx={200}
//         cy={200}
//         outerRadius={200}
//         fill="#8884d8"
//         onClick={(clickedData, index) => onPieClick(clickedData, index)}
//       >
//    {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// };

// export default CustomPieChart;



import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";

const initialData = [
  {
    name: "Part 1",
    value: 25,
    subparts: [
      { name: "Subpart 1.1", value: 6, link: "https://example.com/link1" },
      { name: "Subpart 1.2", value: 6, link: "https://example.com/link2" },
      { name: "Subpart 1.3", value: 6, link: "https://example.com/link3" },
      { name: "Subpart 1.4", value: 7, link: "https://example.com/link4" },
    ],
  },
  {
    name: "Part 2",
    value: 25,
    subparts: [
      { name: "Subpart 2.1", value: 6, link: "https://example.com/link5" },
      { name: "Subpart 2.2", value: 6, link: "https://example.com/link6" },
      { name: "Subpart 2.3", value: 6, link: "https://example.com/link7" },
      { name: "Subpart 2.4", value: 7, link: "https://example.com/link8" },
    ],
  },
  { name: "Part 3", value: 25 },
  { name: "Part 4", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomPieChart = () => {
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieClick = (clickedData, index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      const originalValue = data[index].value;
      const newValue = originalValue / 4;

      const newData = data.map((item, i) => {
        if (i === index) {
          return { ...item, value: originalValue - (3 * newValue) };
        } else if (item.value !== newValue) {
          return { ...item, value: newValue };
        }
        return item;
      });

      setActiveIndex(index);
      setData(newData);
    }
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => (
          <g>
            {activeIndex !== null &&
              data[activeIndex].subparts.map((entry, index) => (
                <a key={`subpart-link-${index}`} href={entry.link} target="_blank" rel="noopener noreferrer">
                  Click Me - {entry.name}
                </a>
              ))}
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={(endAngle - startAngle) / 4 + startAngle}
              fill={COLORS[activeIndex]}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) / 4 + startAngle}
              endAngle={(endAngle - startAngle) / 2 + startAngle}
              fill={COLORS[(activeIndex + 1) % COLORS.length]}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) / 2 + startAngle}
              endAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
              fill={COLORS[(activeIndex + 2) % COLORS.length]}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
              endAngle={endAngle}
              fill={COLORS[(activeIndex + 3) % COLORS.length]}
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
         data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
         )
      </Pie>
    </PieChart>
  );
};

export default CustomPieChart;


import React, { useState, useEffect } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesBars,
  SparklinesSpots,
} from "react-sparklines";
const SparkLines = () => {
  const [data, setData] = useState();
  let arr = [0,8,5,15];
  useEffect(() => {
    setData(arr);
  }, [data]);

  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine
          color="blue" style={{ lineStyle:'direct',
          dotDisplay:'hover',
          gradientFill:'true'}}
        />
      </Sparklines>

      <Sparklines data={data} style={{lineStyle:'smooth', dotDisplay:'hover',
          gradientFill:true}}>
        <SparklinesLine 
          color="blue"
         
        />
      </Sparklines>

      <Sparklines data={data} limit={4}>
        <SparklinesLine color="#1c8cdc" />
        <SparklinesSpots />
      </Sparklines>

      <Sparklines data={data}>
        <SparklinesBars color="blue" />
      </Sparklines>
    </div>
  );
};

export default SparkLines;

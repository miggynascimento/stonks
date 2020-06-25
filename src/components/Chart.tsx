import React from 'react';
import { Line } from 'react-chartjs-2';

type Props = {
  stockData: AnalyzedStockDataType;
}

export const Chart = ({ stockData }: Props) => {
  const { opportunities } = stockData;
  const data = (canvas: any) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return {
      backgroundColor: gradient,
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'black',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: stockData.prices || [],
          pointBorderColor(context: any) {
            const index = context.dataIndex;
            if (opportunities.buyIndices.includes(index)) {
              return 'green';
            }
            if (opportunities.exitIndices.includes(index)) {
              return 'red';
            }

            return 'black';
          },
        },
      ],
    };
  };
  return (
    <>
      <Line
        data={data}
        options={{
          legend: {
            display: false,
          },
        }}
        //@ts-ignore
        tooltip
      />
      <br />

    </>
  );
};

export default Chart;
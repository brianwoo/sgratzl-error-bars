import React, { createRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import {
  PointWithErrorBar,
  ScatterWithErrorBarsController
} from "chartjs-chart-error-bars";

Chart.register(
  ScatterWithErrorBarsController,
  PointWithErrorBar,
  ...registerables
);

function ErrorBars() {
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas != null) {
      const ctx = canvas.getContext("2d");
      if (ctx != null) {
        // eslint-disable-next-line no-new
        new Chart(ctx, {
          type: "scatterWithErrorBars",
          data: {
            labels: ["A", "B"],
            datasets: [
              {
                data: [
                  {
                    x: 2,
                    xMin: 1,
                    xMax: 3,
                    y: 4,
                    yMin: 1,
                    yMax: 6
                  },
                  {
                    x: 7,
                    xMin: 6,
                    xMax: 9,
                    y: 2,
                    yMin: 1,
                    yMax: 4
                  }
                ]
              }
            ]
          }
        });
      }
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default ErrorBars;

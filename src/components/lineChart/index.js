//import "src/App.css";
import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const LineChart = (props) =>{
  const chart = useRef(null);
  const root = useRef(null);

  useLayoutEffect(() => {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    const r = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    r.setThemes([am5themes_Animated.new(r)]);

    const data = [
      { date: "2012-01-01", value: 8 },
      { date: "2012-01-02", value: 10 },
      { date: "2012-01-03", value: 12 },
      { date: "2012-01-04", value: 14 },
      { date: "2012-01-05", value: 11 },
      { date: "2012-01-06", value: 6 },
      { date: "2012-01-07", value: 7 }
    ];

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    const x = r.container.children.push(
      am5xy.XYChart.new(r, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX"
      })
    );

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    const xAxis = x.xAxes.push(
      am5xy.DateAxis.new(r, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(r, {
          minGridDistance: 50
        }),
        tooltip: am5.Tooltip.new(r, {})
      })
    );

    const yAxis = x.yAxes.push(
      am5xy.ValueAxis.new(r, {
        maxDeviation: 0.1,
        renderer: am5xy.AxisRendererY.new(r, {})
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    const series = x.series.push(
      am5xy.LineSeries.new(r, {
        minBulletDistance: 10,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date"
      })
    );

    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(r, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"]
    });

    series.data.setAll(data);

    const tooltip = am5.Tooltip.new(r, {
      pointerOrientation: "horizontal"
    });
    tooltip.label.set("text", "{valueY}");
    series.set("tooltip", tooltip);

    series.bullets.push(function () {
      return am5.Bullet.new(r, {
        sprite: am5.Circle.new(r, {
          radius: 5,
          fill: series.get("fill"),
          stroke: r.interfaceColors.get("background"),
          strokeWidth: 2
        })
      });
    });

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    const cursor = x.set(
      "cursor",
      am5xy.XYCursor.new(r, {
        xAxis: xAxis
      })
    );
    cursor.lineY.set("visible", false);

    //xadd scrollbar
    x.set(
      "scrollbarX",
      am5.Scrollbar.new(r, {
        orientation: "horizontal"
      })
    );

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000, 100);
    x.appear(1000, 100);

    chart.current = x;
    root.current = r;
    return () => {
      r.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
export default LineChart;

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function BarChart({
  clientsData = null, // array of 6 numbers for clients
  consultantsData = null, // array of 6 numbers for consultants
  categories = null, // array of 6 month labels
  className = "",
}) {
  // Generate last 6 month labels like "Apr 2025"
  const getLast6Months = () => {
    const labels = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      labels.push(
        d.toLocaleString(undefined, { month: "short", year: "numeric" })
      );
    }
    return labels;
  };

  // Generate sample/mock data if not passed
  const sampleClients = () =>
    Array.from({ length: 6 }).map((_, i) =>
      Math.max(0, Math.round(20 + Math.sin(i) * 5 + i * 2))
    );
  const sampleConsultants = () =>
    Array.from({ length: 6 }).map((_, i) =>
      Math.max(0, Math.round(8 + Math.cos(i) * 3 + i))
    );

  const finalCategories =
    categories && categories.length === 6 ? categories : getLast6Months();
  const finalClients =
    clientsData && clientsData.length === 6 ? clientsData : sampleClients();
  const finalConsultants =
    consultantsData && consultantsData.length === 6
      ? consultantsData
      : sampleConsultants();

  const options = {
    chart: {
      type: "column",
      styledMode: false,
      height: 340,
      spacing: [10, 10, 15, 10],
    },
    title: { text: null },
    xAxis: {
      categories: finalCategories,
      crosshair: true,
      labels: { style: { fontSize: "12px" } },
    },
    yAxis: {
      min: 0,
      title: { text: "Registrations" },
      labels: { style: { fontSize: "12px" } },
    },
    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: "</table>",
    },
    plotOptions: {
      column: {
        borderRadius: 4,
        pointPadding: 0.15,
        groupPadding: 0.1,
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.y > 0 ? this.y : null;
          },
        },
      },
      series: {
        animation: { duration: 700 },
      },
    },
    series: [
      {
        name: "Clients",
        data: finalClients,
        color: "#0a66c2", // Indigo
      },
      {
        name: "Consultant Clients",
        data: finalConsultants,
        color: "#10B981", // Emerald
      },
    ],
    credits: { enabled: false },
    accessibility: {
      enabled: false,
      description:
        "Bar chart showing last 6 months Clients and Consultant Clients registrations",
    },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 520 },
          chartOptions: {
            xAxis: { labels: { rotation: -45 } },
            chart: { height: 320 },
          },
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

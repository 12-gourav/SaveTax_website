import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function BarChart({
  clientsData = [], // contactClients array
  consultantsData = [], // consultantClients array
  className = "",
}) {
  // 🗓 Month labels (short form)
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  // 🧠 Build last 6 months (even if some months missing in data)
  const now = new Date();
  const last6Months = Array.from({ length: 6 }).map((_, i) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1);
    return {
      month: date.getMonth() + 1, // 1–12
      label: `${monthNames[date.getMonth()]} ${date.getFullYear()}`,
    };
  });

  // 🧩 Convert data to map for quick lookup
  const clientMap = Object.fromEntries(
    clientsData.map((d) => [d.month, d.total])
  );
  const consultantMap = Object.fromEntries(
    consultantsData.map((d) => [d.month, d.total])
  );

  // 🪄 Fill missing months with 0s and build chart arrays
  const categories = last6Months.map((m) => m.label);
  const clientTotals = last6Months.map((m) => clientMap[m.month] || 0);
  const consultantTotals = last6Months.map((m) => consultantMap[m.month] || 0);

  // 📊 Chart options
  const options = {
    chart: {
      type: "column",
      styledMode: false,
      height: 300,
      spacing: [10, 10, 15, 10],
    },
    title: { text: null },
    xAxis: {
      categories,
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
        data: clientTotals,
        color: "#0a66c2", // Indigo
      },
      {
        name: "Consultant Clients",
        data: consultantTotals,
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
            chart: { height: 250 },
          },
        },
      ],
    },
  };

  return (
    <div className={className}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

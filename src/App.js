import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#f44336"];

const cloudAccountsData = [
  { name: "Connected", value: 2 },
  { name: "Not Connected", value: 0 },
];

const riskAssessmentData = [
  { name: "Failed", value: 1088 },
  { name: "Warning", value: 881 },
  { name: "Not Available", value: 20 },
  { name: "Passed", value: 7235 },
];

const imageRiskData = [
  { name: "Critical", value: 80 },
  { name: "High", value: 110 },
  { name: "Medium", value: 430 },
  { name: "Low", value: 850 },
];

const imageIssuesData = [
  { name: "High", value: 82 },
  { name: "Medium", value: 310 },
  { name: "Low", value: 1110 },
];

const ChartContainer = ({ title, children }) => (
  <div className="bg-white p-4 rounded-2xl shadow-md w-full sm:w-[48%] lg:w-[31%] min-h-[200px] flex flex-col justify-between">
    <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
    <div className="flex-1 flex justify-center items-center">{children}</div>
  </div>
);

const EmptyChart = () => (
  <div className="text-center text-gray-400 text-sm">
    <p className="mb-2">No Graph data available!</p>
    <span className="text-2xl">📉</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">CNAPP Dashboard</h1>

      <div className="space-y-10">
        {/* CSPM Executive Dashboard */}
        <div>
          <h2 className="text-xl font-semibold mb-3">CSPM Executive Dashboard</h2>
          <div className="flex flex-wrap gap-4">
            <ChartContainer title="Cloud Accounts">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={cloudAccountsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={40}
                    dataKey="value"
                    label
                  >
                    {cloudAccountsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>

            <ChartContainer title="Cloud Account Risk Assessment">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={riskAssessmentData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={40}
                    dataKey="value"
                    label
                  >
                    {riskAssessmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>

            <ChartContainer title="Add Widget">+ Add Widget</ChartContainer>
          </div>
        </div>

        {/* CWPP Dashboard */}
        <div>
          <h2 className="text-xl font-semibold mb-3">CWPP Dashboard</h2>
          <div className="flex flex-wrap gap-4">
            <ChartContainer title="Top 5 Namespace Specific Alerts">
              <EmptyChart />
            </ChartContainer>

            <ChartContainer title="Workload Alerts">
              <EmptyChart />
            </ChartContainer>

            <ChartContainer title="Add Widget">+ Add Widget</ChartContainer>
          </div>
        </div>

        {/* Registry Scan */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Registry Scan</h2>
          <div className="flex flex-wrap gap-4">
            <ChartContainer title="Image Risk Assessment">
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={imageRiskData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#f87171">
                    {imageRiskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <ChartContainer title="Image Security Issues">
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={imageIssuesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#fbbf24">
                    {imageIssuesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <ChartContainer title="Add Widget">+ Add Widget</ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

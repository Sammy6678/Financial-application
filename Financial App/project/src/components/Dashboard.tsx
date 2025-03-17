import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Users, FileText, Mail, TrendingUp } from 'lucide-react';

const mockData = [
  { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { month: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { month: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { month: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { month: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
  { month: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
];

export function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Financial Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Clients"
          value="24"
          icon={<Users className="h-6 w-6" />}
          trend="+2 this month"
        />
        <StatCard
          title="Reports Generated"
          value="156"
          icon={<FileText className="h-6 w-6" />}
          trend="+12 this week"
        />
        <StatCard
          title="Emails Sent"
          value="1,284"
          icon={<Mail className="h-6 w-6" />}
          trend="+89 this month"
        />
        <StatCard
          title="Revenue Growth"
          value="12.5%"
          icon={<TrendingUp className="h-6 w-6" />}
          trend="+2.4% from last month"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#4F46E5" />
              <Bar dataKey="expenses" fill="#EF4444" />
              <Bar dataKey="profit" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Reports</h2>
          <div className="space-y-4">
            {[
              { client: 'Acme Corp', type: 'Weekly', due: '2024-03-20' },
              { client: 'Global Tech', type: 'Monthly', due: '2024-03-31' },
              { client: 'Innovate Inc', type: 'Quarterly', due: '2024-03-31' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{report.client}</h3>
                  <p className="text-sm text-gray-500">{report.type} Report</p>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{report.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { action: 'Report sent', client: 'Tech Solutions', time: '2 hours ago' },
              { action: 'Data updated', client: 'Global Corp', time: '4 hours ago' },
              { action: 'Client added', client: 'New Ventures', time: '1 day ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{activity.action}</h3>
                  <p className="text-sm text-gray-500">{activity.client}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: { title: string; value: string; icon: React.ReactNode; trend: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <div className="text-indigo-600">{icon}</div>
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold">{value}</p>
        <p className="ml-2 text-sm text-gray-500">{trend}</p>
      </div>
    </div>
  );
}
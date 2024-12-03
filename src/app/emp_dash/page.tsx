import React from "react";

const EmployeeDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-bold">Employee Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="bg-gray-200 px-4 py-2 rounded-md">Export</button>
            <button className="bg-gray-200 px-4 py-2 rounded-md">
              <i className="fas fa-calendar"></i>
            </button>
          </div>
        </div>

        {/* Notification */}
        <div className="p-4 bg-blue-100 text-blue-700 rounded-md my-4">
          Your Leave Request on <strong>“24th April 2024”</strong> has been <strong>Approved!!!</strong>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* Employee Details */}
          <div className="col-span-1 bg-gray-50 p-4 rounded-md shadow-md">
            <div className="bg-gray-900 text-white p-4 rounded-md flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Stephan Peralt</h2>
                <p className="text-sm">Senior Product Designer</p>
              </div>
              <button className="bg-gray-700 p-2 rounded-md hover:bg-gray-800">
                <i className="fas fa-pen"></i>
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                <strong>Phone Number:</strong> +1 324 3453 545
              </p>
              <p className="text-sm">
                <strong>Email Address:</strong> steperde124@example.com
              </p>
              <p className="text-sm">
                <strong>Report Office:</strong> Doglas Martini
              </p>
              <p className="text-sm">
                <strong>Joined On:</strong> 15 Jan 2024
              </p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="col-span-1 bg-gray-50 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4">Leave Details</h3>
            <div className="relative w-full h-64">
              {/* Replace this placeholder with an actual chart */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-200 rounded-full">
                  {/* Placeholder for Donut Chart */}
                  <p className="text-center text-gray-500 mt-16">Chart</p>
                </div>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-gray-900 font-semibold">1254</span> On Time
              </li>
              <li>
                <span className="text-gray-900 font-semibold">32</span> Late Attendance
              </li>
              <li>
                <span className="text-gray-900 font-semibold">658</span> Work From Home
              </li>
              <li>
                <span className="text-gray-900 font-semibold">14</span> Absent
              </li>
              <li>
                <span className="text-gray-900 font-semibold">68</span> Sick Leave
              </li>
            </ul>
          </div>

          {/* Leave Summary */}
          <div className="col-span-1 bg-gray-50 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4">Leave Details</h3>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-sm">
                <strong>Total Leaves:</strong> 16
              </p>
              <p className="text-sm">
                <strong>Taken:</strong> 10
              </p>
              <p className="text-sm">
                <strong>Absent:</strong> 2
              </p>
              <p className="text-sm">
                <strong>Request:</strong> 0
              </p>
              <p className="text-sm">
                <strong>Worked Days:</strong> 240
              </p>
              <p className="text-sm">
                <strong>Loss of Pay:</strong> 2
              </p>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
              Apply New Leave
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;

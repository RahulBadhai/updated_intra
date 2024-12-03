import React from 'react';

const Calendar = () => {
  return (
    <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div>
            <h1 className="text-xl font-bold">Calendar</h1>
            <p className="text-sm text-gray-500">Application / Calendar</p>
          </div>
          <div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Create</button>
          </div>
        </div>

        {/* Navigation and Controls */}
        <div className="flex justify-between items-center p-4">
          <div className="text-gray-600">
            <button className="px-2 py-1 hover:bg-gray-200 rounded-md">&lt;</button>
            <span className="mx-4 font-semibold">December 2024</span>
            <button className="px-2 py-1 hover:bg-gray-200 rounded-md">&gt;</button>
          </div>
          <div>
            <button className="px-4 py-1 border border-gray-300 rounded-md">Today</button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-4 p-4 text-center">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="text-gray-500 font-medium">{day}</div>
          ))}

          {/* Days */}
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i + 1}
              className={`p-2 text-sm ${
                i + 1 === 3 ? 'bg-orange-100 border border-orange-500 rounded-md' : ''
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Event Section */}
        <div className="p-4 border-t border-gray-200">
          <h2 className="text-sm font-semibold text-gray-600 mb-3">Event</h2>
          <div className="flex items-center space-x-2 mb-2">
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
            <p className="text-sm">Team Events</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <p className="text-sm">Work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

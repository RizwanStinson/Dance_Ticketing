export default function DanceTickets() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      {/* Header with Japanese aesthetic */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">
          Dance with Priya Jayanthi
        </h1>
        <p className="text-lg text-gray-600 mb-2">Dance Classes</p>
        <div className="w-24 h-1 bg-indigo-400 mx-auto rounded-full"></div>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Salsa Card */}
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-pink-100 to-indigo-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <span className="text-6xl mb-2">💃</span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-indigo-900">Title of the Event</h2>
                <p className="text-sm text-indigo-900">Sub Title/ Short Description</p>
              </div>
              <div className="text-2xl font-bold text-indigo-600">$ 25 </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">Timing• 18:00 - 19:30</p>
            <select className="w-full mb-4 p-2 border-2 border-indigo-100 rounded-lg focus:border-indigo-300 focus:ring-0">
              <option>1 Ticket</option>
              <option>2  Tickets</option>
              <option>3  Tickets</option>
            </select>
            <button className="w-full bg-indigo-50 text-indigo-900 py-3 rounded-lg hover:bg-indigo-100 transition-colors duration-300 font-medium">
               Book Now
            </button>
          </div>
        </div>

        {/* Hip Hop Card */}
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <span className="text-6xl mb-2">🕺</span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-indigo-900">
                  Bronx Gala Night
                </h2>
                <p className="text-sm text-indigo-900">Hip Hop Intermediate</p>
              </div>
              <div className="text-2xl font-bold text-indigo-600">$ 3,000</div>
            </div>
            <p className="text-gray-600 text-sm mb-6"> 12 January, 2024 19:00 - 20:30</p>
            <select className="w-full mb-4 p-2 border-2 border-indigo-100 rounded-lg focus:border-indigo-300 focus:ring-0">
              <option>1  Ticket</option>
              <option>2 Tickets</option>
              <option>3  Tickets</option>
            </select>
            <button className="w-full bg-indigo-50 text-indigo-900 py-3 rounded-lg hover:bg-indigo-100 transition-colors duration-300 font-medium">
               Book Now
            </button>
          </div>
        </div>

        {/* Ballet Card */}
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <span className="text-6xl mb-2">🩰</span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-indigo-900">Brooklyn Blitz</h2>
                <p className="text-sm text-indigo-900">Ballet Basics</p>
              </div>
              <div className="text-2xl font-bold text-indigo-600">$2,800</div>
            </div>
            <p className="text-gray-600 text-sm mb-6">25 January, 2025 17:30 - 19:00</p>
            <select className="w-full mb-4 p-2 border-2 border-indigo-100 rounded-lg focus:border-indigo-300 focus:ring-0">
              <option>1  Ticket</option>
              <option>2  Tickets</option>
              <option>3  Tickets</option>
            </select>
            <button className="w-full bg-indigo-50 text-indigo-900 py-3 rounded-lg hover:bg-indigo-100 transition-colors duration-300 font-medium">
               Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

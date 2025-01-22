export default function Metrics() {
  return (
    <div className="flex justify-center bg-black text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
          {/* Satisfied Clients */}
          <div className="text-center">
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 bg-clip-text text-transparent">
              783
            </p>
            <p className="text-gray-400 text-lg">
              Satisfied global<br />
              clients
            </p>
          </div>

          {/* Total Revenue */}
          <div className="text-center">
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 bg-clip-text text-transparent">
              13m+
            </p>
            <p className="text-gray-400 text-lg">
              Total<br />
              revenue
            </p>
          </div>

          {/* Success Projects */}
          <div className="text-center">
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 bg-clip-text text-transparent">
              754
            </p>
            <p className="text-gray-400 text-lg">
              Finishing success<br />
              projects
            </p>
          </div>

          {/* Awards */}
          <div className="text-center">
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 bg-clip-text text-transparent">
              315
            </p>
            <p className="text-gray-400 text-lg">
              International<br />
              awards winning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
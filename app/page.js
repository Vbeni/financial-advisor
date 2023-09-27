export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-black p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4 text-gray-400">Financial Inputs</h1>
        
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Monthly Income</label>
            <input type="number" className="p-2 w-full border rounded text-gray-400" />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Monthly Expenses</label>
            <input type="number" className="p-2 w-full border rounded text-gray-400" />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Financial Goals ($)</label>
            <input type="number" className="p-2 w-full border rounded text-gray-400" />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Get Insights
          </button>
        </form>
      </div>
    </div>
  );
}

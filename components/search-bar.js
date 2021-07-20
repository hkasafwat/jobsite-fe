export default function SearchBar() {
  return (
    <div className="flex max-w-4xl m-auto mt-12">
      <input type="text" className="shadow-inner flex-1 p-4 border border-r-0 rounded-l-md" placeholder="keywords" />
      <input type="text" className="shadow-inner flex-2 p-4 border" placeholder="Location" />
      <input type="text" className="shadow-inner flex-2 p-4 border border-l-0" placeholder="Distance" />
      <button className="bg-gray-200 w-20 rounded-r-md">Search</button>
    </div>
  )
}
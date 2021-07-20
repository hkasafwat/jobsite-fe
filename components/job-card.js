export default function JobCard() {
  return (
    <a href="#" className="shadow p-4 bg-purple-200 hover:bg-purple-300 hover:shadow-lg flex flex-col rounded-sm ">
      <div className="flex">
        <div>
          <div className=" w-16 h-16 bg-gray-200"></div>
        </div>
        <div className="ml-6 flex-grow">
            <div className="text-xl">Full Stack Developer</div>
            <div className="text-md">Safwat Tech, London, UK</div>
          </div>
        <div className="px-2">
          July 14th
        </div>
      </div>

     <div className="mt-6">
     Cras at interdum ligula, id congue ligula. Donec id tempus magna. Vestibulum tempus aliquet sollicitudin. Maecenas purus est, egestas pellentesque iaculis vitae, volutpat a dolor
     </div>
    </a>
  )
}
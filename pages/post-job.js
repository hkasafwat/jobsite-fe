import Nav from "../components/nav"

export default function PostJob() {
  return (
     <>
      <Nav />
      <div className="max-w-4xl bg-gray-100 p-4 px-8 m-auto mt-12 border rounded">
        <div className="text-2xl mb-6">Post a Job</div>
        <div className="flex py-2">
          <div className="w-32 self-center text-right pr-6">Job Title</div>
          <input type="text" className="p-2 flex-1"/>
        </div>
        <div className="flex py-2">
          <div className="w-32 self-center text-right pr-6">Job Location</div>
          <select className="p-2 mr-3">
            <option>On site</option>
            <option>Remote</option>
            <option>Temporarily Remote</option>
          </select>
          <input type="text" className="p-2 flex-1" />
        </div>
        <div className="flex py-2 items-center">
          <div className="w-32 self-center text-right pr-6">Job Location</div>
          <div className="mr-4">
            <input type="radio" value="full-time" className="mr-1" />
            <label for="full-time">Full Time</label>
          </div>
          <div className="mr-4">
            <input type="radio" value="part-time" className="mr-1" />
            <label for="part-time">Part Time</label>
          </div>
          <div className="mr-4">
            <input type="radio" value="freelance" className="mr-1" />
            <label for="freelance">Freelance</label>
          </div>
          <div className="mr-4">
            <input type="radio" value="temporary" className="mr-1" />
            <label for="temporary">Temporary</label>
          </div>
        </div>
        <div className="flex py-2">
          <div className="w-32  text-right pr-6">Description</div>
          <textarea rows="10" className="flex-1">

          </textarea>
        </div>
        <div className="flex py-2">
          <div className="w-32 self-center text-right pr-6">Compensation</div>
          <input type="text" className="p-2 flex-1 mr-3" />
          <input type="text" className="p-2 flex-1 mr-3" />
          <select className="p-2 mr-3">
            <option>USD</option>
          </select>
          <select className="p-2  mr-3">
            <option>Annually</option>
          </select>
        </div>
        <div className="flex py-2">
          <div className="w-32"></div>
          <input type="text" placeholder="Additional compensation information (benefits, etc.)" className="p-2 flex-1" />
        </div>
        <div className="flex py-2">
          <div className="w-32 self-center text-right pr-6">Company Name</div>
          <input type="text" className="p-2 flex-1" />
        </div>
        <div className="flex py-2">
          <div className="w-32 self-center text-right pr-6">Company URL</div>
          <input type="text" className="p-2 flex-1" />
        </div>
        <div className="flex py-2">
          <div className="w-32 self-center text-right pr-6">Company Logo</div>
          <input type="text" className="p-2 flex-1" />
        </div>
        <div className="flex py-2">
          <div className="w-32 self-center text-right pr-6">How to Apply</div>
          <div className="mr-4">
            <input type="radio" value="applyEmail" className="mr-1" />
            <label for="temporary">Apply By Email</label>
          </div>
          <div className="mr-4">
            <input type="radio" value="applyURL" className="mr-1" />
            <label for="temporary">Apply By URL</label>
          </div>
        </div>
        <div className="flex py-2">
          <div className="w-32 self-center text-right pr-6"></div>
          <input type="text" placeholder="enter email/URL" className="p-2 flex-1" />
        </div>
        <div className="flex mt-4">
          <a href="#" className="mx-auto p-4 bg-purple-200 hover:bg-purple-300 rounded shadow">Preview Job Post</a>
        </div>
      </div>
    </>
  )
}
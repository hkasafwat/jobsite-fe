export default function Nav() {
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex">
        <div className="flex-start">JobSite</div>
        <div className="ml-auto flex space-x-4">
          <a href="#">All Jobs</a>
          <a href="#">Post a Job</a>
          <p>|</p>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  )
}
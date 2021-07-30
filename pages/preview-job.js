import Nav from "../components/nav";
import SearchBar from "../components/search-bar";

export default function PreviewJob() {
  return (
    <>
      <Nav />
      <SearchBar />

      <div className="max-w-4xl bg-gray-100 p-4 px-8 m-auto mt-12 border rounded">
        <div>Posted July 23, 2021</div>
        <div>Title</div>
        <div>
          <a href="companyUrl">Company Name</a>
        </div>
        <div>Job Location, Work Location, Job Type</div>
        <hr />
        <div></div>
        <div className="flex mt-4">
          <button className="mx-auto p-4 bg-purple-200 hover:bg-purple-300 rounded shadow">
            Publish Job
          </button>
        </div>
      </div>
    </>
  );
}

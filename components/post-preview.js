export default function PostPreview(props) {
  const job = props.data;

  return (
    <>
      <div className="max-w-4xl bg-gray-100 p-4 px-8 m-auto mt-12 border rounded">
        <div>{job.date}</div>
        <div className="text-2xl my-2">{job.jobTitle}</div>
        <div>
          <a href={job.companyUrl}>{job.companyName}</a>
        </div>
        <div>
          {job.jobLocation}, {job.workLocation}, {job.jobType}
        </div>
        <hr className="my-4" />
        <div>{job.description}</div>
        <div className="flex mt-4">
          <button className="mx-auto p-4 bg-purple-200 hover:bg-purple-300 rounded shadow">
            Publish Job
          </button>
        </div>
      </div>
    </>
  );
}

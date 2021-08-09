import { useState } from "react";
import { useRouter } from "next/router";
import Nav from "../../components/nav";
import SunEditor from "../../components/suneditor";

export default function PostJob({ post }) {
  const [title, setTitle] = useState(post.title);
  const [workLocation, setWorkLocation] = useState(post.work_location);
  const [jobLocation, setJobLocation] = useState(post.job_location);
  const [jobType, setJobType] = useState(post.type);
  const [descriptionData, setDescriptionData] = useState(post.description);
  const [minWage, setMinWage] = useState(post.min_wage);
  const [maxWage, setMaxWage] = useState(post.max_wage);
  const [currency, setCurrency] = useState(post.currency);
  const [salaryTimeframe, setSalaryTimeframe] = useState(post.salary_timeframe);
  const [benefits, setBenefits] = useState(post.benefits);
  const [companyName, setCompanyName] = useState(post.company_name);
  const [companyUrl, setCompanyUrl] = useState(post.company_url);
  const [companyLogo, setCompanyLogo] = useState(post.company_logo);
  const [applyMethod, setApplyMethod] = useState(post.apply_method);
  const [applyEmail, setApplyEmail] = useState(post.apply_email);
  const [applyUrl, setApplyUrl] = useState(post.apply_url);
  const [errors, setErrors] = useState(false);
  const router = useRouter();

  const descriptionChange = (data) => {
    setDescriptionData(data);
  };

  const setJobData = async (event) => {
    event.preventDefault();

    let jobData = {
      title: title,
      slug: router.query.slug,
      work_location: workLocation,
      job_location: jobLocation,
      type: jobType,
      description: descriptionData,
      min_wage: minWage,
      max_wage: maxWage,
      currency: currency,
      salary_timeframe: salaryTimeframe,
      benefits: benefits,
      company_name: companyName,
      company_url: companyUrl,
      company_logo: companyLogo,
      apply_method: applyMethod,
      apply_email: applyEmail,
      apply_url: applyUrl,
    };
    console.log(jobData);
    postJob(jobData);
  };

  const postJob = async (jobData) => {
    await fetch("http://localhost:8080/jobs/edit-job", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setErrors(data.errors);
        } else {
          router.push(`/jobs/${data.slug}`);
        }
      });
  };

  return (
    <>
      <Nav />
      <form onSubmit={setJobData}>
        <div className="max-w-4xl bg-gray-100 p-4 px-8 m-auto mt-12 border rounded">
          <div className="text-2xl mb-6 w-32 text-right">Post a Job</div>
          {errors ? (
            <>
              <div className="flex">
                <div className="w-32  text-right"></div>
                <div className=" py-3 mb-3 flex-1 rounded bg-red-600 flex">
                  <span className="font-bold text-white pl-4 text-lg">
                    There seems to be some errors
                  </span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {errors &&
            errors.map((error) => (
              <>
                <div className="flex">
                  <div className="w-32  text-right"></div>
                  <div className=" text-center m-0 text-red-600 text-lg font-bold mb-3">
                    * {Object.values(error)}
                  </div>
                </div>
              </>
            ))}
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Job Title</div>
            <input
              type="text"
              id="jobTitle"
              className="p-2 flex-1 rounded border"
              value={title}
              onChange={() => setTitle(event.target.value)}
            />
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Job Location</div>
            <select
              id="workLocation"
              className="p-2 mr-3 rounded border"
              value={workLocation}
              onChange={() => setWorkLocation(event.target.value)}
            >
              <option>On site</option>
              <option>Remote</option>
              <option>Temporarily Remote</option>
            </select>
            <input
              type="text"
              id="jobLocation"
              className="p-2 flex-1 rounded border"
              placeholder="London, UK"
              value={jobLocation}
              onChange={() => setJobLocation(event.target.value)}
            />
          </div>
          {/* Radio group for job type  */}
          <div
            className="flex py-2 items-center"
            onChange={() => setJobType(event.target.value)}
          >
            <div className="w-32 self-center text-right pr-6">Job Type</div>
            <div className="flex" onChange={() => setJobType(event.target.value)}>
              <div className="mr-4">
                <input
                  type="radio"
                  value="full-time"
                  className="mr-1"
                  name="group"
                  checked={jobType == "full-time"}
                />
                <label htmlFor="full-time">Full Time</label>
              </div>
              <div className="mr-4">
                <input
                  type="radio"
                  value="part-time"
                  className="mr-1"
                  name="group"
                  checked={jobType == "part-time"}
                />
                <label htmlFor="part-time">Part Time</label>
              </div>
              <div className="mr-4">
                <input
                  type="radio"
                  value="freelance"
                  className="mr-1"
                  name="group"
                  checked={jobType == "freelance"}
                />
                <label htmlFor="freelance">Freelance</label>
              </div>
              <div className="mr-4">
                <input
                  type="radio"
                  value="temporary"
                  className="mr-1"
                  name="group"
                  checked={jobType == "temporary"}
                />
                <label htmlFor="temporary">Temporary</label>
              </div>
            </div>
          </div>
          <div className="flex py-2">
            <div className="w-32  text-right mr-5">Description</div>
            <div className="w-full  ml-auto">
              <SunEditor
                setOptions={{
                  height: 300,
                  buttonList: [
                    ["undo", "redo"],
                    ["fontSize", "formatBlock"],
                    [
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "subscript",
                      "superscript",
                    ],
                    ["removeFormat"],
                    ["outdent", "indent"],
                    ["align", "horizontalRule", "list"],
                    ["link"],
                  ],
                }}
                onChange={descriptionChange}
                defaultValue={post.description}
              />
            </div>
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Compensation</div>
            <input
              id="minWage"
              type="text"
              className="p-2 flex-1 mr-3 rounded border"
              placeholder="Minimum wage"
              value={minWage}
              onChange={() => setMinWage(event.target.value)}
            />
            <input
              id="maxWage"
              type="text"
              className="p-2 flex-1 mr-3 rounded border"
              placeholder="Maximum wage"
              value={maxWage}
              onChange={() => setMaxWage(event.target.value)}
            />
            <select
              id="currency"
              className="p-2 mr-3 rounded border"
              value={currency}
              onChange={() => setCurrency(event.target.value)}
            >
              <option value="USD" data-symbol="$">
                USD
              </option>
              <option value="CAD" data-symbol="$">
                CAD
              </option>
              <option value="GBP" data-symbol="£">
                GBP
              </option>
              <option value="EUR" data-symbol="€">
                EUR
              </option>
              <option value="AUD" data-symbol="$">
                AUD
              </option>
              <option value="NZD" data-symbol="$">
                NZD
              </option>
              <option value="JPY" data-symbol="¥">
                JPY
              </option>
              <option value="SAR" data-symbol="SAR">
                SAR
              </option>
            </select>
            <select
              id="salarytimeframe"
              className="p-2 pr rounded border"
              value={salaryTimeframe}
              onChange={() => setSalaryTimeframe(event.target.value)}
            >
              <option selected="selected" value="annually">
                Annually
              </option>
              <option value="monthly">Monthly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="hourly">Hourly</option>
              <option value="fixed_price">Fixed Price</option>
              <option value="pro_rate">Pro Rata</option>
            </select>
          </div>
          <div className="flex py-2">
            <div className="w-32"></div>
            <input
              id="benefits"
              type="text"
              placeholder="Additional compensation information (benefits, etc.)"
              className="p-2 flex-1 rounded border"
              value={benefits}
              onChange={() => setBenefits(event.target.value)}
            />
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Company Name</div>
            <input
              id="companyName"
              type="text"
              className="p-2 flex-1 rounded border"
              value={companyName}
              onChange={() => setCompanyName(event.target.value)}
            />
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Company URL</div>
            <input
              id="companyUrl"
              type="text"
              className="p-2 flex-1 rounded border"
              value={companyUrl}
              onChange={() => setCompanyUrl(event.target.value)}
            />
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Company Logo</div>
            <input
              id="companyLogo"
              type="text"
              className="p-2 flex-1 rounded border"
              value={companyLogo}
              onChange={() => setCompanyLogo(event.target.value)}
            />
          </div>
          {/* Radio group for apply method  */}
          <div
            className="flex py-2"
            onChange={() => setApplyMethod(event.target.value)}
          >
            <div className="w-32 self-center text-right pr-6">How to Apply</div>
            <div className="mr-4">
              <input
                id="applyEmail"
                type="radio"
                name="applyGroup"
                value="applyEmail"
                className="mr-1"
                checked={applyMethod == "applyEmail"}
              />
              <label htmlFor="temporary">Apply By Email</label>
            </div>
            <div className="mr-4">
              <input
                id="applyUrl"
                type="radio"
                name="applyGroup"
                value="applyUrl"
                className="mr-1"
                checked={applyMethod == "applyUrl"}
              />
              <label htmlFor="temporary">Apply By URL</label>
            </div>
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6"></div>
            {applyMethod == "applyEmail" ? (
              <input
                type="text"
                id="applyEmailInput"
                placeholder="Enter Email"
                className="p-2 flex-1 rounded border"
                value={applyEmail}
                onChange={() => setApplyEmail(event.target.value)}
              />
            ) : (
              <input
                type="text"
                id="applyUrlInput"
                placeholder="Enter URL"
                className="p-2 flex-1 rounded border"
                value={applyUrl}
                onChange={() => setApplyUrl(event.target.value)}
              />
            )}
          </div>
          <div className="flex mt-4">
            <button className="mx-auto p-4 bg-purple-200 hover:bg-purple-300 rounded shadow font-bold">
              Edit Job
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:8080/jobs/retrieve-job", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const post = await res.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

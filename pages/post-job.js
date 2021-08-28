import { useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../context/state";
import Nav from "../components/nav";
import SunEditor from "../components/suneditor";

export default function PostJob() {
  const { user } = useAppContext();

  const [jobType, setJobType] = useState("full-time");
  const [applyMethod, setApplyMethod] = useState("applyEmail");
  const [descriptionData, setDescriptionData] = useState("");
  const [errors, setErrors] = useState(false);
  const router = useRouter();

  const descriptionChange = (data) => {
    setDescriptionData(data);
  };

  const setJobData = async (event) => {
    event.preventDefault();

    let jobData = {
      title: event.target.jobTitle.value,
      work_location: event.target.workLocation.value,
      job_location: event.target.jobLocation.value,
      type: jobType,
      description: descriptionData,
      min_wage: event.target.minWage.value,
      max_wage: event.target.maxWage.value,
      currency: event.target.currency.value,
      salary_timeframe: event.target.salarytimeframe.value,
      benefits: event.target.benefits.value,
      company_name: event.target.companyName.value,
      company_url: event.target.companyUrl.value,
      company_logo: event.target.companyLogo.value,
      apply_method: applyMethod,
      apply_email: event.target.applyEmail.value,
      apply_url: event.target.applyUrl.value,
    };

    postJob(jobData);
  };

  const postJob = async (jobData) => {
    await fetch("http://localhost:8080/jobs/post-job", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors)
        }
        else {
          router.push(`/jobs/${data.slug}`)
        }

      });
  };

  if(user == undefined || user == null) {
    router.push('/login');
  }

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
                <div className=" py-3 mb-3 flex-1 rounded bg-red-600 flex"><span className="font-bold text-white pl-4 text-lg">There seems to be some errors</span></div>
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
            />
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Job Location</div>
            <select id="workLocation" className="p-2 mr-3 rounded border">
              <option>On site</option>
              <option>Remote</option>
              <option>Temporarily Remote</option>
            </select>
            <input
              type="text"
              id="jobLocation"
              className="p-2 flex-1 rounded border"
              placeholder="London, UK"
            />
          </div>
          {/* Radio group for job type  */}
          <div
            className="flex py-2 items-center"
            onChange={() => setJobType(event.target.value)}
          >
            <div className="w-32 self-center text-right pr-6">Job Type</div>
            <div className="mr-4">
              <input
                type="radio"
                value="full-time"
                className="mr-1"
                name="group"
                defaultChecked
              />
              <label htmlFor="full-time">Full Time</label>
            </div>
            <div className="mr-4">
              <input
                type="radio"
                value="part-time"
                className="mr-1"
                name="group"
              />
              <label htmlFor="part-time">Part Time</label>
            </div>
            <div className="mr-4">
              <input
                type="radio"
                value="freelance"
                className="mr-1"
                name="group"
              />
              <label htmlFor="freelance">Freelance</label>
            </div>
            <div className="mr-4">
              <input
                type="radio"
                value="temporary"
                className="mr-1"
                name="group"
              />
              <label htmlFor="temporary">Temporary</label>
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
            />
            <input
              id="maxWage"
              type="text"
              className="p-2 flex-1 mr-3 rounded border"
              placeholder="Maximum wage"
            />
            <select id="currency" className="p-2 mr-3 rounded border">
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
            <select id="salarytimeframe" className="p-2 pr rounded border">
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
            />
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Company Name</div>
            <input
              id="companyName"
              type="text"
              className="p-2 flex-1 rounded border"
            />
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Company URL</div>
            <input
              id="companyUrl"
              type="text"
              className="p-2 flex-1 rounded border"
            />
          </div>
          <div className="flex py-2">
            <div className="w-32 self-center text-right pr-6">Company Logo</div>
            <input
              id="companyLogo"
              type="text"
              className="p-2 flex-1 rounded border"
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
                defaultChecked
              />
              <label htmlFor="temporary">Apply By Email</label>
            </div>
            <div className="mr-4">
              <input
                id="applyUrl"
                type="radio"
                name="applyGroup"
                value="applyURL"
                className="mr-1"
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
              />
            ) : (
              <input
                type="text"
                id="applyUrlInput"
                placeholder="Enter URL"
                className="p-2 flex-1 rounded border"
              />
            )}
          </div>
          <div className="flex mt-4">
            <button className="mx-auto p-4 bg-purple-200 hover:bg-purple-300 rounded shadow font-bold">
              Post Job
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

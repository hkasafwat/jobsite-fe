import { useState } from "react";
import SearchBar from "../components/search-bar";
import Nav from "../components/nav";
import PostPreview from "../components/post-preview";
// import EditorJs from 'react-editor-js';
import dynamic from "next/dynamic";
import SunEditor from "../components/suneditor";

const EditorJs = dynamic(
  () => {
    return import("react-editor-js");
  },
  { ssr: false }
);

export default function PostJob() {
  const [job, setJob] = useState(false);
  const [jobType, setJobType] = useState("full-time");
  const [applyMethod, setApplyMethod] = useState("applyEmail");
  const [PreviewJob, setPreviewJob] = useState(false);
  const [descriptionData, setDescriptionData] = useState('');


const descriptionChange = (data) => {
  setDescriptionData(data);
}

  const PreviewJobData = (event) => {
    event.preventDefault();

    let jobData = {
      jobTitle: event.target.jobTitle.value,
      workLocation: event.target.workLocation.value,
      jobLocation: event.target.jobLocation.value,
      jobType,
      description: descriptionData,
      minWage: event.target.minWage.value,
      maxWage: event.target.maxWage.value,
      currency: event.target.currency.value,
      salaryTimeframe: event.target.salarytimeframe.value,
      benefits: event.target.benefits.value,
      companyName: event.target.companyName.value,
      companyUrl: event.target.companyUrl.value,
      companyLogo: event.target.companyLogo.value,
      applyMethod,
      applyEmail: event.target.applyEmail.value,
      applyUrl: event.target.applyUrl.value,
      date: new Date().toLocaleString(),
    };

    setJob(jobData);
  };

  console.log(job);
  console.log(descriptionData)

  return (
    <>
      <Nav />

      {job == false ? (
        <form onSubmit={PreviewJobData}>
          <div className="max-w-4xl bg-gray-100 p-4 px-8 m-auto mt-12 border rounded">
            <div className="text-2xl mb-6">Post a Job</div>
            <div className="flex py-2">
              <div className="w-32 self-center text-right pr-6">Job Title</div>
              <input
                type="text"
                id="jobTitle"
                className="p-2 flex-1 rounded border"
              />
            </div>
            <div className="flex py-2">
              <div className="w-32 self-center text-right pr-6">
                Job Location
              </div>
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
                <SunEditor setOptions={{
                  height: 300,
                  buttonList: [
                    ['undo', 'redo'],
                    ['fontSize', 'formatBlock'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['removeFormat'],
                    ['outdent', 'indent'],
                    ['align', 'horizontalRule', 'list'],
                    ['link'],
                ]
                }}
                
                onChange={descriptionChange}/>
              </div>
            </div>
            <div className="flex py-2">
              <div className="w-32 self-center text-right pr-6">
                Compensation
              </div>
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
                <option value="DKK" data-symbol="Kr.">
                  DKK
                </option>
                <option value="SEK" data-symbol="kr">
                  SEK
                </option>
                <option value="SGD" data-symbol="$">
                  SGD
                </option>
                <option value="ZAR" data-symbol="R">
                  ZAR
                </option>
                <option value="HKD" data-symbol="HK$">
                  HKD
                </option>
                <option value="PHP" data-symbol="₱">
                  PHP
                </option>
                <option value="TWD" data-symbol="NT$">
                  TWD
                </option>
                <option value="CNY-RMB" data-symbol="¥">
                  CNY-RMB
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
              <div className="w-32 self-center text-right pr-6">
                Company Name
              </div>
              <input
                id="companyName"
                type="text"
                className="p-2 flex-1 rounded border"
              />
            </div>
            <div className="flex py-2">
              <div className="w-32 self-center text-right pr-6">
                Company URL
              </div>
              <input
                id="companyUrl"
                type="text"
                className="p-2 flex-1 rounded border"
              />
            </div>
            <div className="flex py-2">
              <div className="w-32 self-center text-right pr-6">
                Company Logo
              </div>
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
              <div className="w-32 self-center text-right pr-6">
                How to Apply
              </div>
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
              <input
                type="text"
                placeholder={
                  applyMethod == "applyEmail" ? "Enter Email" : "Enter URL"
                }
                className="p-2 flex-1 rounded border"
              />
            </div>
            <div className="flex mt-4">
              <button className="mx-auto p-4 bg-purple-200 hover:bg-purple-300 rounded shadow">
                Preview Job Post
              </button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <SearchBar />
          <PostPreview data={job} />
        </>
      )}
    </>
  );
}

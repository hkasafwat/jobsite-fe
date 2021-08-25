import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

import Nav from "../../components/nav";
import SearchBar from "../../components/search-bar";
import EmailModal from "../../components/email-modal";
import Delete from "../../components/delete-btn";
import { useAppContext } from "../../context/state";

export default function jobs({ post }) {
  const {user} = useAppContext();
  const [emailModal, setEmailModal] = useState(false);
  const [hideModal, setHideModal] = useState(true);
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return (
      <>
        <Nav />
      </>
    );
  }
  
  return (
    <>
      <Nav />
      <SearchBar />
      <div className="max-w-4xl bg-gray-100 p-4 m-auto mt-12 border rounded">
        <div className=" flex mb-3">
          <Link href={`/edit-job/${slug}`}>
            <button className="ml-auto mr-4 p-2 bg-yellow-400 rounded w-24 font-bold">
              Edit
            </button>
          </Link>
          <Delete slug={slug} />
        </div>
        <hr className="mb-3" />
        <div className="flex">
          <div>
            <div className="text-sm">
              {new Date(post.created_at).toDateString()}
            </div>
            <div className="text-2xl mb-4 mt-1">{post.title}</div>
            <div className="">{post.company_name}</div>
            <div className="">
              {post.work_location}, {post.job_location}
            </div>
          </div>
          <div className="ml-auto">
            <div className=" w-20 h-20 bg-red-200"></div>
          </div>
        </div>
        <hr className="my-4" />
        <div
          className="job-body unreset"
          dangerouslySetInnerHTML={{ __html: post.description }}
        ></div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-purple-200 mx-auto p-4"
            onClick={() => {
              setEmailModal(true);
              setHideModal(false);
            }}
          >
            Apply
          </button>
        </div>
      </div>
      {post.apply_method && post.apply_method == "applyEmail" ? (
        emailModal == false ? (
          <div></div>
        ) : (
          <EmailModal
            company={post.company_name}
            modal={setHideModal}
            modalHidden={hideModal}
          />
        )
      ) : (
        <div></div>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:8080/jobs/retrieve-job", {
    method: "POST",
    headers: {
      "Accept": "application/json",
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

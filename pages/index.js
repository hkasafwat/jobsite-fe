import { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import JobCard from "../components/job-card";
import SearchBar from "../components/search-bar";
import { useAppContext } from "../context/state";

export default function Home({ posts }) {
  const { user }  = useAppContext()
  console.log(user)
  return (
    <>
      <Nav />
      <SearchBar />
      <div className="mt-16 max-w-4xl m-auto space-y-8">
        <p className="text-2xl mb-6">Latest Jobs</p>
        {posts.map((post) => (
          <JobCard
          key={post.slug}
            slug={post.slug}
            title={post.title}
            subtitle={post.subtitle}
            company_name={post.company_name}
            job_location={post.job_location}
            type={post.type}
            work_location={post.work_location}
            date={new Date(post.created_at).toDateString()}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:8080/jobs`, {
    method: "GET",
  });
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
    },
  };
}

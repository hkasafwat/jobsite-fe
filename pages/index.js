import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import JobCard from "../components/job-card";
import SearchBar from "../components/search-bar";

export default function Home({ posts }) {
  return (
    <>
      <Nav />
      <SearchBar />
      <div className="mt-16 max-w-4xl m-auto space-y-8">
        <p className="text-2xl mb-6">Latest Jobs</p>
        {posts.map((post) => (
          <JobCard
            slug={post.slug}
            title={post.title}
            subtitle={post.subtitle}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let token = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBmMWNmYzQ4M2Q4OWEyNTk0MzczMmNkIiwiZW1haWwiOiJoaXNoYW1AdGVzdC5jb20iLCJpYXQiOjE2MjczODQ3MjksImV4cCI6MTYyNzM5MTkyOX0.tNpUb2ZuvCNGRtNkRd_VkWpD0nxxqxXwVbqbkpdkKTc",
  };
  const res = await fetch(`http://localhost:8080/jobs`, {
    method: "GET",
    headers: token,
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

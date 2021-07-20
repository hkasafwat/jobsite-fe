import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import JobCard from "../components/job-card";
import SearchBar from "../components/search-bar";

export default function Home() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <Nav />
      <SearchBar />
      <div className="mt-16 max-w-4xl m-auto space-y-8">
        <p className="text-2xl mb-6">Latest Jobs</p>
        {numbers.map((number) => (
          <JobCard />
        ))}
      </div>
    </>
  );
}

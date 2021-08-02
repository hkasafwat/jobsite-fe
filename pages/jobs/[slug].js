import router, { useRouter } from "next/router";
import Nav from "../../components/nav";
import SearchBar from "../../components/search-bar";

export default function jobs({ post }) {
  const router = useRouter();
  const { slug } = router.query;
  
  return (
    <>
      <Nav />
      <SearchBar />
      <div className="max-w-4xl bg-gray-100 p-4 m-auto mt-12 border rounded">
        <div className="flex">
          <div>
            <div className="text-sm">July 14th, 2021</div>
            <div className="text-2xl mb-4 mt-1">Full Stack Developer</div>
            <div className="">Safwat Tech</div>
            <div className="">London, UK</div>
          </div>
          <div className="ml-auto">
            <div className=" w-20 h-20 bg-red-200"></div>
          </div>
        </div>
        <hr className="my-4" />
        <div class="job-body " data-snip-rule="98">
          <p>
            Runtime Verification Inc. is a technology company headquartered in
            Urbana, Illinois with staff spread across the globe, including
            Europe and Southeast Asia. We provide testing and verification
            services to public and private companies in the embedded and
            blockchain domains. In the latter we work with infrastructure
            builders as well as companies building products and providing
            services supported and/or powered by said infrastructure.
          </p>
          <h2 className="text-2xl my-3">Job description</h2>
          <p>
            Runtime Verification Inc (RV) is looking for a Haskell Developer to
            join the company. You will work with the team developing the
            symbolic execution backend of K in Haskell, and with other teams in
            the company using K for formal verification. The ideal candidate has
            a strong programming background and knowledge about and experience
            with functional programming languages.
          </p>
          <h2 className="text-2xl my-3">What we offer</h2>
          <ul className="list-disc pl-6">
            <li>One of the best teams around.</li>
            <li>Very competitive salary.</li>
            <li>Remote friendly.</li>
            <li>Matching IRA contributions.</li>
            <li>Casual dress code.</li>
            <li>Health insurance.</li>
            <li>Top notch equipment.</li>
            <li>Performance bonuses.</li>
            <li>Company lunches.</li>
            <li>Unlimited vacation.</li>
          </ul>
          <h2 className="text-2xl my-3">What we are looking for</h2>
          <ul className="list-disc pl-6">
            <li>
              BS or equivalent in Computer Science, Mathematics, or a related
              field.
            </li>
            <li>
              Professional functional programming experience, preferably
              Haskell.
            </li>
            <li>
              Must be a considerate teammate with good communication skills.
            </li>
            <li>
              Eager learner with a demonstrable ability to solve problems.
            </li>
          </ul>
          <h2 className="text-2xl my-3">Nice to have</h2>
          <ul className="list-disc pl-6">
            <li>
              MS/PhD or equivalent in Computer Science, Mathematics, or a
              related field.
            </li>
            <li>Experience with test-driven development.</li>
            <li>Contributions to open-source projects.</li>
          </ul>
          <h2 className="text-2xl my-3">What’s in it for you?</h2>
          <ul className="list-disc pl-6">
            <li>
              Opportunity to work at the forefront of programming language
              design and verification.
            </li>
            <li>Casual work environment with flexible work hours.</li>
            <li>
              Full benefits package available for US based employees. Includes
              unlimited paid time off, retirement benefits, employer sponsored
              health / dental / limited life insurance.
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-purple-200 mx-auto p-4">Apply</button>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({params}) {
  const res = await fetch("http://localhost:8080/jobs/retrieve-job", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body:  JSON.stringify(params),
  });
  const data = await res.json();
  console.log(data)
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 1
  };
}

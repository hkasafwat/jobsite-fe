import { useRouter } from "next/router";
import AreYouSureBtn from "./are-you-sure-btn";

export default function Delete({ slug }) {
  const router = useRouter();

  const deletePost = async () => {
    const res = await fetch("http://localhost:8080/jobs/delete-job", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug: slug }),
    })
      .then((res) => res.json())
      .then((data) => {
        Object.keys(data) == "success" ? router.push(`/`) : "";
      });
  };

  return (
    <>
      <AreYouSureBtn
        buttonText="Delete"
        buttonColor="red"
        functionToExecute={deletePost}
      />
    </>
  );
}

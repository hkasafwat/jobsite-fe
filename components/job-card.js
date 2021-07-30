import Link from "next/link";

export default function JobCard(props) {
  const {
    slug,
    title,
    subtitle,
    type,
    description,
    company_name,
    company_logo,
    city,
  } = props;

  return (
    <Link href={"/jobs/" + slug}>
      <a
        href
        className="shadow p-4 bg-purple-200 hover:bg-purple-300 hover:shadow-lg flex flex-col rounded-sm "
      >
        <div className="flex">
          <div>
            <div className=" w-16 h-16 bg-gray-200"></div>
          </div>
          <div className="ml-6 flex-grow">
            <div className="text-xl">{title}</div>
            <div className="text-md">Safwat Tech, London, UK</div>
          </div>
          <div className="px-2">July 14th</div>
        </div>
      </a>
    </Link>
  );
}

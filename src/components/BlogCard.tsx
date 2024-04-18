import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string | React.JSX.Element | React.JSX.Element[];
  publishedData: string;
};

export const BlogCards = ({
  id,
  authorName,
  title,
  content,
  publishedData,
}: BlogCardProps) => {
  return <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200  p-4 mb-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div className="flex justify-center flex-col">
          <Avatar name={authorName} />
        </div>
        <div className="flex justify-center flex-col font-extralight ml-2">{authorName}</div>
        <div className="flex justify-center flex-col pl-2"><Circle /></div>
        <div className="flex justify-center flex-col pl-2 font-thin text-slate-700">{publishedData}</div>
      </div>
      <div className="font-semibold text-xl mt-2">
        {title}
      </div>
      <div className="text-md font-thin mt-1">
        {/* {content.length > 100 ? content.slice(0, 150) + "..." : content} */}
        {content}
      </div>
      <div className="text-slate-500 text-sm font-normal mt-7">
        {/* {`${Math.ceil(content.length / 60)} minute(s) read`} */}
        { "Few minutes read "}
      </div>
    </div>
  </Link>
}

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>
}

export function Avatar({ name }: { name: string; }) {
  const nameDef = name.split(" ");

  return <div className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-gray-600`}>
    <span className="font-semibold text-gray-600 dark:text-gray-300">{nameDef[0][0].toUpperCase()}</span>
  </div>

}
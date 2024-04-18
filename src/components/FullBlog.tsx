import { Blog } from "../hooks/index";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import parse from 'html-react-parser';

export const FullBlog = ({ blog }: { blog: Blog | any }) => {
  return <div>
    <Appbar />
    <div className="flex justify-center pt-5">
      <div className="md:grid grid-cols-12 px-10 w-screen-xl pt-200">
        <div className="md:col-span-8">
          <div className="text-5xl font-extrabold">
            {blog.title}
          </div>
          <div className="text-slate-500 pt-2">
            Posted on 1st January 2023
          </div>
          <div className="pt-4 text-slate-800 text-xl">
            {parse(blog.content)}
          </div>
        </div>
        <div className="col-span-4">
          <div className="mt-10 md:mt-0 text-slate-600">
            About the author
            <div className="border-2 p-2 mt-2">
              <div className="flex pt-2">
                <div className="flex justify-center flex-col mr-2">
                  <Avatar name={blog.author.name} />
                </div>
                <div className="flex justify-center flex-col text-slate-800 text-2xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
              </div>
              <div className="pt-4 text-slate-500">
                Random catch phrase about the author's ability to grab the user's attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
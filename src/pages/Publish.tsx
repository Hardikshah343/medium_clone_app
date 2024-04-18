import { Appbar } from "../components/Appbar";
import { QuillTextEditor } from "../components/QuillTextEditor";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  return <div>
    <Appbar />
    <div className="flex justify-center">
      <div>
        <div className="p-5 max-w-screen-lg w-full">
          <label className="block mb-2 text-sm font-medium text-gray-500 text-center">Enter the title of blog</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="max-w-screen-lg w-full">
          <label className="block mb-1 text-sm font-medium text-gray-500 text-center">Blog</label>
          <div className="ml-4 mr-4">
            <QuillTextEditor content={content} setContent={setContent} />
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="mt-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
            focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
        onClick={() => {
          axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content,
          }, {
            headers: {
              Authorization: localStorage.getItem("token"),
            }
          }
          )
            .then(response => {
              console.log(response);
              alert("Blog created successfully.");
              navigate(`/blog/${response.data.id}`)
            })
            .catch((e) => {
              alert("Something went wrong, blog might be created. If there is a image then it may show error but blog is created. Maybe check out at home page")
              console.log(e);
            })
        }}
      >Publish Post</button>
    </div>
  </div >
}
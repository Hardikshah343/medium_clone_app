import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

export const QuillTextEditor = ({content, setContent}: {content: any, setContent:any}) => {
  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white"
  ];
  
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
      [{ background: myColors }]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align"
  ];

  
  const handleProcedureContentChange = (content: any) => {    
    setContent(content);
  };

  return (
    <>      
      <ReactQuill
        placeholder="Write the blog here"
        theme="snow"
        modules={modules}
        formats={formats}
        value={content}
        onChange={handleProcedureContentChange}
      />
    </>
  );
}

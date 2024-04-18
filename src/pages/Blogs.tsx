import { Appbar } from "../components/Appbar";
import { BlogCards } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
import parse, { attributesToProps, Element, HTMLReactParserOptions, } from 'html-react-parser';

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
      <Appbar />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </div>
  }
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      const typedDomNode = domNode as Element
  
      if (typedDomNode.attribs && typedDomNode.name === 'a') {
        return (
          <a
            {...attributesToProps(typedDomNode.attribs)}
            className="underline text-primary-500"
            target="_blank"
          >
            {/* {typedDomNode.children && domToReact(typedDomNode.children, options)} */}
          </a>
        )
      }
  
      return false
    },
  };

  return <div>
    <Appbar />
    <div className="flex justify-start md:justify-center max-w-screen-xl">
      <div className="max-w-xl p-2">
        {
          blogs.map(blog => <div key={blog.id}>
            <BlogCards
              id={blog.id}
              authorName={blog.author.name || "Anonymous User"}
              title={blog.title}
              content={parse(blog.content, options)}
              publishedData={"01st January 2024"}
            />            
        </div>)
}
      </div>
    </div>
  </div>
}

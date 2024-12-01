import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CardBlog from "../../../components/card/CardBlog";
import blogs from "../../../data/blogs";

//type Props = {};

const BlogPage: React.FC = () => {
  return (
    <>
      <Breadcrumbs title="Blog" subtitle="Blog" />
      <section className="ftco-section flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {blogs.map((blog, index) => (
              <CardBlog
                key={index}
                title={blog.title}
                content={blog.content}
                comments={blog.comments}
                user={blog.user}
                img={blog.img}
                delay={0.1 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

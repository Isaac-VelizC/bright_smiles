import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CardBlog from "../../../components/card/CardBlog";
import Blog from "../../../interfaces/Blog";
import { useData } from "../../../context/ContextApi";
import Loading from "../../../components/Loading";

//type Props = {};

const BlogPage: React.FC = () => {
  const { blogs, loading } = useData();

  if (loading || !blogs) {
    return <Loading/>
  }

  return (
    <>
      <Breadcrumbs title="Blog" subtitle="Blog" />
      <section className="ftco-section flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {blogs.map((blog: Blog, index: number) => (
              <CardBlog
                key={index}
                data={blog}
                comments={4}
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

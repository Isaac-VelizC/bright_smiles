import React, { useEffect, useState } from "react";
import CardFooterBlog from "../../../components/card/CardFooterBlog";
import { useParams } from "react-router-dom";
import Blog from "../../../interfaces/Blog";
import Loading from "../../../components/Loading";
import Error404 from "../../errors/404";
import { getBlogById } from "../../../db/request";
import { useData } from "../../../context/ContextApi";

const showBlogPage: React.FC = () => {
  const { blogs } = useData();
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Validar ID y obtener tratamiento
  useEffect(() => {
    const fetchTreatment = async () => {
      if (!id || isNaN(Number(id))) {
        setBlog(null);
        setLoading(false);
        return;
      }

      try {
        const fetchedBlog = await getBlogById(Number(id));
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("Error fetching treatment:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatment();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!blog) {
    return <Error404 />;
  }

  return (
    <main className="">
      <section className="py-0 md:py-8 mt-0 md:mt-10 ftco-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 text-sm md:text-base text-gray-500 tracking-wide space-y-4">
              <h2 className="text-2xl md:text-4xl mb-3 text-textPrimary tracking-normal">
                {blog.title}
              </h2>

              <p>{blog.content}</p>

              {/* Tag Cloud */}
              <div className="mt- mb-5">
                <div className="flex space-x-2 mt-6">
                  {["Life", "Sport", "Tech", "Travel"].map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="border text-textPrimary px-3 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 p-4">
              {/* Search Form */}
              <div className="mb-6">
                <form action="#" className="flex items-center mt-2">
                  <input
                    type="text"
                    placeholder="Type a keyword and hit enter"
                    className="border-y border-l border-textPrimary px-2 py-3 flex-grow placeholder:text-sm focus:border-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 border-r border-y border-textPrimary"
                  >
                    <span className="icon-search"></span>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Category</h3>
                <ul className="pl-4">
                  {[
                    "Neurology",
                    "Cardiology",
                    "Surgery",
                    "Dental",
                    "Ophthalmology",
                  ].map((category, index) => (
                    <div key={index}>
                      <li
                        key={category}
                        className="flex justify-between py-2 font-medium text-sm"
                      >
                        <a href="#" className="text-secondary">
                          {category}
                        </a>
                        <span className="text-gray-400">(6)</span>
                      </li>
                      <hr />
                    </div>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-medium mb-4">Popular Articles</h3>
                {blogs.slice(0, 3).map((blog, index) => (
                  <CardFooterBlog
                    key={index}
                    data={blog}
                    comments={23}
                    colorText="hover:text-gray-500"
                  />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default showBlogPage;

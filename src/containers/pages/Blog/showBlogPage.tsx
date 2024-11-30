import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CardFooterBlog from "../../../components/card/CardFooterBlog";

const showBlogPage: React.FC = () => {
  return (
    <main className="">
      <Breadcrumbs title="Blog" />
      <section className="py-0 md:py-8 mt-0 md:mt-10 ftco-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 text-sm md:text-base text-gray-500 tracking-wide space-y-4">
              <h2 className="text-2xl md:text-4xl mb-3 text-textPrimary tracking-normal">
                #2. Creative WordPress Themes
              </h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam
                obcaecati rerum, eius aut, in. Exercitationem atque quidem
                tempora maiores ex architecto voluptatum aut officia doloremque.
                Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                earum nisi consequatur quos odit quasi repellat qui officiis
                reiciendis incidunt hic non? Debitis commodi aut, adipisci.
              </p>
              <img
                src="/images/image_2.jpg"
                alt=""
                className="w-full h-auto rounded-lg"
              />
              <p>
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
                tenetur tempore, nisi culpa voluptate maiores officiis quis vel
                ab consectetur suscipit veritatis nulla quos quia aspernatur
                perferendis, libero sint. Error, velit, porro. Deserunt minus,
                quibusdam iste enim veniam, modi rem maiores.
              </p>
              <p>
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
                quo velit commodi rerum eum quidem pariatur! Quia fuga iste
                tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro
                explicabo soluta commodi libero voluptatem similique id quidem?
                Blanditiis voluptates aperiam non magni. Reprehenderit nobis
                odit inventore, quia laboriosam harum excepturi ea.
              </p>
              <p>
                Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam
                ipsam quidem, dolor distinctio similique asperiores voluptas
                enim, exercitationem ratione aut adipisci modi quod quibusdam
                iusto, voluptates beatae iure nemo itaque laborum. Consequuntur
                et pariatur totam fuga eligendi vero dolorum provident.
                Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus
                culpa, tenetur recusandae!
              </p>
              <p>
                Voluptas dolores dignissimos dolorum temporibus, autem aliquam
                ducimus at officia adipisci quasi nemo a perspiciatis provident
                magni laboriosam repudiandae iure iusto commodi debitis est
                blanditiis alias laborum sint dolore. Dolores, iure,
                reprehenderit. Error provident, pariatur cupiditate soluta
                doloremque aut ratione. Harum voluptates mollitia illo minus
                praesentium, rerum ipsa debitis, inventore?
              </p>

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
                <CardFooterBlog
                  title="Even the all-powerful Pointing has no control about"
                  img="/images/image_1.jpg"
                  date="Sept. 20, 2019"
                  enlace="#"
                  comments={23}
                  user="Admin"
                  colorText="hover:text-gray-500"
                />
                <CardFooterBlog
                  title="Even the all-powerful Pointing has no control about"
                  img="/images/image_2.jpg"
                  date="Sept. 20, 2019"
                  enlace="#"
                  comments={19}
                  user="Admin"
                  colorText="hover:text-gray-500"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default showBlogPage;

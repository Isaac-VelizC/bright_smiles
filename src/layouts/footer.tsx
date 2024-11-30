import React from "react";
import SocialFooter from "../components/social/SocialFooter";
import LinkFooter from "../components/link/LinkFooter";
import CardFooterBlog from "../components/card/CardFooterBlog";
import SubscribeForm from "../components/form/SubscribreForm";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="text-sm md:px-20 bg-secondary text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Column 1 */}
          <div>
            <h2 className="mb-6 text-lg md:text-xl font-semibold">Dentista</h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <h2 className="mt-10 mb-6 text-lg md:text-xl font-semibold">
              Have a Questions?
            </h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center">
                <span className="icon icon-map-marker mr-2"></span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center">
                <span className="icon icon-phone mr-2"></span>
                +2 392 3929 210
              </li>
              <li className="flex items-center">
                <span className="icon icon-envelope mr-2"></span>
                info@yourdomain.com
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <SocialFooter icon="twitter" />
              <SocialFooter icon="facebook" />
              <SocialFooter icon="instagram" />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="mb-6 text-lg md:text-xl font-semibold">Links</h2>
            <ul className="space-y-3">
              <LinkFooter name="Home" />
              <LinkFooter name="About" />
              <LinkFooter name="Services" />
              <LinkFooter name="Contact" />
            </ul>
            <h2 className="mt-10 mb-6 text-lg md:text-xl font-semibold">
              Services
            </h2>
            <ul className="space-y-3">
              <LinkFooter name="Neurology" />
              <LinkFooter name="Dentist" />
              <LinkFooter name="Ophthalmology" />
              <LinkFooter name="Cardiology" />
              <LinkFooter name="Surgery" />
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="mb-6 text-lg md:text-xl font-semibold">
              Recent Blog
            </h2>
            <CardFooterBlog
              title="Even the all-powerful Pointing has no control about"
              img="/images/image_1.jpg"
              date="Sept. 20, 2019"
              enlace="#"
              comments={23}
              user="Admin"
            />
            <CardFooterBlog
              title="Even the all-powerful Pointing has no control about"
              img="/images/image_2.jpg"
              date="Sept. 20, 2019"
              enlace="#"
              comments={19}
              user="Admin"
            />
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="mb-6 text-lg md:text-xl md:mt-6 lg:mt-0 font-semibold">
              Opening Hours
            </h2>
            <h3 className="text-base flex items-center">
              <span className="icon-av_timer mr-2"></span>We are open 24/7
            </h3>
            <h2 className="mt-10 mb-6 text-lg md:text-xl font-semibold">
              Subscribe Us!
            </h2>
            <SubscribeForm />
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-xs md:text-sm text-white/80">
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            Made with <i className="icon-heart" aria-hidden="true"></i> by{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              AIsakVeliz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

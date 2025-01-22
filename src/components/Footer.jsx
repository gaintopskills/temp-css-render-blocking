import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TiktokIcon } from "../assets/icons/TiktokIcon";

const footerData = [
  {
    title: "Services",
    items: [
      "Embroidery",
      "Screen Printing",
      "DTG",
      "Digital Sublimation",
      "Heat Transfer",
      "Cut & Sew",
      "Blank Apparel",
    ],
  },
  {
    title: "Other Services",
    items: [
      "Custom Patches",
      "Logo Design",
      "Custom Labels & Tags",
      "Private Labeling",
      "Brand Consulting",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      {
        type: "map",
        content: (
          <div className="mt-6">
            <h4 className="text-gray-400 mb-2">Contact Us</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.408420352062!2d-118.23258982341378!3d34.00772592317397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c8954d3aac83%3A0xabb842d065790870!2sE%26R%20Unlimited%20Embroidery!5e0!3m2!1sen!2sus!4v1736545461770!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ),
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10 lg:pt-20 lg:pb-16 bg-black radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Where Quality And Innovation Matter
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Twitter"
                >
                  <TiktokIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="#"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* Footer Columns */}
            <div className="w-full lg:w-2/3 lg:pl-16 hidden lg:flex flex-wrap justify-between">
              
              {/* Services Column */}
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  {footerData[0].title}
                </h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Services Column */}
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  {footerData[1].title}
                </h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column (Includes "Contact Us" with Map) */}
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  {footerData[2].title}
                </h3>
                <ul>
                  {footerData[2].items.map((item, index) => {
                    if (typeof item === "object" && item.type === "map") {
                      return (
                        <li key={`map-${index}`}>
                          {item.content}
                        </li>
                      );
                    }
                    return (
                      <li key={`link-${index}`} className="mb-4">
                        <a
                          className="text-gray-400 hover:text-gray-300"
                          href="#"
                          aria-label={item}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

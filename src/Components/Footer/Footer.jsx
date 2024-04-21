import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 text-white py-6">
      <div className="container mx-auto">
        {/* Information categories */}
        <div className="flex flex-wrap justify-between mb-8">
          {/* Address */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p>Sri Venkateshwara College of Engineering</p>
            <p>Vidyanagar, Kempegowda International Airport Road</p>
            <p>Bengaluru – 562157</p>
          </div>
          {/* Enquiry */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Enquiry</h3>
            <p>
              Email:{" "}
              <a href="mailto:enquiry@svcengg.edu.in">enquiry@svcengg.edu.in</a>
            </p>
            <p>Phone: +919731226262</p>
            <p>Phone: +919740202345</p>
          </div>
          {/* Admissions */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Admissions</h3>
            <p>
              Email:{" "}
              <a href="mailto:admissions@svcengg.edu.in">
                admissions@svcengg.edu.in
              </a>
            </p>
            <p>Phone: +91 9916775988</p>
          </div>
          {/* Examination */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Examination</h3>
            <p>
              Email:{" "}
              <a href="mailto:exams@svcengg.edu.in">exams@svcengg.edu.in</a>
            </p>
            <p>Phone: +91 9901335353</p>
          </div>
        </div>

        {/* Follow Us On */}
        <div className="flex justify-center items-center text-lg font-bold mb-2">
          Follow Us On
        </div>

        {/* Social icons */}
        <div className="flex justify-center items-center">
          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/svcebangalore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/Components/Footer/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/svce_bengaluru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/Components/Footer/Insta.png" alt="Instagram" />
            </a>
            <a
              href="https://x.com/SvceBengaluru?t=_W2I9zhdHZgV8mgTBev73A&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/Components/Footer/twitter.png" alt="Twitter" />
            </a>
            <a
              href="https://www.youtube.com/@svcebangalore2290"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/Components/Footer/youtube.png" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

function PrivacyPage(props) {
  return (
    <div className="w-[90%] mx-auto font-robot mt-5">
      <section className="p-5 text-black bg-gray-50 border rounded space-y-4">
        <h3 className="text-xl font-bold">
          Privacy <span className="text-[#395bef]">Policy</span>
        </h3>
        <p className="text-sm ">
          This privacy policy sets out how Mygsm.me uses and protects any
          information that you give Mygsm.me when you use this website. Mygsm.me
          is committed to ensuring that your privacy is protected. Should we ask
          you to provide certain information by which you can be identified when
          using this website, then you can be assured that it will only be used
          in accordance with this privacy statement. Mygsm.me may change this
          policy from time to time by updating this page. You should check this
          page from time to time to ensure that you are happy with any changes.
        </p>
        <div>
          <h3 className="text-xl font-bold">
            What we <span className="text-[#395bef]">collect</span>
          </h3>
          <p className="text-sm ">We may collect the following information:</p>
          <ul className="text-sm list-disc  pl-5 ">
            <li>name</li>
            <li>contact information including email address</li>
            <li>
              demographic information such as postcode, preferences and
              interests
            </li>
            <li>
              other information relevant to customer surveys and/or offers
            </li>
            <li>What we do with the information we ga</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">
            What we do with{" "}
            <span className="text-[#395bef]">the information </span>
            we gather
          </h3>
          <p className="text-sm ">
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <ul className="text-sm list-disc  pl-5 ">
            <li>Internal record keeping.</li>
            <li>
              We may use the information to improve our products and services.
            </li>
            <li>
              We may periodically send promotional emails about new products,
              special offers or other information which we think you may find
              interesting using the email address which you have provided.
            </li>
            <li>
              From time to time, we may also use your information to contact you
              for market research purposes.
            </li>
            <li>We may contact you by email, phone, fax or mail.</li>
            <li>
              We may use the information to customise the website according to
              your interests.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#395bef]">Security</h3>
          <p className="text-sm ">
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">
            Controlling your{" "}
            <span className="text-[#395bef]">personal information</span>
          </h3>
          <div className="space-y-2">
            <p className="text-sm ">
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so...
            </p>
            <p className="text-sm ">
              You may request details of personal information which we hold
              about you under the Data Protection Act 1998. A small fee will be
              payable. If you would like a copy of the information held on you
              please write to .
            </p>
            <p className="text-sm ">
              If you believe that any information we are holding on you is
              incorrect or incomplete, please write to or email us as soon as
              possible, at the above address. We will promptly correct any
              information found to be incorrect.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPage;

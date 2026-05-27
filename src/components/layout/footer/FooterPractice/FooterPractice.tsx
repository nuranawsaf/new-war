import React from "react";

const FooterPractice = () => {
  const practicedata = [
    {
      title: "Start Here ",
    },
    {
      title: "Style Guide",
    },
    {
      title: "404 Not Found",
    },
    {
      title: "Password Protected",
    },
    {
      title: "Licenses",
    },
    {
      title: "Changelog",
    },
  ];

  return (
    <div className="">
      <h5 className="font-cormorant text-3xl font-bold border-t border-b border-white border-opacity-10 py-6">
        Quick Page
      </h5>
      <div className="mt-8">
        {practicedata.map((item, index) => {
          return (
            <div key={index} className="text-xl mb-4">
              <a href="">{item.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterPractice;

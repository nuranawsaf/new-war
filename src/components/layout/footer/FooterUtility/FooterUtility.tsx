import React from "react";

const FooterUtility = () => {
  const utilitypagedata = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Contact",
    },
    {
      title: "Blog",
    },
    {
      title: "Blog Post",
    },
    {
      title: "Lawyers",
    },
  ];

  return (
    <div>
      <h5 className="font-cormorant text-3xl font-bold border-t border-b border-white border-opacity-10 py-6">
        Utility Link
      </h5>

      <div className="mt-8">
        {utilitypagedata.map((item, index) => {
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

export default FooterUtility;

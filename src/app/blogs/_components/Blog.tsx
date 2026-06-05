import { blogdata } from "./blog-data";

const Blog = () => {
  return (
    <div>
      <div className="lg:h-[426px] bg-style blog-bg flex items-end pb-8"></div>

      <div className="container my-16">
        <div className="grid lg:grid-cols-3 gap-6 gap-y-20">
          {blogdata.map((item) => (
            <div key={item.id}>
              <img
                className="border-b pb-6 border-opacity-30"
                src={item.img}
                alt=""
              />
              <h5 className="text-2xl font-cormorant mt-2">{item.title}</h5>
              <p className="text-base text-gray-300 pt-3">Medium: {item.des}</p>
              <p className="text-base text-gray-300">Size: {item.size}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

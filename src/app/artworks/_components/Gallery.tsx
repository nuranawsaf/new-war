"use client";

import { useMemo, useState } from "react";
import imgData from "./imgdata";
import Image from "next/image";
import FooterImage from "@/components/footer-img";

export default function FilterableGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortType, setSortType] = useState("Newest");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filters = ["All", "Water Color", "Acrylic", "Sketch", "Digital"];

  // Filter + Sort Logic
  const filteredItems = useMemo(() => {
    let items =
      activeFilter === "All"
        ? [...imgData]
        : imgData.filter((item) => item.category === activeFilter);

    // Sorting
    if (sortType === "Newest") {
      items.reverse();
    }

    return items;
  }, [activeFilter, sortType]);

  return (
    <div>
      <div className="lg:h-[426px] bg-style blog-bg flex items-end pb-8"></div>
      <div className="min-h-screen  container py-14 ">
        <div className="">
          <div className="flex flex-col items-center justify-between gap-5 rounded-xl border border-slate-700 bg-[#111827] p-5 md:flex-row">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-md  px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? "border-[#d8b46a]  text-[#d8b46a] font-bold border"
                      : "  text-gray-400 hover:border-yellow-500 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-white outline-none"
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          {/* Gallery */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer overflow-hidden  lg:pb-8   transition-all duration-300 hover:-translate-y-2 "
              >
                <div className="overflow-hidden border-b-[0.5px] border-gray-600 pb-4">
                  <img
                    src={item.url}
                    alt={item.category}
                    width={500}
                    height={350}
                    className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 "
                  />
                </div>
                {/* Content */}
                <div className="pt-4">
                  <h2 className="font-serif text-2xl leading-tight text-white">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm text-gray-300">
                    Medium: {item.medium}
                  </p>

                  <p className="text-sm text-gray-300">Size: {item.size}</p>

                  <div className="mt-8 flex items-center justify-between">
                    {item.tag === "In Stock" && (
                      <>
                        <button className="rounded bg-[#d4b062] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                          🛒 Add to Cart
                        </button>

                        <span className="font-serif text-4xl text-white">
                          {item.price}
                        </span>
                      </>
                    )}

                    {item.tag === "Not For Sale" && (
                      <button className="rounded bg-[#2a2f3b] px-10 py-3 text-sm text-[#d8b46a]">
                        Not For Sale
                      </button>
                    )}

                    {item.tag === "Sold Out" && (
                      <button className="rounded bg-[#d86f6f] px-10 py-3 text-sm text-white">
                        Sold Out
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="relative max-w-5xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-3 -top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-lg transition hover:scale-110"
              >
                ✕
              </button>

              {/* Large Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.category}
                className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
              />

              {/* Details */}
              <div className="mt-4 rounded-xl bg-slate-900 p-5 text-white">
                <h2 className="text-2xl font-bold">
                  {selectedImage.title || "Artwork"}
                </h2>

                <p className="mt-2 text-slate-300">
                  Category: {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <FooterImage />
      </div>
    </div>
  );
}

import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div href="#" className="group block aspect-w-2 aspect-h-2">
      <img
        src={image}
        alt=""
        className="w-full object-contain sm:h-[450px] aspect-square"
      />

      <div className="mt-1.5">
        <p className="text-xs text-gray-500">Space Grey</p>

        <div className="mt-1.5 flex gap-1">
          <form>
            <fieldset>
              <legend className="sr-only">Color</legend>
            </fieldset>

            <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
              <div>
                <input type="checkbox" className="sr-only" />

                <label className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100">
                  <span className="sr-only"> Space Gray </span>
                </label>
              </div>

              <div>
                <input type="checkbox" className="sr-only" />

                <label className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100">
                  <span className="sr-only"> Silver </span>
                </label>
              </div>

              <div>
                <input type="checkbox" className="sr-only" />

                <label className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100">
                  <span className="sr-only"> Pink </span>
                </label>
              </div>

              <div>
                <input type="checkbox" className="sr-only" />

                <label className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100">
                  <span className="sr-only"> Pink </span>
                </label>
              </div>

              <div>
                <input type="checkbox" className="sr-only" />

                <label className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100">
                  <span className="sr-only"> Pink </span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-3 flex justify-between text-sm">
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            Small Headphones
          </h3>

          <p className="text-gray-900">{price + " $"} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

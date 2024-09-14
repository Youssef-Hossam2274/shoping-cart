import PropTypes from "prop-types";
export default function AddProduct({ handleSubmit }) {
  return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center justify-between">
          <div className="flex gap-16">
            <label className="input input-bordered flex items-center gap-2">
              Product Name
              <input
                type="text"
                className="grow"
                placeholder="Enter Product Name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Price
              <input type="number" className="grow" placeholder="Enter Price" />
            </label>
          </div>

          <button className="btn btn-active btn-neutral" type="submit">
            Add Product
          </button>
        </div>
      </form>
  );
}

AddProduct.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

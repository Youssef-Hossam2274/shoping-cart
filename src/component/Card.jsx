import PropTypes from "prop-types";

export default function Card({
  id,
  name,
  price,
  items,
  handleChangeItems,
  handleRemoveItem,
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex items-center justify-between">
          <button
            className="btn btn-outline"
            onClick={() => handleChangeItems(id, 1)}
          >
            +
          </button>
          <div>
            <p className=" w-fit">Items : {items}</p>
          </div>
          <button
            className="btn btn-outline"
            onClick={() => handleChangeItems(id, -1)}
          >
            -
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span>Total :{price * items} $</span>
          <button
            className="btn btn-outline btn-error"
            onClick={() => handleRemoveItem(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  handleChangeItems: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

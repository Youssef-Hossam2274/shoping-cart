import Card from "./Card";
import PropTypes from "prop-types";

export default function CardList({
  allCards,
  handleChangeItems,
  handleRemoveItem,
}) {
  return (
    <div className="flex  gap-5 flex-wrap items-center justify-center ">
      {allCards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            price={card.price}
            items={card.items}
            handleChangeItems={handleChangeItems}
            handleRemoveItem={handleRemoveItem}
          />
        );
      })}
    </div>
  );
}

CardList.propTypes = {
  allCards: PropTypes.array.isRequired,
  handleChangeItems: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

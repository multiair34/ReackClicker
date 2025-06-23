import { useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../GameArea/selectors";
import { getBuyItems } from "./selectors";
import { gameAreaActions } from "../GameArea/gameArea.slice";
import { shopActions } from "./shop.slice";

const firstItemCategory = "Сurrency";
const secondItemCategory = "Beer Buff";
const lastItemCategory = "PassiveMoney";
const testCategory = "colorTheme";

const shopItems = {
  [firstItemCategory]: [
    {
      name: "dollars",
      description: "Увеличивает стоимость тапа 1 к 1",
      price: 5,
    },
    { name: "euros", price: 10 },
    { name: "rubles", price: 15 },
  ],
  [secondItemCategory]: [
    { name: "stella", description: "Увеличивает пассивный доход", price: 30 },
    { name: "efes", description: "Увеличивает пассивный доход", price: 60 },
    { name: "bud", description: "Увеличивает пассивный доход", price: 90 },
  ],
  [lastItemCategory]: [
    { name: "1", price: 0 },
    { name: "2", price: 20 },
    { name: "3", price: 30 },
  ],
  [testCategory]: [
    { name: "Theme default", price: 0 },
    { name: "Theme orange", price: 20 },
    { name: "Theme green", price: 30 },
  ],
};

export default function Shop() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const coins = useSelector(getCoins);
  const buyItems = useSelector(getBuyItems);
  const [activeCategory, setActiveCategory] = useState(firstItemCategory);

  const onClickBuyButton = (item) => {
    const alreadyBought = buyItems.includes(item.name);
    const canAfford = coins >= item.price;

    if (!alreadyBought && canAfford) {
      dispatch(gameAreaActions.setCoins(coins - item.price));
      dispatch(shopActions.purchasedItem(item.name));
    }
  };

  return (
    <div className={`shop ${theme}_shop`}>
      <ul className="category">
        {Object.keys(shopItems).map((category) => (
          <li
            key={category}
            className={`category_item ${theme}_category_item`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="shop_items">
        <div>
          {shopItems[activeCategory].map((item) => {
            const isBought = buyItems.includes(item.name);
            const canBuy = coins >= item.price;

            return (
              <li key={item.name} className={isBought ? "purchased" : ""}>
                <span>{item.name}</span>
                {item.description}
                <div>
                  <span>{item.price}</span>
                  <button
                    disabled={isBought || !canBuy}
                    onClick={() => onClickBuyButton(item)}
                  >
                    {isBought ? "Приобретенно" : "Купить"}
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

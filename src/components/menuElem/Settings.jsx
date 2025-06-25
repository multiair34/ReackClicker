import { useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../GameArea/selectors";
import { getBuyItems } from "../Shop/selectors";
import { gameAreaActions } from "../GameArea/gameArea.slice";
import { shopActions } from "../Shop/shop.slice";

const colorsTheme = [
  { name: "default", price: 0 },
  { name: "orange", price: 10 },
  { name: "green", price: 15 },
];

export default function Settings() {
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const coins = useSelector(getCoins);
  const buyItems = useSelector(getBuyItems);

  // изменить, такая функция уже есть
  const onBuyTheme = (item) => {
    const alreadyBought = buyItems.includes(item.name);
    const canAfford = coins >= item.price;

    if (!alreadyBought && canAfford) {
      dispatch(gameAreaActions.setCoins(coins - item.price));
      dispatch(shopActions.purchasedItem(item.name));
    }
  };

  const selectTheme = (e) => {
    console.log(setTheme(e.target.value));
    setTheme(e.target.value);
  };
  //  checked на стандартную тему
  return (
    <div className="menu_settings">
      <h2 className="menu-settings__title">Настройки темы</h2>
      <div>
        {colorsTheme.map((item) => (
          <div key={item.name} className="menu-settings__item">
            <label className="menu-settings__label">
              <input
                disabled={item.price > 0 && !buyItems.includes(item.name)}
                type="radio"
                name="ThemeColor"
                value={item.name}
                onClick={selectTheme}
              />
              <span className="menu-settings__theme-name">{item.name}</span>
            </label>
            <div className="menu-settings__controls">
              <span className="menu-settings__price">{item.price} монет</span>
              <button
                onClick={() => onBuyTheme(item)}
                className="menu-settings__button"
              >
                {buyItems.includes(item.name)
                  ? "Приобретено"
                  : item.price > 0
                  ? "Купить"
                  : "Приобретено"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";
import { useShop } from "../../providers/ShopProvider";

export default function Settings() {
  const { setTheme } = useTheme();
  const { buyItems } = useShop();

  const selectTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="menu_settings">
      <label className="menu_settings-item">
        <p>Цвет заднего фона</p>
        <div>
          <div className="menu_settings-item_buy">
            <p>Стандартный</p>
            <input
              type="radio"
              name="ThemeColor"
              value="default"
              onClick={selectTheme}
            />
            <button className="buy_button">Купить</button>
          </div>
          <div className="menu_settings-item_buy">
            <p>Оранжевый</p>
            <input
              disabled
              type="radio"
              name="ThemeColor"
              value="orange"
              onClick={selectTheme}
            />
            <button className="buy_button">Купить</button>
          </div>
          <div className="menu_settings-item_buy">
            <p>Зеленый</p>
            <input
              disabled
              type="radio"
              name="ThemeColor"
              value="green"
              onClick={selectTheme}
            />
            <button className="buy_button">Купить</button>
          </div>

          {/* {buyItems.includes("Theme orange") && (
            <div className="menu_settings-item_buy">
              Оранжевый
              <input
                type="radio"
                name="ThemeColor"
                value="orange"
                onClick={selectTheme}
              />
            </div>
          )}

          {buyItems.includes("Theme green") && (
            <div className="menu_settings-item_buy">
              Зеленый
              <input
                type="radio"
                name="ThemeColor"
                value="green"
                onClick={selectTheme}
              />
            </div>
          )} */}
        </div>
      </label>
    </div>
  );
}

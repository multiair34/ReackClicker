import { useShop } from "../../providers/ShopProvider";
import { useDispatch, useSelector } from "react-redux";
import { getCoins, getTaps } from "./selectors";
import { gameAreaActions } from "./gameArea.slice";

export default function GameArea() {
  const { buyItems } = useShop();
  const dispatch = useDispatch();
  const taps = useSelector(getTaps);
  const coins = useSelector(getCoins);

  const onNoneBoost = () => {
    dispatch(gameAreaActions.setTaps(taps + 1));

    if (taps % 2) {
      dispatch(gameAreaActions.setCoins(coins + 1));
    }
  };

  const onFirstBoost = () => {
    dispatch(gameAreaActions.setTaps(taps + 2));
    dispatch(gameAreaActions.setCoins(coins + 1));
  };

  const onSecondBoost = () => {
    dispatch(gameAreaActions.setTaps(taps + 4));
    dispatch(gameAreaActions.setCoins(coins + 2));
  };

  const onLastBoost = () => {
    dispatch(gameAreaActions.setTaps(taps + 10));
    dispatch(gameAreaActions.setCoins(coins + 5));
  };

  const onClickTap = () => {
    const boosts = buyItems.filter((item) =>
      ["dollars", "euros", "rubles"].includes(item)
    );
    if (!boosts.length) {
      return onNoneBoost();
    }
    const boostMap = {
      dollars: onFirstBoost,
      euros: onSecondBoost,
      rubles: onLastBoost,
    };
    boosts.forEach((item) => boostMap[item]());
  };

  return (
    <div className="game-area">
      <div className="stats">
        <h2>{taps} taps</h2>
        <h3>{`${coins} ${coins === 1 || coins === 0 ? "coin" : "coins"}`}</h3>
        <h4>passiveMoney</h4>
      </div>
      <img
        onClick={onClickTap}
        src="react.svg"
        alt="tap"
        className="tap_item"
      />
    </div>
  );
}

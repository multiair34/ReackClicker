import { useDispatch, useSelector } from "react-redux";
import { getCoins, getPassiveMoney, getTaps } from "./selectors";
import { gameAreaActions } from "./gameArea.slice";
import { getBuyItems } from "../Shop/selectors";
import { useEffect } from "react";

export default function GameArea() {
  const buyItems = useSelector(getBuyItems);
  const dispatch = useDispatch();
  const taps = useSelector(getTaps);
  const coins = useSelector(getCoins);
  const passiveMoney = useSelector(getPassiveMoney);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(gameAreaActions.setCoins((prev) => prev + passiveMoney));
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch, passiveMoney]);

  useEffect(() => {
    let total = 0;
    if (buyItems.includes("passive1")) total += 1;
    if (buyItems.includes("passive2")) total += 2;
    if (buyItems.includes("passive3")) total += 5;

    dispatch(gameAreaActions.setPassiveMoney(total));
  }, [buyItems, dispatch]);

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
        <h4>{passiveMoney}</h4>
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

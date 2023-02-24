import { ReactComponent as SvgRightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as SvgLeftArrow } from "assets/icons/left-arrow.svg";

// 傳遞值：切換步驟事

function ProgressControl({ phaseNum, setPhaseNum }) {
  // console.log({ phaseNum, setPhaseNum });
  function handleOnClick(action) {
    // 排除換頁例外：數值只能在1-3之間，步驟1沒有上一步，步驟3沒有下一步
    if (action === "prev") {
      if (phaseNum === 1) return;
      setPhaseNum((num) => num - 1);
    } else if (action === "next") {
      if (phaseNum === 3) return;
      setPhaseNum((num) => num + 1);
    }
  }
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button
          className="next cursor-point"
          onClick={() => handleOnClick("next")}
        >
          下一步
          <svg>
            <SvgRightArrow />
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button
          className="prev cursor-point"
          onClick={() => handleOnClick("prev")}
        >
          <svg>
            <SvgLeftArrow />
          </svg>
          上一步
        </button>
        <button
          className="next cursor-point"
          onClick={() => handleOnClick("next")}
        >
          下一步
          <svg>
            <SvgRightArrow />
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button
          className="prev cursor-point"
          onClick={() => handleOnClick("prev")}
        >
          <svg>
            <SvgLeftArrow />
          </svg>
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  );
}
export default ProgressControl;

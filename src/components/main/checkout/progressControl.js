import { ReactComponent as SvgRightArrow } from "../../../image-resource/icons/right-arrow.svg";
import { ReactComponent as SvgLeftArrow } from "../../../image-resource/icons/left-arrow.svg";


export default function progressControl(){
  return (
      <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <svg className="cursor-point">
          <SvgRightArrow/>
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          <svg className="cursor-point">
          <SvgLeftArrow/>
          </svg>
          上一步
        </button>
        <button className="next">
          下一步
          <svg className="cursor-point">
          <SvgRightArrow/>
          </svg>
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <svg className="cursor-point">
          <SvgLeftArrow/>
          </svg>
          上一步
        </button>
        <button className="next">
          確認下單
        </button>
      </section>
    </section>
  )
}
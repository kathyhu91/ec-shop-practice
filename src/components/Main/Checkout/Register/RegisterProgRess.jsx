import { ReactComponent as SvgPgComplete } from "assets/icons/pg-complete.svg";

function ProgressGroup({ phase, stepNum, label }) {
  return (
    <span className="progress-group" data-phase={phase}>
      <span className="progress-icon">
        <span className="text">{stepNum}</span>
        <svg className="icon cursor-point">
          <SvgPgComplete />
        </svg>
      </span>
      <span className="progress-label">{label}</span>
    </span>
  );
}

function ProgressBar({ stepNum }) {
  return <span className="progress-bar" data-order={stepNum}></span>;
}

function RegisterProcess() {
  return (
    <section className="progress-container col col-12">
      <ProgressGroup phase="address" stepNum={1} label="寄送地址" />
      <ProgressBar stepNum={1} />
      <ProgressGroup phase="shipping" stepNum={2} label="運送方式" />
      <ProgressBar stepNum={2} />
      <ProgressGroup phase="credit-card" stepNum={3} label="付款資訊" />
    </section>
  );
}

export default RegisterProcess;

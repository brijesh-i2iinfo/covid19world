import { states } from "./constants";
import { ArrowUpOutlined } from "@ant-design/icons";
import "../utils/default.css";

function StateLabelCell({ record, index }) {
  return (
    <div className="t-left">
      <p>{record && record[0] && states[record[0]]}</p>
    </div>
  );
}

function ConfiremedCell({ record }) {
  const deltaConf = record && record[1] && record[1].delta.confirmed;
  const totalConf =
    record &&
    record[1] &&
    record[1].total.confirmed
      ?.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="t-end">
      <div className="t-end is-confirmed">
        {deltaConf > 0 ? <ArrowUpOutlined /> : ""}
        <span>{deltaConf}</span>
      </div>
      <span>{totalConf}</span>
    </div>
  );
}

function ActivesCell({ record }) {
  const totalConf =
    record &&
    record[1] &&
    record[1].total.confirmed
      ?.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="t-end">
      <span>{totalConf}</span>
    </div>
  );
}

function RecoveredCell({ record }) {
  const deltarecovered = record && record[1] && record[1].delta.recovered;
  const totalrecovered =
    record &&
    record[1] &&
    record[1].total.recovered
      ?.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="t-end">
      <div className="is-recovered">
        <ArrowUpOutlined />
        <span>{deltarecovered}</span>
      </div>
      <span>{totalrecovered}</span>
    </div>
  );
}

function DeceasedCell({ record }) {
  const deltadeceased = record && record[1] && record[1].delta.deceased;
  const totaldeceased =
    record &&
    record[1] &&
    record[1].total.deceased
      ?.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="t-end">
      <div className="is-deceased">
        <ArrowUpOutlined />
        <span>{deltadeceased}</span>
      </div>
      <span>{totaldeceased}</span>
    </div>
  );
}

function TestedCell({ record }) {
  function numDifferentiation(val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    } else if (val >= 1000) val = (val / 1000).toFixed(2) + " K";
    return val;
  }

  const deltatested = record && record[1] && record[1].delta.tested;
  const totaltested = record && record[1] && record[1].total.tested;
  return (
    <div className="t-end">
      <div className="is-tested ">
        <ArrowUpOutlined />
        <span>{numDifferentiation(deltatested)}</span>
      </div>
      <span>{numDifferentiation(totaltested)}</span>
    </div>
  );
}

function VaccineDosesCell({ record }) {
  // Delta vaccinated
  const vaccinated1 = record && record[1] && record[1].delta.vaccinated1;
  const vaccinated2 = record && record[1] && record[1].delta.vaccinated2;

  const deltavaccinated = vaccinated1 + vaccinated2;

  function numDifferentiation(val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    } else if (val >= 1000) val = (val / 1000).toFixed(2) + " K";
    // console.log(val);
    return val;
  }

  // Total vaccinated
  const vaccinated3 = record && record[1] && record[1].total.vaccinated1;
  const vaccinated4 = record && record[1] && record[1].total.vaccinated2;

  const totalvaccinated = vaccinated3 + vaccinated4;
  return (
    <div className="t-end">
      <div className="is-vaccinated">
        <ArrowUpOutlined />
        <span>{numDifferentiation(Math.round(deltavaccinated))}</span>
      </div>
      <span>{numDifferentiation(Math.round(totalvaccinated))}</span>
    </div>
  );
}

export {
  StateLabelCell,
  ConfiremedCell,
  ActivesCell,
  RecoveredCell,
  DeceasedCell,
  TestedCell,
  VaccineDosesCell,
};

/*
function changeNumberFormat(number, decimals, recursiveCall) {
    const decimalPoints = decimals || 2;
    const noOfLakhs = number / 100000;
    let displayStr;
    let isPlural;

    // Rounds off digits to decimalPoints decimal places
    function roundOf(integer) {
        return +integer.toLocaleString(undefined, {
            minimumFractionDigits: decimalPoints,
            maximumFractionDigits: decimalPoints,
        });
    }

    if (noOfLakhs >= 1 && noOfLakhs <= 99) {
        const lakhs = roundOf(noOfLakhs);
        isPlural = lakhs > 1 && !recursiveCall;
        displayStr = `${lakhs} Lakh${isPlural ? 's' : ''}`;
    } else if (noOfLakhs >= 100) {
        const crores = roundOf(noOfLakhs / 100);
        const crorePrefix = crores >= 100000 ? changeNumberFormat(crores, decimals, true) : crores;
        isPlural = crores > 1 && !recursiveCall;
        displayStr = `${crorePrefix} Crore${isPlural ? 's' : ''}`;
    } else {
        displayStr = roundOf(+number);
    }

    return displayStr;
}

*/

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Table, Tag } from "antd";
import { getDaily, getCasesChart } from "../../api/dailyCases/dailyCase";
import {
  StateLabelCell,
  ConfiremedCell,
  ActivesCell,
  RecoveredCell,
  DeceasedCell,
  TestedCell,
  VaccineDosesCell,
} from "../../utils/TableLabelCell";
import { Line } from "@ant-design/plots";
import AutoType from "../../utils/autoType";
import {
  BellOutlined,
  HistoryOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "../../utils/image";
import styles from "../../asset/HomeContant/index.module.scss";

function Home() {
  const caseType = [
    {
      type: "Confirmed",
      addCase: "+ 12,907",
      total: "3,42,85,612",
      // color : #ff073a,
    },
    {
      type: "Active",
      addCase: "+ 12,907",
      total: "1,52,606",
    },
    {
      type: "Recovered",
      addCase: "+ 13,152",
      total: "3,36,61,339 ",
    },
    {
      type: "Deceased",
      addCase: "+ 251",
      total: "4,58,470",
    },
  ];

  const [dailyCases, setdailyCases] = useState(null);
  const [casesChart, setCasesChart] = useState(null);
  const [totalConfirmedCases, setTotalConfirmedCases] = useState([]);
  const [casesReportDate, setTotalCasesReportDate] = useState([]);

  const [data, setData] = useState([]);
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    annotations: [
      {
        type: "regionFilter",
        start: ["min", "median"],
        end: ["max", "0"],
        color: "#F4664A",
      },
      {
        type: "text",
        position: ["min", "median"],
        content: "中位数",
        offsetY: -4,
        style: {
          textBaseline: "bottom",
        },
      },
      {
        type: "line",
        start: ["min", "median"],
        end: ["max", "median"],
        style: {
          stroke: "#F4664A",
          lineDash: [2, 2],
        },
      },
    ],
  };

  useEffect(async () => {
    let totalConfirmedCase = [];
    let totalCaseReportedDate = [];
    let dataObj = [];
    await casesChart?.map((item) => {
      totalConfirmedCase.push(item[1]?.totalConfirmed);
      totalCaseReportedDate.push(item[1]?.reportDate);

      dataObj.push({
        Date: item[1]?.reportDate,
        scales: item[1]?.totalConfirmed,
      });
    });
    setTotalConfirmedCases(totalConfirmedCase);
    setTotalCasesReportDate(totalCaseReportedDate);

    setData(dataObj);
  }, [casesChart]);

  useEffect(async () => {
    try {
      const res1 = await getCasesChart();
      // console.log("getCasesChart", Object.keys(res1.data).map((key) => [key, res1.data[key]]));
      setCasesChart(Object.keys(res1.data).map((key) => [key, res1.data[key]]));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await getDaily();
      setdailyCases(Object.keys(res.data).map((key) => [key, res.data[key]]));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    // console.log(dailyCases);
  }, [dailyCases]);

  const columns = [
    {
      title: "State/UT",
      render: (text, record, index) => (
        <StateLabelCell text={text} record={record} index={index} />
      ),
    },
    {
      title: "Confirmed",
      render: (text, record, index) => (
        <ConfiremedCell text={text} record={record} index={index} />
      ),
    },
    {
      title: "Active",
      render: (text, record, index) => (
        <ActivesCell text={text} record={record} index={index} />
      ),
    },
    {
      title: "Recovered",
      render: (text, record, index) => (
        <RecoveredCell text={text} record={record} index={index} />
      ),
    },
    {
      title: "Deceased",
      render: (text, record, index) => (
        <DeceasedCell text={text} record={record} index={index} />
      ),
    },
    {
      title: "Tested",
      render: (text, record, index) => (
        <TestedCell text={text} record={record} index={index} />
      ),
    },
    {
      title: "Vaccine Doses Administered",
      render: (text, record, index) => (
        <VaccineDosesCell text={text} record={record} index={index} />
      ),
    },
  ];

  const [placeHolder, setPlaceholderData] = useState("");
  const setPlaceHolder = useCallback(
    (data) => {
      setPlaceholderData(data);
    },
    [placeHolder]
  );
  // const placeHolder = useMemo([]);
  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_left}>
          <div className={styles.left_header}>
            <div className={styles.searchbar}>
              <label className={styles.search_state}>
                Search your district or state
              </label>
              <div className={styles.line}></div>
              <div className={styles.search_wrapper}>
                <Input type="text" placeholder={placeHolder} />
                {/* <Typical
                  steps={["Hello", 1000, "Hello world!", 500]}
                  loop={Infinity}
                  wrapper="p"
                /> */}
              </div>
              <AutoType setPlaceHolder={setPlaceHolder} />
              <div className={styles.actions_panel}>
                <div className={styles.action}>
                  <h5>01 Nov, 11:22 AM IST</h5>
                  <div className={styles.bell_icon}>
                    <BellOutlined />
                    <div className={styles.indicator}></div>
                  </div>
                  <div className={styles.timeline_icon}>
                    <HistoryOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cases_card}>
            <div className={styles.card_MapSwitcher}>
              <div className={styles.card_highlight}>
                <div className={styles.is_confirmed}></div>
                <div className={styles.is_active}></div>
                <div className={styles.is_recovered}></div>
                <div className={styles.is_deceased}></div>
              </div>
            </div>
            <div className={styles.card_level}>
              {caseType.map((data) => {
                return (
                  <div key={data.type} className={styles.level_items}>
                    <h5>{data.type}</h5>
                    <h4>{data.addCase}</h4>
                    <h1>{data.total}</h1>
                  </div>
                );
              })}
            </div>
            <div className={styles.minigraph}>
              <div className={styles.svg_parent}>
                {/* <Line {...config}  /> */}
              </div>
            </div>
          </div>
          <div className={styles.vaccinationHeader}>
            <div className={styles.level_vaccinated}>
              <SafetyCertificateOutlined />
              <p>1,06,31,24,205</p>
              <p>vaccine doses administered</p>
            </div>
            <div className={styles.progress_bar_wrapper}>
              <div className={styles.legend}>
                <div className={styles.label_wrapper}>
                  <div style={{ width: "calc(54.9457% - 3rem)" }}></div>
                  <div className={styles.label}>At least one dose </div>
                </div>
                <div
                  className={styles.arrow}
                  style={{ marginLeft: "54.9457%" }}
                >
                  |
                </div>
              </div>
              <div className={styles.progress_bar}>
                <div style={{ marginLeft: "6rem" }}>
                  <span>54.9%</span>
                </div>
              </div>
              <div className={styles.legend_highlighted}>
                <div style={{ marginRight: "50%" }}>|</div>
                <div>
                  <div className={styles.full_vaccinated}>
                    Fully vaccinated (24.8%)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.table_top}>
              <div className={styles.table_top_left}>
                <div className={styles.toggle}>
                  <div className={styles.icon}>
                    <img src={Frame1} alt="Frame1" />
                  </div>
                </div>
                <div className={styles.toggle}>
                  <div className={styles.icon}>
                    <img src={Frame2} alt="Frame2" />
                  </div>
                </div>
                <div className={styles.toggle}>
                  <div className={styles.icon}>
                    <img src={Frame3} alt="Frame3" />
                  </div>
                </div>
                <div className={styles.toggle}>
                  <div className={styles.icon}>
                    <img src={Frame4} alt="Frame4" />
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.toggle}>
                  <div className={styles.icon}>
                    <img src={Frame5} alt="Frame5" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.table_container}>
              <div>
                {dailyCases && (
                  <>
                    <Table
                      columns={columns}
                      dataSource={dailyCases}
                      pagination={false}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.home_left}></div>
      </div>
    </>
  );
}
export default Home;

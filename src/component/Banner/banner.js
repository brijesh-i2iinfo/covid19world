import React from "react";
import { Col, Row } from "antd";
import { WarningOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styles from "../../asset/Banner/index.module.scss";

function Banner() {
  return (
    // <Row>
    //   <Col xs={24}>
        <div className={styles.banner}>
          <div className={styles.banner_wrapper}>
            <WarningOutlined />
            <div className={styles.banner_content}>
              After 18 months of daily updates, we stopped our operations on
              31st October, 2021. You can only view data from January 2020 to
              October 2021 on this website.{" "}
            </div>
            <a href="https://blog.covid19india.org/2021/08/07/end">
              Read more <ArrowRightOutlined />
            </a>
          </div>
        </div>
    //   </Col>
    // </Row>
  );
}

export default Banner;

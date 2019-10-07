import React from 'react'
import { Col } from 'antd';

const Intro = (props) => (
  <Col span={12} style={styles.box450}>
      <h4 style={styles.greyText}>
          {props.content}
      </h4>
      <a href="#" className="btn buttonAction" >
          Pelajari Detail Program
      </a>
  </Col>
)

const styles = {
  box450: {
      height: '450px'
  },
  greyText: {
      color: '#808080',
  }
}

export default Intro
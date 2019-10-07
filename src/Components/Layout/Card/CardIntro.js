import React from 'react'
import { Col } from 'antd';


const Card = (props) => (
  <Col span={12}>
    <div className="card text-center">
        <img src={props.imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p>{props.subtitle}</p>
            <a href="#" className="btn buttonAction">Mulai Belajar</a>
        </div>
    </div>
  </Col>
)

export default Card
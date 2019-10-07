import React from 'react';
import CardIntro from '../../../Components/Layout/Card/CardIntro';
import Intro from '../../../Components/Layout/Intro/Intro';
import { Row, Col } from 'antd';
import Container from '../../../Components/Layout/Container/Container';

const intro = {
  content: `Premium Online Course merupakan platform 
  belajar coding online yang dikemas secara 
  interaktif dengan beragam media belajar. 
  Kamu bisa belajar dan mengembangkan skill 
  pemrograman melalui program ini. Kami telah 
  menyusun kurikulum dan materi belajar pada 
  setiap course dengan alur yang sangat jelas 
  sehingga bisa diikuti oleh siapa saja. 
  Kamu tak perlu bingung lagi bagaimana cara 
  memulai belajar pemrograman. Pilih jalur 
  belajarmu, mulai belajar coding sekarang dan 
  jadilah developer prefessional!`,
}

const features = [
  {title: 'Materi Belajar',   desc: 'Materi belajar disusun secara sistematis dengan metode dan teknologi terbaru. Materi belajar menggunakan berbagai media.'},
  {title: 'Waktu Belajar',    desc: 'Waktu belajar sangat fleksibel. Kamu bisa menyesuaikan waktu belajarmu dengan kesibukan yang kamu miliki.'},
  {title: 'Metode Belajar',   desc: 'Kamu hanya perlu mengikuti alur belajar yang telah disediakan dengan membaca teks penjelasan, memutar video belajar dan mencoba sendiri.'},
]

const cards = [
  {title: 'Menjadi Web Programmer', imageUrl: 'https://www.codepolitan.com/themes/belajarcoding/assets/img/jalur-1.jpg'},
  {title: 'Belajar Pemrograman PHP', imageUrl: 'https://www.codepolitan.com/themes/belajarcoding/assets/img/jalur-php.jpg'},
]

const Premium = () => (
  <Container>
      <h1 style={{ textAlign: 'center'}}>PREMIUM ONLINE COURSE</h1>
          <Row gutter={16} style={{marginTop: 40, marginBottom: 100}}>
              <Intro content={intro.content}/>

              <Col span={12} style={styles.box450border} >
                  {
                      features.map(feature => (
                          <div>
                              <h5><strong>{feature.title}</strong></h5>
                              <p>{feature.desc}</p>
                          </div>
                      ))
                  }
              </Col>
          </Row>

          <Row gutter={16} style={{ marginBottom: 50 }}>
              {
                  cards.map(card => 
                      <CardIntro 
                          imageUrl={card.imageUrl} 
                          title={card.title} 
                      />
                  )
              }
          </Row>

  </Container>
)

const styles = {
  box450border: {
      height: '450px',
      border: '2px solid #f1f1f1',
      borderRadius: 10,
      padding: 30
  },
}

export default Premium
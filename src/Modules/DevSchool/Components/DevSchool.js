import React from 'react';
import CardIntro from '../../../Components/Layout/Card/CardIntro';
import Intro from '../../../Components/Layout/Intro/Intro';
import { Row, Col } from 'antd';
import Container from '../../../Components/Layout/Container/Container';

const intro = {
  content: 
  `Program pelatihan belajar pemrograman 
  dengan tatap muka secara offline dan 
  dengan bimbingan para instruktur profesional. 
  Peserta akan belajar dengan kurikulum yang 
  berorientasi pada industri dengan teknologi 
  terbaru dengan konsentrasi utama yaitu 
  pemrograman web dan Android. Saat ini 
  program diselenggarakan di 2 kota besar, 
  yaitu Bandung dan Jakarta.`
}

const cards = [
  {
      imageUrl: 'https://www.codepolitan.com/themes/belajarcoding/assets/img/thumb-weekend.jpg',
      title   : 'Weekend Bootcamp', 
      subtitle: 'Kelas belajar coding yang diselenggarakan di setiap akhir pekan, berlokasi di Bandung dan Jakarta'
  },
  {
      imageUrl: 'https://www.codepolitan.com/themes/belajarcoding/assets/img/thumb-intensive.jpg',
      title   : 'Intensive Bootcamp', 
      subtitle: 'Kelas belajar pemrograman Web dan Android secara intensif selama satu minggu dengan sistem karantina'
  },
]

const DevSchool = () => (
  <Container>
      <h1 style={{ textAlign: 'center'}}>DEVELOPER SCHOOL</h1>
      <Row gutter={16} style={{marginTop: 40, marginBottom: 100}}>
          <Intro content={intro.content}/>
          <Col span={12}>
              <img 
                  src="https://www.codepolitan.com/themes/belajarcoding/assets/img/foto-devschool.jpg"
                  alt=""
              />
          </Col>
      </Row>

      <Row style={{ marginBottom: 50}}>
          {
              cards.map(card => 
                  <CardIntro 
                      imageUrl={card.imageUrl} 
                      title={card.title} 
                      subtitle={card.subtitle}
                  />
              )
          }
      </Row>

  </Container>
)

export default DevSchool
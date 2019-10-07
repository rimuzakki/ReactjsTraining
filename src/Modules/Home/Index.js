import React, { Component } from 'react';

class Index extends Component {
  render() {
    const styles = {
      container: {
          position: 'relative',
          textAlign: 'center',
      },
      imageCover: {
          width: '100%'
      },
      blockText: {
          width: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white'
      }
    }
    return (
      <div style={styles.container}>
        <img 
            style={styles.imageCover}
            src="https://www.codepolitan.com/codepolitan/themes/belajarcoding/assets/img/bg-home.jpg"
            alt="belajarcoding"
        />
        <div style={styles.blockText}>
            <h1>Belajar Coding Sekarang</h1>
            <h4>
                Lebih dari 2.000 modul belajar pemrograman dalam beragam format yang bisa kamu pelajari.
            </h4>
        </div>
      </div>
    );
  }
}

export default Index;
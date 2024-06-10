import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gambar} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <p>
          Ini adalah modifikasi dari React saya
        </p>
        <h2 className="App-subheader">Learn and Enjoy</h2>
        <a
          className="App-link btn btn-primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>MEONG</h2>
            <p>
              MEONG atau Kucing adalah hewan peliharaan yang banyak digemari oleh masyarakat di Indonesia maupun di luar negeri bahkan di dunia. Kucing dengan tampilan fisik yang imut dan menggemaskan menjadi hewan peliharaan paling banyak dipelihara hingga saat ini.
            </p>
          </div>
          <div className="col-md-6">
            <h2>KEPANDAIAN</h2>
            <p>
              Kucing memiliki kemampuan yang positif salah satunya cepat pandai saat dilatih oleh pemiliknya dan kucing juga bisa sangat setia dan memberikan sisi ketenangan kepada pemiliknya tidak seperti manusia yang berucap setia hanya di mulut saja wkwkwk..
            </p>
          </div>
        </div>
      </div>
      <footer className="App-footer">
        <p>© 2024 Copyright by Fahrizal Kusuma Yuda</p>
      </footer>
    </div>
  );
}

export default App;

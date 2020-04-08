import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.querySelector('meta[name="description"]').attributes['content'].value = "abc content";
  }, [])
  return (
    <main>
            <section className="banner">
                <div className="banner-content content">
                    <img alt="banner" src="assets/images/banner.png" />
                </div>
            </section>
            <div className="main-content content">
                <h1>Liikluslab поможет сдать экзамены с первой попытки</h1>
                <h2>Онлайн учебники от создателей новых экзаменационных вопросов </h2>
            </div>
        </main>
  );
}

export default App;

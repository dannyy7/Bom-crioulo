import { useState } from 'react'; // só se for usar state
import styles from './Home.module.css'; // CSS modular
import './globalstyle.css'; // CSS global
import { useNavigate } from 'react-router-dom'; // navegação

function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className='titulo'>Bom-crioulo</h1>
      <div className={styles.box}>
        <button className='botao' onClick={() => navigate('/Resumo')}>Resumo</button>
        <div className="linha-pontilhada"></div>

        <button>Personagens</button>
        <div className="linha-pontilhada"></div>

        <button>Autor</button>
        <div className="linha-pontilhada"></div>

        <button>Extras</button>
        <div className="linha-pontilhada"></div>

        <button>Equipe</button>
        <div className="linha-pontilhada"></div>
      </div>
    </div>
  )
}

export default Home;

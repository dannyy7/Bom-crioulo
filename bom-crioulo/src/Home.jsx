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

        <button className='botao' onClick={() => navigate('/Personagens')}>Personagens</button>
        <div className="linha-pontilhada"></div>

        <button className='botao'  onClick={() => navigate('/Autor')}>Autor</button>
        <div className="linha-pontilhada"></div>

        <button className='botao' onClick={() => navigate('/Extras')} >Carta</button>
        <div className="linha-pontilhada"></div>

        <button className='botao' onClick={()=> navigate('/Equipe')}>Artigo e Entrevista</button>
        <div className="linha-pontilhada"></div>

        <button className={styles.sobrenos} onClick={()=> navigate('/Sobre')}>Sobre nós</button>
      </div>
    </div>
  )
}

export default Home;

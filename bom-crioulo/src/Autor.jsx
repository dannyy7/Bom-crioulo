import './globalstyle.css'; // Verifique o caminho

function Autor() {
  return (
    <div className="autor">
      <h1 className="titulo-resumo">Autor</h1>
      <div className="linha-pontilhada-resumo"></div>
      <div className='texto-autor'>
        <p className='texto'>
          Adolfo Ferreira Caminha (1867–1897) foi um escritor brasileiro do final do século XIX, conhecido por sua ousadia literária e por abordar temas considerados polêmicos para a época. Nascido em Aracati, no Ceará, ele se mudou para o Rio de Janeiro ainda jovem, onde passou a atuar como jornalista e romancista.
        </p>
        <p className='texto'> Caminha fez parte do movimento Naturalista, corrente literária que buscava retratar a realidade de maneira científica, detalhada e muitas vezes dura, mostrando os lados mais problemáticos da sociedade. Seus livros exploram temas como desigualdade, preconceito, pobreza e comportamentos humanos considerados “marginais” na época.</p>
        <p className='texto'>A obra mais conhecida de Adolfo Caminha é O Bom-Crioulo (1895), que provocou grande escândalo quando foi publicada. O livro aborda o romance entre um marinheiro negro e escravizado liberto (Amaro) e um jovem grumete branco (Aleluias). Por tratar de homoafetividade, racismo, violência e pela representação crítica da Marinha e do moralismo social, a obra gerou forte rejeição, sendo chamada de imoral por críticos conservadores.</p>
        <p className='texto'>Mesmo com vida curta — faleceu aos 29 anos devido a tuberculose — Caminha deixou uma contribuição marcante à literatura brasileira, sendo hoje reconhecido como um autor corajoso e pioneiro na abordagem de temas ligados a sexualidade, raça e relações de poder.</p>
     
     
      </div>


      <div id="autor-foto">
        <img src="/Adolfo_Caminha.jpg" alt="Foto do autor" />
      </div>

      <div id="local-renascenca">
        <img src="/local_nascimento.jpeg" alt="Local de nascimento" />
      </div>
    </div>
  );
}

export default Autor;

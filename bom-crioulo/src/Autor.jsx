import './globalstyle.css'; // Verifique o caminho

function Autor() {
  return (
    <div className="autor">
      <h1 className="titulo-resumo">Autor</h1>
      <div className="linha-pontilhada-resumo"></div>
      <p className="texto-autor">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, labore. Numquam ea vitae excepturi reiciendis quas, minima rem illo sit, aperiam recusandae voluptatum cum suscipit, esse animi fuga cupiditate harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste et excepturi hic quas amet aspernatur, facilis ad in pariatur illo, optio nulla tenetur dolor veritatis incidunt exercitationem, beatae magni!
      </p>

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

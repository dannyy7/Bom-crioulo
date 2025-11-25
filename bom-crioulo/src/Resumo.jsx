import './globalstyle.css'; // CSS global


function Resumo(){
    return(
        <div className="resumo">
            <h1 className="titulo-resumo">Resumo</h1>
            <div className="linha-pontilhada-resumo"></div>
            <div className="box-texto-resumo">
                <p className='texto-resumo'>O romance “Bom-Crioulo”, escrito por Adolfo Caminha e publicado em 1895, é considerado um marco do naturalismo brasileiro, tanto pelo estilo quanto pelos temas abordados, que eram muito polêmicos para a época. A obra explora a realidade social do final do século XIX no Brasil, mostrando a vida de marinheiros, a desigualdade racial e questões de sexualidade.</p>
                <p className='texto-resumo'>A história gira em torno de Amaro, um homem negro, ex-escravo, conhecido por sua força física e coragem, que ganha o apelido de “Bom-Crioulo”. Ele trabalha como marinheiro no porto do Rio de Janeiro e, apesar de sua aparência imponente, é um homem sensível e apaixonado.</p>
                <p className='texto-resumo'>Amaro se apaixona por Aleixo, um jovem marinheiro branco, que representa o objeto de desejo e de fascínio de Amaro. O romance entre eles é intenso, mas conflituoso, pois Amaro enfrenta não apenas o preconceito da sociedade, mas também seus próprios sentimentos de ciúme e possessividade.</p>
                <p className='texto-resumo'>Ao longo do livro, Caminha descreve a vida dos marinheiros, os ambientes urbanos e portuários, e a dura realidade social e racial do Rio de Janeiro da época. O autor também destaca características do naturalismo, como a influência do meio social e biológico sobre os personagens, a predominância de instintos e paixões, e a crítica às convenções sociais.</p>
                <p className='texto-resumo'>O desfecho da narrativa é trágico, mostrando como o ciúme e o amor possessivo de Amaro levam a consequências dramáticas, refletindo a visão naturalista de que os instintos humanos podem dominar a razão.</p>
            </div>
            
            <div id='livro-resumo'> 
                <img src='/livro.jpeg'></img>
            </div>

        </div>
    )
}
export default Resumo
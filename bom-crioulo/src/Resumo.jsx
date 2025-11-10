import './globalstyle.css'; // CSS global


function Resumo(){
    return(
        <div className="resumo">
            <h1 className="titulo-resumo">Resumo</h1>
            <div className="linha-pontilhada-resumo"></div>
            <p className='texto-resumo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vitae beatae dolorum quo a nulla nobis autem repudiandae maiores ipsa. Aliquid nesciunt quaerat, blanditiis voluptate vero culpa eius ipsa ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium nesciunt minima neque. Hic voluptatibus incidunt eaque minus amet eius magnam, magni explicabo ex quasi doloribus aliquid sequi suscipit placeat.</p>
            
            <div id='livro-resumo'> 
                <img src='/livro.jpeg'></img>
            </div>

        </div>
    )
}
export default Resumo
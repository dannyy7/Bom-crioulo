import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- importando
import './globalstyle.css';

function Extras() {
  const [carta, setCarta] = useState(true);
  const [imgcarta, setImgcarta] = useState("carta.png");
  const [mostrarLacre, setMostrarLacre] = useState(true);

  const cartaRef = useRef(null);
  const navigate = useNavigate(); // <-- hook para navegação

  function abrirCarta() {
    const novaCarta = !carta;
    setCarta(novaCarta);

    if (novaCarta) {
      setImgcarta("carta.png");
    } else {
      setImgcarta("cartaaberta.png");
      setMostrarLacre(false);
    }
  }

  function vibrarCarta() {
    if (cartaRef.current) {
      cartaRef.current.classList.add("animacao");
      setTimeout(() => {
        cartaRef.current.classList.remove("animacao");
      }, 600);
    }
  }

  function clicarCarta() {
    if (!carta) {
      navigate("/Carta"); // <-- redireciona se a carta estiver aberta
    } else {
      vibrarCarta(); // se estiver fechada, só vibra
    }
  }

  return (
    <div className="extras">
      <div className='cartacontainer'>
        <img
          src={imgcarta}
          className="carta"
          ref={cartaRef}
          onClick={clicarCarta} // clique na carta
        />

        {mostrarLacre && (
          <button 
            className="lacrebot" 
            onDoubleClick={abrirCarta} 
            onClick={vibrarCarta} 
          >
            <img src="lacrecarta.png" className="lacre" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Extras;

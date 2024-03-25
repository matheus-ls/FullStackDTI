import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import './BestChoiceStyle.scss'

export default function BestChoiceComponent() {

  const bestChoice = useAppSelector((state) => state.responseBestChoice);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); 
  };

  return (
    <div className="best-choice-container">
      {bestChoice && (
        <div className="best-choice-card">
          <p>Melhor PetShop: {bestChoice.name}</p>
          <p>Total: {bestChoice.precoTotal}</p>
          <button onClick={handleBack}>Voltar</button>
        </div>
      )}
    </div>
  );
}

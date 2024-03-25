import { useState } from 'react';
import { IBestChoice } from '../../data/interfaces/IBestChoice';
import { PetShopService } from '../../data/api/services/PetShopService';
import { useAppDispatch } from '../../hooks/hooks';
import { setResponseBestChoice } from '../../hooks/redux/BestChoiceSlice';
import './StyleForms.scss'
import { useNavigate } from 'react-router-dom';


const PetShopCard = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [data, setData] = useState<string>('');
    const [smallDogs, setSmallDogs] = useState<number>(0);
    const [bigDogs, setBigDogs] = useState<number>(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const today = new Date
        const dataToSend: IBestChoice = {
            data,
            smallDogs,
            bigDogs,
        };
        const selectDate = new Date(data)
        if (selectDate > today) {

            try {
                const result = await PetShopService.bestChoice(dataToSend);
                dispatch(setResponseBestChoice(result));
            } catch (error) {
                console.error('Erro ao enviar consulta:', error);
            }
            navigate('/melhorPetShop')
        } else {
            alert('A data deve ser maior que a data atual')
        }
    };

    return (
        <form className="pet-shop-card" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="data">Data:</label>
                <input
                    type="date"
                    id="data"
                    value={data}
                    required
                    onChange={(e) => setData(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="qtd-small">Quantidade de Cachorros Pequenos:</label>
                <input
                    type="number"
                    id="qtd-small"
                    value={smallDogs}
                    required
                    min="1"
                    onChange={(e) => setSmallDogs(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="qtd-big">Quantidade de Cachorros Grandes:</label>
                <input
                    type="number"
                    id="qtd-big"
                    value={bigDogs}
                    required
                    min="1"
                    onChange={(e) => setBigDogs(Number(e.target.value))}
                />
            </div>
            <button type="submit">Enviar Consulta</button>
        </form>
    );
};

export default PetShopCard;

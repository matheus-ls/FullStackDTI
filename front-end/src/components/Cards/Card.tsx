import { useEffect, useState } from "react";
import { IPetShop } from "../../data/interfaces/IPetShop";
import { PetShopService } from "../../data/api/services/PetShopService";
import './CardStyle.scss'

function Card() {
    const [petShops, setPetShops] = useState<IPetShop[]>([])

    useEffect(() => {
        const getPetShops = async () => {
            try {
                const petShopsData = await PetShopService.getAllPetShops();
                setPetShops(petShopsData)

            } catch (error) {
                console.error("Erro:", error);
            }
        };

        getPetShops();
    }, []);


    return (
        <div className="container-card">
            {petShops.map(petShop => (
                <div className='card' key={petShop.id}>
                    <p>Nome: <b>{petShop.name}</b></p>
                    <p>Distancia: <b>{petShop.distance}</b></p>
                </div>
            ))}

        </div>
    )
}

export default Card;
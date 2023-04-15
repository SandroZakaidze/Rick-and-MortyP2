import { useState } from 'react';
import { useEffect} from 'react';
import Character from './Character';


function List() {
    const [loading,SetLoading] = useState(true);
    const [characters,setCharacters] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetch (
                'https://rickandmortyapi.com/api/character');
                const { results } =await data.json();
                setCharacters(results);
                SetLoading(false);
        }
        fetchData();
    }, [characters.length]);
    
    return (
        <div>
            <h2>Characters</h2>
            <div className='row'>
        <Character />
        <Character />
        {loading ? (
            <div>loading...</div>
        ) : (


            characters.map((character) => (
                <Character 
                   key={character.id}
                   name={character.name}
                   origin={character.origin}
                   image={character.image}
                />
             ))
            /*characters.map((character) => (
                <Character 
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
                />
            ))*/
        )}

         </div>
        </div>
    );


}

export default List;

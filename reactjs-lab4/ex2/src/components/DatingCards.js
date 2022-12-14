import React, {useState, useEffect} from 'react'
import DatingCard from 'react-tinder-card'
// import './DatingCards.css'
import axios from './axios'

const DatingCards = () =>{
    const [people, setPeople] = useState([])
    useEffect(() =>{
        async function fetchData(){
            const req = await axios.get("/dataing/cards")
            setPeople(req.data);
        }
        fetchData()
    }, [])

    const swiped = (direction, nameToDelete)=>{
        console.log("receiving" + nameToDelete);
    }
    const outOfFrame = (name) =>{
        console.log(name + " left the sreen !");
    }
    return(
        <div className="datingCards">
            <div className="datingCards__container">
                {people.map((person)=>{
                    <DatingCard
                    className='swipe'
                    key= {person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir)=> swiped(dir, person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.imgUrl})`}} className="personAvt">
                            <h3>{person.name}</h3>

                        </div>


                    </DatingCard>
                })}
            </div>
        </div>
    )
}
export default DatingCards;
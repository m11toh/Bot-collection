import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


function Data(){
    function LoadApi(){
        fetch("http://localhost:3000/bots")
        .then((res) => res.json())
        .then((data) => setActivity(data))
    }

    const[activity, setActivity] = useState ([])
    useEffect(()=>{LoadApi()})

    console.log(activity)

    return(
        <>
        {activity.map(i => (
            <div className="row row-cols-1 row-cols-md-3 g-4 p-4 m-4">
               <div class="row">
                <Link to={`/Myspec/${i.id}`}> 
                    <div class="card h-40 w-60">
                        <img src={i.avatar_url} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{i.name}</h5>
                            <p class="card-text">{i.catchphrase}</p>
                                <i class="bi bi-heart-pulse-fill p-4">{i.health}</i>
                                <i class="bi bi-lightning-fill p-4">{i.damage}</i>
                                <i class="bi bi-shield-shaded p-4" > {i.armor}</i>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">{i.bot_class}</small>
                        </div>
                    </div>
                </Link>
                </div> 
            </div>

        ))}
        </>
    )
}

export default Data;
import { useEffect,useState } from 'react';

function Yourbots(){
    function LoadApi(){
        fetch("http://localhost:3000/Yourbot")
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
                    <div class="card h-40 w-60">
                        <img src={i.avatar_url} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{i.name}</h5>
                            <p class="card-text">{i.catchphrase}</p>
                        </div>
                        
                        <div class="card-footer">
                            <small class="text-body-secondary">{i.bot_class}</small>
                        </div>
                    </div>
                </div> 
            </div>

        ))}
        </>
    )
}

export default Yourbots;
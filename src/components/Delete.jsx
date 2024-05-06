function deleteTransaction(id){
    fetch(`http://localhost:3000/Yourbot/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    }).then((response)=> response.json())
    .then((data)=>console.log("transaction deleted"))

    return(
        <button onClick={()=> deleteTransaction(id)} type="button" className="btn btn-primary">Delete</button>
    )

}

export default deleteTransaction;
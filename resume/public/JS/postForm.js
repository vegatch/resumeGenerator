

export const postForm = (myForm, myUrl) =>{
    const formData = new FormData(myForm) 
    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }

    const option ={
        method: "POST",     
        body: searchParams           
    }
    
    fetch(myUrl, option)
    .then((result) => {
        if(result.status != 200){throw new Error("Server didn't response")}
        return result.text();
    })
    .then(data => {
        console.log(data.errors)        
        // renderError(data);        
    })
    // .then((response) => {
    //     console.log(response)
    // })    
    // .catch((error) => {throw new Error("something wrong")})
    // // return false;
}
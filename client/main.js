

let getDataFromBackEnd = function(){
    
    let response = fetch('http://localhost:3000/getAll')
    .then(response => response.json())
    // .then(data => loadHTMLTable(data['data'])); // orgignal and works
    .then(data => loadToHtml(data['data'])); // new and experimenting
    
}
getDataFromBackEnd()




function loadHTMLTable(data) {
    const table = document.querySelector('.container');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({person_id, first_name, last_name}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${person_id}</td>`;
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        // tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Delete</td>`;
        // tableHtml += `<td><button class="edit-row-btn" data-id=${id}>Edit</td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
}

let loadToHtml = function(data){
    const resumeContainer = document.querySelector('.container');

    data.forEach(function({person_id, first_name, middle_name, last_name, fullname,title, address, email, phone,
        media_name, media_url, objective_details, tech_skills, market_skills}){
    let headerDiv = document.createElement("div")
    headerDiv.classList.add('header')
    let headerP = document.createElement("p")
    headerP.textContent = `${fullname}`
    headerDiv.append(headerP)


    resumeContainer.append(headerDiv)
                                    
    })


  }
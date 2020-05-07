function managerCard(data) {
    let html=""
  
    for (let i = 0; i < data.length; i++) {
         if (data[i].getRole() === "Manager") {
            html=html +`
            <div class="col-sm-4">
            <div class="card">
                <div class="card-title">
                 <h1>   ${data[i].name}  </h1>
                  <h1>  ${data[i].getRole() } </h1>
                </div>
                <div class="card-body">
                    <ul>
                        <li>
                        ${data[i].id}
                        </li>
                        <li>
                        ${data[i].email}
                        </li>
                        <li>
                     office number:   ${data[i].officeNumber}
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>` 
         }
    }
    
    
   

return html
}

module.exports=managerCard
function card(data) {
    return `
    <div class="col-sm-4">
    <div class="card">
        <div class="card-title">
         <h1>   ${data.name}  </h1>
          <h1>  ${data.getRole() } </h1>
        </div>
        <div class="card-body">
            <ul>
                <li>
                ${data.id}
                </li>
                <li>
                ${data.email}
                </li>
                <li>
             office number:   ${data.officeNumber}
                    
                </li>
            </ul>
        </div>
    </div>
</div>`
}
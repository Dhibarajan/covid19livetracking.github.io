window.onload = function(){
    getcovid19countrys();
}
function getcovid19status(){
    fetch('https://api.covid19api.com/summary')
    .then(function(resp){
        return resp.json()
    })
    .then(function(datum){
        const data = datum.Countries
        function rankingSorter(firstKey, secondKey) {
        return function(a, b) {  
            if (a[firstKey] > b[firstKey]) {  
                return -1;  
            } else if (a[firstKey] < b[firstKey]) {  
                return 1;  
            }  
            else {
                if (a[secondKey] > b[secondKey]) {  
                    return 1;  
                } else if (a[secondKey] < b[secondKey]) {  
                    return -1;  
                } else {
                    return 0;
                }
            } 
        }  
    }

    var sorted = data.sort(rankingSorter("TotalConfirmed", "Country"));
        var table = document.getElementById('mytabledata')
         var row = "";
         for(var i = 0;i < data.length; i++){
             var row = `<tr>
                        <td class="table-dark">${sorted[i].Country.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                         <td class="table-primary">${sorted[i].TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                          <td>${sorted[i].NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                          <td class="table-danger">${sorted[i].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                         <td class="table-warning">${sorted[i].NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                          <td class="table-info">${sorted[i].NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                          <td class="table-success">${sorted[i].TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                         </tr>`
                         table.innerHTML += row
          }

        

    })
    .catch(function(){
        console.log('error');
    })
}
window.onload = function(){
    getcovid19status();
}
function getcovid19status(){
    fetch('https://api.covid19api.com/summary')
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        document.getElementById('TotalConfirmed').innerHTML = data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('TotalDeaths').innerHTML = data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('TotalRecovered').innerHTML = data.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // var table = document.getElementById('mytabledata')
        //  var row = "";
        //  for(var i = 0;i < data.Countries.length; i++){
        //      var row = `<tr>
        //                 <td class="table-dark">${data.Countries[i].Country}</td>
        //                 <td class="table-primary">${data.Countries[i].TotalConfirmed}</td>
        //                 <td class="table-secondary">${data.Countries[i].NewConfirmed}</td>
        //                 <td class="table-danger">${data.Countries[i].TotalDeaths}</td>
        //                 <td class="table-warning">${data.Countries[i].NewDeaths}</td>
        //                 <td class="table-info">${data.Countries[i].NewRecovered}</td>
        //                 <td class="table-success">${data.Countries[i].TotalRecovered}</td>
        //                 </tr>`
        //                  table.innerHTML += row
        //   }

        

    })
    .catch(function(){
        console.log('error');
    })
}


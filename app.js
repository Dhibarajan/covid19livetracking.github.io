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


        

    })
    .catch(function(){
        console.log('error');
    })
}


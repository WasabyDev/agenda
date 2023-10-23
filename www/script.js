document.addEventListener('deviceready', onDeviceReady, false);



function onDeviceReady() {

var btnsalvarlembrete = document.getElementById('btnsalvarlembrete');
btnsalvarlembrete.addEventListener('click', adicionarlembrete);

    setInterval(function() {
        sendNotification('Lembrete', 'Lembre-se de fazer algo importante!');
    }, 30 * 60 * 1000);;

a
}

function adicionarlembrete() {
    var txtlembrete = document.getElementById('lembrete').value;
    var txtdata = document.getElementById('data').value;
    var txthora = document.getElementById('hora').value;
    var datalembrete = new Date(txtdata.value + "T" + txthora.value);

 

   if (navigator.notification) {
        navigator.notification.alert(
            txtlembrete,  
            null,               
            'Lembrete',      
            'Ok!'                
        );
    } else {
        alert(txtlembrete);
    }
    alert ("Você será lembrado de seu compromisso: " + txtlembrete + txtdata + txthora);
}

var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    // declaration des variables qui seront utilisses :
    var today, annee, listeMois, mois, listeJour, jourNumero, jourNom, heures,
    minutes, secondes, deuxChiffres;

    // recuperer la date actuelle :
    today = new Date();

    // recuperer l'annee :
    annee = today.getFullYear();

    // recuperer le mois :
    listeMois = ['January', 'February', 'March', 'April', 'May', 'August',
    'September', 'October', 'November', 'December'];
    mois = listeMois[today.getMonth()]; // getMonth() donne l'index 1 comme on est en mai, ce qui donne la valeur 'February' depuis notre liste
    
    // recuperer le numero du jour du mois :
    jourNumero = today.getDate(); 

    // recuperer le jour. Attention la semaine commence undimanche en JavaScript :
    listeJour = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'];
    jourNom = listeJour[today.getDay()]; // getDay() donne le jour de aujouhui

    // afficher les heures, minutes et secondces tourjours ave deux chiffres
    deuxChiffres = function(element)
    {
        if (element < 10) 
        {
            return element = '0' + element;
        }
        else
        {
            return element;
        }
    }


    // recuperer les heures :
    heures = deuxChiffres(today.getHours());

    //recuperer les minutes :
    minutes = deuxChiffres(today.getMinutes());

    //recuperer les secondes :
    secondes = deuxChiffres(today.getSeconds());

    // Afficher dans nos Div du HTML :
    heuresDiv.textContent = heures + ':' + minutes + ':' + secondes;
    dateDiv.textContent = jourNom + ', ' + jourNumero + ' ' + mois + ' ' + annee;

    // Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes :
    setTimeout(affichageHeure, 1000);
}

// lancer la fonction une fois au debut :
affichageHeure();
    



var element = document.getElementById("my_button_1");

element.addEventListener( "click" , 

    function() {

        document.getElementById("section_2").style.display = 'block';



        var nome_passeggero;

        nome_passeggero = document.getElementById("name").value;

        document.getElementById("name_box_item").innerHTML = nome_passeggero;




        document.getElementById("section_2").style.display = 'block';

        var numero_1 = Math.floor(Math.random() * 10) + 1;

        document.getElementById("my_id_2").innerHTML = numero_1;

        var numero_2 = Math.floor(Math.random() * 100000) + 1;

        document.getElementById("my_id_3").innerHTML = numero_2;




        var km;

        km = document.getElementById("km").value;

        
        var importo = (km * 0.21);

        
        var importo_minorenni = (km * 0.21) - (importo / 100 * 20);

        
        var importo_over_65 = (km * 0.21) - (importo / 100 * 40);


        
        var fascia_eta_passeggero;

        fascia_eta_passeggero = document.getElementById("eta").value;

        if (fascia_eta_passeggero == "Minorenne") {

        document.getElementById("my_id_1").innerHTML = "Sconto Minorenni";

        document.getElementById("my_id_4").innerHTML = importo_minorenni;

        }

        else if (fascia_eta_passeggero == "Maggiorenne") {

        document.getElementById("my_id_1").innerHTML = "Importo Standard";

        document.getElementById("my_id_4").innerHTML = importo;
        
        }   

        else if (fascia_eta_passeggero == "Over 65") {

        document.getElementById("my_id_1").innerHTML = "Sconto Over 65";

        document.getElementById("my_id_4").innerHTML = importo_over_65;
        
        }

    }

)



var element = document.getElementById("my_button_2");

element.addEventListener("click",

    function () {

        document.getElementById("name").value = "";

    }
)


var element = document.getElementById("my_button_2");

element.addEventListener("click",

    function () {

        document.getElementById("km").value = "";

    }
)

var element = document.getElementById("my_button_2");

element.addEventListener("click",

    function () {

        document.getElementById("eta").value = "";

    }
)


var element = document.getElementById("my_button_2");

element.addEventListener("click",

    function () {

        location.reload();

    }
)
let ut = "";
function regKunde() {
    //liste med feilmeldinger
    let feilmeldinger = ["Må skrive noe i fornavnet", "Må skrive noe i etternavnet",
        "Må skrive noe inn i telefonnr", "Må skrive noe inn i epost", "Må skrive noe i antall"];
    //liste for å iterere gjennom verdiene
    let listesjekk = ["fNavn", "eNavn", "tlfnr", "epost"];

    //oppretter variablene for input
    let fNavn = $("#fNavn").val();
    let eNavn = $("#eNavn").val();
    let tlfnr = parseInt($("#tlfnr").val());
    let epost = $("#epost").val();
    let antall = parseInt($("#antall").val());
    let valgtFilm = $("#film").val();

    let harSkrevet = true;
    //oppretter billett objektet
    let billett = {
        antall: antall,
        fNavn: fNavn,
        eNavn: eNavn,
        tlfnr: tlfnr,
        epost: epost,
        valgtFilm: valgtFilm
    };

    //sjekker først om filmen som er valgt IKKE er "default"
    if (valgtFilm !== "default") {
        //fjerner feilmeldingen tilfelle det er noe der
        $("#velgFilm").html("");
        //sjekker dersom antall er tom eller mindre enn 0
        if (antall > 0) {
            //restarter feilmelding
            $("#velgFilm").html("");
            //for loop for å gå gjennom om inputs
            for (let i = 0; i < listesjekk.length;i++) {
                //sjekker om inputs har value
                if (listesjekk[i] === "tlfnr") {
                    if (isNaN(billett[listesjekk[i]]) || !validereTlf(billett[listesjekk[i]])) {
                        $("#output" + i).css("color", "red").html(feilmeldinger[i]);
                        $("#skrivAntall").html("");
                        harSkrevet = false;
                    } else {
                        $("#output" + i).html("");
                    }
                }
                else {
                    if (billett[listesjekk[i]] === "") {
                        $("#output" + i).css("color", "red").html(feilmeldinger[i]);
                        $("#skrivAntall").html("");
                        harSkrevet = false;
                    }
                    else {
                        $("#output" + i).html("");
                    }
                }
            }
            if (harSkrevet) {
                $.post("/lagre", billett, function(){
                    hentAlle();
                    console.log("Kjørt uten feil2", billett);
                });
            }
        }
        else {
            $("#skrivAntall").css("color", "red").html("Må skrive noe i antall!");

        }
    }
    else {
        $("#velgFilm").css("color", "red").html("Du 'må velge film!");

    }
}

function hentAlle() {
    $.get("/hentAlle", function( data ) {
        formaterData(data);
    });
}

function formaterData(billetter){
    console.log("Denne kjører også først");
    ut = "<table class='table table-striped'><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
        "</tr>";
    for (let b of billetter) {
        console.log(b);
        ut += "<tr>" +
            "<td>" + b.valgtFilm + "</td>" +
            "<td>" + b.antall + "</td>" +
            "<td>" + b.fNavn + "</td>" +
            "<td>" + b.eNavn + "</td>" +
            "<td>" + b.tlfnr + "</td>" +
            "<td>" + b.epost + "</td>" +
            "</tr>";
    }
    ut+="</table>";

    ut = ut.replace(/<\/td><td>/g, "</td>&nbsp;&nbsp;&nbsp;<td>");

    $("#alleBilletter").html(ut);
    console.log("Denne kjører også");
}
$ ("#slettInfo").click(function (){
    $.get("/slett", function(){
        hentAlle();
    })
})


function validereTlf(tlfnr) {
    let pattern = /^(\d{2})\s?(\d{2})\s?(\d{2})\s?(\d{2})$/;
    return pattern.test(tlfnr);
}


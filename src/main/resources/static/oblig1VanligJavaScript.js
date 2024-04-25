/*let billett;
let liste = [];
let ut = "";

function kjop1() {
    let fNavn = document.getElementById("fNavn").value;
    let eNavn = document.getElementById("eNavn").value;
    let tlfnr = document.getElementById("tlfnr").value;
    let epost = document.getElementById("epost").value;
    let antall = document.getElementById("antall").value;
    let feilmeldinger = ["Må skrive noe i fornavnet", "Må skrive noe i etternavnet",
        "Må skrive noe inn i telefonnr", "Må skrive noe inn i epost", "Må skrive noe i antall"];

    let film = document.getElementById("film");
    let valgtFilm = film.value;
    let listesjekk = ["fornavn", "etternavn", "telefon", "email"];
    let element = document.getElementById("fyllUt");
    let harSkrevet = true;

    billett = {
        filmer: valgtFilm,
        antallet: antall,
        fornavn: fNavn,
        etternavn: eNavn,
        telefon: tlfnr,
        email: epost
    };

    if (valgtFilm !== "default") {
        if (antall > 0) {
            document.getElementById("velgFilm").innerHTML = "";
            for (let i = 0; i < listesjekk.length; i++) {
                if (billett[listesjekk[i]] === "") {
                    document.getElementById("skrivAntall").style.color = "red";
                    document.getElementById("skrivAntall").innerHTML = "";
                    document.getElementById("output" + i).style.color = "red";
                    document.getElementById("output" + i).innerHTML = feilmeldinger[i];
                    harSkrevet = false;
                } else {
                    document.getElementById("output" + i).innerHTML = "";
                }
            }
            if (harSkrevet) {
                liste.push(billett);
                ut = "<table><tr>" +
                    "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
                    "<th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
                    "</tr>";
                for (let b of liste) {
                    ut += "<tr>" +
                        "<td>" + b.filmer + "</td>" +
                        "<td>" + b.antallet + "</td>" +
                        "<td>" + b.fornavn + "</td>" +
                        "<td>" + b.etternavn + "</td>" +
                        "<td>" + b.telefon + "</td>" +
                        "<td>" + b.email + "</td>";
                    ut += "</tr>";
                }
                document.getElementById("alleBilletter").innerHTML = ut;
            }
        } else {
            document.getElementById("skrivAntall").style.color = "red";
            document.getElementById("skrivAntall").innerHTML = "Må skrive noe i antall";
        }
    } else {
        document.getElementById("velgFilm").style.color = "red";
        document.getElementById("velgFilm").innerHTML = "Du må velge film!";
    }
    console.log(liste);
    element.reset();
}


function slett() {
    liste = [];
    document.getElementById("alleBilletter").innerHTML =
        "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
        "</tr>";
    console.log(liste);
}
let Nome = "Nome";
function Login(){
    Nome = prompt("Inserire il Nome Utente");
    if(Nome == "Giacomo" || Nome == "Elisa" || Nome == "Alessandro" || Nome == "Sara")
    {
        let Password = prompt("Inserisci la Password");
        if(Password == "Giacomo" || Password == "Elisa" || Password == "Alessandro" || Password == "Sara")
            document.getElementById("Login").innerHTML = "Login: Ciao " + Nome;
        else
            alert("ERRORE ACCESSO!!!");
    }
    else
        alert("ERRORE ACCESSO!!!");
    alert(Day);
    alert(Month);
    alert(Year);
}
function CalcolaDivisione(){
    let pagato = document.getElementById("Pagato").value;
    let importo = document.getElementById("Importo").value;
    importo /= 4;
    importo.toFixed(2);
    if(pagato == "ut5" || pagato == "ut6")
        if(importo > 0)
        {
            document.getElementById("importo1").innerHTML = importo;
            document.getElementById("importo2").innerHTML = importo;
            document.getElementById("importo3").innerHTML = importo;
            document.getElementById("importo4").innerHTML = importo;
        }
}
let primo = true;
function InserisciPagamento(){
    let pagante = document.getElementById("Pagante").value;
    let pagato = document.getElementById("Pagato").value;
    let importo = document.getElementById("Importo").value;
    if(pagante == "ut1")
        pagante = "Giacomo";
    else if(pagante == "ut2")
        pagante = "Elisa";
    else if(pagante == "ut3")
        pagante = "Alessandro";
    else if(pagante == "ut4")
        pagante = "Sara";
    if(pagato == "ut1")
        pagato = "Giacomo";
    else if(pagato == "ut2")
        pagato = "Elisa";
    else if(pagato == "ut3")
        pagato = "Alessandro";
    else if(pagato == "ut4")
        pagato = "Sara";
    if(pagante != pagato)
        if(importo > 0)
        {
            if(pagante == Nome)
            {
                if(primo)
                {
                document.getElementById("NomePagante1").innerHTML = pagante;
                document.getElementById("ImportoPagato1").innerHTML = importo;
                document.getElementById("NomePagato1").innerHTML = pagato;
                primo = false;
                }
                else
                {
                document.getElementById("NomePagante2").innerHTML = pagante;
                document.getElementById("ImportoPagato2").innerHTML = importo;
                document.getElementById("NomePagato2").innerHTML = pagato;
                primo = true;
                }
            }
            else
            {
                document.getElementById("DaConfermare").innerHTML = '<span>20<span>04/24</span></span><div id="NomePagante3">Giacomo</div><div class="uscita" id="ImportoPagato3">50 €</div><div id="NomePagato3">Locale</div>';
                document.getElementById("NomePagante3").innerHTML = pagante;
                document.getElementById("ImportoPagato3").innerHTML = importo;
                document.getElementById("NomePagato3").innerHTML = pagato;
            }
        }
}
function Conferma(){
    let pagante = document.getElementById("NomePagante3").innerHTML;
    let importo = document.getElementById("ImportoPagato3").innerHTML;
    let pagato = document.getElementById("NomePagato3").innerHTML;
    if(pagante == Nome)
    {
        let risposta = prompt("Sicuro di Confermare? (Y/N)");
        if(risposta == "Y")
        {
            if(primo)
                {
                document.getElementById("NomePagante1").innerHTML = pagante;
                document.getElementById("ImportoPagato1").innerHTML = importo;
                document.getElementById("NomePagato1").innerHTML = pagato;
                primo = false;
                document.getElementById("DaConfermare").innerHTML = "";
                }
            else
            {
                document.getElementById("NomePagante2").innerHTML = pagante;
                document.getElementById("ImportoPagato2").innerHTML = importo;
                document.getElementById("NomePagato2").innerHTML = pagato;
                primo = true;
                document.getElementById("DaConfermare").innerHTML = "";
            }
        }
    }
}
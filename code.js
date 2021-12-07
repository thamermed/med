function calcule(){
    var p,t,g,pi,bmi,etat;
    p=Number(document.getElementById("p").value);
    t=Number(document.getElementById("t").value); 
    bmi=p/((t/100)*(t/100));
    if ((document.getElementById("g").selectedIndex)==0){
        pi=(t-100)-((t-150)/4);
        
    }
    else{
        pi=(t-100)-((t-150)/2.5);
       

    }
    if (bmi<=25){
        etat="Normal"
    }
    else if(bmi<=30){
        etat="Surpoids"
    }
    else if (bmi<=35){
        etat="Obesité"
    }
    else if (bmi<40){
        etat="Obesité Sévére"
    }
    else {
        etat="Obesité Tres Sévére"
    }
    document.getElementById("pi").value=pi;
    document.getElementById("bmi").value=bmi;
    document.getElementById("etat").value=etat;
}
function calcul(){
    var a,b,r;
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    if ((document.getElementById("op").selectedIndex)==0){
        r=a+b
    }
    else if ((document.getElementById("op").selectedIndex)==1){
        r=a-b
    }
    else if ((document.getElementById("op").selectedIndex)==2){
        r=a*b
    }
    else if ((document.getElementById("op").selectedIndex)==3){
        r=a/b
    }
    document.getElementById("r").value=r;
}
function check(){
 
    var name,r;
    name=document.getElementById("name").value;
    if ((name.trim()).length >= 5){
        r="Valide";

    }
    else{
        r="At least 5 caracters !";
    }

document.getElementById("res").value=r;

}
function res(){
    var moyenne,resultat;
    moyenne=document.getElementById("moy").value;
    if ((moyenne<0)||(moyenne>20)){
        resultat="Moyenne INVALIDE"
    }
    else if(moyenne>=10){
        resultat="ADMIS";
    }else
    {
        resultat="REDOUBLE";
    }

document.getElementById("resultat").value=resultat;
}
function valid(){
    if(document.getElementById("h").checked==true){
        alert("Homme")
    }
    else{
        alert("Femme")
    }
}
//funksioni qe validon nese fusha eshte e zbrazet
function EshteZbrazet(inputi)
{
  if(inputi.type == "checkbox")
  {
    if(inputi.checked)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  else
  {
    if(inputi.value=="")
    {
      return true;
    }
    return false;
  }
}

//funksioni qe ngjyros prapavijen e elementit te caktuar ne rast se nuk validohet sipas funksionit
function NgjyrosPrapavijen(elementi)
{
  elementi.style.backgroundColor = "#AA0000";
}

//funksioni qe largon ngjyrosjen e prapavijes
function LargoPrapavijen(elementi)
{
  elementi.style.backgroundColor = "#232323";
  elementi.style.color = "#FFFFFF";
}

function emri() {
  var emri = document.getElementById("emri").value;
  try {
    if(!isNaN(emri)) throw "Emri nuk mund te jete numer";
  }
  catch(err) {
    e.preventDefault();
    alert(err);
    NgjyrosPrapavijen(forma.emri);
  }
}

window.onload=function()
{
  var forma = document.getElementById("contact-form");
  var elementetRequired = document.querySelectorAll(".required");
  var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;

  forma.onsubmit = function(e)
  {
    var address = forma.email.value;
    var emri = document.getElementById("emri").value;
    var elementet = document.querySelectorAll(".required");
    for(var j = 0; j < elementet.length; j++)
    {
      if(EshteZbrazet(elementet[j]))
      {
        e.preventDefault();
        NgjyrosPrapavijen(elementet[j]);
      }
      else
      {
        LargoPrapavijen(elementet[j]);
      }
    }
    if(reg.test(address) == false) {
      e.preventDefault();
      alert('Email adresa qe keni shkruar nuk eshte valide. Ju lutem perdorni email tjeter.');
      NgjyrosPrapavijen(forma.email);
      }
    else {
      try {
        if(!isNaN(emri) && emri!='') throw "Emri nuk mund te jete numer";
      }
      catch(err) {
      e.preventDefault();
      alert(err);
      NgjyrosPrapavijen(forma.emri);
      }
  }
}
}

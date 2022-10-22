function szamol()
  {
      var fo = document.getElementById('fo').value;
      document.getElementById('tej').innerHTML= (fo / 5) + " l tej";
      document.getElementById('tojas').innerHTML= (fo * 2) + " db tojás";
      document.getElementById('cukor').innerHTML= fo  + " ek kristálycukor";
  }
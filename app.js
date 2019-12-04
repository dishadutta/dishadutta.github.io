

  function myfunc1() {
    var amt = document.getElementById("amt").value;
    var disc = document.getElementById("disc").value;

    if (amt === "" || disc == 0) {
      alert("Please Enter the values");
      return;
    }

    else {
      var total = amt - (amt * disc) ;
      total = total.toFixed(2);
      document.getElementById("demo1").innerHTML = total;
    }

  }

  function myfunc2() {
    var amt = document.getElementById("amt").value;
    var disc = document.getElementById("disc").value;
    var noper = document.getElementById("noper").value;

    if (noper === "" || noper <= 1) {
      noper = 1;
    }

    var t1 = (amt - (amt * disc))/noper;
    t1 = t1.toFixed(2);
    document.getElementById("demo2").innerHTML = t1;
  }
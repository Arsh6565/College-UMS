function calculated() {
    varinput1 = document.getElementById("input1").value;
    varinput2 = document.getElementById("input2").value;

    var passwordDisplay = "";

    if (input1.length > 4)
    {
passwordDisplay = '***_***_***';
    }else
    {
passwordDisplay = '***_***';
    }
    document.getElementById("result").innerHTML = 
    "Password is:" + passwordDisplay:
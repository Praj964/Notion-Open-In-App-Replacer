var newValue;

document.getElementById("submit").addEventListener("click", function notion() 
{
    var inputValue = document.getElementById('url').value;
    newValue = (inputValue.replace("https://", "notion://"));
    console.log(newValue);
    document.getElementById("output").innerHTML = newValue;
});



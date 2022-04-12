const colors = [
    "green", 
    "red", 
    "rgba(133, 122, 200)",
    "#f15025"]

    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    btn.addEventListener('click', function() {
        // Get Random number between 0 ~ 3
        const randomNumber = GetRandomNuber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    });

    function GetRandomNuber()
    {
        return Math.floor(Math.random() * colors.length);
    }
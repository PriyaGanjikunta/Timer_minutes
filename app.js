let time = document.querySelector(".time");
let ip;
let countDown;
function display(){
    clearInterval(countDown);
    let ip = document.querySelector("#tm").value;   

    const endTime= Date.now() + ip*60*1000;
    countDown = setInterval(() =>{
        let remaining = Math.max(0, endTime - Date.now());
        let min = Math.floor(remaining / 1000 / 60);
        let sec = Math.floor((remaining / 1000)%60);

        time.textContent= `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

        if(remaining == 0){
            clearInterval(countDown);
            alert("Time is up!");
        }

    }, 1000);

}
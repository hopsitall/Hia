let hia = document.getElementById('hia');


  
    let keys = "qwertyuiopasdfghjklzxcvbnm1234567890-/:;()$&@\".,?!'[]{}#%^*+=_\|~<>€£¥•";

    let hops = setInterval(()=>{
        let o = keys[1];
        let i = keys[0];

        keys[1] = i;
        keys[0] = o;

        let length = keys.length;

        keys[length - 2] = i;
        keys[length - 1] = o;
        
        hia.innerText = keys;

    });
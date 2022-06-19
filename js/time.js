function display_c(){
    var refresh=1000
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
    var current = new Date()
    var x = current.toLocaleTimeString()
    document.getElementById('ct').innerHTML = x;
    display_c();
     }

(function(){let u=null;try{u=JSON.parse(localStorage.getItem('rr_user'))}catch(e){}
const p=location.pathname.split('/').pop()||'index.html',c=f=>p===f?' aria-current="page"':'';
document.getElementById('nav').innerHTML='<header class="top"><a class="logo" href="index.html">RideRescue</a><span class="city">📍 Hyderabad</span><nav><a href="index.html"'+c('index.html')+'>Book help</a><a href="mechanic.html"'+c('mechanic.html')+'>For mechanics</a></nav>'+(u?'<span class="who"></span><button id="out" class="login">Logout</button>':'<a class="login" href="login.html">Login</a>')+'</header>';
if(u){document.querySelector('.who').textContent=u.name;document.getElementById('out').onclick=()=>{try{localStorage.removeItem('rr_user')}catch(e){}location.href='index.html'}}})();

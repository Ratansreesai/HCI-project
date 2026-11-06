const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let u=null;try{u=JSON.parse(localStorage.getItem('rr_user'))}catch(e){}
if(!u||u.role!=='mechanic')location.href='login.html?role=mechanic';
let reqs=[{id:'R1',who:'Kiran',veh:'Bike · Petrol',issue:'Puncture',km:1.2,fare:300},{id:'R2',who:'Anita',veh:'Car · EV',issue:'Battery or charging',km:3.5,fare:1450},{id:'R3',who:'Ravi',veh:'Bike · EV',issue:'Jumpstart',km:2.1,fare:600}];
try{(JSON.parse(localStorage.getItem('rr_reqs'))||[]).forEach(r=>reqs.unshift(r))}catch(e){}
let job=null,st=0,earn=0,done=0;const steps=['Start trip','Mark arrived','Complete job'],net=f=>Math.round(f*.82),week=[620,900,540,1100,780,1300];
function render(){
  const on=$('#online').checked;
  $('#sEarn').textContent='₹'+earn;$('#sJobs').textContent=done;
  $('#reqs').innerHTML=!on?'<tr><td colspan="7">You are offline. Switch Online to see requests.</td></tr>':reqs.length?reqs.map(r=>`<tr><td>${esc(r.who)}</td><td>${esc(r.veh)}</td><td>${esc(r.issue)}</td><td>${r.km} km</td><td>₹${r.fare}</td><td>₹${net(r.fare)}</td><td><button class="btn sm" data-a="${esc(r.id)}">Accept</button><button class="btn sm alt" data-d="${esc(r.id)}">Decline</button></td></tr>`).join(''):'<tr><td colspan="7">No requests right now. Stay online.</td></tr>';
  $('#active').innerHTML=job?`<b>${esc(job.who)}</b>: ${esc(job.issue)}, ${esc(job.veh)}<br>Status: <b>${['Accepted','On the way','Arrived'][st]}</b> · You earn ₹${net(job.fare)}<button class="btn sm" id="adv">${steps[st]}</button>`:'<span class="note">No active job. Accept a request to start.</span>';
  const all=[...week,earn],mx=Math.max(...all,1);
  $('#bars').innerHTML=all.map((v,i)=>`<div><i style="height:${Math.round(v/mx*100)}%"></i><span>${['Mon','Tue','Wed','Thu','Fri','Sat','Today'][i]}<br>₹${v}</span></div>`).join('');
}
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-a]'),d=e.target.closest('[data-d]');$('#msg').textContent='';
  if(a){if(job){$('#msg').textContent='Finish your active job before accepting another.';return}
    const i=reqs.findIndex(r=>r.id===a.dataset.a);job=reqs.splice(i,1)[0];st=0}
  if(d)reqs=reqs.filter(r=>r.id!==d.dataset.d);
  if(e.target.id==='adv'){if(st<2)st++;else{earn+=net(job.fare);done++;job=null}}
  render();
});
$('#online').onchange=render;render();

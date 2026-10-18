(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('yr').textContent=new Date().getFullYear();

  // Mobile menu
  var burger=document.querySelector('.burger'),menu=document.getElementById('menu');
  function setMenu(o){menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o)}
  burger.addEventListener('click',function(){setMenu(!menu.classList.contains('open'))});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')setMenu(false)});

  // Project filters
  var chips=document.querySelectorAll('.chip'),cards=document.querySelectorAll('.proj');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('on')});c.classList.add('on');
    var f=c.dataset.f;
    cards.forEach(function(p){p.classList.toggle('hide',f!=='all'&&p.dataset.t.split(' ').indexOf(f)<0)});
  })});

  // Reveal on scroll + active nav link
  var secs=document.querySelectorAll('section:not(.hero)');
  secs.forEach(function(s){s.classList.add('rv')});
  var links=document.querySelectorAll('nav a:not(.pill)');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('show');
        links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)})}
    })},{threshold:.2});
    secs.forEach(function(s){io.observe(s)});
  }else{secs.forEach(function(s){s.classList.add('show')})}

  // Hero terminal (commands taken from skills listed on the resume)
  var out=document.getElementById('term');
  var script=[
    ['cmd','ssh ec2-user@my-instance'],['out','Connected via SSH.'],
    ['cmd','chmod +x deploy.sh && ./deploy.sh'],['out','Script is executable and running.'],
    ['cmd','sudo systemctl status nginx'],['ok','nginx: active (running)'],
    ['cmd','']
  ];
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
  if(reduce){
    out.innerHTML=script.map(function(l){return l[0]==='cmd'?'<span class="p">$ </span>'+esc(l[1]):'<span class="'+(l[0]==='ok'?'ok':'')+'">'+esc(l[1])+'</span>'}).join('\n')+'<span class="cur"></span>';
    return;
  }
  var html='',i=0,j=0;
  function type(){
    if(i>=script.length){out.innerHTML=html+'<span class="cur"></span>';return}
    var l=script[i];
    if(l[0]==='cmd'){
      if(j===0)html+='<span class="p">$ </span>';
      if(j<l[1].length){html+=esc(l[1][j++]);out.innerHTML=html+'<span class="cur"></span>';return void setTimeout(type,45)}
      i++;j=0;html+='\n';return void setTimeout(type,350)
    }
    html+='<span class="'+(l[0]==='ok'?'ok':'')+'">'+esc(l[1])+'</span>\n';i++;out.innerHTML=html+'<span class="cur"></span>';setTimeout(type,500)
  }
  type();
})();

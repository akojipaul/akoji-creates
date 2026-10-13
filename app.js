const grid=document.querySelector('#project-grid');
const dialog=document.querySelector('#viewer');
const media=document.querySelector('#viewer-media');
const projects=window.portfolioProjects;
let lastTrigger;
function render(filter='all'){
 grid.replaceChildren();
 const thumbnails=document.querySelector('#thumbnail-grid');thumbnails.replaceChildren();
 const shown=projects.filter(p=>p.type==='thumbnail'||filter==='all'||(filter==='video'?p.type==='video':p.type===filter));
 shown.forEach(p=>{
  const card=document.createElement('article');card.className='project '+p.type+(p.featured?' featured':'');
  const button=document.createElement('button');button.className='project-image';button.setAttribute('aria-label',(p.external?'Watch on YouTube: ':p.id?'Play ':'View ')+p.title);
  const img=document.createElement('img');img.src=p.image||`https://i.ytimg.com/vi/${p.id}/hqdefault.jpg`;img.alt=p.title;img.loading='lazy';img.decoding='async';
  img.addEventListener('error',()=>{img.hidden=true;button.classList.add('image-missing');});
  button.append(img);const icon=document.createElement('span');icon.className='project-icon';icon.textContent=p.id?'▶':'↗';button.append(icon);
  const label=document.createElement('p');label.className='project-label';label.textContent=p.label;
  const title=document.createElement('h3');title.textContent=p.title;
  button.addEventListener('click',()=>openProject(p,button));card.append(button,label,title);(p.type==='thumbnail'?thumbnails:grid).append(card);
 });
 document.querySelector('#work-count').textContent=`${shown.filter(p=>p.type!=='thumbnail').length} video projects shown. Three supporting thumbnails below.`;
}
function openProject(p,trigger){
 // A file:// preview cannot supply the web referrer YouTube requires.
 // Keep previews usable; hosted HTTP(S) pages retain embedded playback.
 if(p.id&&(p.external||!['http:','https:'].includes(window.location.protocol))){
  window.open(`https://www.youtube.com/watch?v=${p.id}`,'_blank','noopener,noreferrer');
  return;
 }
 lastTrigger=trigger;document.querySelector('#viewer-title').textContent=p.title;document.querySelector('#viewer-description').textContent=p.description;media.replaceChildren();
 const link=document.querySelector('#youtube-link');link.hidden=!p.id;
 if(p.id){const frame=document.createElement('iframe');frame.src=`https://www.youtube-nocookie.com/embed/${p.id}?autoplay=1`;frame.title=p.title;frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';media.append(frame);link.href=`https://www.youtube.com/watch?v=${p.id}`;}
 else {const image=document.createElement('img');image.src=p.image;image.alt=p.title;media.append(image);}
 dialog.showModal();document.body.classList.add('modal-open');
}
document.querySelector('#close-viewer').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{media.replaceChildren();document.body.classList.remove('modal-open');lastTrigger?.focus();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render(button.dataset.filter);}));
const menu=document.querySelector('.menu');const nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelector('#enquiry').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);const message=`Hi Akoji, I’m ${String(data.get('name')).trim()}.\nService: ${data.get('service')}\n\n${String(data.get('brief')).trim()}`;window.open('https://wa.me/2348167609597?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');});
document.querySelector('#year').textContent=new Date().getFullYear();render();

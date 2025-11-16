// --- Data: artworks (using your provided image files) ---
const artworks = [
  {
    id: 2,
    title: "Echoes of Dawn",
    artist: "Maren Holt",
    year: 1994,
    medium: "Oil on Board",
    description: "Echoes of Dawn captures the fragile instant when night yields to morning light; the painting breathes with a softened luminosity that moves across mist-laden trees and a still lake. Holt’s brushwork balances taut realism with atmospheric suggestion: distant forms dissolve in vapor, while foreground details retain a tender clarity that anchors perception. The composition is cinematic in its pacing — it invites a slow forward look, as if the scene will continue unfolding beyond the picture plane.",
    curator: "Holt makes light the protagonist: its gentle, directional warmth organizes the entire composition and acts as a quiet narrator. The painting is an exercise in patience, a reminder that meaning often emerges in the liminal spaces between visibility and memory.",
    image: "assets/echoes-of-dawn.jpg"
  },
  {
    id: 3,
    title: "Fragmented Reality",
    artist: "Kael Torrin",
    year: 2020,
    medium: "Mixed Media on Canvas (Acrylic, Digital Pigment Overlay)",
    description: "Fragmented Reality juxtaposes a meticulously rendered human profile with an interlocking system of geometric planes, circles, and textures — a visual argument about identity in the age of data. Torrin’s palette alternates between saturated warmth and cool structural blues, creating a push-pull that is both psychological and formal. Layers of translucent pigment and digital overlay fracture and recompose the face, suggesting memory’s discontinuities and the many surfaces through which a contemporary self is perceived.",
    curator: "This work reframes portraiture by making fragmentation the subject: identity is shown as constructed and networked rather than singular. Attend to the way geometric elements rhythmically enter and exit the figure — they feel less like obstructions and more like coordinates of contemporary subjectivity.",
    image: "assets/fragmented-reality.jpg"
  },
  {
    id: 4,
    title: "Interconnected",
    artist: "Selene Duarte",
    year: 2019,
    medium: "Digital Light Installation (LED Matrix, Reflective Panels, Projection Layering)",
    description: "Interconnected is an immersive study of presence within networks of light and reflection. A solitary silhouette proceeds through a corridor of suspended points and ribbons of illumination that suggest data flows, synapses, or constellations; each strand is both materially present and visually ephemeral. The work plays on reflection and repetition so the viewer’s body becomes part of the installation’s circuitry, alternating between being subject and signal as they move.",
    curator: "Duarte dissolves the boundary between human scale and system scale: the installation’s luminous threads map invisible relationships and invite an embodied experience of connectivity. The subtle choreography of light encourages viewers to consider their own role within sprawling, unseen networks.",
    image: "assets/interconnected.jpg"
  },
  {
    id: 5,
    title: "Star of Silence",
    artist: "Aurelia Venn",
    year: 1887,
    medium: "Oil on Canvas",
    description: "Star of Silence is a reverent nocturne in which a single, star-like blaze descends toward a solitary figure standing on a quiet knoll. Venn’s technique layers whisper-thin glazes to render an atmospheric depth where nebulae and night tones soften into the warm, convergent flare of the star. The painting composes silence as a tangible presence — the beam of light feels like a language, an address from the cosmos that is equal parts altar and horizon.",
    curator: "Venn’s brushwork dissolves the boundary between divine symbolism and intimate contemplation. The painting reads as a meditation on reception: a human being positioned to receive, to be answered by the sky.",
    image: "assets/star-of-silence.jpg"
  },
  {
    id: 6,
    title: "Urban Solitude",
    artist: "Rowan Mercer",
    year: 2005,
    medium: "Digital Illustration / Photoreal Composite",
    description: "Urban Solitude frames a lone figure in the cinematic geometry of a rain-slicked avenue, where neon signage and the echo of headlights suggest movement and commerce while mood registers as stillness. Mercer composes with a restrained palette of teal and warm orange reflections, using atmospheric haze and softened focus to emphasize emotional distance rather than documentary detail. The image is an elegy to lone presence within metropolitan density — anonymous yet epic in emotional scale.",
    curator: "A carefully staged meditation on isolation amid metropolitan abundance: the work uses reflective surfaces and diffuse light to mirror inner separateness. Pay attention to how the figure’s silhouette is echoed subtly across puddles and storefront glows — a doubling that intensifies the theme of internal echo.",
    image: "assets/urban-solitude.jpg"
  },
  {
    id: 1,
    title: "Radiant Convergence",
    artist: "Elara Myles",
    year: 2022,
    medium: "Acrylic & Oil Blend on Canvas",
    description: "Radiant Convergence is a luminous abstract that stages color as both event and environment: cool ceruleans and deep indigos surrender to a central axis of molten gold and coral that reads like a sunrise within a nebula. Myles uses layered strokes, spattered textures, and delicate drips to simulate the particulate nature of light — tiny marks become stellar dust, pooling into larger phenomena of glow and intensity. The piece moves between suggestion and spectacle, asking viewers to inhabit the moment where energy coheres into form.",
    curator: "Here, color is the agent of emergence — the painting locates the viewer at an instant of cosmic crystallization. Its tactile surface and radiant center invite contemplative immersion, asking us to consider how small elements aggregate into luminous meaning.",
    image: "assets/radiant-convergence.jpg"
  }
];


// --- Sections (2 artworks per category, updated names) ---
const sections = [
  {id:'classical',title:'Classical Light',desc:'Works that honor the subtleties of light and craft.',artIds:[5,1]},
  {id:'chromatic',title:'Chromatic Abstractions',desc:'A dialogue of form, color, and emotional architecture.',artIds:[2,4]},
  {id:'contemporary',title:'Contemporary Visions',desc:'Contemporary reflections and textures of the now.',artIds:[3,6]}
];


// --- Render sections and artworks ---
const gallery = document.getElementById('gallery');
function buildGallery(){
  gallery.innerHTML = ''; // clear
  sections.forEach((sec,si)=>{
    const section = document.createElement('section'); section.className='section'; section.id=`sec-${sec.id}`;
    const head = document.createElement('div'); head.className='section-head';
    const left = document.createElement('div'); left.innerHTML=`<div class='section-title'>${sec.title}</div><div class='section-desc'>${sec.desc}</div>`;
    head.appendChild(left);
    section.appendChild(head);
    const grid = document.createElement('div'); grid.className='art-grid';
    sec.artIds.forEach(id=>{
      const art = artworks.find(a=>a.id===id);
      if(!art) return;
      const card = document.createElement('button'); card.className='card'; card.setAttribute('aria-label',art.title); card.dataset.id = art.id;
      card.innerHTML = `<img class='art-thumb' src='${art.image}' alt='${art.title} by ${art.artist}'/><div class='meta'><h3>${art.title}</h3><p>${art.artist} — ${art.year}</p></div>`;
      card.addEventListener('click',()=>openModal(art.id));
      grid.appendChild(card);
    });
    section.appendChild(grid);
    gallery.appendChild(section);
  });
}
buildGallery();

// populate favorite select
const favSelect = document.getElementById('fav');
if(favSelect){ favSelect.innerHTML = '<option value="">(pick one after you explore)</option>'; artworks.forEach(a=>{const opt=document.createElement('option');opt.value=a.id;opt.textContent=`${a.title} — ${a.artist}`;favSelect.appendChild(opt)}) }

// --- Scroll-driven transitions (simple parallax & reveal) ---
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity=1; e.target.style.transform='translateY(0)';
    } else { e.target.style.opacity=0.25; e.target.style.transform='translateY(18px)'; }
  });
},{threshold:.25});
function initSectionObserver(){
  document.querySelectorAll('.section').forEach(s=>{s.style.transition='opacity .8s var(--ease),transform .8s var(--ease)'; s.style.opacity=0; s.style.transform='translateY(18px)'; observer.observe(s)})
}
initSectionObserver();

// --- Simple ambient audio using WebAudio (no external file) ---
let audioCtx,noiseNode,gainNode,playing=false;
const audioBtn = document.getElementById('audioBtn');
function initAudio(){
  if(audioCtx) return;
  audioCtx = new (window.AudioContext||window.webkitAudioContext)();
  const bufferSize = 2*audioCtx.sampleRate; const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate); const output = noiseBuffer.getChannelData(0);
  for(let i=0;i<bufferSize;i++){output[i] = (Math.random()*2-1)*0.25}
  noiseNode = audioCtx.createBufferSource(); noiseNode.buffer = noiseBuffer; noiseNode.loop = true;
  const bp = audioCtx.createBiquadFilter(); bp.type='lowpass'; bp.frequency.value=700; bp.Q.value=0.7;
  gainNode = audioCtx.createGain(); gainNode.gain.value=0.0;
  noiseNode.connect(bp); bp.connect(gainNode); gainNode.connect(audioCtx.destination);
}
function toggleAudio(){
  if(!audioCtx) initAudio();
  if(!playing){ noiseNode.start(); fadeGain(0.0,0.14,1200); audioBtn.textContent='Pause Ambience'; audioBtn.setAttribute('aria-pressed','true'); playing=true; }
  else { fadeGain(0.14,0.0,800); audioBtn.textContent='Play Ambience'; audioBtn.setAttribute('aria-pressed','false'); setTimeout(()=>{try{noiseNode.stop();}catch(e){} audioCtx=null; noiseNode=null;},900); playing=false }
}
function fadeGain(from,to,ms){ if(!gainNode) return; const start=audioCtx.currentTime; gainNode.gain.cancelScheduledValues(start); gainNode.gain.setValueAtTime(from,start); gainNode.gain.linearRampToValueAtTime(to,start+ms/1000); }
if(audioBtn) audioBtn.addEventListener('click',toggleAudio);

// --- Start tour actions ---
const startBtn = document.getElementById('startTour');
if(startBtn) startBtn.addEventListener('click',()=>{
  const lobby = document.getElementById('lobby'); if(lobby){ lobby.style.transition='opacity .6s var(--ease)'; lobby.style.opacity='0'; setTimeout(()=>{lobby.style.display='none'; document.getElementById('gallery').scrollIntoView({behavior:'smooth'});},560);} 
});
const skipBtn = document.getElementById('skipToGallery'); if(skipBtn) skipBtn.addEventListener('click',()=>document.getElementById('gallery').scrollIntoView({behavior:'smooth'}));

// --- Modal detail view ---
const overlay = document.getElementById('overlay'); const modalImg = document.getElementById('modalImg'); const modalTitle = document.getElementById('modalTitle'); const modalArtist = document.getElementById('modalArtist'); const modalDesc = document.getElementById('modalDesc'); const curatorNotes = document.getElementById('curatorNotes'); const closeModalBtn = document.getElementById('closeModal');
let currentArtIndex=0;
function openModal(id){
  const idx = artworks.findIndex(a=>a.id===id); if(idx<0) return; currentArtIndex=idx; const art = artworks[idx];
  modalImg.src = art.image; modalImg.alt = `${art.title} — ${art.artist}`; modalTitle.textContent = art.title; modalArtist.textContent = `${art.artist} • ${art.year} • ${art.medium}`; modalDesc.textContent = art.description; curatorNotes.textContent = 'Curator notes: ' + art.curator;
  overlay.classList.add('show'); document.body.style.overflow='hidden';
}
function closeModal(){ overlay.classList.remove('show'); document.body.style.overflow=''; }
if(closeModalBtn) closeModalBtn.addEventListener('click',closeModal); overlay.addEventListener('click',e=>{ if(e.target===overlay) closeModal(); });

// keyboard navigation
document.addEventListener('keydown',(e)=>{
  if(e.key==='ArrowLeft') navigateSection(-1);
  if(e.key==='ArrowRight') navigateSection(1);
  if(e.key==='Escape') closeModal();
});

// next/prev section
const nextSec=document.getElementById('nextSec'), prevSec=document.getElementById('prevSec');
function navigateSection(dir){
  const secs = Array.from(document.querySelectorAll('.section')); const visibleIdx = secs.findIndex(s=>s.getBoundingClientRect().top>=-100 && s.getBoundingClientRect().top < window.innerHeight/2);
  let ni = visibleIdx + dir; if(ni<0) ni=0; if(ni>=secs.length) ni=secs.length-1; secs[ni].scrollIntoView({behavior:'smooth'});
}
if(nextSec) nextSec.addEventListener('click',()=>navigateSection(1)); if(prevSec) prevSec.addEventListener('click',()=>navigateSection(-1));

// --- Feedback form validation & submission (no HTML alerts) ---
const form = document.getElementById('feedbackForm'); const errName=document.getElementById('errName'), errEmail=document.getElementById('errEmail'), errRating=document.getElementById('errRating'), errComments=document.getElementById('errComments'); const visitorList=document.getElementById('visitorList'); const thanksBox=document.getElementById('thanksBox'), thanksTitle=document.getElementById('thanksTitle');
let visitors = [];
if(form) form.addEventListener('submit', (ev)=>{
  ev.preventDefault(); clearErr(); const name=form.name.value.trim(), email=form.email.value.trim(), rating=form.rating.value, comments=form.comments.value.trim(); let ok=true;
  if(name.length<2){ errName.textContent='Please enter your name.'; ok=false }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ errEmail.textContent='Please provide a valid email.'; ok=false }
  if(!rating){ errRating.textContent='Please choose a rating.'; ok=false }
  if(comments.length<6){ errComments.textContent='Comments should be at least 6 characters.'; ok=false }
  if(!ok) return;
  const fav = artworks.find(a=>a.id==form.fav.value);
  const record = {name, email, rating, comments, fav: fav?`${fav.title} — ${fav.artist}`:'(none)', time:new Date().toLocaleString()};
  visitors.push(record); renderVisitors(); showThanks(record);
  form.reset();
});
function clearErr(){if(errName) errName.textContent=''; if(errEmail) errEmail.textContent=''; if(errRating) errRating.textContent=''; if(errComments) errComments.textContent='';}
function renderVisitors(){ if(!visitorList) return; visitorList.innerHTML=''; visitors.slice().reverse().forEach(v=>{const el = document.createElement('div'); el.style.padding='10px 12px'; el.style.border='1px solid rgba(255,255,255,0.03)'; el.style.marginTop='8px'; el.innerHTML=`<strong>${escapeHtml(v.name)}</strong> <span style='float:right;color:var(--muted);font-size:.9rem'>${v.time}</span><div style='color:var(--muted);margin-top:6px'>Rating: ${v.rating} • Favorite: ${escapeHtml(v.fav)}</div><div style='margin-top:8px'>${escapeHtml(v.comments)}</div>`; visitorList.appendChild(el); }) }
function showThanks(record){ if(!thanksTitle||!thanksBox) return; thanksTitle.textContent = `Thanks, ${record.name}!`; thanksBox.classList.add('show'); setTimeout(()=>{ thanksBox.classList.remove('show') },6000);
}
function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]) }

// restart btn: scroll to top (lobby) or show lobby if hidden
const restartBtn = document.getElementById('restartBtn'); if(restartBtn) restartBtn.addEventListener('click',()=>{ const lobby=document.getElementById('lobby'); if(lobby){ lobby.style.display='block'; lobby.style.opacity='1'; } window.scrollTo({top:0,behavior:'smooth'}); });

// small accessibility: focus trap for modal (simple)
if(overlay) overlay.addEventListener('keydown', (e)=>{ if(e.key==='Tab'){ e.preventDefault(); if(closeModalBtn) closeModalBtn.focus(); } });

// init: start visibility subtle animation
window.addEventListener('load', ()=>{ const lobby=document.getElementById('lobby'); if(lobby){ lobby.style.opacity=1; lobby.style.transition='opacity .9s var(--ease)'; } });

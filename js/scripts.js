const ICONS = {
  design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h6l11-11a2.5 2.5 0 0 0-5-5L4 15v6z"/><path d="M13 6l5 5"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 21V9l6-5 6 5v12"/><path d="M10 21v-6h4v6M9 12h.01M9 15h.01M15 12h.01M15 15h.01"/></svg>',
  survey: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v6"/><path d="M6 21l6-12 6 12"/><circle cx="12" cy="9" r="2.5"/><path d="M4 21h16"/></svg>',
  manage: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 3v3h6V3M8 11l2.5 2.5L16 8"/></svg>',
  plumb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h5v6a4 4 0 0 1-4 4H7"/><path d="M12 9h5v9a3 3 0 0 1-3 3H8"/><circle cx="4" cy="20" r="1"/></svg>',
  planning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="9" r="6"/><path d="M12 3v2M12 13v2M6 9H4M20 9h-2"/><path d="M12 21c-3 0-5-3-5-3h10s-2 3-5 3z"/></svg>'
};

const SERVICES = [
  {ic:'design', title:'Architectural, Structural, Electrical & Mechanical Designs', short:'Full design coordination across every engineering discipline.', long:'Concept through construction drawings — architectural layouts, structural calculations, and electrical and mechanical systems designed together so nothing conflicts once building starts.', tags:['Concept design','Structural calcs','MEP coordination']},
  {ic:'building', title:'Building Construction', short:'Residential, commercial and institutional builds, managed on site.', long:'From groundbreaking to finishing, we manage labour, materials and sequencing on site, with quality and safety checks built into every stage of the build.', tags:['Residential','Commercial','Site supervision']},
  {ic:'survey', title:'Surveying & Real Estate', short:'Land surveys, boundary work and property development support.', long:'Topographic and boundary surveys, site assessments, and support for real estate development from land acquisition through to sub-division and titling.', tags:['Topographic survey','Boundary marking','Land development']},
  {ic:'manage', title:'Project Management', short:'One accountable team tracking cost, schedule and quality.', long:'Independent oversight of contractors, budgets and timelines — giving clients a single point of contact who is accountable for the project reaching handover on spec.', tags:['Scheduling','Budget control','Contractor oversight']},
  {ic:'plumb', title:'Electrical & Plumbing Works', short:'Installation and maintenance of core building systems.', long:'Wiring, distribution and fittings alongside water supply, drainage and sanitary installation — the systems that make a completed structure actually livable.', tags:['Wiring & distribution','Water supply','Drainage & sanitary']},
  {ic:'planning', title:'Physical Planning', short:'Site layout and zoning-aligned development planning.', long:'Land-use and site layout planning that accounts for access, drainage, future expansion and compliance with local physical-planning requirements.', tags:['Site layout','Zoning compliance','Access planning']}
];

function buildHomeServices(){
  const el = document.getElementById('home-services');
  if(!el) return;
  el.innerHTML = SERVICES.map((s,i)=>`
    <div class="svc-card">
      <div class="ic">${ICONS[s.ic]}</div>
      <div class="num">0${i+1}</div>
      <h3>${s.title}</h3>
      <p>${s.short}</p>
    </div>`).join('');
}

function buildFullServices(){
  const el = document.getElementById('svc-list-full');
  if(!el) return;
  el.innerHTML = SERVICES.map((s,i)=>`
    <div class="svc-row">
      <div class="idx">0${i+1}</div>
      <div class="icwrap">${ICONS[s.ic]}</div>
      <div class="col2">
        <h3>${s.title}</h3>
        <p>${s.long}</p>
        <div class="tags">${s.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

const CAPS = [
  {tag:'Residential', title:'Residential developments', desc:'Family homes and multi-unit residential builds — from architectural design through to finishing and handover.', scope:'Design · Build · Finish', art:`<rect width="100%" height="100%" fill="#1C2127"/><path d="M40 170 L40 90 L110 50 L180 90 L180 170 Z" stroke="#FAFAF8" stroke-width="1.5" fill="none"/><path d="M60 170 L60 120 L90 120 L90 170" stroke="#C31F2E" stroke-width="1.5" fill="none"/><line x1="120" y1="100" x2="150" y2="100" stroke="#4A5560"/><line x1="120" y1="130" x2="150" y2="130" stroke="#4A5560"/><line x1="200" y1="170" x2="200" y2="60" stroke="#39424C" stroke-dasharray="3 3"/>`},
  {tag:'Commercial', title:'Commercial & institutional buildings', desc:'Offices, retail and institutional structures requiring coordinated structural and MEP design.', scope:'Structural · MEP · Supervision', art:`<rect width="100%" height="100%" fill="#1C2127"/><rect x="50" y="40" width="90" height="130" stroke="#FAFAF8" stroke-width="1.5" fill="none"/><line x1="50" y1="70" x2="140" y2="70" stroke="#4A5560"/><line x1="50" y1="100" x2="140" y2="100" stroke="#4A5560"/><line x1="50" y1="130" x2="140" y2="130" stroke="#4A5560"/><rect x="165" y="90" width="55" height="80" stroke="#C31F2E" stroke-width="1.5" fill="none"/><line x1="165" y1="115" x2="220" y2="115" stroke="#4A5560"/><line x1="165" y1="140" x2="220" y2="140" stroke="#4A5560"/>`},
  {tag:'Infrastructure', title:'Infrastructure & site works', desc:'Surveying, site preparation and physical planning that gets a plot ready for development.', scope:'Survey · Grading · Layout', art:`<rect width="100%" height="100%" fill="#1C2127"/><path d="M20 150 L100 60 L180 150" stroke="#FAFAF8" stroke-width="1.5" fill="none"/><circle cx="100" cy="60" r="4" stroke="#E5AC3C" stroke-width="1.5" fill="none"/><line x1="100" y1="60" x2="100" y2="20" stroke="#39424C" stroke-dasharray="2 3"/><path d="M20 150h190" stroke="#4A5560"/><path d="M45 150v-10M75 150v-10M105 150v-10M135 150v-10M165 150v-10" stroke="#4A5560"/>`},
  {tag:'Systems', title:'Electrical & plumbing installations', desc:'Distribution, wiring, water supply and drainage work fitted to completed or in-progress structures.', scope:'Wiring · Water · Drainage', art:`<rect width="100%" height="100%" fill="#1C2127"/><path d="M40 40v130" stroke="#4A5560"/><path d="M100 40v130" stroke="#4A5560"/><path d="M160 40v130" stroke="#4A5560"/><path d="M40 70h120M40 110h120" stroke="#39424C"/><circle cx="40" cy="70" r="4" fill="#C31F2E"/><circle cx="100" cy="110" r="4" fill="#E5AC3C"/><circle cx="160" cy="70" r="4" fill="#FAFAF8"/>`}
];

function buildCaps(){
  const el = document.getElementById('cap-grid');
  if(!el) return;
  el.innerHTML = CAPS.map(c=>`
    <div class="cap-card">
      <div class="cap-art"><svg viewBox="0 0 240 180" preserveAspectRatio="xMidYMid slice">${c.art}</svg></div>
      <div class="cap-body">
        <div class="tag">${c.tag}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="scope">${c.scope}</div>
      </div>
    </div>`).join('');
}

function toggleMnav(){ document.getElementById('mnav').classList.toggle('open'); }

function submitForm(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.style.color = 'var(--red)';
  status.textContent = 'Thanks — this is a demo form. In the live site this would send straight to the Nector office.';
  document.getElementById('quoteForm').reset();
  return false;
}

document.addEventListener('DOMContentLoaded', function(){
  buildHomeServices();
  buildFullServices();
  buildCaps();
});
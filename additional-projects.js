(function(){
  const grid=document.getElementById("project-grid");
  if(!grid)return;
  const projects=[
    {
      href:"patient-appointments.html",number:"11",name:"Daywell",
      type:"PRODUCT / PATIENT SCHEDULING",
      summary:"A patient-first booking flow that brings clinician fit, appointment times, and a clear confirmation into one calm sequence.",
      bg:"#dfe8dc",fg:"#284334",accent:"#c66c52",
      art:'<div class="health-preview appointment-preview"><div class="health-mini-head"><b>DAYWELL</b><span>Find care</span></div><div class="health-line wide"></div><div class="health-line"></div><div class="health-choice"><i>Dr. Lila Anand</i><i>9:30 am</i></div><div class="health-choice pale"><i>Dr. Marcus Chen</i><i>10:15 am</i></div></div>'
    },
    {
      href:"patient-companion.html",number:"12",name:"Stillwell",
      type:"PRODUCT / PATIENT PORTAL",
      summary:"A patient companion that gathers upcoming care, everyday reminders, and team messages without turning the home screen into a chart.",
      bg:"#293652",fg:"#f4f5f9",accent:"#e4ad6f",
      art:'<div class="health-preview portal-preview"><div class="portal-rail"></div><div class="portal-content"><div class="health-mini-head"><b>YOUR CARE</b><span>Private space</span></div><div class="portal-visit"><i></i><span><b>Next visit</b><small>Fri · 9:30 am</small></span></div><div class="portal-task"><i></i><span>Morning routine</span></div><div class="portal-task"><i></i><span>Care team message</span></div></div></div>'
    }
  ];
  const style=document.createElement("style");
  style.textContent=".health-preview{position:absolute;left:13%;right:8%;bottom:8%;min-height:44%;padding:16px 17px;background:#fffefa;border:1px solid #d9dfd7;border-radius:5px;box-shadow:0 16px 36px #17251d20;color:#24352d;transform:rotate(-2deg);font:10px 'DM Sans',Arial,sans-serif}.health-mini-head{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e6e9e2;padding-bottom:8px;font-size:8px;color:#67746a}.health-mini-head b{color:#315f4b;letter-spacing:.1em}.health-line{height:5px;background:#e6ebe3;border-radius:4px;width:57%;margin-top:11px}.health-line.wide{width:77%;height:8px;margin-top:14px;background:#d7e4d6}.health-choice{display:flex;justify-content:space-between;margin-top:10px;padding:7px 8px;border:1px solid #a9c5ae;background:#eef5ec;font-size:8px;border-radius:3px}.health-choice.pale{border-color:#e6e9e2;background:#fffefa;color:#6b756e}.portal-preview{left:12%;right:7%;bottom:7%;min-height:48%;display:flex;background:#fff;border-color:#586689;transform:rotate(1.5deg);overflow:hidden}.portal-rail{width:14%;background:#202c48}.portal-content{padding:13px 14px;flex:1}.portal-preview .health-mini-head{border-color:#e3e7ee;font-size:7px}.portal-preview .health-mini-head b{color:#425789}.portal-visit{display:flex;align-items:center;gap:8px;background:#eef0f8;margin-top:12px;padding:9px;border-radius:4px}.portal-visit>i{width:23px;height:23px;background:#435789;border-radius:50%}.portal-visit b,.portal-visit small{display:block;font-size:8px}.portal-visit small{color:#747d8e}.portal-task{display:flex;align-items:center;gap:7px;margin-top:9px;font-size:8px;color:#596477}.portal-task i{width:11px;height:11px;border:1px solid #7f8bad;border-radius:3px}.project-card:hover .health-preview{transform:rotate(0) translateY(-3px)}@media(max-width:760px){.health-preview{left:8%;right:6%;bottom:7%;padding:12px}.portal-content{padding:10px}}";
  document.head.appendChild(style);
  const markup=projects.map(function(p){
    return '<article class="project-card"><a href="'+p.href+'" aria-label="Open '+p.name+' independent healthcare concept"><div class="project-visual" style="--visual-bg:'+p.bg+';--visual-ink:'+p.fg+';--project-accent:'+p.accent+'"><div class="visual-pattern"></div><span class="visual-word">'+p.name+'</span><span class="visual-caption">'+p.type+'</span>'+p.art+'</div><div class="project-meta"><span class="project-number">'+p.number+' / 12</span><span>INDEPENDENT STUDY</span></div><div class="project-title-row"><h3>'+p.name+'</h3><span class="arrow-link" aria-hidden="true">↗</span></div><p class="project-summary">'+p.summary+'</p></a></article>';
  }).join("");
  grid.insertAdjacentHTML("beforeend",markup);
})();

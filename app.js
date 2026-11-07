
document.querySelectorAll('.menu-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nav=document.getElementById('site-nav');
    const open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
});
document.querySelectorAll('.lead-form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const fd=new FormData(form);
    const type=form.dataset.type||'Website Inquiry';
    const lines=[`Inquiry type: ${type}`];
    for (const [k,v] of fd.entries()) lines.push(`${k}: ${v}`);
    const subject=encodeURIComponent(`DIY Jeff Jax — ${type}`);
    const body=encodeURIComponent(lines.join('\n'));
    window.location.href=`mailto:contact@diyjeffjax.com?subject=${subject}&body=${body}`;
  });
});
const pkgSelect=document.getElementById('package-select');
function setPackage(v){ if(!pkgSelect||!v) return; for(const o of pkgSelect.options){ if(o.value===v){ pkgSelect.value=v; return; } } }
document.querySelectorAll('[data-package]').forEach(b=>b.addEventListener('click',()=>setPackage(b.dataset.package)));
const qp=new URLSearchParams(location.search).get('package'); if(qp) setPackage(qp);
const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

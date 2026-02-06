(function(){
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('mobilemenu');
  if(!btn || !menu) return;

  function setOpen(open){
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.hidden = !open;
  }
  setOpen(false);

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });

  menu.addEventListener('click', (e) => {
    const t = e.target;
    if(t && t.tagName === 'A') setOpen(false);
  });
})();

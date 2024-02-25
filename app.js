
const toggleBtn = document.querySelector('.toggle-btn');
const sidebarEl = document.querySelector('.sidebar');
const sidebarClose = document.getElementById('sidebar-close');

toggleBtn.addEventListener('click', ()=>{
  sidebarEl.classList.toggle('show-sidebar');
});
sidebarClose.addEventListener('click', ()=>{
  sidebarEl.classList.remove('show-sidebar')
})




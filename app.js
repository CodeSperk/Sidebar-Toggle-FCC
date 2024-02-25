
const toggleBtn = document.querySelector('.toggle-btn');
const sidebarEl = document.querySelector('.sidebar');
const sidebarClose = document.getElementById('sidebar-close');

toggleBtn.addEventListener('click', ()=>{
  // if(sidebarEl.classList.contains('show-sidebar')){
  //   sidebarEl.classList.remove('show-sidebar');
  // }else{
  // sidebarEl.classList.add('show-sidebar');
  // }
  sidebarEl.classList.toggle('show-sidebar');
});
sidebarClose.addEventListener('click', ()=>{
  sidebarEl.classList.remove('show-sidebar')
})




const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
reveals.forEach(el => observer.observe(el));
document.querySelector('.menu-button')?.addEventListener('click', event => {
  const nav = document.querySelector('.desktop-nav');
  const open = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.desktop-nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.desktop-nav')?.classList.remove('open')));
document.querySelector('.newsletter')?.addEventListener('submit', event => {
  event.preventDefault();
  const toast = document.querySelector('.toast');
  toast.classList.add('show'); event.currentTarget.reset();
  setTimeout(() => toast.classList.remove('show'), 2600);
});

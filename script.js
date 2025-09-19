document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Mensagem enviada! (funcionalidade de backend não implementada neste protótipo)');
  this.reset();
});
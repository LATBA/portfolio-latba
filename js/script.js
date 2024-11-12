document.getElementById('mode-toggle').addEventListener('click', function() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      this.textContent = 'Mode Sombre';
    } else {
      html.classList.add('dark');
      this.textContent = 'Mode Clair';
    }
  });
  document.getElementById('mode-toggle').addEventListener('click', function()
 { const html = document.documentElement; if (html.classList.contains('dark')) 
  { html.classList.remove('dark'); this.textContent = 'Mode Sombre'; } 
  else { html.classList.add('dark'); this.textContent = 'Mode Clair'; } });
 document.getElementById('mode-toggle').addEventListener('click', function() 
 { const html = document.documentElement; if (html.classList.contains('dark')) 
  { html.classList.remove('dark'); this.textContent = 'Mode Sombre'; } 
  else { html.classList.add('dark'); this.textContent = 'Mode Clair'; } });
  document.addEventListener('DOMContentLoaded', function()
   { var messageDiv = document.createElement('div'); 
    messageDiv.className = 'fixed top-10 w-full text-center text-4xl p-4 text-black bg-opacity-90 shadow-md z-50';
     messageDiv.innerHTML = 'Bienvenue ! Découvrez mon univers créatif.';
      document.body.appendChild(messageDiv); setTimeout(function()
       { messageDiv.style.display = 'none'; }, 5000); });
     
document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  
  mobileMenuButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("hidden");
  });
});

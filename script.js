/* DARK MODE */
const darkBtn = document.getElementById('darkModeToggle');
const darkIcon = darkBtn.querySelector('i');

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkIcon.classList.toggle('fa-moon');
  darkIcon.classList.toggle('fa-sun');
});

/* MODAL */
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.body.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG' && e.target.closest('.galeria')) {
    modal.style.display = 'block';
    modalImg.src = e.target.src;
    caption.textContent = e.target.alt;
  }
});

closeBtn.onclick = () => modal.style.display = 'none';
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

/* GALERIAS */
const main = document.getElementById('main-content');

const galerias = {
  2023: ['maio.png','junho.png','julho.png','agosto.png','setembro.png','destaque3tri2023.png','outubro.png','novembro.png','dezembro.png','destaque4tri2023.png','destaqueanual2023.png'],
  2024: ['janeiro.png','fevereiro.png','março.png','destaque1tri2024.png','abril.png','maio.png','junho.png','destaque2tri2024.png','julho.png','agosto.png','setembro.png','destaque3tri2024.png','outubro.png','novembro.png','dezembro.png','destaque4tri2024.png'],
  2025: ['janeiro.png','fevereiro.png','março.png','destaque1tri2025.png','abril.png','maio.png','junho.png','destaque2tri2025.png','julho.png','agosto.png','setembro.png','destaque3tri2025.png','outubro.png','novembro.png','dezembro.png','destaqueanual2025.png'],
  2026: ['janeiro.png']
};

Object.keys(galerias).forEach((ano) => {
  const section = document.createElement('section');
  section.className = 'ano';

  const header = document.createElement('div');
  header.className = 'ano-header';
  header.innerHTML = `<h2>${ano}</h2><i class="fas fa-chevron-down"></i>`;

  const galeria = document.createElement('div');
  galeria.className = 'galeria galeria-fechada';

  galerias[ano].forEach((file) => {
    const img = document.createElement('img');
    img.src = `Meus Resultados Telecom/${ano}/${file}`;
    img.alt = `Resultado ${ano} - ${file.replace('.png','')}`;
    galeria.appendChild(img);
  });

  header.addEventListener('click', () => {
    galeria.classList.toggle('galeria-fechada');
    header.querySelector('i').classList.toggle('aberto');
  });

  section.appendChild(header);
  section.appendChild(galeria);
  main.appendChild(section);
});

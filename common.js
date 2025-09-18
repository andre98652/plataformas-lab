// Navegación segura de "Atrás"
function goBack(fallback = 'index.html') {
  if (document.referrer && document.referrer !== location.href) {
    history.back();
  } else {
    location.href = fallback;
  }
}

// Lectura de query params
function getParams() {
  const p = new URLSearchParams(location.search);
  return {
    name: p.get('name') || 'Sabor Andino',
    cuisine: p.get('cuisine') || 'Comida peruana',
    area: p.get('area') || 'Centro',
    priceTier: p.get('priceTier') || '$$',
    avg: p.get('avg') || String(30 + Math.floor(Math.random()*50)),
    hero: p.get('hero') || 'https://images.unsplash.com/photo-1541542684-4a1e029d1a98?q=80&w=1200&auto=format&fit=crop'
  };
}

// Para detalle.html: inyecta datos y rating aleatorio
function hydrateDetailIfPresent() {
  const nameEl = document.getElementById('detail-name');
  if (!nameEl) return;

  const p = getParams();
  const rating = (Math.random()*1.5 + 3.8).toFixed(1);

  document.getElementById('detail-hero').src = p.hero;
  document.getElementById('detail-price').textContent = p.priceTier;
  nameEl.textContent = p.name;
  document.getElementById('detail-rating').textContent = '★ ' + rating;
  document.getElementById('detail-meta').innerHTML = `<span>${p.cuisine}</span>•<span>${p.area}</span>`;
  document.getElementById('detail-avg').textContent = 'S/ ' + p.avg;

  // Mostrar botón Atrás
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.style.visibility = 'visible';
}

// Para home.html: oculta botón Atrás
function hideBackOnHome() {
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.style.visibility = 'hidden';
}

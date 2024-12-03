const searchBar = document.getElementById('barraBusqueda');
const items = document.querySelectorAll('.fruite-item');

const filterLinks = document.querySelectorAll('.fruite-categorie a');

const rangeInput = document.getElementById('rangeInput');
const amountOutput = document.getElementById('amount');

//Filtro Barra de Busqueda
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
});

//Filtro por Categoria
filterLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        const filter = link.getAttribute('data-filter');

        items.forEach(item => {
            const category = item.querySelector('.bg-secondary').textContent.trim().toLowerCase();
            item.style.display = filter === 'todos' || category === filter ? 'block' : 'none';
        });
    });
});

//Filtro por rango de Precio
rangeInput.addEventListener('input', () => {
    const maxPrice = parseFloat(rangeInput.value);
    amountOutput.value = maxPrice; 

    items.forEach(item => {
        const priceText = item.querySelector('.fs-5').textContent.trim();
        const price = parseFloat(priceText.replace('$', ''));
        
        item.style.display = price <= maxPrice ? 'block' : 'none';
    });
});
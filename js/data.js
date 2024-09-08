const textoGuardado = localStorage.getItem('datoGuardado');

if (textoGuardado) {
    document.getElementById('data').textContent = textoGuardado;
} else {
    document.getElementById('data').textContent = 'No hay datos guardados.';
}
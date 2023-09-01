// Función para mostrar el formulario de reserva
function showReservationForm(restaurantName) {
    const form = document.getElementById('reservation-form');
    const restaurantInput = document.createElement('input');
    restaurantInput.type = 'hidden';
    restaurantInput.name = 'restaurant';
    restaurantInput.value = restaurantName;
    form.appendChild(restaurantInput);
    form.style.display = 'block';
}

// Función para ocultar el formulario de reserva
function hideReservationForm() {
    const form = document.getElementById('reservation-form');
    form.style.display = 'none';
}

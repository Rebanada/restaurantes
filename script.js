function showReservationForm(restaurantName) {
  const form = document.getElementById("reservation-form");
  const restaurantInput = document.createElement("input");
  restaurantInput.type = "hidden";
  restaurantInput.name = "restaurant";
  restaurantInput.value = restaurantName;
  form.appendChild(restaurantInput);
  form.style.display = "block";
}
function hideReservationForm() {
  const form = document.getElementById("reservation-form");
  form.style.display = "none";
}

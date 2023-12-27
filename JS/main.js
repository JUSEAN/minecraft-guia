// script.js

function askPeruvian() {
    Swal.fire({
        title: 'Are you Peruvian?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "peruvian.html";
        }
        // No hacer nada si la respuesta es 'No' o se cierra la alerta
    });
}

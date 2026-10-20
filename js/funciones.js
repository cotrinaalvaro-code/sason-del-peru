const formMessages = {
    formContacto: {
        type: "success",
        text: "Tu mensaje fue enviado correctamente. Gracias por contactarnos."
    },
    formReservas: {
        type: "success",
        text: "Tu solicitud de reserva fue enviada correctamente."
    },
    formTrabaja: {
        type: "success",
        text: "Tu postulación fue enviada correctamente. Gracias por tu interés en formar parte del equipo."
    },
    formReclamos: {
        type: "success",
        text: "Tu reclamo fue enviado correctamente. Gracias por ayudarnos a mejorar."
    }
};

const reservationForm = document.getElementById("formReservas");

if (reservationForm) {
    const dateField = reservationForm.querySelector('input[type="date"]');

    if (dateField) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        dateField.min = `${year}-${month}-${day}`;
    }
}

Object.entries(formMessages).forEach(([formId, message]) => {
    const form = document.getElementById(formId);

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let status = form.nextElementSibling;

        if (!status || !status.classList.contains("form-status")) {
            status = document.createElement("div");
            status.className = `alert alert-${message.type} mt-3 form-status`;
            status.setAttribute("role", "status");
            status.setAttribute("aria-live", "polite");
            form.insertAdjacentElement("afterend", status);
        }

        status.textContent = message.text;
    });
});

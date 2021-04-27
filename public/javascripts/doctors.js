const deleteButtonsList = document.querySelectorAll('button[role="delete"]');

async function onDeleteClick(event) {
    const doctorId = event.target.dataset.doctorId;

    console.log(event)

    await fetch('/doctor/' + doctorId + "?json", { method: 'DELETE' });

    event.target.parentNode.parentNode.parentNode.parentNode.classList.add('d-none')

}

deleteButtonsList.forEach(function(button) {
    button.addEventListener('click', onDeleteClick)
})
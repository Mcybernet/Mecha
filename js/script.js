document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("nama").value = "";
    document.getElementById("noWA").value = "";
    document.getElementById("email").value = "";
    document.getElementById("jenis_motor").value = "";
    document.getElementById("kelamin").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("noPlat").value = "";
    document.getElementById("message").value = "";
});

function toggleSearch() {
    const searchForm = document.querySelector('.search-form');
    searchForm.classList.toggle('active');
}

function showNotification(event) {
    event.preventDefault();
    var notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(function() {
      notification.classList.remove('show');
    }, 3000);

    // Simulate form submission
    setTimeout(function() {
      document.querySelector('.form-container').reset();
    }, 3000);
  }

  function resetForm() {
    document.querySelector('.form-container').reset();
  }


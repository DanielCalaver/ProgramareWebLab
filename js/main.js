// Exercițiul 1

const current_hour = new Date().getHours();
// const current_hour = new Date("2026-02-25 10:00").getHours();

const hello_line = document.querySelector('header p');

if (current_hour >= 6 && current_hour < 12) {
    hello_line.textContent = "Bună dimineața! Bine ai venit pe pagina mea!";

} else if (current_hour >=12 && current_hour < 18) {
    hello_line.textContent = "Bună Ziua! Bine ai venit pe pagina mea!";

} else {
    hello_line.textContent = "Bună Seara! Bine ai venit pe pagina mea!";
}

// Exercitiul 2

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Opreste reload-ul paginii
    const form_response = document.getElementById('form-feedback');
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    form_response.style.color = "Red";
    if (name.length < 2) {
        form_response.textContent = "Numele este prea scurt!";
        return;
    }
    if (!email.includes('@')) {
        form_response.textContent = "Email-ul este invalid!";
        return;
    }
    if (message.length < 10) {
        form_response.textContent = "Mesajul este prea scurt!";
        return;
    }
    form_response.style.color = "Green";
    form_response.textContent = `Mulțumim ${name}! Mesajul a fost primit`;
});

// Exercitiul 3

const color_mode = document.getElementById("color_mode");
color_mode.addEventListener('click', function(event) {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        color_mode.textContent = "☀️ Light Mode";
    } else {
        color_mode.textContent = "🌙 Dark Mode";
    }
    console.log('Dark mode toggled!');
});

// Exercitiul 4
const h2_array = document.querySelectorAll('main h2');
h2_array.forEach(function(h2) {
    h2.dataset.originalText = h2.textContent;
    console.log(h2.dataset.originalText);
    h2.textContent = '\u25BC' + h2.textContent;
    h2.addEventListener('click', function(event) {
    let sibling = this.nextElementSibling;
    while (sibling) {
        console.log(sibling);
        sibling.classList.toggle('hidden');
        sibling = sibling.nextElementSibling;
    }
    if (this.nextElementSibling.classList.contains('hidden')) {
        this.textContent = '\u25B6' + this.dataset.originalText;
    } else {
        this.textContent = '\u25BC' + this.dataset.originalText;
    }
    });
});

const scroll_button = document.getElementById("scroll_button");
scroll_button.classList.add('hidden');
scroll_button.addEventListener('click', function(event) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// exercitiul bonus
window.addEventListener('scroll', function(event) {
    if(this.window.scrollY < 300) {
        scroll_button.classList.add('hidden');
    }
    else {
        scroll_button.classList.remove('hidden');
    }
    // console.log(this.window.scrollY);
}); 
  const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                const answer = button.nextElementSibling;

                item.classList.toggle('active');
                button.classList.toggle('active');
                answer.classList.toggle('active');
            });
        });
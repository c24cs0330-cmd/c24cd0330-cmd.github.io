
// Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ===== Scroll reveal animations =====
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    // Stagger delays for siblings
    document.querySelectorAll('.services-grid, .testimonials-grid, .method-steps, .values').forEach(group => {
      [...group.children].forEach((child, i) => {
        child.classList.add('delay-' + Math.min(i + 1, 5));
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // Hero appears immediately
    document.querySelectorAll('.hero .reveal, .hero .reveal-left, .hero .reveal-right').forEach(el => {
      el.classList.add('visible');
    });

    // ===== Formulario funcional (FormSubmit) =====
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    const emailInput = document.getElementById('email');
    const replytoField = document.getElementById('replytoField');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Sincronizar reply-to con el email del usuario
        replytoField.value = emailInput.value;

        statusEl.className = 'form-status loading';
        statusEl.textContent = 'Enviando tu mensaje...';
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span>Enviando...';

        try {
          const formData = new FormData(form);
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if (response.ok) {
            statusEl.className = 'form-status success';
            statusEl.innerHTML = '✓ ¡Mensaje enviado! Te enviamos una confirmación a <strong>' + emailInput.value + '</strong>. Pronto te contactaremos.';
            form.reset();
          } else {
            const data = await response.json().catch(() => ({}));
            throw new Error(data.message || 'Error al enviar');
          }
        } catch (err) {
          statusEl.className = 'form-status error';
          statusEl.textContent = 'No se pudo enviar. Intenta de nuevo o escríbenos a c24cs0330@cdserdan.tecnm.mx';
          console.error(err);
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Enviar mensaje';
        }
      });
    }

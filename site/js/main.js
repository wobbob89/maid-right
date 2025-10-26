// Maid-Right - Mobile Navigation and Form Validation

// ========== Mobile Menu Toggle ==========
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      
      // Update aria-expanded for accessibility
      const isExpanded = nav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      
      // Update button text for screen readers
      const buttonText = isExpanded ? 'Close menu' : 'Open menu';
      menuToggle.setAttribute('aria-label', buttonText);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('header')) {
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
      }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
        menuToggle.focus();
      }
    });
  }
  
  // ========== FAQ Accordion ==========
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains('active');
      
      // Close all other accordions
      faqQuestions.forEach(function(q) {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
        q.setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current accordion
      if (!isActive) {
        this.classList.add('active');
        answer.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      } else {
        this.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  // ========== Contact Form Validation ==========
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    // Prevent default form submission
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Clear previous errors
      const errorFields = contactForm.querySelectorAll('.form-group.error');
      errorFields.forEach(function(field) {
        field.classList.remove('error');
      });
      
      let isValid = true;
      const formData = {};
      
      // Validate Name field
      const nameField = contactForm.querySelector('[name="name"]');
      if (nameField) {
        const nameValue = nameField.value.trim();
        formData.name = nameValue;
        
        if (nameValue === '') {
          showError(nameField, 'Name is required');
          isValid = false;
        }
      }
      
      // Validate Email field
      const emailField = contactForm.querySelector('[name="email"]');
      if (emailField) {
        const emailValue = emailField.value.trim();
        formData.email = emailValue;
        
        if (emailValue === '') {
          showError(emailField, 'Email is required');
          isValid = false;
        } else if (!isValidEmail(emailValue)) {
          showError(emailField, 'Please enter a valid email address');
          isValid = false;
        }
      }
      
      // Validate Postcode/Town field
      const postcodeField = contactForm.querySelector('[name="postcode"]');
      if (postcodeField) {
        const postcodeValue = postcodeField.value.trim();
        formData.postcode = postcodeValue;
        
        if (postcodeValue === '') {
          showError(postcodeField, 'Postcode/Town is required');
          isValid = false;
        }
      }
      
      // Validate Service dropdown
      const serviceField = contactForm.querySelector('[name="service"]');
      if (serviceField) {
        const serviceValue = serviceField.value;
        formData.service = serviceValue;
        
        if (serviceValue === '' || serviceValue === 'select') {
          showError(serviceField, 'Please select a service');
          isValid = false;
        }
      }
      
      // Validate terms checkbox
      const termsField = contactForm.querySelector('[name="terms"]');
      if (termsField) {
        const termsChecked = termsField.checked;
        formData.terms = termsChecked;
        
        if (!termsChecked) {
          showError(termsField, 'You must agree to the terms');
          isValid = false;
        }
      }
      
      // If form is valid, show success message
      if (isValid) {
        // In a real application, this would POST to a server
        console.log('Form is valid. Data:', formData);
        
        // Show success message
        alert('Thank you for your enquiry! We\'ll get back to you soon via email at enquires@maid-right.co.uk');
        
        // Reset form
        contactForm.reset();
      } else {
        // Focus on first error field
        const firstError = contactForm.querySelector('.form-group.error input, .form-group.error textarea, .form-group.error select');
        if (firstError) {
          firstError.focus();
        }
      }
    });
    
    // Real-time validation on blur
    const requiredFields = contactForm.querySelectorAll('[required]');
    requiredFields.forEach(function(field) {
      field.addEventListener('blur', function() {
        validateField(field);
      });
      
      // Clear error on input
      field.addEventListener('input', function() {
        const formGroup = field.closest('.form-group');
        if (formGroup && formGroup.classList.contains('error')) {
          formGroup.classList.remove('error');
        }
      });
    });
  }
  
  // Helper function to show error
  function showError(field, message) {
    const formGroup = field.closest('.form-group');
    if (formGroup) {
      formGroup.classList.add('error');
      const errorDiv = formGroup.querySelector('.form-error');
      if (errorDiv) {
        errorDiv.textContent = message;
      }
    }
  }
  
  // Helper function to validate individual field
  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    
    if (field.hasAttribute('required') && value === '') {
      const label = field.closest('.form-group').querySelector('label');
      const fieldLabel = label ? label.textContent.replace('*', '').trim() : 'This field';
      showError(field, fieldLabel + ' is required');
      return false;
    }
    
    if (fieldName === 'email' && value !== '' && !isValidEmail(value)) {
      showError(field, 'Please enter a valid email address');
      return false;
    }
    
    return true;
  }
  
  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // ========== Smooth Scroll for Internal Links ==========
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // ========== Active Navigation Highlighting ==========
  // Highlight current page in navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(function(link) {
    const linkPath = link.getAttribute('href');
    
    // Check if link matches current page
    if (linkPath === currentPath || 
        (currentPath.endsWith(linkPath) && linkPath !== '/') ||
        (currentPath === '/site/' && linkPath === 'index.html') ||
        (currentPath === '/site/index.html' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
});

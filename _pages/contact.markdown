---
layout: page
title: Contact
permalink: /contact/
---

If you'd like to get in touch, please fill out the form below or reach out to me directly via my [LinkedIn](https://www.linkedin.com/in/{{ site.linkedin_username }}/).

<form class="contact-form" action="https://formsubmit.co/{{ site.email }}" method="POST" style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin-top: 2rem;">
  <!-- FormSubmit Configuration -->
  <input type="hidden" name="_subject" value="New submission from your Portfolio Website!">
  <input type="hidden" name="_captcha" value="false">
  
  <div style="display: flex; gap: 1rem;">
    <div style="flex: 1; display: flex; flex-direction: column;">
      <label for="name" style="margin-bottom: 0.5rem; font-weight: 500;">Name</label>
      <input type="text" id="name" name="name" required style="padding: 0.8rem; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color); border-radius: 6px;">
    </div>
    
    <div style="flex: 1; display: flex; flex-direction: column;">
      <label for="surname" style="margin-bottom: 0.5rem; font-weight: 500;">Surname</label>
      <input type="text" id="surname" name="surname" required style="padding: 0.8rem; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color); border-radius: 6px;">
    </div>
  </div>

  <div style="display: flex; flex-direction: column;">
    <label for="message" style="margin-bottom: 0.5rem; font-weight: 500;">Message</label>
    <textarea id="message" name="message" rows="5" required style="padding: 0.8rem; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color); border-radius: 6px; resize: vertical;"></textarea>
  </div>

  <button type="submit" class="btn" style="background: var(--accent-color); color: #fff; padding: 0.8rem 1.5rem; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; align-self: flex-start; margin-top: 1rem;">Send Message</button>
  
</form>

---
layout: default
title: Contact
permalink: contact
---
<div class="container-fluid d-flex flex-column custom-color page-main-container">
    <div class="row flex-fill d-flex contact-page">
        <div class="col-12">
            <h1>Contact</h1>
            <p>Reach out for job inquiry, advice or mentorship. Or just to say hello!</p>
        </div>
        <div class="col-12">
            <span class="contact-button link-button"><a href='https://www.linkedin.com/in/sinsopheak'  rel="noopener noreferrer" target="_blank">Connect on LinkedIn</a></span>
            <span class="contact-button link-button"><a href='mailto:hello@sinsopheak.com' rel="noopener noreferrer" target="_blank">Email to hello@sinsopheak.com</a></span>
        </div>
        <div class="col-lg-6 col-sm-8 col-xs-6">
            <form action="https://smartforms.dev/submit/649c837c0dd8ac0a53209678" method="POST">
                <div class="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" name="name" class="form-control" id="inputName"        
                        aria-describedby="emailHelp" placeholder="How may I address you?">
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" name="email" class="form-control" id="inputEmail"        
                        aria-describedby="emailHelp" placeholder="email@example.com">
                </div>
                <div class="form-group">
                    <label for="textareaMessage">Please leave your message below</label>
                    <textarea class="form-control" name="message" id="textareaMessage" 
                        rows="3"></textarea>
                </div> 
                <div class="g-recaptcha" data-sitekey="6Lfox9smAAAAAB-pZYOyYOl5OvxeHZlXdEwG0o3-"></div>
                <button class="btn btn-primary send-button" type="submit">Send</button>
            </form>
        </div>
    </div>
</div>

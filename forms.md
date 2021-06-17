---
layout: docs
title: Forms
---

# Forms

Everything here is build on top of [Bootstrap's Forms](https://getbootstrap.com/docs/4.4/components/forms/).


----

## Lead Capture Form

<form action="..." method="post">
  <div class="form-row">
    <div class="col">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" class="form-control" placeholder="Abe">
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label for="first_name">Last Name</label>
        <input type="text" id="last_name" class="form-control" placeholder="Froman">
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col">
      <div class="form-group">
        <label for="first_name">Company Name</label>
        <input type="text" class="form-control" placeholder="Company Name">
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label for="first_name">Phone Number</label>
        <input type="text" class="form-control" placeholder="404-867-5309">
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col">
      <div class="form-group">
        <label for="first_name">What's keeping you up at night?</label>
        <textarea id="message" class="form-control" rows="4"></textarea>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Send My Message</button>
</form>

'use strict'

Meteor.methods({
  sendEmail: function (name, email, msg) {
    check(name, String);
    check(email, String);
    check(msg, String);

    this.unblock();

    Email.send({
      from: email,
      to: 'gonzalo.zunino@gmail.com',
      replyTo: email,
      subject: 'New contact from gonzalozunino.com.ar',
      text: name + ' wrote: ' + msg
    });
  }
});
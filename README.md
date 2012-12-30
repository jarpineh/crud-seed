
# crud-seed — the seed for AngularJS testing

## About this project

I was involved in producing a CRUD application few years back for [libraries.fi](https://github.com/libraries-fi/Library-Directory). Its approach was to develop a JSON schema from which editing interface was generated programmatically with Python on server. Additional UI work was done on the web browser using nothing but jQuery and jQuery UI. I felt at the time that DOM manipulation and the callback soup needed for communicating with the server was less than fun to develop. Since CRUD applications are most prevalent web applications I have to develop I began to search for another solutions.

There seem to have sprung up dozens of Javascript frameworks to deal precisely with my kind of development problem. Some are simple looking libraries like Backbone, others come with Node.js frameworks to back their extensive services. I am trying to find a platform agnostic toolkit which would allow me to simply build the client side functionality of a schema driven CRUD app and choose my server framework and database depending on the project's need.

After a long study I selected AngularJS since its approach seems to align mostly what I have in mind. This project is a prototype for my a CRUD app which should work with JSON APIs as well as XML. Angular's implementation to web components looks like it should cater to that usage also. Also I'm trying learn how use Github's facilities better, like using issues as a todo, wiki pages for notes, project pages for documentation and so on.

## How to use

Git clone this repo.

Server interaction is based on [Aspen](http://aspen.io), a Python web framework. `pip install aspen` and start Aspen in repository root.

Now the app should be available in `http://localhost:8080/app/index.html`.

## Licensing

This prototype is based on [Angular seed](https://github.com/angular/angular-seed). Assets are copied from [Twitter Bootstrap](https://github.com/twitter/bootstrap) examples which are Apache v2 licensed.

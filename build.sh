#npm install -g pug-cli

pug --client --name render_form templates/cab_form.pug
pug --client --name render_output templates/cab_output.pug

cp templates/cab_form.js templates/form.js
cp templates/cab_output.js templates/output.js
cp templates/cab.css templates/style.css

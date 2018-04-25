<h1><i>Personal Blog</i></h1>

<h1><i>Ideea din spatele proiectului</i></h1>

<p>"Personal Blog" este o platforma web dedicata tuturor. Oferim o platforma unde iti poti impartaasii experientele referitoare la mancare, obiective turistice etc. pentru a-i ajutaa pe ceilalti sa le imbunatateasca pe ale lor. Platforma este in limba engleza :)</p>

<h1><i>Cerinte de sistem - pt folosire</i></h1>

<ul>
<li>Conexiune la internet</li>
<li>Orice browser care suporta JavaScript and localStorage</li>
</ul>

<h1><i>Cerinte de sistem - pt dezvoltare</i></h1>

<ul>
<li>Conexiune stabila la internet</li>
<li>Terminal (Ubuntu's Command Line or Windows equivalent)</li>
<li>NodeJS v9.11.1 (minimum)</li>
<li>npm (minimum 5.8.0)</li>
<li>Browser care foloseste JavaScript</li>
<li>Browser care suporta LocalStorage (Chrome, Firefox etc)</li>
</ul>

<p>Pentru a verificare versiunea instalata de NodeJS or npm, rulati urmatoarele comenzi:</p>

```shell
node -v
npm -v
```

<p>Site-ul a fost dezvoltat in Chrome si testat pe Chrome si Firefox.</p>
<p>Proiectul nu vine cu o baza de date atasata.</p>

<h1><i>Structura fisierului</i></h1>
<pre>
/atestat-master/
| -- api
|   | -- create_product.php
|   | -- delete_product.php
|   | -- read_all_categories.php
|   | -- read_all_products.php
|   | -- read_all_products_filtered.php
|   | -- read_all_products_main_page.php
|   | -- read_all_products_newest.php
|   | -- read_all_products_not_logged.php
|   | -- read_one_product.php
|   | -- update_product.php
| -- build
|   | -- content.js
|   | -- content_filtered.js
|   | -- contentnewest.js
|   | -- contentnotloggedfiltered.js
|   | -- contentnotloggednewest.js
|   | -- faqLogged.js
|   | -- faqNotLogged.js
|   | -- index.js
|   | -- indexlogged.js
|   | -- login.js
|   | -- register.js
| -- config
|   | -- core.php
|   | -- database.php
| -- includes
|   | -- db_connect.php
|   | -- functions.php
|   | -- logout.php
|   | -- process_login.php
|   | -- psl-config.php
|   | -- register.inc.php
|   | -- session.php
| -- js
|   | -- forms-compiled-compiled-compiled.js
|   | -- forms-compiled-compiled.js
|   | -- forms-compiled.js
|   | -- forms.js
|   | -- sha512-compiled-compiled.js
|   | -- sha512-compiled.js
|   | -- sha512.js
| -- objects
|   | -- category.php
|   | -- product.php
| -- src
|   | -- components
|   |   | -- ContentEntry
|   |   |   | -- Content.js
|   |   |   | -- CreateProductComponent.js
|   |   |   | -- DeleteProductComponent.js
|   |   |   | -- MainApp.js
|   |   |   | -- ProductRow.js
|   |   |   | -- ProductsTable.js
|   |   |   | -- ReadOneProductComponent.js
|   |   |   | -- ReadProductsComponent.js
|   |   |   | -- TopActionsComponent.js
|   |   |   | -- TopBar.js
|   |   |   | -- UpdateProductComponent.js
|   |   | -- ContentFilteredEntry
|   |   |   | -- Content.js
|   |   |   | -- ProductRow.js
|   |   |   | -- ProductsTable.js
|   |   |   | -- ReadOneProductComponent.js
|   |   |   | -- ReadProductsComponent.js
|   |   |   | -- TopBar.js
|   |   | -- ContentNewestEntry
|   |   |   | -- Content.js
|   |   |   | -- ProductRow.js
|   |   |   | -- ProductsTable.js
|   |   |   | -- ReadOneProductComponent.js
|   |   |   | -- ReadProductsComponent.js
|   |   |   | -- TopBar.js
|   |   | -- ContentNotLoggedFilteredEntry
|   |   |   | -- Content.js
|   |   |   | -- ProductRow.js
|   |   |   | -- ProductsTable.js
|   |   |   | -- ReadOneProductComponent.js
|   |   |   | -- ReadProductsComponent.js
|   |   |   | -- TopBar.js
|   |   | -- ContentNotLoggedNewestEntry
|   |   |   | -- Content.js
|   |   |   | -- ProductRow.js
|   |   |   | -- ProductsTable.js
|   |   |   | -- ReadOneProductComponent.js
|   |   |   | -- ReadProductsComponent.js
|   |   |   | -- TopBar.js
|   |   | -- FAQLoggedEntry
|   |   |   | -- FAQLogged-compiled-compiled-compiled.js
|   |   |   | -- FAQLogged-compiled-compiled.js
|   |   |   | -- FAQLogged.js
|   |   |   | -- FAQNotLogged-compiled-compiled-compiled.js
|   |   |   | -- FAQNotLogged-compiled-compiled.js
|   |   |   | -- Middle-compiled-compiled-compiled.js
|   |   |   | -- Middle-compiled-compiled.js
|   |   |   | -- Middle.js
|   |   |   | -- TopBarLogged-compiled-compiled-compiled.js
|   |   |   | -- TopBarLogged-compiled-compiled.js
|   |   |   | -- TopBarNotLogged-compiled-compiled-compiled.js	
|   |   |   | -- TopBarNotLogged-compiled-compiled.js
|   |   | -- FAQNotLoggedEntry
|   |   |   | -- FAQNotLogged.js
|   |   |   | -- Middle.js
|   |   |   | -- TopBar.js
|   |   | -- IndexEntry
|   |   |   | -- Content.js
|   |   |   | -- ProductRow.js
|   |   |   | -- ProductRow2.js
|   |   |   | -- ProductsTable.js
|   |   |   | -- ProductsTable2.js
|   |   |   | -- ReadOneProductComponent.js
|   |   |   | -- ReadProductsComponent.js
|   |   |   | -- TopBar.js
|   |   | -- IndexLoggedEntry
|   |   |   | -- Content.js
|   |   |   | -- ProductRow.js
|   |   |   | -- ProductRow2.js
|   |   |   | -- ProductsTable.js
|   |   |   | -- ProductsTable2.js
|   |   |   | -- ReadOneProductComponent.js
|   |   |   | -- ReadProductsComponent.js
|   |   |   | -- TopBar.js
|   |   | -- LoginPage
|   |   |   | -- TopBar.js
|   |   | -- RegisterPage
|   |   |   | -- TopBar-compiled-compiled-compiled.js
|   |   |   | -- TopBar-compiled-compiled.js
|   |   |   | -- TopBar.js
|   | -- entry
|   |   | -- content-compiled-compiled.js
|   |   | -- content.js
|   |   | -- contentfiltered.js
|   |   | -- contentnewest.js
|   |   | -- contentnotloggedfiltered.js
|   |   | -- contentnotloggednewest.js
|   |   | -- faqLogged.js
|   |   | -- faqNotLogged.js
|   |   | -- index-compiled-compiled.js
|   |   | -- index.js
|   |   | -- indexlogged.js
|   |   | -- login.js
|   |   | -- register.js
|   | -- style
|   |   | -- components
|   |   |   | -- Faq
|   |   |   |  | -- _faq.scss
|   |   |   | -- content
|   |   |   |  | -- _middle.scss
|   |   |   | -- index
|   |   |   |  | -- _header.scss
|   |   |   |  | -- _homepage.scss
|   |   |   |  | -- _middle.scss
|   |   |   | -- login
|   |   |   |  | -- _login.scss
|   |   |   | -- register
|   |   |   |  | -- _register.scss
|   |   |   | -- _DOM.css
|   |   | -- entry
|   |   |   | -- .sass-cache
|   |   |   | -- main.scss
|   |   | -- misc
|   |   |   | -- _body.scss
|   |   |   | -- _include-media.scss
| -- .gitignore
| -- BEBAS___.TTF
| -- README.md
| -- SourceSansPro-Regular.ttf
| -- content.php
| -- content_filtered.php
| -- content_newest.php
| -- error.php
| -- faq.php
| -- get_user_id.php
| -- index.php
| -- indexlogged.php
| -- login.php
| -- package.json
| -- register.php
| -- register_success.php
| -- webpack.config.js
</pre>

<h1><i>Folosire</i></h1>

<h3><i>Baza de da</i></h3>

<p>PhpMyAdmin este un soft gratuit, destinat să gestioneze administrarea MySQL pe Web. phpMyAdmin suportă o gamă largă de operații in MySQL și MariaDB.</p>

<p>Te poti inregistra, loga, crea/sterge articole </p></p>

<h1><i>Detalii tehnice</i></h1>

<h3><i>Front-end:</i></h3>

<h5>Limbaje folosite:</h5>

<ul>
<li>JavaScript</li>
<li>HTML5</li>
<li>CSS&CSS3</li>
</ul>

<h5>Framework folosite:</h5>

<ul>
<li>ReactJS</li>
</ul>

<h5>Pre-processors utilizate:</h5>

<ul>
<li>Sass</li>
</ul>

<h5>Bundling:</h5>

<ul>
<li>Webpack</li>
<li>Babel</li>
</ul>

<h3><i>Back-end:</i></h3>

<h5>Limbaje utilizat:</h5>

<ul>
<li>JavaScript</li>
</ul>

<h3><i>Probleme:</i></h3>

<p> Cateodata se delogheazaa automat la schimbarea paginii. - inca in lucru </p>


<h1><i>Personal Blog</i></h1>

<h1><i>The ideea behind the project</i></h1>

<p>"Personal Blog" is a website dedicated to everybody. We offer a platform to share your own experiences in order to help others improve theirs. :)</p>

<h1><i>System requirements - For usage</i></h1>

<ul>
<li>Internet connection</li>
<li>Any browser that supports JavaScript and localStorage</li>
</ul>

<h1><i>System requirements - For development</i></h1>

<ul>
<li>Stable internet connection</li>
<li>Terminal (Ubuntu's Command Line or Windows equivalent)</li>
<li>NodeJS v9.11.1 (minimum)</li>
<li>npm (minimum 5.8.0)</li>
<li>Browser that uses JavaScript</li>
<li>Browser that supports LocalStorage (Chrome, Firefox etc)</li>
</ul>

<p>To check for a current installed version of NodeJS or npm, run the following commands:</p>

```shell
node -v
npm -v
```

<p>The website was developed on Chrome and tested on Chrome and Firefox.</p>
<p>Project is not distributed with a database. Project IS distributed with schemas for MongoDB, on the other hand.</p>

<h1><i>File structure</i></h1>
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
|   | -- forms-compiled-compiled-compiled.js.map
|   | -- forms-compiled-compiled.js
|   | -- forms-compiled-compiled.js.map
|   | -- forms-compiled.js
|   | -- forms-compiled.js.map
|   | -- forms.js
|   | -- sha512-compiled-compiled.js
|   | -- sha512-compiled-compiled.js.map
|   | -- sha512-compiled.js
|   | -- sha512-compiled.js.map
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
|   |   | -- FAQNotLoggedEntry
|   |   | -- IndexEntry
|   |   | -- IndexLoggedEntry
|   |   | -- LoginPage
|   |   | -- RegisterPage

|   | -- entry
|   | -- style
|   |   | --
|
|
|
|


</pre>

<h1><i>Usage</i></h1>

<h3><i>Database</i></h3>

<p>PhpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB.</p>

<p>You can register, login, create articles and delete them</p></p>

<h1><i>Technical details</i></h1>

<h3><i>Front-end:</i></h3>

<h5>Languages used:</h5>

<ul>
<li>JavaScript</li>
<li>HTML5</li>
<li>CSS&CSS3</li>
</ul>

<h5>Frameworks used:</h5>

<ul>
<li>ReactJS</li>
</ul>

<h5>Pre-processors used:</h5>

<ul>
<li>Sass</li>
</ul>

<h5>Bundling:</h5>

<ul>
<li>Webpack</li>
<li>Babel</li>
</ul>

<h3><i>Back-end:</i></h3>

<h5>Languages used:</h5>

<ul>
<li>JavaScript</li>
</ul>

<h5>Other important libraries and middleware used:</h5>

<ul>
<li>Materialize</li>
</ul>

<h3><i>Issues:</i></h3>

<p> Sometimes just logs you out random. - working on that </p>


# openingopportunities

<h1 style="font: 30px">Slider info: </h1>

NOTE: you can add images of any size.

<p style="color:red">NOTE2: not used anymore</p>

If you want to change the sizes of the images in the slider follow these steps:

- go to /src/React-slick/src/mixins/trackHelper.js where you will find the set width of an element of 480 (px)
- change all of those to the width of the element you wish to have
- go to /src/React-slick/src/track.js and look for the commented section: keyword: width
- modify that width to the width you set in trackHelper.js
- modify .slick-list in /src/style/components/index/_slickstyle.scss attribute width to the width you wish to have
- modify width and height in /src/style/components/index/_middle.scss from the .main-upper class.

All of the other settings of the container and whatsoever can be changed in /src/style/components/index/_middle.scss


<h1 style="font: 30px">React scripts loaded with babel-core structure:</h1>

<p>Names are suggestive for what the component does. </p>

-all of the components are in the same script under the following structure (order may not be the same and some files may not contain all of the below):

1. ProductRow - render each single game.
2. ProductsTable - render the list of games using .
3. ReadProductsComponent - renders ProductsTable.
4. ReadOneProductComponent - renders the page to read only one game.
5. CreateProductComponent - renders a page that allows the user to add a game.
6. DeleteProductComponent - renders a page that allows the user to delete a game.
7. TopActionsComponent - renders the add a game button.
8. UpdateProductComponent - renders a page that allows the user to edit a game.
9. Middle - renders the middle block and the games if there are any.
10. MainApp - <p style="color:red">very important component</p> allows us to  not have to reload the page when we switch from reading one product to reading all or to creating one etc.
11. MiddleCapsule - not used everywhere, a capsule component used to .
12. TopBar - the top bar for the specific page.
13. PageName - the name of the page (e.g. Index, Content etc etc)
14. ReactDOM - the final stage before rendering. Here the rendering happens.

Update: Structure has been changed due to the usage of React Router being added.
Will update whole project to work with node expressJS server this year.

<b>For the login and signup form and pages, refer to https://github.com/peredurabefrog/phpSecureLogin which provided these great tools. Current in-use files are modified and should not be used for own projects. Refer to the above link.</b>

import React from "react";

class Middle extends React.Component {
    render() {
        return (
            <div className="faq-middle">
                <div className="main-upper-noFlex">
                    <h1>Intrebari frecvente</h1>
                    <div className="black">
                        <p>De ce site-ul nostru?</p>
                        <span>Oferim un mod simplu de a iti promova jocul gratis. Noi iti cerem doar un demo pe care utilizatorii nostri il downloadeaza si iti dau un like sau nu. De asemenea trebuie sa incluzi si un trailer. Astfel speram ca te vom ajuta sa iti faci jocul cunoscut si ca , in final, il vei putea promova pe unul dintre maganizele online de jocuri cum ar fi Steam si Origin. De la noi pleci cu suporteri ai ideii tale.</span>
                    </div>
                    <div className="white">
                        <p>De ce site-ul nostru este diferit de altele?</p>
                        <span>Noi planuim in a folosi un sistem ca cel de pe Facebook unde postarile cele mai noi sunt in varf. Pe langa acestea vom adauga diferite topuri in care jocul tau ar putea urca. Design-ul site-ului nostru este accesibil si usor de utilizat de catre utilizatori cu diferite experiente in navigarea pe internet.</span>
                    </div>
                    <div className="black">
                        <p>Cum pot incepe?</p>
                        <span>Este foarte simplu! Iti creezi un cont<a
                            href="register.php"
                            target="_blank">aici</a>
                .</span>
                    </div>
                    <div className="white">
                        <p>Nu stiu cum sa adaug un joc nou.</p>
                        <span>In momentul in care te-ai logat pe site, in coltul din dreapta sus vei avea un buton pe care scrie Administrare Jocuri. Acolo vei putea incepe sa adaugi jocuri.Daca nu il poti vedea, foloseste acest link :
                <a href="content.php" target="_blank">Administrare Jocuri</a>
</span>
                    </div>
                    <div className="black">
                        <p>Sunt pe pagina <a href="content.php" target="_blank">Administrare
                            Jocuri </a>si nu pot adauga jocuri!</p>
                        <span>Verifica daca esti logat si daca esti pe pagina corecta.</span>
                    </div>
                    <div className="white">
                        <p>Nu mi se incarca paginile site-ului</p>
                        <span>Te rugam sa incerci sa reincarci pagina. Este posibil ca browserul dumneavoastra sa nu suporte Javascript sau localStorage.</span>
                    </div>
                    <div className="black">
                        <p>Cum pot face ca link-ul trailer-ului meu sa apara pe pagina jocului meu?</p>
                        <span>Este nevoie de inlocuiesti watch?v= din link cu embed/ . Link-ul tau va arata astfel: exemplu : https://www.youtube.com/embed/...  unde punctele reprezinta ce se afla dupa watch?v= in link-ul initial</span>
                    </div>
                    <div className="white">
                        <p>Nu imi apare poza de coperta</p>
                        <span>Te rugam sa incerci sa downloadezi poza respectiva si sa o uploadezi pe
                <a href="http://imgur.com/" target="_blank">http://imgur.com/</a>
                ( este GRATIS ) apoi foloseste acel link ca sa iti pui poza de coperta.
                </span>
                    </div>
                    <div className="black">
                        <p>Nu imi apare numele pe pagina jocului.</p>
                        <span>Problema este cunoscuta si se va remedia in curand.</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Middle
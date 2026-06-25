/* ===========================
ANIMACIONES
=========================== */

.hidden{

    opacity:0;

    transform:translateY(50px);

    transition:all .8s ease;

}

.show{

    opacity:1;

    transform:translateY(0);

}

/* ===========================
FAQ
=========================== */

.faq-item{

    overflow:hidden;

}

.faq-item button{

    cursor:pointer;

}

.faq-item::after{

    content:"";

    display:block;

}

.faq-item.open{

    background:#f8fafc;

}

.faq-item.open button{

    color:#2563eb;

}

/* ===========================
HEADER SCROLL
=========================== */

.header.scrolled{

    background:#0f172a;

    box-shadow:
    0 10px 30px rgba(0,0,0,.15);

}

/* ===========================
MOBILE MENU
=========================== */

@media(max-width:768px){

    .navbar{

        position:absolute;

        top:90px;

        left:0;

        width:100%;

        background:#0f172a;

        display:none;

        padding:25px;

    }

    .navbar.active{

        display:block;

    }

    .navbar ul{

        flex-direction:column;

        gap:15px;

    }

}

"use strict";

let nav = document.querySelector(".nav"),
  nav2 = document.querySelector(".menu-ch"),
  menu = document.querySelector(".menu"),
  menu2 = document.querySelector(".menu-2"),
  card1 = document.querySelector(".card-1"),
  card2 = document.querySelector(".card-2"),
  card3 = document.querySelector(".card-3"),
  card4 = document.querySelector(".card-4"),
  card5 = document.querySelector(".card-5"),
  card6 = document.querySelector(".card-6"),
  card7 = document.querySelector(".card-7"),
  card8 = document.querySelector(".card-8"),
  card9 = document.querySelector(".card-9"),
  card10 = document.querySelector(".card-10"),
  card11 = document.querySelector(".card-11"),
  card12 = document.querySelector(".card-12"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  prev2 = document.querySelector(".prev2"),
  next2 = document.querySelector(".next2"),
  cardHover = document.querySelector(".card-hover"),
  cardBtn = document.querySelector(".card-btn"),
  cardBtn2 = document.querySelector(".card-btn2"),
  cardHover2 = document.querySelector(".card-hover2"),
  cardBtn3 = document.querySelector(".card-btn3"),
  cardBtn4 = document.querySelector(".card-btn4"),
  cardHover3 = document.querySelector(".card-hover3"),
  cardBtn5 = document.querySelector(".card-btn5"),
  cardBtn6 = document.querySelector(".card-btn6"),
  cardHover4 = document.querySelector(".card-hover4"),
  cardBtn7 = document.querySelector(".card-btn7"),
  cardBtn8 = document.querySelector(".card-btn8"),
  cardHover5 = document.querySelector(".card-hover5"),
  cardBtn9 = document.querySelector(".card-btn9"),
  cardBtn10 = document.querySelector(".card-btn10"),
  cardHover6 = document.querySelector(".card-hover6"),
  cardBtn11 = document.querySelector(".card-btn11"),
  cardBtn12 = document.querySelector(".card-btn12"),
  cardHover7 = document.querySelector(".card-hover7"),
  cardBtn13 = document.querySelector(".card-btn13"),
  cardBtn14 = document.querySelector(".card-btn14"),
  cardHover8 = document.querySelector(".card-hover8"),
  cardBtn15 = document.querySelector(".card-btn15"),
  cardBtn16 = document.querySelector(".card-btn16"),
  cardHover9 = document.querySelector(".card-hover9"),
  cardBtn17 = document.querySelector(".card-btn17"),
  cardBtn18 = document.querySelector(".card-btn18"),
  cardHover10 = document.querySelector(".card-hover10"),
  cardBtn19 = document.querySelector(".card-btn19"),
  cardBtn20 = document.querySelector(".card-btn20"),
  cardHover11 = document.querySelector(".card-hover11"),
  cardBtn21 = document.querySelector(".card-btn21"),
  cardBtn22 = document.querySelector(".card-btn22"),
  cardHover12 = document.querySelector(".card-hover12"),
  cardBtn23 = document.querySelector(".card-btn23"),
  cardBtn24 = document.querySelector(".card-btn24");

function hideNav() {
  nav.style.cssText = "display:none";
  nav2.style.cssText = "display:block";
}

function hideNav2() {
  nav.style.cssText = "display:block";
  nav2.style.cssText = "display:none";
}

menu.onclick = hideNav;
menu2.onclick = hideNav2;

function HideCard() {
  function hideCard() {
    cardBtn.style.cssText = "display:none";
    cardHover.style.cssText = "display:block";
  }

  function hideCard2() {
    cardBtn.style.cssText = "display:block";
    cardHover.style.cssText = "display:none";
  }

  cardBtn.onclick = hideCard;
  cardBtn2.onclick = hideCard2;

  function hideCard3() {
    cardBtn3.style.cssText = "display:none";
    cardHover2.style.cssText = "display:block";
  }

  function hideCard4() {
    cardBtn3.style.cssText = "display:block";
    cardHover2.style.cssText = "display:none";
  }

  cardBtn3.onclick = hideCard3;
  cardBtn4.onclick = hideCard4;

  function hideCard5() {
    cardBtn5.style.cssText = "display:none";
    cardHover3.style.cssText = "display:block";
  }

  function hideCard6() {
    cardBtn5.style.cssText = "display:block";
    cardHover3.style.cssText = "display:none";
  }

  cardBtn5.onclick = hideCard5;
  cardBtn6.onclick = hideCard6;

  function hideCard7() {
    cardBtn7.style.cssText = "display:none";
    cardHover4.style.cssText = "display:block";
  }

  function hideCard8() {
    cardBtn7.style.cssText = "display:block";
    cardHover4.style.cssText = "display:none";
  }

  cardBtn7.onclick = hideCard7;
  cardBtn8.onclick = hideCard8;

  function hideCard9() {
    cardBtn9.style.cssText = "display:none";
    cardHover5.style.cssText = "display:block";
  }

  function hideCard10() {
    cardBtn9.style.cssText = "display:block";
    cardHover5.style.cssText = "display:none";
  }

  cardBtn9.onclick = hideCard9;
  cardBtn10.onclick = hideCard10;

  function hideCard11() {
    cardBtn11.style.cssText = "display:none";
    cardHover6.style.cssText = "display:block";
  }

  function hideCard12() {
    cardBtn11.style.cssText = "display:block";
    cardHover6.style.cssText = "display:none";
  }

  cardBtn11.onclick = hideCard11;
  cardBtn12.onclick = hideCard12;

  function hideCard13() {
    cardBtn13.style.cssText = "display:none";
    cardHover7.style.cssText = "display:block";
  }

  function hideCard14() {
    cardBtn13.style.cssText = "display:block";
    cardHover7.style.cssText = "display:none";
  }

  cardBtn13.onclick = hideCard13;
  cardBtn14.onclick = hideCard14;

  function hideCard15() {
    cardBtn15.style.cssText = "display:none";
    cardHover8.style.cssText = "display:block";
  }

  function hideCard16() {
    cardBtn15.style.cssText = "display:block";
    cardHover8.style.cssText = "display:none";
  }

  cardBtn15.onclick = hideCard15;
  cardBtn16.onclick = hideCard16;

  function hideCard17() {
    cardBtn17.style.cssText = "display:none";
    cardHover9.style.cssText = "display:block";
  }

  function hideCard18() {
    cardBtn17.style.cssText = "display:block";
    cardHover9.style.cssText = "display:none";
  }

  cardBtn17.onclick = hideCard17;
  cardBtn18.onclick = hideCard18;

  function hideCard19() {
    cardBtn19.style.cssText = "display:none";
    cardHover10.style.cssText = "display:block";
  }

  function hideCard20() {
    cardBtn19.style.cssText = "display:block";
    cardHover10.style.cssText = "display:none";
  }

  cardBtn19.onclick = hideCard19;
  cardBtn20.onclick = hideCard20;

  function hideCard21() {
    cardBtn21.style.cssText = "display:none";
    cardHover11.style.cssText = "display:block";
  }

  function hideCard22() {
    cardBtn21.style.cssText = "display:block";
    cardHover11.style.cssText = "display:none";
  }

  cardBtn21.onclick = hideCard21;
  cardBtn22.onclick = hideCard22;

  function hideCard23() {
    cardBtn23.style.cssText = "display:none";
    cardHover12.style.cssText = "display:block";
  }

  function hideCard24() {
    cardBtn23.style.cssText = "display:block";
    cardHover12.style.cssText = "display:none";
  }

  cardBtn23.onclick = hideCard23;
  cardBtn24.onclick = hideCard24;
}
HideCard();

function Slider() {
  let index = 0;
  console.log("hnjbjbjrncnked");

  next.addEventListener("click", () => {
    index++;
    slider();
  });

  prev.addEventListener("click", () => {
    index--;
    slider();
  });

  function slider() {
    card1.style.transform = `translateX(${-index * 425}px)`;
    card2.style.transform = `translateX(${-index * 425}px)`;
    card3.style.transform = `translateX(${-index * 425}px)`;
    card4.style.transform = `translateX(${-index * 425}px)`;
    card5.style.transform = `translateX(${-index * 425}px)`;
    card6.style.transform = `translateX(${-index * 425}px)`;
  }
}
Slider();

function Slider2() {
  let index = 0;

  next2.addEventListener("click", () => {
    index++;
    slider2();
  });

  prev2.addEventListener("click", () => {
    index--;
    slider2();
  });

  function slider2() {
    card7.style.transform = `translateX(${-index * 325}px)`;
    card8.style.transform = `translateX(${-index * 325}px)`;
    card9.style.transform = `translateX(${-index * 325}px)`;
    card10.style.transform = `translateX(${-index * 325}px)`;
    card11.style.transform = `translateX(${-index * 325}px)`;
    card12.style.transform = `translateX(${-index * 325}px)`;
  }
}
Slider2();

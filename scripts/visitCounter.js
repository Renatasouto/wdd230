function setVisitCount() {
    if (localStorage.visitCount) {

      localStorage.visitCount = parseInt(localStorage.visitCount) + 1;
    } else {

      localStorage.visitCount = 1;
    }

    document.getElementById("visitCount").textContent = localStorage.visitCount;
  }

  setVisitCount();
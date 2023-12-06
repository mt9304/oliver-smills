
window.addEventListener("load", function () {
    console.log("Running");
    //Overlay fade and zoom on first loading page. 
    /*
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.style.opacity = "0.9"; // Set initial opacity to 80%

    overlay.textContent = "Loading...";
    overlay.style.textAlign ="center";
    overlay.style.paddingTop ="20%";
    overlay.style.color ="white";
    overlay.style.position ="fixed";
    document.body.appendChild(overlay);
    */

    const overlay = document.getElementsByClassName("overlay")[0];
  
    const homeSection = document.getElementById("home");
    homeSection.style.animation = "zoomBackground 2s forwards";
  
    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 3s"; // Changed duration to 1 second
    }, 0); // Schedule the overlay transition to start immediately
  
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000); // Changed the delay to 1000ms (1 second) for hiding the overlay
  });

/*
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
  
    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 2s";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 2000);
    }, 1000);
  });
*/

  document.addEventListener("DOMContentLoaded", function () {
    const booksSection = document.getElementById("books");
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
        
    booksData.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book");

        const bookCover = document.createElement("img");
        bookCover.src = book.coverImg;
        bookCover.alt = book.title;
        bookItem.appendChild(bookCover);

        const bookInfo = document.createElement("div");
        bookInfo.classList.add("book-info");

        const title = document.createElement("h2");
        title.textContent = book.title;
        bookInfo.appendChild(title);

        const publishDate = document.createElement("p");
        publishDate.textContent = `Published: ${book.publishDate}`;
        bookInfo.appendChild(publishDate);

        const description = document.createElement("p");
        description.textContent = book.description;
        bookInfo.appendChild(description);

        const amazonLink = document.createElement("a");
        amazonLink.href = book.amazonLink;
        amazonLink.textContent = "View on Amazon";
        amazonLink.target = "_blank";
        bookInfo.appendChild(amazonLink);

        bookItem.appendChild(bookInfo);
        carousel.appendChild(bookItem);
    });
    booksSection.appendChild(carousel);
  });
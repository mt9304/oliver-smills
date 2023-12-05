document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.style.opacity = "0.8"; // Set initial opacity to 80%
    document.body.appendChild(overlay);
  
    const homeSection = document.getElementById("home");
    homeSection.style.animation = "zoomBackground 2s forwards";
  
    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 1s"; // Changed duration to 1 second
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
        amazonLink.textContent = "Buy on Amazon";
        bookInfo.appendChild(amazonLink);

        bookItem.appendChild(bookInfo);
        carousel.appendChild(bookItem);
    });
    booksSection.appendChild(carousel);
  });
  
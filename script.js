
window.addEventListener("load", function () {
    //Overlay fade and zoom on first loading page. 
    const overlay = document.getElementsByClassName("overlay")[0];
  
    const homeSection = document.getElementById("home");
    homeSection.style.animation = "zoomBackground 2s forwards";
  
    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 3s";
    }, 0); // Schedule the overlay transition to start immediately
  
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const booksSection = document.getElementById("books");
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
        
    booksData.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book");

        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("bookImgWrapper");

        const bookCover = document.createElement("img");
        bookCover.src = book.coverImg;
        bookCover.alt = book.title;
        imgWrapper.appendChild(bookCover);
        bookItem.appendChild(imgWrapper);

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
        description.style.textAlign = "left";
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
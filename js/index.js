// GET THE REFERENCES
const container = document.querySelector(".main-content");
const links = document.querySelectorAll(".navigation");
let url = "partials/home.html";
// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlFeed) => {
    fetch(urlFeed)

    .then((response) => {
        return response.text();
    })

    .then((data) => {
        container.innerHTML = data;
    })

    .catch((error) => {
        console.error("Error fetching content: ",error);
    })
}
   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */
   // RUN THE fetch(urlFeed).then().then().catch()
// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 
// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
    event.preventDefault();
    url = event.target.href;
    loadContent(url);
}
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.

   loadContent(url);
   links.forEach((link) => {
    link.addEventListener("click", selectContent);
   });
// CLOSE YOUR FUNCTION selectContent HERE
// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
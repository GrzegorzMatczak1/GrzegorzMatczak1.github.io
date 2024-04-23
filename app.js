document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                

                entry.target.addEventListener("click", function() {
                    // Transition animation
                    this.style.transition = "transform 1s ease-in-out";
                    this.style.transform = "translateY(-100%)";

                    // Delay before replacing the content
                    setTimeout(() => {
                        // Replace content with example text
                        string = (`
                        <div class="supcontainer" style="margin: 0; height: 100vh; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 1fr;">

                        <div class="background-one">
                        <div class="link-container">
                          <a class="link-one" href="about.html">ABOUT</a>
                        </div>
                      </div>
                      <div class="background-two link-container">
                        <a class="link-two" href="extra.html">EXTRA</a>
                      </div>
                      <div class="background-three link-container">
                        <a class="link-three" href="contact.html">CONTACT</a>
                      </div>
                      </div>`)
                        const container = document.querySelector(".container");
                        container.innerHTML = string;
                        
                    }, 1000); // Delay in milliseconds (1 second)
                });
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach(element => observer.observe(element));
});
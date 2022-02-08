import journal from "../../assets/journaling.jpg";
import resources from "../../assets/resources.jpg";

export default function Home() {
    return `
    <div class="container" id="app">
    <section class="home-area" id="home">
    <div class="home-container">
      <h1 class="main-title" id="home">Unbox Your Thoughts</h1>
      <h2>You Matter</h2>
      <a href="#checkin" class="btn btn-primary">Checkin</a>
    </div>
    <div id="services">
    <div class="services-div">
        <div class="services-item" id="service-one">
        <article class="section-one">
        <h2 class="subheading">Guided Journaling</h2>
        <img class=articleImg src="${journal}" alt="Img One">
        <p class="infoPara">Guided journaling can help improve<br> your well-being
        through structured,<br> reflective prompts and relative questions.</p>
        </article> 
        </div>
        <div class="services-item" id="service-two">
        <article class="section-two">
        <h2 class="subheading">Daily Reminders & Affirmations</h2>
        <img class=articleImg src="" alt="Img Two">
        <p class="infoPara">Text</p><br>
        </article> 
        </div>
        <div class="services-item" id="service-three">
        <article class="section-three">
        <h2 class="subheading">Resources</h2>
        <img class=articleImg src="${resources}" alt="Img Three">
        <p class="infoPara">Browse or search for materials,<br>
        and other resorces necessary<br> for your journey.</p>
        </article> 
        </div>
    </div>
    </div>
    </section>
    </div>
    `;
}
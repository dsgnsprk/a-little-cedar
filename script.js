const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

const royceImage = document.getElementById("royce-carousel-image");
const royceTitle = document.getElementById("royce-title");
const royceQuote = document.getElementById("royce-quote");
const royceLocation = document.getElementById("royce-location");
const roycePrev = document.getElementById("royce-prev");
const royceNext = document.getElementById("royce-next");

if (royceImage && royceTitle && royceQuote && royceLocation && roycePrev && royceNext) {
  const slides = [
    {
      src: "./assets/img/royce-storefront.jpg",
      alt: "ROYCE Chocolate storefront at Southcenter Mall",
      title: "ROYCE' Chocolate Storefront",
      quote: "“A clean, high-contrast retail expression with an open threshold, bright product display, and a compact plan that reads clearly from the mall concourse.”",
      location: "Southcenter Mall · Tukwila, WA",
    },
    {
      src: "./assets/img/royce-interior-wide.jpg",
      alt: "ROYCE Chocolate interior retail counter and shelving",
      title: "ROYCE' Interior Experience",
      quote: "“Minimal detailing, bright merchandising, and clear circulation create a small retail space that feels calm and premium.”",
      location: "Southcenter Mall · Tukwila, WA",
    },
    {
      src: "./assets/img/royce-interior-shelves.jpg",
      alt: "ROYCE Chocolate interior shelving and retail display",
      title: "ROYCE' Chocolate",
      quote: "“A compact retail environment where material warmth, customer flow, and display clarity all needed to work together.”",
      location: "Southcenter Mall · Tukwila, WA",
    },
  ];

  let currentSlide = 0;

  const renderSlide = (index) => {
    const slide = slides[index];
    royceImage.style.opacity = "0.65";
    window.setTimeout(() => {
      royceImage.src = slide.src;
      royceImage.alt = slide.alt;
      royceTitle.textContent = slide.title;
      royceQuote.textContent = slide.quote;
      royceLocation.textContent = slide.location;
      royceImage.style.opacity = "1";
    }, 120);
  };

  roycePrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide(currentSlide);
  });

  royceNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const fields = {
      projectType: data.get("projectType")?.toString().trim() || "",
      name: data.get("name")?.toString().trim() || "",
      email: data.get("email")?.toString().trim() || "",
      phone: data.get("phone")?.toString().trim() || "",
      referral: data.get("referral")?.toString().trim() || "",
      description: data.get("description")?.toString().trim() || "",
    };

    const subject = encodeURIComponent(`A Little Cedar inquiry — ${fields.projectType || "New project"}`);
    const body = encodeURIComponent([
      "New inquiry from the A Little Cedar website",
      "",
      `Project type: ${fields.projectType}`,
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Referral: ${fields.referral}`,
      "",
      "Project description:",
      fields.description,
    ].join("\n"));

    window.location.href = `mailto:alittlecedar@gmail.com?subject=${subject}&body=${body}`;

    if (note) {
      note.textContent = "Your email app should open with a prefilled inquiry draft. If not, email alittlecedar@gmail.com directly.";
    }
  });
}

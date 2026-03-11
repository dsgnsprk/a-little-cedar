const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

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

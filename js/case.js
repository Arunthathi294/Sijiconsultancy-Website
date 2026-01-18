document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".case-tabs span");
  const cards = document.querySelectorAll(".case-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      const filter = tab.dataset.filter.trim();

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      cards.forEach(card => {
        const category = card.dataset.category?.trim();

        if (filter === "all" || category === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      })

    })
  })

})

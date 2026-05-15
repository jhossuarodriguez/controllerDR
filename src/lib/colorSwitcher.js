export const colorSwitcher = () => {
  document.addEventListener("astro:page-load", () => {
    document.querySelectorAll("[data-color]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const img = btn.closest("article")?.querySelector("img");
        const url = btn.dataset.image;

        if (img && url) {
          img.srcset = "";
          img.src = url;
        };

        const parent = btn.parentElement;
        parent?.querySelectorAll("[data-color]").forEach((b) => {
          b.classList.remove("ring-4", "ring-ink/20");
        });
        btn.classList.add("ring-4", "ring-ink/20");
      });
    });
  })
}
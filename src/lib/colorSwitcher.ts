export const colorSwitcher = () => {
  document.addEventListener("astro:page-load", () => {
    document.querySelectorAll<HTMLElement>("[data-color]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const color = btn.dataset.color;
        const article = btn.closest("[data-color-container]");

        article?.querySelectorAll<HTMLImageElement>("[data-color-image]").forEach((img) => {
          img.classList.add("hidden");
        });
        article
          ?.querySelector<HTMLImageElement>(`[data-color-image="${color}"]`)
          ?.classList.remove("hidden");

        const parent = btn.parentElement;
        parent?.querySelectorAll<HTMLElement>("[data-color]").forEach((b) => {
          b.classList.remove("ring-4", "ring-ink/20");
        });
        btn.classList.add("ring-4", "ring-ink/20");
      });
    });
  });
};

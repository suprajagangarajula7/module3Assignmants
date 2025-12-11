export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.style = "padding:12px; text-align:center; margin-top:24px; color:#666;";
  footer.innerHTML = `© ${new Date().getFullYear()} MyApp`;
  return footer;
}


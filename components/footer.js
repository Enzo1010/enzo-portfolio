/**
 * Footer Component
 * Renders the site footer.
 */
export function renderFooter(container) {
  const year = new Date().getFullYear();

  container.innerHTML = `
    <footer class="footer">
      <div class="container">
        <p>&copy; ${year} Enzo Bazzi. Todos os direitos reservados.</p>
      </div>
    </footer>
  `;
}

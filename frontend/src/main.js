const API_BASE = "http://localhost:4000/api";

async function fetchJSON(path) {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) {
    throw new Error(`Failed request: ${path}`);
  }
  return response.json();
}

function renderCards(items, containerId, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map((item) => {
      if (type === "category") {
        return `
          <article class="card">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <span>${item.growth}</span>
          </article>
        `;
      }
      if (type === "supplier") {
        return `
          <article class="card">
            <h4>${item.company}</h4>
            <p>${item.specialty}</p>
            <span>${item.country} • ${item.rating}★</span>
          </article>
        `;
      }
      return "";
    })
    .join("");
}

function renderMetrics(metrics) {
  const wrapper = document.getElementById("metrics");
  wrapper.innerHTML = metrics
    .map(
      (metric) => `
      <div class="metric-card">
        <h4>${metric.value}</h4>
        <p>${metric.label}</p>
      </div>
    `
    )
    .join("");
}

async function init() {
  try {
    const [categories, suppliers, metrics] = await Promise.all([
      fetchJSON("/categories"),
      fetchJSON("/suppliers"),
      fetchJSON("/metrics"),
    ]);

    renderCards(categories.data, "categoryGrid", "category");
    renderCards(suppliers.data, "supplierGrid", "supplier");
    renderMetrics(metrics.data);
  } catch (error) {
    console.error(error);
  }
}

const form = document.getElementById("rfqForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  const status = document.getElementById("rfqStatus");

  try {
    const response = await fetch(`${API_BASE}/rfq`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await response.json();
    status.textContent = payload.message;
    form.reset();
  } catch {
    status.textContent = "Submission failed. Please try again.";
  }
});

init();

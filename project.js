function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btn.textContent = "Read more";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btn.textContent = "Read less";
  }
}

function toggleEdit() {
  const editBox = document.getElementById("editBox");
  const editDisplay = document.getElementById("editDisplay");

  if (editBox.style.display === "none") {
    editBox.style.display = "block";
    editDisplay.style.display = "none";
  } else {
    editBox.style.display = "none";
    editDisplay.style.display = "block";
  }
}

function saveEdit() {
  const newText = document.getElementById("editText").value;
  const editDisplay = document.getElementById("editDisplay");
  const editBox = document.getElementById("editBox");
  const [shortText, ...rest] = newText.split(",");
  const longText = rest.join(",");

  editDisplay.innerHTML = `
    <p>
      ${shortText},
      <span id="dots">...</span>
      <span id="more" class="read-more-content">${longText}</span>
    </p>
    <button onclick="toggleReadMore()" id="readMoreBtn">Read more</button>
  `;

  editBox.style.display = "none";
  editDisplay.style.display = "block";
}

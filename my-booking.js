document.getElementById("findBtn").addEventListener("click", () => {
    const email = document.getElementById("emailInput").value.trim();

    if (!email) {
        alert("Please enter a valid email.");
        return;
    }

    // Placeholder request (replace with backend API)
    console.log("Searching bookings for:", email);

    // Redirect to results page (if you have one)
    // window.location.href = /results.html?email=${encodeURIComponent(email)};
});
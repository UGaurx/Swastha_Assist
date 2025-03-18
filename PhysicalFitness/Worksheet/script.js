document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("health-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const answers = {};
    formData.forEach((value, key) => {
      answers[key] = value;
    });

    const suggestions = suggestActions(answers);
    openNewTabWithSuggestions(suggestions);
  });

  function suggestActions(answers) {
    const suggestions = [];

    if (answers["q1"] === "no") {
      suggestions.push(
        "Ensure to wash your hands thoroughly for at least 20 seconds with soap and water to prevent the spread of germs."
      );
    }

    if (answers["q2"] === "no") {
      suggestions.push(
        "Carrying a hand sanitizer with you can be beneficial, especially when soap and water are not available."
      );
    }

    if (answers["q3"] === "no") {
      suggestions.push(
        "Check that your hand sanitizer contains at least 60% alcohol to effectively kill germs."
      );
    }

    if (answers["q4"] === "no") {
      suggestions.push(
        "Make it a habit to bathe daily to maintain personal hygiene and prevent infections."
      );
    }

    if (answers["q5"] === "no") {
      suggestions.push(
        "Brush your teeth twice a day, in the morning and before bed, to maintain oral health."
      );
    }

    if (answers["q6"] === "no") {
      suggestions.push(
        "Washing hands before and after every meal helps prevent the transmission of germs from your hands to your food and vice versa."
      );
    }

    if (answers["q7"] === "no") {
      suggestions.push(
        "Dispose of garbage properly by throwing it in designated bins to maintain cleanliness and prevent the spread of diseases."
      );
    }

    if (answers["q8"] === "no") {
      suggestions.push(
        "Remember that hand washing is the single most effective way to prevent the transmission of diseases such as colds and flu."
      );
    }

    if (answers["q9"] === "no") {
      suggestions.push(
        "Developing the habit of washing hands frequently can significantly reduce the risk of infections."
      );
    }

    if (answers["q10"] === "no") {
      suggestions.push(
        "Use a tissue or your elbow to cover your mouth when coughing or sneezing to prevent the spread of respiratory droplets."
      );
    }

    return suggestions;
  }

  function openNewTabWithSuggestions(suggestions) {
    const suggestionsText =
      suggestions.length === 0
        ? "No suggestions available."
        : suggestions.join("\n");

    const url = `suggestions.html?suggestions=${encodeURIComponent(
      suggestionsText
    )}`;

    window.open(url, "_blank");
  }
});

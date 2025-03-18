document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sleep-form");

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

    if (answers["q1"] === "yes") {
      suggestions.push(
        "Establish a relaxing bedtime routine and optimize your sleep environment for comfort."
      );
    }

    if (answers["q2"] === "yes") {
      suggestions.push(
        "Consult a healthcare professional to address breathing difficulties during sleep."
      );
    }

    if (answers["q3"] === "yes") {
      suggestions.push(
        "Maintain a consistent sleep schedule to regulate your body's internal clock."
      );
    }

    if (answers["q4"] === "yes") {
      suggestions.push(
        "Create a dark, quiet, and cool sleep environment to improve sleep quality."
      );
    }

    if (answers["q5"] === "yes") {
      suggestions.push(
        "Limit caffeine intake and establish a relaxing bedtime routine to promote better sleep."
      );
    }

    if (answers["q6"] === "yes") {
      suggestions.push(
        "Take short breaks and engage in physical activity during the day to combat daytime sleepiness."
      );
    }

    if (answers["q7"] === "yes") {
      suggestions.push(
        "Gradually adjust your sleep schedule if you work night shifts to improve sleep quality."
      );
    }

    if (answers["q8"] === "yes") {
      suggestions.push(
        "Practice relaxation techniques to fall back asleep quickly if you wake up during the night."
      );
    }

    if (answers["q9"] === "yes") {
      suggestions.push(
        "Maintain a consistent wake-up time to regulate your body's internal clock."
      );
    }

    if (answers["q10"] === "yes") {
      suggestions.push(
        "Keep a sleep diary to identify factors affecting your sleep, and practice good sleep hygiene."
      );
    }
    return suggestions;
  }

  function openNewTabWithSuggestions(suggestions) {
    const suggestionsText =
      suggestions.length === 0
        ? "No suggestions available."
        : suggestions.join("\n");

    // Construct the URL with suggestions as query parameter
    const url = `suggestions.html?suggestions=${encodeURIComponent(
      suggestionsText
    )}`;

    // Open a new tab with the URL
    window.open(url, "_blank");
  }
});

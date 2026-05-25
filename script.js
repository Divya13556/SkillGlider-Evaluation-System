function calculateScore() {

    let innovation = Number(document.getElementById("innovation").value);
    let technical = Number(document.getElementById("technical").value);
    let uiux = Number(document.getElementById("uiux").value);
    let impact = Number(document.getElementById("impact").value);
    let feasibility = Number(document.getElementById("feasibility").value);
    let presentation = Number(document.getElementById("presentation").value);
    let completeness = Number(document.getElementById("completeness").value);

    // Weights
    let weights = {
        innovation: 20,
        technical: 25,
        uiux: 10,
        impact: 15,
        feasibility: 10,
        presentation: 10,
        completeness: 10
    };

    // Final Score Calculation
    let finalScore =
        (innovation / 10) * weights.innovation +
        (technical / 10) * weights.technical +
        (uiux / 10) * weights.uiux +
        (impact / 10) * weights.impact +
        (feasibility / 10) * weights.feasibility +
        (presentation / 10) * weights.presentation +
        (completeness / 10) * weights.completeness;

    finalScore = finalScore.toFixed(2);

    // Grade Logic
    let grade = "";

    if (finalScore >= 90) {
        grade = "Excellent";
    }
    else if (finalScore >= 75) {
        grade = "Good";
    }
    else if (finalScore >= 50) {
        grade = "Average";
    }
    else {
        grade = "Needs Improvement";
    }

    document.getElementById("result").innerHTML =
        `Final Score: ${finalScore}/100 <br> Grade: ${grade}`;
}
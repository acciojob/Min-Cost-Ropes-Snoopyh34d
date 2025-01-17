function calculateMinCost() {
    const input = document.getElementById('ropeLengths').value;
    const resultDiv = document.getElementById('result');

    if (!input) {
        resultDiv.textContent = "Please enter valid rope lengths.";
        return;
    }

    const ropeLengths = input.split(',').map(Number);

    if (ropeLengths.some(isNaN)) {
        resultDiv.textContent = "Invalid input. Please enter only numbers separated by commas.";
        return;
    }

    // Helper function to calculate the minimum cost using a min-heap
    function minCost(ropes) {
        if (ropes.length === 1) return 0;

        // Min-Heap setup
        ropes.sort((a, b) => a - b);

        let cost = 0;

        while (ropes.length > 1) {
            // Remove two smallest ropes
            const first = ropes.shift();
            const second = ropes.shift();

            const sum = first + second;
            cost += sum;

            // Push back the sum and re-sort
            ropes.push(sum);
            ropes.sort((a, b) => a - b);
        }

        return cost;
    }

    const minCostResult = minCost(ropeLengths);
    resultDiv.textContent = minCostResult;
}

let myChart = null;
let allData = { customers: [], transactions: [] };
const today = new Date().toLocaleDateString("en-CA"); // Get today's date in "YYYY-MM-DD" format

$(document).ready(async function () {
    const res = await fetch("/data");
    const data = await res.json();

    displayData(data.customers, data.transactions);

    $("#filter-name").on("input", applyFilters);
    $("#filter-amount").on("input", applyFilters);

    function displayData(customers, transactions) {
        allData.customers = customers;
        allData.transactions = transactions;
        updateTable(customers, transactions);
        displayChart([]);
    }

    function updateTable(customers, transactions) {
        const tableBody = $("#transactions-table tbody");
        let rows = [];
        for (let i = 0; i < transactions.length; i++) {
            const transaction = transactions[i];
            const customer = customers.find(
                (c) => c.id === transaction.customer_id
            );
            const row = `<tr>
                            <td>${customer.name}</td>
                            <td>${transaction.date}</td>
                            <td>${transaction.amount}</td>
                        </tr>`;
            rows.push(row);
        }
        tableBody.html(rows);
    }

    function applyFilters() {
        const nameFilter = $("#filter-name").val().toLowerCase();
        const amountFilter = parseFloat($("#filter-amount").val()) || 0;

        // Check if filters are empty
        if (nameFilter === "" && amountFilter <= 0) {
            resetFilters();
            return;
        }

        const filteredTransactions = allData.transactions.filter(
            (transaction) => {
                const customer = allData.customers.find(
                    (c) => c.id === transaction.customer_id
                );
                return (
                    customer.name.toLowerCase().includes(nameFilter) &&
                    transaction.amount === amountFilter
                );
            }
        );

        updateTable(allData.customers, filteredTransactions);

        const chartData = groupTransactionsByCustomer(
            filteredTransactions,
            allData.customers
        );
        displayChart(chartData);
    }

    function resetFilters() {
        updateTable(allData.customers, allData.transactions);
        displayChart([]);
    }

    function groupTransactionsByCustomer(transactions, customers) {
        const groupedTransactions = {};

        for (let i = 0; i < transactions.length; i++) {
            const transaction = transactions[i];
            if (transaction.date !== today) continue;

            const customer = customers.find(
                (c) => c.id === transaction.customer_id
            );
            if (!groupedTransactions[customer.name]) {
                groupedTransactions[customer.name] = {
                    customer_id: customer.id,
                    customer_name: customer.name,
                    total_amount: 0,
                };
            }
            groupedTransactions[customer.name].total_amount +=
                transaction.amount;
        }

        return Object.values(groupedTransactions);
    }

    function displayChart(data) {
        const ctx = document
            .getElementById("transaction-chart")
            .getContext("2d");

        // Destroy existing chart if it exists
        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: data.map((d) => d.customer_name),
                datasets: [
                    {
                        label: `Total Transaction Amount - ${today}`,
                        data: data.map((d) => d.total_amount),
                        backgroundColor: "#4bc0c0",
                    },
                ],
            },
        });
    }
});

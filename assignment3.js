        document.getElementById('covid-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const country = document.getElementById('country').value;
            fetchData(country);
        });

        async function fetchData(country) {
            try {
                const response = await fetch(`https://covid-193.p.rapidapi.com/history?country=${country}`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
                        'X-RapidAPI-Key': '6748591d05msh2870236af723519p179e2fjsnc64ca002df84' // Ganti dengan API key Anda
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    displayData(data);
                } else {
                    throw new Error('Data tidak ditemukan');
                }
            } catch (error) {
            console.error("Error:", error);
            alert("The country you are looking for doesn't exist");
        }
        }

        function displayData(data) {
            const result = data.response[0];

            document.getElementById('country-name').textContent = result.country;
            document.getElementById('active-cases').textContent = result.cases.active;
            document.getElementById('new-cases').textContent = result.cases.new;
            document.getElementById('recovered-cases').textContent = result.cases.recovered;
            document.getElementById('total-cases').textContent = result.cases.total;
            document.getElementById('total-deaths').textContent = result.deaths.total;
            document.getElementById('total-tests').textContent = result.tests.total;
            document.getElementById('access-time').textContent = new Date().toLocaleString();
        };




let myData = [
    { ID: 04, Name: "BOCCANERA ORTO PARISI. 4.1", Gender: "Girl", Price: 50, image: 'image/nuoc_hoa_4_1.jpg' },
    { ID: 03, Name: "Jo Malonne 3.1", Gender: "Girl", Price: 35, image: 'image/nuoc_hoa_3_1.jpg' },
    { ID: 05, Name: "𝐋𝐚𝐧𝐜𝐨̂𝐦𝐞 𝐌𝐢𝐫𝐚𝐜𝐥𝐞 5.1", Gender: "Girl", Price: 70, image: 'image/nuoc_hoa_5_1.jpg' },
    { ID: 14, Name: "𝟮𝟭𝟮 𝗠𝗘𝗡 𝗡𝗬𝗖 14.1", Gender: "Men", Price: 75, image: 'image/nuoc_hoa_14_1.jpg' },
    { ID: 16, Name: "Sauvage ipsum. Dior 16.1", Gender: "Girl", Price: 59, image: 'image/nuoc_hoa_16_1.jpg' },

]

function renderPerfume() {
    let htmls = myData.map(function (perfume, index) {
        return `
        <tr>
                <td>${index + 1}</td>
                <td>${perfume.ID}</td>
                <td>${perfume.Name}</td>
                <td>${perfume.Gender}</td>
                <td>${perfume.Price}</td>
                <td>${perfume.image}</td>
                <
            </tr>
        `
    })
    document.getElementById('tbPerfume').innerHTML = htmls.join('')
}
renderPerfume()
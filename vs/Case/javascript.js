const myData = [
    { ID: 04, Name: "BOCCANERA ORTO PARISI. 4.1", Gender: "Girl", Price: 50, image: 'image/nuoc_hoa_4_1.jpg', value: [20, 50, 100, 260], minvalue1ml: 0.5, maxquantity: 8 },
    { ID: 03, Name: "Jo Malonne 3.1", Gender: "Girl", Price: 35, image: 'image/nuoc_hoa_3_1.jpg', value: [30, 50, 70, 120], minvalue1ml: 0.3, maxquantity: 4 },
    { ID: 05, Name: "𝐋𝐚𝐧𝐜𝐨̂𝐦𝐞 𝐌𝐢𝐫𝐚𝐜𝐥𝐞 5.1", Gender: "Girl", Price: 70, image: 'image/nuoc_hoa_5_1.jpg', value: [40, 60, 80, 100], minvalue1ml: 0.5, maxquantity: 7 },
    { ID: 14, Name: "𝟮𝟭𝟮 𝗠𝗘𝗡 𝗡𝗬𝗖 14.1", Gender: "Men", Price: 75, image: 'image/nuoc_hoa_14_1.jpg', value: [100, 120, 150, 230], minvalue1ml: 0.5, maxquantity: 4 },
    { ID: 06, Name: "𝐆𝐮𝐜𝐜𝐢 𝐆𝐮𝐢𝐥𝐭𝐲 𝐁𝐥𝐚𝐜𝐤 𝐏𝐨𝐮𝐫 𝐅𝐞𝐦𝐦𝐞 6.1", Gender: "Girl", Price: 50, image: 'image/nuoc_hoa_6_1.jpg', value: [30, 50, 70, 160], minvalue1ml: 0.5, maxquantity: 9 },
    { ID: 12, Name: "Club-de-nui Lorem. 12.1", Gender: "Men", Price: 40, image: 'image/nuoc_hoa_12_1.jpg', value: [30, 60, 90, 150], minvalue1ml: 0.5, maxquantity: 9 },
    { ID: 01, Name: "𝘿𝙠𝙣𝙮 Green Apple 1.1", Gender: "Girl", Price: 60, image: 'image/nuoc_hoa_1_1.jpg', value: [20, 50, 80, 300], minvalue1ml: 0.5, maxquantity: 4 },
    { ID: 02, Name: "Bleu Channal.2.1", Gender: "Girl", Price: 80, image: 'image/nuoc_hoa_2_1.jpg', value: [20, 40, 60, 80, 150], minvalue1ml: 0.5, maxquantity: 3 },
    { ID: 07, Name: "Miss Dior 7.1", Gender: "Girl", Price: 80, image: 'image/nuoc_hoa_7_1.jpg', value: [30, 60, 90, 150, 250, 400], minvalue1ml: 0.5, maxquantity: 5 },
    { ID: 08, Name: "𝐇𝐞𝐫𝐦𝐞𝐬 𝐋'𝐎𝐦𝐛𝐫𝐞 𝐃𝐞𝐬 𝐌𝐞𝐫𝐯𝐞𝐢𝐥𝐥𝐞𝐬 𝐄𝐃𝐏 8.1", Gender: "Men & Girl", Price: 65, image: 'image/nuoc_hoa_8_1.jpg', value: [10, 50, 70, 150, 320], minvalue1ml: 0.5, maxquantity: 8 },
    { ID: 09, Name: "𝐂𝐋𝐔𝐁 𝐃𝐄 𝐍𝐔𝐈𝐓 9.1", Gender: "Girl", Price: 70, image: 'image/nuoc_hoa_9_1.jpg', value: [15, 60, 100], minvalue1ml: 0.5, maxquantity: 8 },
    { ID: 10, Name: "𝐉𝐄𝐀𝐍 𝐏𝐀𝐔𝐋𝐆𝐀𝐔𝐋𝐓𝐈𝐄𝐑 𝐒𝐂𝐀𝐍𝐃𝐀𝐋 𝐄𝐃𝐏 10.1", Gender: "Girl", Price: 50, image: 'image/nuoc_hoa_10_1.jpg', value: [20, 50, 80, 100, 250], minvalue1ml: 0.5, maxquantity: 2 },
    { ID: 11, Name: "𝐕𝐚𝐥𝐞𝐧𝐭𝐢𝐧𝐚 𝐁𝐥𝐮𝐬𝐡 𝐄𝐃𝐏 11.1", Gender: "Girl", Price: 55, image: 'image/nuoc_hoa_11_1.jpg', value: [20, 50, 100, 250, 360], minvalue1ml: 0.5, maxquantity: 7 },
    { ID: 13, Name: "𝐋𝐈𝐑𝐀 𝐁𝐲 𝐗𝐞𝐫𝐣𝐨𝐟𝐟 𝐂𝐚𝐬𝐚𝐦𝐨𝐫𝐚𝐭𝐢 𝐅𝐨𝐫 𝐖𝐨𝐦𝐞𝐧 13.1", Gender: "Girl", Price: 66, image: 'image/nuoc_hoa_13_1.jpg', value: [15, 30, 45, 60, 120, 240], minvalue1ml: 0.5, maxquantity: 11 },
    { ID: 15, Name: "𝐀𝐅𝐍𝐀𝐍 𝐒𝐔𝐏𝐄𝐑𝐌𝐀𝐂𝐘 𝐒𝐈𝐋𝐕𝐄𝐑15.1", Gender: "Girl", Price: 76, image: 'image/nuoc_hoa_15_1.jpg', value: [30, 50, 70, 140, 210], minvalue1ml: 0.5, maxquantity: 10 },
    { ID: 16, Name: "𝑵𝑨𝑹𝑪𝑰𝑺𝑶 𝐌𝐮𝐬𝐜 𝐍𝐨𝐢𝐫 𝐅𝐨𝐫 𝐇𝐞𝐫 𝐄𝐃𝐏 13.1", Gender: "Girl", Price: 56, image: 'image/nuoc_hoa_16_1.jpg', value: [25, 50, 75, 150], minvalue1ml: 0.5, maxquantity: 5 },

]

var myCart = JSON.parse(localStorage.getItem('myCart'))
if (myCart == null) {
    myCart = []
}






const dataSource = [
    {
        type: "salty",
        choose: [
            {
                id: "rice",
                contact: [
                    {
                        name: "COCA Restaurant",
                        address: "75 Láng Hạ"
                    },
                    {
                        name: "Món Huế ",
                        address: "35 Nguyễn Chí Thanh"
                    },
                    {
                        name: "Miwa Japanese Restaurant",
                        address: "31 Láng Hạ"
                    },
                    {
                        name: "Quán Ăn Ngon",
                        address: "18 Phan Bội Châu"
                    },
                    {
                        name: "Chops Ngọc Khánh ",
                        address: "56 Phạm Huy Thông"
                    }
                ]
            },
            {
                id: "noodle",
                contact: [
                    {
                        name: "Bún đậu mắm tôm ",
                        address: "104 C3 Nghĩa Tân, Cầu Giấy"
                    },
                    {
                        name: "Bà Hằng Bún ngan & Bún trộn",
                        address: "Kiốt 3, đối diện cổng chợ Nghĩa Tân"
                    },
                    {
                        name: "Bún hải sản",
                        address: "Số 8, Khu A12, Ngõ 215, Trần Quốc Hoàn"
                    },
                    {
                        name: "Bánh đa trộn",
                        address: "Số 12, Ngõ 118, Nguyễn Khánh Toàn"
                    },
                    {
                        name: "Madame Lân",
                        address: "301 Tô Hiệu"
                    },
                    {
                        name: "Mỳ xào HAT",
                        address: "Số 19A, Ngõ 9, Trần Quốc Hoàn"
                    },
                    {
                        name: "Bà Tèo Bún và Phở",
                        address: "104 C6 Tô Hiệu"
                    },
                    {
                        name: "Bánh Đa Trộn và Miến Trộn",
                        address: "Số 2, ngõ 181, Xuân Thủy"
                    }
                ]
            },
            {
                id: "anvat",
                contact: [
                    {
                        name: "Cột điện quán",
                        address: "Ngõ 22 Trung Kính"
                    },
                    {
                        name: "Papa’s Chicken ",
                        address: "Ngõ 181 Xuân Thủy"
                    },
                    {
                        name: "Bami Bread",
                        address: "107 Láng Hạ"
                    },
                    {
                        name: "Quà vặt Kitty Snack",
                        address: "105A B9 Tô Hiệu"
                    },
                    {
                        name: "Quẩy Béo",
                        address: "431 Nguyễn Khanh"
                    }
                ]
            }
        ]
    },
    {
        type: "sweety",
        choose: [
            {
                id: "bakery",
                contact: [
                    {
                        name: "Tous Les Jours ",
                        address: "IPH"
                    },
                    {
                        name: "Dunkin’Donuts ",
                        address: "IPH"
                    },
                    {
                        name: "Soya Garden",
                        address: "117 Ô Chợ Dừa"
                    },
                    {
                        name: "Pari Gateaux",
                        address: "96 Nguyễn Khánh Toàn"
                    },
                    {
                        name: "DrToad Castella",
                        address: "41 Đỗ Quang"
                    }
                ]
            },
            {
                id: "cream",
                contact: [
                    {
                        name: "Snow Island Coffee",
                        address: "Big C Thăng Long - 222 Trần Duy Hưng"
                    },
                    {
                        name: "Seoni Cream",
                        address: "117A Đường Láng"
                    },
                    {
                        name: "GooFoo Kem và Tào Phớ",
                        address: "1 Trần Quốc Vượng"
                    },
                    {
                        name: "OkBIngsu!",
                        address: "125 Nguyễn Phong Sắc"
                    }
                ]
            },
            {
                id: "pudding",
                contact: [
                    {
                        name: "Chè và Kem Xôi Thái Lan",
                        address: "47 Trần Quốc Toản"
                    },
                    {
                        name: "Chè Dừa Thái Lan",
                        address: "25 Nguyễn Phong Sắc"
                    },
                    {
                        name: "Tào Phớ",
                        address: "100 Nguyễn Khang"
                    },
                    {
                        name: "Chè Đà Nẵng",
                        address: "34A Dịch Vọng Hậu"
                    },
                    {
                        name: "Chè Sầu Liên",
                        address: "79 Trần Quóc Hoàn"
                    }
                ]
            }
        ]
    },
    {
        type: "drink",
        choose: [
            {
                id: "",
                contact: [
                    {
                        name: "Ding Tea",
                        address: ""
                    },
                    {
                        name: "Royal Tea",
                        address: ""
                    },
                    {
                        name: "Cộng Cà Phê",
                        address: "Ngã Tư Trung Kính – Vũ Phạm Hàm"
                    },
                    {
                        name: "Trà Tiên Hưởng",
                        address: "1A Trần Quốc Hoàn"
                    },
                    {
                        name: "The Alley ",
                        address: "23 Trung Hòa"
                    },
                    {
                        name: "Kai Tea",
                        address: "33 Trung Kính"
                    }
                ]
            }
        ]
    }
];
const divId = document.getElementById("root");

for (let i = 0; i < dataSource.length; i++) {
    var typeFood, choose, chooseID;
    // Convert Type Food to Vie Language
    if (dataSource[i].type === "salty") {
        typeFood = "Đồ Mặn";
    } else if (dataSource[i].type === "sweety") {
        typeFood = "Đồ Ngọt";
    } else {
        typeFood = "Đồ Uống";
    }

    const chooseFood = dataSource[i].choose;
    const html = `
            <ul>
                <h1 id="type">${typeFood}</h1>    
                ${chooseFood.map(item => {
                    if (item.id === "rice") {
                        chooseID = "Cơm";
                    } else if (item.id === "noodle") {
                        chooseID = "Bún";
                    } else if (item.id === "bakery") {
                        chooseID = "Bánh Ngọt";
                    } else if (item.id === "cream") {
                        chooseID = "Kem";
                    } else if (item.id === "pudding") {
                        chooseID = "Chè";
                    } else if (item.id === "") {
                        chooseID = "";
                    } else {
                        chooseID = "Ăn Vặt";
                    }
                    return `
                        <h3>${chooseID}</h3>
                        ${item.contact.map(i => {
                            return `
                                <li>${i.name}</li>
                                <li>${i.address}</li>
                            `;
                        })}
                    `;
                })}
            </ul>`;
    divId.insertAdjacentHTML("beforeend", html);
}
//  1. Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
let colors = ["Red", "Black", "White"];
let [firstColor, secondColor, thirdColor] = colors;
console.log("Câu 1: Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor:")
console.log("firstColor: " + firstColor);
console.log("secondColor: " + secondColor);
console.log("thirdColor: " + thirdColor);

//  2.   Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.

let person = {
    name: "Thanh",
    age: 21
}
let {name, age} = person;
console.log("Câu 2: Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng:");
console.log("name:" + name);
console.log("age:" + age);

//  3.   Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];
console.log("Câu 3: Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator:");
console.log(newArr);

//  4.   Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
let originalArray = ["aaa", "bbb", "ccc"];
let mangSaoChep = [...originalArray];
console.log("Câu 4: Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator:");
console.log("Mảng bản sao: " + mangSaoChep)

//  5.   Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
let arr3 = [1, 2, 3];
let arr4 = [...arr3, 4];
console.log("Câu 5: Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator:")
console.log(arr4);
//  6.   Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
let obj1 = {
    name: "Le Ngoc Thanh",
    age: 21
}

let obj2 = {
    adrres: "Tiến Hóa, Tuyên Hóa, Quảng Bình",
    phone: 372850073
}
let newObj = {...obj1, ...obj2}
console.log("Câu 6: Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng:")
console.log(newObj);
//  7.   Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
let person1 = {
    name: "Mai Long Vu",
    age: 21,
    gender: "BEDE"
}
let newPerson = {...person1, country: "Vietnam"};
console.log("Câu 7: Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là \"Vietnam\"")
console.log(newPerson);
//  8.   Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
let mang1 = [1, 8, 9, 10, 87, 35, 87, 44, 30];
let newMang1 = mang1.filter((item) =>
    item % 2 === 0
)
console.log("Câu 8: Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên:")
console.log("Các số chẵn trong mảng là: "+newMang1);
//  9.   Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
let mang2 = ["aaaaa", "bbb", "cccc", "dddd", "eeeeeeeeeee", "iiiiii", "vvvvvvv"];
let chuoi2 = 5;
let newMang2 = mang2.filter((chuoi) =>
    chuoi.length > chuoi2
)
console.log("Câu 9: Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi:")
console.log("Các chuỗi có độ dài lớn hơn " + chuoi2 + " : " + newMang2);
//  10.   Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.
let mang3 = [1001, 999, 1002, 997, 998, 967, 1005, 1111];
let newMang3 = mang3.filter((item) =>
    item > 1000
)
console.log("Câu 10: Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.")
console.log("Các giá trị trong mảng lớn hơn 1000: " + newMang3);
//  11.   Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.
let mang4 = [2, 8, 9, 10, 12, 13, 15, 35, 78, 77];
let newMang4 = mang4.filter((num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;

        // Loại trừ các số chia hết cho 2 và 3
        if (num % 2 === 0 || num % 3 === 0) return false;

        // Kiểm tra các số từ 5 đến √num
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
)
console.log("Câu 11: Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên: ")
console.log("Các số nguyên tố trong mảng: " + newMang4);
//  12.   Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
let mang5 = ["abc", "123", "def456", "789ghi", "jkl"];
let newMang5 = mang5.filter(str => !/\d/.test(str));

console.log("Câu 12: Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.")
console.log("Các chuỗi không có kí tự sô: " + newMang5);

//  13.   Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.
let mang6 = [1, 5, 7, 48, 78, 98, 343, 1213, 9999];
let newMang6 = mang6.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
console.log("Câu 13: Sử dụng reduce để tính tổng của các số trong một mảng số nguyên:")
console.log("Tổng: " + newMang6);

//  14.   Sử dụng reduce để tính tích của các số trong một mảng số nguyên.
let mang7 = [1, 5, 7, 48, 78, 98, 343, 1213, 9999];
let newMang7 = mang7.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1)
console.log("Câu 14: Sử dụng reduce để tính tích của các số trong một mảng số nguyên:")
console.log("Tích: " + newMang7);

//  15.  Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.
let mang8 = [1, 5, 7, 48, 78, 98, 343, 1213, 9999];
let newMang8 = mang8.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
})
console.log("Câu 15: Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên:")
console.log("Giá trị lớn nhất: " + newMang8);

//  16.   Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.
let mang9 = [1, 5, 1, 48, 1, 98, 5, 1213, 1213, 45, 2832, 133, 132, 54, 6576, 343, 1213, 78, 43, 557, 235, 121]
let newMang9 = mang9.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {})
console.log("Câu 16: Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng:")
console.log(newMang9);
//  17.   Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.
let product = [
    {
        ten: "Kẹo socola",
        gia: 10000,
    },
    {
        ten: "Cocacola",
        gia: 20000,
    },
    {
        ten: "Kem",
        gia: 5000,
    },
];
let newMang10 = product.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.gia;
}, 0)
console.log("Câu 17: Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng:")
console.log("Tổng giá tất cả các sản phẩm: " + newMang10);


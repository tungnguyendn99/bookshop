import { useState, createContext, useContext, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartReducer } from "./Reducer";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const items = [
    {
      id: "1",
      title: "Wish you",
      category: "Romance",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781984818416.jpg?height=500&v=v2-d349be6c994564f4e5d8951249715caa",
      desc: `Lorem ipsum dolor sit amet adipisicing elit. Ducimus soluta iusto  quis quae amet.`,
    },
    {
      id: "2",
      title: "South & West",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780525434191.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolimpedit non, aspernatur psum dicta quidem ipsa earum`,
    },
    {
      id: "3",
      title: "Belonging",
      category: "Poetry",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780415968164.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, similique consequatur! Harum beatae laudantium cum nisi accusantium fuga fugiat incidunt architecto cupiditate dolore modi iure qui aut `,
    },
    {
      id: "4",
      title: "Time",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780593300237.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit placeat consequuntur omnis quae enim magnam nesciunt a at? Ratione quae iste magni, quasi eveniet tempore neque eligendi provident hic? quasi eveniet tempore neque eligen quae iste magni, quasi evenie`,
    },
    {
      id: "5",
      title: "Young Mungo",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780802159557.jpg?height=500&v=v2-739e6e3bf39e1181db257cda87726511",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "6",
      title: "Our Wives",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781250229892.jpg?height=500&v=v2-fb14b75476aab47baf6619cf993367e2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "7",
      title: "Women",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780385548229.jpg?height=500&v=v2-4253401bcc2c3112a1713faf00427cc9",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "8",
      title: "Sea",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780593321447.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "9",
      title: "All about Love",
      category: "Romance",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780060959470.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet adipisicing elit. Ducimus soluta iusto  quis quae amet.`,
    },
    {
      id: "10",
      title: "1619",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780593230572.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolimpedit non, aspernatur psum dicta quidem ipsa earum`,
    },
    {
      id: "11",
      title: "Pho Love",
      category: "Poetry",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781534441934.jpg?height=500&v=v2-b8abc63b9ad202e770c947124dc145f5",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, similique consequatur! Harum beatae laudantium cum nisi accusantium fuga fugiat incidunt architecto cupiditate dolore modi iure qui aut `,
    },
    {
      id: "12",
      title: "The War",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780374603762.jpg?height=500&v=v2-3d911157693afb25dfdb45ace9b03cc1",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit placeat consequuntur omnis quae enim magnam nesciunt a at? Ratione quae iste magni, quasi eveniet tempore neque eligendi provident hic? quasi eveniet tempore neque eligen quae iste magni, quasi evenie`,
    },
    {
      id: "13",
      title: "Man & Cat",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781646090266.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "14",
      title: "Our Wives",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781250229892.jpg?height=500&v=v2-fb14b75476aab47baf6619cf993367e2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "15",
      title: "Sonnets",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780762454587.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "16",
      title: "Rise",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781571315199.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "17",
      title: "Breath",
      category: "Romance",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781635576474.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet adipisicing elit. Ducimus soluta iusto  quis quae amet.`,
    },
    {
      id: "18",
      title: "Prince",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780316044806.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolimpedit non, aspernatur psum dicta quidem ipsa earum`,
    },
    {
      id: "19",
      title: "Mexician",
      category: "Poetry",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780525620808.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, similique consequatur! Harum beatae laudantium cum nisi accusantium fuga fugiat incidunt architecto cupiditate dolore modi iure qui aut `,
    },
    {
      id: "20",
      title: "Night",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781250812193.jpg?height=500&v=v2-c76b70f6c30ad74dc2b2f47037aaa02e",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit placeat consequuntur omnis quae enim magnam nesciunt a at? Ratione quae iste magni, quasi eveniet tempore neque eligendi provident hic? quasi eveniet tempore neque eligen quae iste magni, quasi evenie`,
    },
    {
      id: "21",
      title: "Vampire",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781595141743.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "22",
      title: "React",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9789811480263.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "23",
      title: "Full-Stack",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781839215414.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "24",
      title: "Javascript",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781492055754.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "25",
      title: "Vicious",
      category: "Romance",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781250160263.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet adipisicing elit. Ducimus soluta iusto  quis quae amet.`,
    },
    {
      id: "26",
      title: "Node.JS",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9798732428919.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolimpedit non, aspernatur psum dicta quidem ipsa earum`,
    },
    {
      id: "27",
      title: "Time War",
      category: "Poetry",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781534430990.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, similique consequatur! Harum beatae laudantium cum nisi accusantium fuga fugiat incidunt architecto cupiditate dolore modi iure qui aut `,
    },
    {
      id: "28",
      title: "A Little Life",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780804172707.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit placeat consequuntur omnis quae enim magnam nesciunt a at? Ratione quae iste magni, quasi eveniet tempore neque eligendi provident hic? quasi eveniet tempore neque eligen quae iste magni, quasi evenie`,
    },
    {
      id: "29",
      title: "Kindred",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780807083697.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "30",
      title: "The Maid",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780593356159.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "31",
      title: "Sister",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781580911863.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "32",
      title: "The Factory",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780811228855.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "33",
      title: "Homegoing",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781101971062.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "34",
      title: "Thick",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781620975879.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "35",
      title: "The Prophets",
      category: "Romance",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780593085684.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet adipisicing elit. Ducimus soluta iusto  quis quae amet.`,
    },
    {
      id: "36",
      title: "Joker",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781401291860.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolimpedit non, aspernatur psum dicta quidem ipsa earum`,
    },
    {
      id: "37",
      title: "Ducks",
      category: "Poetry",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781770462892.jpg?height=500&v=v2-1f76a7742d8093099a7d1041421d9b35",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, similique consequatur! Harum beatae laudantium cum nisi accusantium fuga fugiat incidunt architecto cupiditate dolore modi iure qui aut `,
    },
    {
      id: "38",
      title: "Dune",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780441172719.jpg?height=500&v=v2-8d2537de807a0e718ac94db96e80ffbb",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit placeat consequuntur omnis quae enim magnam nesciunt a at? Ratione quae iste magni, quasi eveniet tempore neque eligendi provident hic? quasi eveniet tempore neque eligen quae iste magni, quasi evenie`,
    },
    {
      id: "39",
      title: "March",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781603093958.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "40",
      title: "March",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781603093002.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "41",
      title: "Oddball",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781449489793.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "42",
      title: "Anne",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781449479602.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "43",
      title: "Sister",
      category: "Romance",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780316256704.jpg?height=500&v=v2-f6c4e45d6d5fc1bf3f72875d819f762a",
      desc: `Lorem ipsum dolor sit amet adipisicing elit. Ducimus soluta iusto  quis quae amet.`,
    },
    {
      id: "44",
      title: "The Fields",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781250799395.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolimpedit non, aspernatur psum dicta quidem ipsa earum`,
    },
    {
      id: "45",
      title: "The Anomaly",
      category: "Poetry",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781635421699.jpg?height=500&v=v2-73c752e84d1cf66ee79238005fc7ad24",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, similique consequatur! Harum beatae laudantium cum nisi accusantium fuga fugiat incidunt architecto cupiditate dolore modi iure qui aut `,
    },
    {
      id: "46",
      title: "Tears",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781250252708.jpg?height=500&v=v2-f4ca074219955c7517fc09d8ba677867",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit placeat consequuntur omnis quae enim magnam nesciunt a at? Ratione quae iste magni, quasi eveniet tempore neque eligendi provident hic? quasi eveniet tempore neque eligen quae iste magni, quasi evenie`,
    },
    {
      id: "47",
      title: "Hotel",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780525562948.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "48",
      title: "Sandy Hook",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781524746575.jpg?height=500&v=v2-3d1a5a60ab6c77e15d4217bd239e27e0",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
    {
      id: "49",
      title: "Chaos",
      category: "Romance",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780316477543.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet adipisicing elit. Ducimus soluta iusto  quis quae amet.`,
    },
    {
      id: "50",
      title: "The Five",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9780358299615.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolimpedit non, aspernatur psum dicta quidem ipsa earum`,
    },
    {
      id: "51",
      title: "Ruse",
      category: "Poetry",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781586423162.jpg?height=500&v=v2-266b6d1936c54de6e2a2460ea48a81eb",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, similique consequatur! Harum beatae laudantium cum nisi accusantium fuga fugiat incidunt architecto cupiditate dolore modi iure qui aut `,
    },
    {
      id: "52",
      title: "Dreamland",
      category: "Thrillers",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781620402528.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit placeat consequuntur omnis quae enim magnam nesciunt a at? Ratione quae iste magni, quasi eveniet tempore neque eligendi provident hic? quasi eveniet tempore neque eligen quae iste magni, quasi evenie`,
    },
    {
      id: "53",
      title: "Later",
      category: "Horror",
      price: 23.12,
      img: "https://images-us.bookshop.org/ingram/9781789096491.jpg?height=500&v=v2",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi rem assumenda soluta iusto ex laudantium distinctio perferendis ut totam? Veritatis, commodi perspiciatis vel deserunt accusantium sunt iusto officiis facere eligendi magnam totam ut expedita modi nam amet delectus! Est laudantium harum rerum, officiis eaque consectetur ex, consequatur blanditiis veniam, enim doloribus expedita. Ratione sunt sit fugit odio perferendis, repellat eius!`,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    items: items,
    cart: [],
  });

  const [cartItems, setCartItems] = useState([]);

  const [search, setSearch] = useState("");

  const [bookItems, setBookItems] = useState(items);

  const handleItems = bookItems.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  const handleItem = bookItems.slice(0, 8).filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  const [page, setPage] = useState(1);

  const itemsPerPage = 12;

  const startItems = (page - 1) * itemsPerPage;
  const endItems = startItems + itemsPerPage;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  console.log(totalPages);

  const setPages = (num) => {
    setPage(num);
    setType(num);
  };

  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setBookItems(items);
      return;
    }
    const newItems = items
      .slice(startItems, endItems)
      .filter((item) => item.category === category);
    setBookItems(newItems);
  };

  const filterItem = (category) => {
    if (category === "all") {
      setBookItems(items);
      return;
    }
    const newItems = items
      .slice(0, 8)
      .filter((item) => item.category === category);
    setBookItems(newItems);
  };

  const [type, setType] = useState("");

  const addBook = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, qty: ProductExist.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    toast.success("You have added 1 item to your cart", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    console.log(toast);
  };

  const increaseBook = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...ProductExist, qty: ProductExist.qty + 1 }
          : item
      )
    );
  };

  const reduceBook = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, qty: ProductExist.qty - 1 }
            : item
        )
      );
    }
  };

  const removeBook = (product) => {
    if (window.confirm("Do you want to delete this product")) {
      cartItems.find((item) => item.id === product.id);
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

  const clearCart = () => {
    if (window.confirm("Do you want to clear cart")) {
      setCartItems([]);
    }
  };

  const totalCost = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const value = {
    state,
    dispatch,
    bookItems,
    cartItems,
    search,
    setSearch,
    handleItems,
    handleItem,
    categories,
    filterItems,
    filterItem,
    type,
    setType,
    addBook,
    increaseBook,
    reduceBook,
    removeBook,
    clearCart,
    totalCost,
    ToastContainer,
    totalPages,
    startItems,
    endItems,
    setPages,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export const useCart = () => {
  return useContext(BookContext);
};

export default BookProvider;

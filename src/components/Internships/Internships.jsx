/* eslint-disable no-unused-vars */
import {
  Button,
  Center,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Bootcamp = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  useEffect(() => {
    const chatElement = document.getElementById("whats-chat");
    const chatTopRightElement = document.getElementById("chat-top-right");
    const sendBtnElement = document.getElementById("send-btn");

    function showchatbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "8%";
      }
    }

    function closechatbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "-500px";
      }
    }

    function showchatboxtime() {
      setTimeout(launchbox, 5000);
    }

    function launchbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "8%";
      }
    }

    function sendmsg() {
      const msgElement = document.getElementById("whats-in");
      if (msgElement) {
        var msg = msgElement.value;
        var relmsg = msg.replace(/ /g, "%20");
        window.open(
          "https://api.whatsapp.com/send?phone=918099523442&text=" + relmsg,
          "_blank"
        );
      }
    }

    if (chatElement) {
      chatElement.addEventListener("mouseover", showchatbox);
    }

    if (chatTopRightElement) {
      chatTopRightElement.addEventListener("click", closechatbox);
    }

    if (sendBtnElement) {
      sendBtnElement.addEventListener("click", sendmsg);
    }

    // You can use window.onload here to ensure the elements are present in the DOM
    window.onload = showchatboxtime;
  }, []);
  return (
    <VStack className="internship" alignItems={["center", "center"]}>
      <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
      <Heading
        textAlign={["center", "center"]}
        maxW={"200px"}
        fontFamily={"Poppins"}
        noOfLines={"4"}
        children={title}
        size={"md"}
      />
      <Text children={description} overflowY={"scroll"} textAlign={"center"} noOfLines={"20"} />
      <HStack>
        <Text
          children={"Duration"}
          fontWeight={"bold"}
          // textTransform={"uppercase"}
          // noOfLines={"1"}
        />
        <Text
          children={creator}
          fontFamily={"body"}
          mt={0}
          // textTransform={"uppercase"}
          // noOfLines={"1"}
        />
      </HStack>
      <Heading
        textAlign={"center"}
        size={"md"}
        fontFamily={"Poppins"}
        backgroundColor={"green"}
        color={"white"}
        padding={2}
        borderRadius={4}
        // textTransform={"uppercase"}
        >★{lectureCount}</Heading>
        <h6>based on {views - 1260} reviews</h6>
      <Heading
      color={"#FEBD00"}
        size={"md"}
        // textTransform={"uppercase"}
        fontFamily={"Poppins"}>
          <strike>₹{views}</strike> ₹{views - 100}
        </Heading>
      <Stack direction={["column", "row"]} alignItems={"center"}>
        <Link to={`/internship/${id}`}>
        </Link>
        <Button
          colorScheme="green"
          variant={"ghost"}
          onClick={() => {
            if (
              title === "Front End Bootcamp" ||
              title === "Bug Hunter Bootcamp" ||
              title === "Back End Development" ||
              title === "Full Stack Development" ||
              title === "Javapalooza: A Comprehensive Core Java Bootcamp" ||
              title === "C++ Wizardry: Unleashing the Magic of Programming" ||
              title === "Python Programming Bootcamp: Building Core Skills" ||
              title === "Data Detective Bootcamp(Data Analyst)" ||
              title ===
                "Reactivate Your Coding Skills: Join Our ReactJS Bootcamp Program!" ||
              title ===
                "JavaScript Ninja Bootcamp: Mastering the Art of Web Development" ||
              title ===
                "Data Alchemist: Embark on a Journey of Innovation with our Data Science Bootcamp"
            ) {
              window.location.href = "https://www.grappl.tech/request";
            } else {
              addToPlaylistHandler(id);
            }
          }}
        >
          Apply
        </Button>
      </Stack>
    </VStack>
  );
};

const Internships = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const addToPlaylistHandler = () => {
    console.log("Added to playlist");
  };

  const categories = [
    "Web Development",
    "Java Development",
    "Python Development",
    "Data Structures And Algorithms",
    "Front End Development",
    "Back End Development",
    "Ruby Development",
    "DevOps",
    "C Programming",
    "NodeJS Development",
    "JavaScript Development",
    "C++ Development",
    "Full Stack Development",
    "Data Science",
    "Data Analyst",
    "Data Engineering",
    "QA Engineer",
    "Software Testing",
  ];
  const [views, setViews] = useState(4);

  useEffect(() => {
    incrementViews();
  }, []);

  function incrementViews() {
    const startDate = new Date("2023-05-25T00:00:00");
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const viewsIncrement = Math.floor(hourDiff / 2);
    setViews(9 + viewsIncrement);
    setTimeout(() => {
      incrementViews();
    }, 10800000);
  }
  //auto scroll

  return (
    <Container minH={"95vh"} maxW={"container.lg"} paddingY={"8"}>
      <Heading
      class="headerddd"
        fontFamily={"Poppins"}
        children="All Bootcamps"
        m={"8"}
        textAlign={"center"}
      />
      <Center>
      <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/></svg></Center>
      

      <HStack
        overflowX={"auto"}
        paddingY="8"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <marquee loop="">
          {categories.map((item, index) => (
            <Button
              key={index}
              // onClick={() => setCategory(item)}
              mr={4}
              minW={"60"}
            >
              <Text children={item} />
            </Button>
          ))}{" "}
        </marquee>
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Bootcamp
          title={"Front End Development"}
          fontFamily={"Poppins"}
          description={
            "Our front end development bootcamp program using HTML, CSS, and JavaScript provides hands-on experience in building modern and responsive websites. Interns will learn front-end web development fundamentals, responsive design principles, and JavaScript programming concepts. By the end of the bootcamp, they will have practical skills that can be applied to real-world projects. Join Us and upskill yourself for your better career!"
          }
          // views={views - 1489}
          imageSrc={
            "https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.jpg?b=1&s=170667a&w=0&k=20&c=8bzVsHnZpYnd11a97dRNSgGuuzXMP3qA5zqTGB7j97c="
          }
          id={"Eshwar"}
          creator={"3 months"}
          lectureCount={"4.9"}
          views={1999}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Back End Development"}
          description={
            "Looking to deepen your backend development skills? Our Node.js bootcamp will teach you how to build scalable and efficient web applications using the powerful JavaScript runtime. Learn how to work with popular Node.js frameworks like Express. Gain real-world experience by building and deploying your own Node.js projects. Join our backend development bootcamp program and take your backend development skills to the next level!"
          }
          // views={views - 1590}
          imageSrc={
            "https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png"
          }
          id={"Eshwar"}
          creator={"2 Months"}
          lectureCount={"4.8"}
          views={2700}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Bug Hunter Bootcamp"}
          description={
            "Looking for a challenging and rewarding bootcamp that will boost your software testing skills? Look no further than our bootcamp! You'll gain hands-on experience with test planning, execution, and automation while working on real-world projects. With expert mentorship, valuable certifications, and a collaborative team environment, this bootcamp will give you the tools you need to succeed in your future career as a software tester."
          }
          // views={views - 1600}
          imageSrc={
            "https://media.istockphoto.com/id/687203692/photo/software-testing-concept-on-black-chalkboard-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=6GMTNQekCeIVCbhxhIEF6GL6yEqDQydShro4diLso6w="
          }
          id={"Eshwar"}
          creator={"2 Months"}
          lectureCount={"4.9"}
          views={2100}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Data Alchemist (Data Science Bootcamp)"}
          description={
            "Unleash the power of data with our Data Alchemist bootcamp, where you'll embark on a transformative journey of innovation. Dive deep into the world of data science and discover the secrets hidden within vast datasets. Harness cutting-edge techniques, advanced analytics, and machine learning algorithms to extract valuable insights."
          }
          // views={34}
          imageSrc={
            "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.136392163.1683044531&semt=sph"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"4.8"}
          views={2899}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Full Stack Fusion (MERN Stack)"}
          description={
            "Immerse yourself in the world of Full Stack Fusion with our MERN Stack bootcamp. Unleash your potential as you delve into the dynamic combination of MongoDB, Express.js, React.js, and Node.js. Gain hands-on experience building robust web applications and master the art of seamless integration across the entire stack. Join us and become a data scientist."
          }
          // views={78}
          imageSrc={
            "https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg?t=st=1742066758~exp=1742070358~hmac=7b0b3fbc5bdeed91a036c337948eb52921d989bba3d9caa39e26c9a2594bf864&w=826"
          }
          id={"Eshwar"}
          creator={"6 Months"}
          lectureCount={"4.7"}
          views={4500}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Interview Mastery Blueprint"}
          description={
            "Unlock the secrets to interview success with our Interview Mastery Blueprint bootcamp. Gain invaluable guidance and insights from industry experts as they provide personalized coaching and mentorship. Master the art of crafting compelling resumes, acing challenging interview questions, and showcasing your unique skills. Elevate your interview skills."
          }
          // views={3}
          imageSrc={
            "https://img.freepik.com/free-vector/legal-advisers-concept-illustration_114360-16439.jpg?size=626&ext=jpg&ga=GA1.1.136392163.1683044531&semt=ais"
          }
          id={"Eshwar"}
          creator={"1 Month"}
          lectureCount={"5.0"}
          views={1800}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Javapalooza: A Comprehensive Core Java Bootcamp"}
          description={
            " The Core Java Bootcamp is an opportunity for students to develop their Java programming skills and gain hands-on experience with the language. Through this bootcamp, students will learn the fundamental concepts of Java programming, including object-oriented programming, data structures, and algorithms. Join now and upskill!"
          }
          // views={views - 22}
          imageSrc={
            "https://img.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg?t=st=1742066651~exp=1742070251~hmac=b9cacc18264e514edeb41b5bfc7f752f598511bb19f86d19a89da12a96bb1ae2&w=1380"
          }
          id={"Eshwar"}
          creator={"6 Months"}
          lectureCount={"4.9"}
          views={3599}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Python Programming Bootcamp: Building Core Skills"}
          description={
            "The Core Python Bootcamp is an opportunity for students to learn the basics of Python programming language. In this bootcamp, students will learn how to write Python scripts and programs, work with various data structures and modules, and develop real-world applications. The program will cover Python syntax, object-oriented programming."
          }
          // views={views - 1345}
          imageSrc={
            "data:image/jpeg;base64,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"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"4.9"}
          views={3300}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"C++ Wizardry: Unleashing the Magic of Programming"}
          description={
            "Join our C++ bootcamp program to explore the possibilities of this powerful programming language and unlock your potential for innovation. You will gain hands-on experience, learn best practices and industry standards, and collaborate with experienced mentors to develop your skills further. Build a strong foundation and unleash your creativity."
          }
          // views={views - 1234}
          imageSrc={
            "data:image/png;base64,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"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"4.8"}
          views={2800}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={
            "JavaScript Ninja Bootcamp: Mastering the Art of Web Development"
          }
          description={
            "Join our JavaScript Ninja Bootcamp program and take your web development skills to the next level. Learn from experienced mentors and work on real-world projects to gain hands-on experience. Develop your skills in JavaScript, jQuery, and other web technologies. Get certified at the end of the program and start your career as a web developer with confidence."
          }
          // views={"34"}
          imageSrc={
            "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?size=626&ext=jpg&ga=GA1.1.136392163.1683044531&semt=sph"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"4.8"}
          views={3500}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={
            "Reactivate Your Coding Skills: Join Our ReactJS Bootcamp Program!"
          }
          description={
            "Our ReactJS Bootcamp provides hands-on experience in building responsive and dynamic user interfaces using the latest front-end web development technologies. Join us to gain practical knowledge on ReactJS, Redux, and other related tools, and to work on real-world projects to enhance your skills and marketability. Join us to become a ReactJS pro!"
          }
          // views={"56"}
          imageSrc={
            "https://images.hdqwalls.com/download/react-js-logo-no-1360x768.jpg"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"4.5"}
          views={2300}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Data Detective Bootcamp(Data Analyst)"}
          description={
            "Join our team as a Data Analyst grappler and become a data detective. Dive into the world of data analysis, unlock insights, and solve complex problems. Gain experience in data cleaning, visualization, and analysis while working with cutting-edge tools and technologies. Why worry about your future when you can analyze it with our Data Analyst Bootcamp at GrapplTech! Join us now and become a data analyst!"
          }
          // views={"42"}
          imageSrc={
            "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.2.136392163.1683044531&semt=ais"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"4.7"}
          views={2480}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Language Maverick Bootcamp"}
          description={
            "Looking to improve your English language skills and gain practical experience? Join our Language Maverick Bootcamp and learn from experienced language experts. Sharpen your language skills by working on real-life projects and interacting with native English speakers. Get ready to take your language proficiency to the next level and stand out in the global job market."
          }
          // views={"64"}
          imageSrc={
            "data:image/png;base64,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"
          }
          id={"Eshwar"}
          creator={"4 Months"}
          lectureCount={"4.9"}
          views={1600}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Data Maestro(SQL and PostgreSQL)"}
          description={
            "Learn to master the powerful tools of SQL and PostgreSQL as a Data Maestro grappler at GrapplTech. Gain hands-on experience with database design, data analysis, and data manipulation while working on real-world projects. Develop your technical skills and unlock new career opportunities with our expert guidance and mentorship. Join us and become a true data wizard!"
          }
          // views={"23"}
          imageSrc={
            "https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-730.jpg?size=626&ext=jpg&ga=GA1.1.136392163.1683044531&semt=sph"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"4.8"}
          views={2000}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Bootcamp
          title={"Node Ninja Bootcamp"}
          description={
            "Join our Node.js Ninja Bootcamp and level up your skills in developing scalable and efficient web applications using Node.js. You'll work on real-world projects, gain hands-on experience with popular libraries and frameworks. At the end of the program, you'll have a solid foundation in Node.js development and a certificate to prove it. Don't miss out on this opportunity."
          }
          // views={"32"}
          imageSrc={
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhAQBw8NEBAQEA8PEBAPDhASEBANFRcWFhURFRMYHyggGBolHRUVJT0hJS4rOi40IyszOD8uQygtOisBCgoKDg0OGBAQGy4kHyU1MS03KzEtKys3NS8uNzctLS03NjYrKysxLystOC0rKzgyKzc4OCs3Ky0vNC8rKzc1Lf/AABEIAKcBLgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMBBQcEBv/EADQQAQACAAQDBgMFCQAAAAAAAAABAgMEETEFIUEGElFhcYETMlJDYpGxwSIkMzVCcoPC4f/EABkBAQEAAwEAAAAAAAAAAAAAAAAEAgMFAf/EACARAQABBAICAwAAAAAAAAAAAAABAgMEESExEhMUMkH/2gAMAwEAAhEDEQA/AOUAPWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9vC+E4/FcTTJU1iJ0te093Dr62/SNZ8no7MZPDz3F60zVe9SKXvNdZiLTXTSJ06c3S8KlcLCiuDFa1iIitaxEViPCIjZNfv+viO096/4cR20vA+yWXylonNRXMXnecSsfDjxiuHPL3nX2a3jvY2K4szwue7O/wrzPcmPu23r6Ty9H2uVj9uZ8ISzmF8TD1jevOPTrCGMi5FW9o4vVxO9uMZnL3yuNNMzS1LxvW0aTp4x4x5wrdRz+Uws7gd3O0i9emu9ZnrW28T6OZYmF3bzFekzHPfSJdCze9kLbN72QrAb28AAAAAAAAAAAAAAAAAAAAAAAAAAAAABvexf88/xYv+roOFbpPs552OvGHxuO91wsSI855co/CX2U40/Ei3WOceDnZUbrc7K+7f5WNKTPjK9TlbRfL1mm0xr/xciloaTieFOFmI0+WecevWHMMb+Nb+635u15nJRmMtNZ+b5qz9No/RxPFnXFtp9VvzdDD/AFXiR2jMa7oTTwTFy1TMabi6ee6E08AQCY03AAAAAAAAAAAAAAAAAAAAAAAAAAAZrOlob7h/aC+BpXN64lfq+0j3/q9/xaBbE6wxqoiqNSwqopqjUuo9nOJ0zVZrg3i1Z5x41t1rMTtyezi/aDL8Dj96t38bTWuBh6Tic9pt0pHnPtq5Ng4tsDEi2Ba9LRtalrVtHpaOcIbzMzvMzMz1mZ3mfNL8Ony3M8J4xYie+G7492nzPGta4tvh4M/YYcz3Zj79t7+/LyhpAVU0xTGoUxERGoAGTIAAQmngmAqmNN2FyM012BWMzGm7AAAAAAAAAAAAAAAAAAAAAAACeHPJBKk6WBYAAAAAAAAAAAAjNNdkgFU10YXMTWJBUJTXREAAAAAAAAAAAAAAAAAAAAF28CNJ1qkAAAAAAAAAAAAAAAxNYlkBXNNNkVzE1idwVAAAAAAAAAAAAAAAAAAlhzzWKYnSVwAAAAAAAAAAAAAAAAAAKQAAAAAAAAAAAAAAAAAFtJ1qwAkAAAAAAAAAAAAAAAAAD//Z"
          }
          id={"Eshwar"}
          creator={"4.5 Months"}
          lectureCount={"4.9"}
          views={1999}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
      <>
        <div id="chat-box">
          <div id="chat-top">
            Grappie: Your Guide{" "}
            <span id="chat-top-right">
              <svg
                id="close-box"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 48 48"
              >
                <path
                  d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  fill="#fff"
                />
              </svg>
            </span>
            <div className="clear" />
          </div>
          <div id="chat-msg">
            <p>
              Welcome to GrapplTech, your gateway to excitin
              opportunities!
            </p>
            <div id="chat-form">
              <div className="chat-in">
                <input
                  type="text"
                  id="whats-in"
                  placeholder="Send Your Message..."
                />
              </div>
              <div id="send-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={38}
                  height={38}
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z"
                    fill="rgb(18, 140, 126)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="whats-chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version={1}
            width={35}
            height={35}
            viewBox="0 0 90 90"
          >
            <path
              d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z"
              fill="#FFF"
            />
          </svg>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  body{width:100%}\n*{margin:0px;padding:0px;box-sizing:border-box;}\n#whats-chat{position:fixed;right:3%;bottom:10%;height:auto;width:auto;background:#0963ac;padding:12.5px;border-radius:50px;}\n#whats-chat:hover{cursor:pointer;box-shadow:2px 2px 15px #ccc;bottom:11%;}\n/*===============================*/\n#chat-box{position:fixed;right:-500px;bottom:18%;width:250px;height:200px;transition:all .5s;}\n#chat-top{width:100%;line-height:2;background:rgb(18, 140, 126);color:white;text-align:center;border-radius:5px 5px 0 0;padding:0 10px;}\n#chat-msg{background:#ece5dd;padding:10px;border-radius:0 0 5px 5px;box-shadow:0 0 25px -10px #999;}\n#chat-msg p{font-size:14px;padding:5px;border-radius:0 50px 50px 50px;margin-bottom:10px;}\n#chat-form{display:flex;}\n.chat-in{width:80%;}\n#chat-form input{border-radius:5px 0 5px 5px;border:none;outline:none;font-size:14px;padding:5px;line-height:2;}\n#send-btn{width:20%;padding: 0 5px;}\n#chat-top-right{float:right;padding:5px 0;}\n#chat-box:after{content:'';\n    position: absolute;\n    top:58%;\n    left: 90%;\n    width: 0;\n    height: 0;\n    border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent; \n  \n  border-right:25px solid #ece5dd;}\n.right{float:right}\n.clear{clear:both}\n",
          }}
        />
      </>
    </Container>
  );
};

export default Internships;

let imgList = [
    "https://images.unsplash.com/photo-1622267224551-8063a2d4fbb4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM3OTE3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1600423115367-87ea7661688f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM3OTEw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1628689469838-524a4a973b8e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM3OTAy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1556804335-2fa563e93aae?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MDYx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MDc3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1544294462-ef0910e259f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MDc4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1603833665858-e61d17a86224?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MDc5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1617884157905-b66741c4a445?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MTI0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1604147873686-02c49cfdfb1e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MTI0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MTI1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MTI2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1549394978-ec5464628a42?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MTY1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1562517309-af6d2b99199f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MTY2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MTY3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1554118879-e459bb1fe1ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MTY3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MzMx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1584559582213-787a2953dcbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MzMz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MzM0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4MzM0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1635341814161-d696d538542c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4Mzk5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1572696829022-8fc84c43cf5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4Mzk5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NDAw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1584559582213-787a2953dcbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NDAw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1610397962076-02407a169a5b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NDUy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1544070078-a212eda27b49?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NDUz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1601039641847-7857b994d704?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NDU0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1619111826451-d574aef1dd60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NDU0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1596404643764-2a2461483a3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NDU1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1609607122000-9506a41def6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NTM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1574709755254-fcd942d09d5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NTM2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NTM2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NTM3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzAxNTM4NTM3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
  ];

  let imgAdd = document.getElementById("imgAdd");
  let prev = document.getElementById("prev");
  let startpause = document.getElementById("startpause");
  let nxt = document.getElementById("nxt");
  let count = 0;
  let intervalID;

  let slidingStart = false;

  startpause.addEventListener("click", () => {
    if (slidingStart == false) {
      slidingStart = true;
      startpause.innerText = "⏸";
      intervalID = setInterval(() => {
        count++;
        if (count >= imgList.length) {
          count = 0;
        } else if (count < 0) {
          count = imgList.length - 1;
        };
        imgAdd.src = imgList[count];
        console.log(count);
      }, 1000);
    } else {
      slidingStart = false;
      startpause.innerText = "▶";
      clearInterval(intervalID);
    }
  });


  nxt.addEventListener("click", () => {
    slidingStart = false;
    startpause.innerText = "▶";
    clearInterval(intervalID);
    count++;
    if (count >= imgList.length) {
      count = 0;
    } else if (count < 0) {
      count = imgList.length - 1;
    };
    imgAdd.src = imgList[count];
    console.log(count);

  });

  prev.addEventListener("click", () => {
    slidingStart = false;
    startpause.innerText = "▶";
    clearInterval(intervalID);
    count--;
    if (count >= imgList.length) {
      count = 0;
    } else if (count < 0) {
      count = imgList.length - 1;
    };
    imgAdd.src = imgList[count];
    console.log(count);

  });
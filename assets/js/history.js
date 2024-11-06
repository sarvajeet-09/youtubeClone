let history = JSON.parse(localStorage.getItem("watchHistory"))

let video = document.querySelector(".main1")
history.forEach(element => {
    const videoElement1 = document.createElement("div");
    videoElement1.classList.add("col-lg-4");
    videoElement1.innerHTML = `
    <div class="videoContainer my-5">
    <a class="video">
      <img src="${element.thumbnail}" class="thumbnail img-fluid rounded" alt="">
      <div class="content">
        <div class="info">
          <h4 class="title">${element.title}</h4>
          <p class="channel-name">${element.watchedAt}</p>
        </div>
        <div class="pb-2 menu">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
              viewBox="0 0 24 24" focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 80%;">
            <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
          </svg>
        </div>
      </div>
    </a>
  </div>`

  videoElement1.querySelector(".video").addEventListener("click", function () {
    localStorage.setItem("vid", JSON.stringify(element.videoId));
    localStorage.setItem("tittle", JSON.stringify(element.title))
    console.log("Stored video ID:", element.videoId);
    window.location.href = "video.html";
  });

  // Append the created element to the container
  video.appendChild(videoElement1);
});

document.querySelector("#clear").addEventListener("click",function(){
    localStorage.setItem('watchHistory', JSON.stringify([]))
   location.reload()
})


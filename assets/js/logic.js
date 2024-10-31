// www.googleapis.com/youtube/v3/search?part=snippet&maxReults=50&q=Thor&key=AIzaSyDVwM4oRIW2Rc79x6FLBNbE8pIAhnNKHIE

var videoContainer = document.querySelector(".main1");
let searchdata = async (searchValue) => {
  let response = await fetch(
    ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchValue}&key=AIzaSyDVwM4oRIW2Rc79x6FLBNbE8pIAhnNKHIE`
  );

  let data = await response.json();
  return data;
};
let Showvideos = (data) => {
  videoContainer.innerHTML = "";
  console.log(data);
  data.items.forEach(
    ({
      id: { videoId },
      snippet: {
        thumbnails: { high, medium },
        title,
        channelTitle,
      },
    }) => {
      // Create HTML for each video element
      const videoElement = document.createElement("div");
      videoElement.classList.add("col-lg-4");
      videoElement.innerHTML = `
        <div class="videoContainer my-5">
       
          <a class="video">
            <img src="${high.url}" class="thumbnail img-fluid rounded" alt="">
            <div class="content">
              <div class="info">
                <h4 class="title">${title}</h4>
                <p class="channel-name">${channelTitle}</p>
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
        </div>`;

      // Attach click event listener to store specific video ID
      videoElement.querySelector(".video").addEventListener("click", function () {
        localStorage.setItem("vid", JSON.stringify(videoId));
        console.log("Stored video ID:", videoId);
        window.location.href = "video.html";
      });

      // Append the created element to the container
      videoContainer.appendChild(videoElement);
    }
  );
};


let initializeSearch = async () => {
  var searchvalue =
    document.querySelector("#inputsearch").value || "trending"; // Provide a default search term if input is empty
  let data = await searchdata(searchvalue);
  Showvideos(data);
};
document
  .querySelector("#searchbtn")
  .addEventListener("click", initializeSearch);

// ---------------------------------------------------------------------------------------------------------------------------
